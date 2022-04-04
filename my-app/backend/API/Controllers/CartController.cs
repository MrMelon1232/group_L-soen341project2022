using API.Data;
using API.Models;
using API.Models.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class CartController : BaseApiController
    {
        private readonly ECommerceContext __context;
        public CartController(ECommerceContext _context)
        {
            __context = _context;

        }

        [HttpGet(Name = "GetCart")]
        public async Task<ActionResult<CartDto>> GetCart()
        {
            Cart cart = await RetrieveCart();

            if (cart == null) return NotFound();
            return ItemToCartDto(cart);
        }

        private CartDto ItemToCartDto(Cart cart)
        {
            return new CartDto
            {
                Id = cart.Id,
                CustomerId = cart.CustomerId,
                Items = cart.Items.Select(item => new CartItemDto
                {
                    ProductId = item.ProductId,
                    Name = item.Product.Name,
                    Price = item.Product.Price,
                    ImgUrl = item.Product.ImgUrl,
                    Category = item.Product.Category,
                    Quantity = item.Quantity
                }).ToList()
            };
        }

        private async Task<Cart> RetrieveCart()
        {
            return await __context.Carts
                        .Include(i => i.Items)
                        .ThenInclude(p => p.Product)
                        .FirstOrDefaultAsync(x => x.CustomerId == Request.Cookies["customerId"]);
        }

        [HttpPost]
        public async Task<ActionResult<CartDto>> AddItemToCart(int productId, int quantity)
        {
            var cart = await RetrieveCart();
            if (cart == null) cart = CreateCart();
            var product = await __context.Products.FindAsync(productId);
            if (product == null) return NotFound();
            cart.AddItem(product, quantity);

            var result = await __context.SaveChangesAsync() > 0;

            if (result) return CreatedAtRoute("GetCart", ItemToCartDto(cart));

            return BadRequest(new ProblemDetails { Title = "Problem saving item" });
        }

        private Cart CreateCart()
        {
            var customerId = Guid.NewGuid().ToString();
            var cookieOptions = new CookieOptions { IsEssential = true, Expires = DateTime.Now.AddDays(30) };
            Response.Cookies.Append("customerId", customerId, cookieOptions);
            var cart = new Cart { CustomerId = customerId };
            __context.Carts.Add(cart);
            return cart;

        }

        [HttpDelete]
        public async Task<ActionResult> RemoveCartItem(int productId, int quantity)
        {
            var cart = await RetrieveCart();
            if (cart == null) return NotFound();
            cart.RemoveItem(productId, quantity);

            var result = await __context.SaveChangesAsync() > 0;

            if (result) return Ok();

            return BadRequest(new ProblemDetails { Title = "Problem removing item" });
        }
    }
}