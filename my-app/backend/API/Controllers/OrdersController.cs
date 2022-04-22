using API.Data;
using API.DTOs;
using API.Extensions;
using API.Models;
using API.Models.DTOs;
using API.Models.OrderAggregate;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class OrdersController : BaseApiController
    {
        private readonly ECommerceContext _context;
        public OrdersController(ECommerceContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<OrderDto>>> getOrders()
        {
            return await _context.Orders
            .ProjectOrderToOrderDto()
            .Where(e => e.CustomerId == User.Identity.Name)
            .ToListAsync();
        }

        [HttpGet("{id}", Name = "GetOrder")]
        public async Task<ActionResult<OrderDto>> GetOrder(int id)
        {
            return await _context.Orders
            .ProjectOrderToOrderDto()
            .Where(o => o.CustomerId == User.Identity.Name && o.Id == id)
            .FirstOrDefaultAsync();
        }

        [HttpPost]
        public async Task<ActionResult<int>> CreateOrder(CreateOrderDto orderDto)
        {
            var cart = await _context.Carts
                .RetrieveCartWithItems(User.Identity.Name)
                .FirstOrDefaultAsync();

            if (cart == null) return BadRequest(new ProblemDetails { Title = "Could not locate basket" });

            var items = new List<OrderItem>();

            foreach (var item in cart.Items)
            {
                var productItem = await _context.Products.FindAsync(item.ProductId);
                var itemOrdered = new ProductItemOrdered
                {
                    ProductId = productItem.Id,
                    Name = productItem.Name,
                    ImgUrl = productItem.ImgUrl
                };

                var orderItem = new OrderItem
                {
                    ItemOrdered = itemOrdered,
                    Price = productItem.Price,
                    Quantity = item.Quantity
                };
                items.Add(orderItem);
                productItem.Quantity -= item.Quantity;
            }

            var subtotal = items.Sum(item => item.Price * item.Quantity);

            var order = new Order
            {
                OrderItems = items,
                CustomerId = User.Identity.Name,
                ShippingAddress = orderDto.ShippingAddress,
                Subtotal = subtotal,
            };

            _context.Orders.Add(order);
            _context.Carts.Remove(cart);

            if (orderDto.SaveAddress)
            {
                var user = await _context.Users
                    .Include(a => a.Address)
                    .FirstOrDefaultAsync(x => x.UserName == User.Identity.Name);

                var address = new UserAddress
                {
                    FullName = orderDto.ShippingAddress.FullName,
                    DetailedAddress = orderDto.ShippingAddress.DetailedAddress,
                    Country = orderDto.ShippingAddress.Country,
                    City = orderDto.ShippingAddress.City,
                    Province = orderDto.ShippingAddress.Province,
                    PostalCode = orderDto.ShippingAddress.PostalCode,
                };
                user.Address = address;
            }

            var result = await _context.SaveChangesAsync() > 0;

            if (result) return CreatedAtRoute("GetOrder", new { id = order.Id }, order.Id);

            return BadRequest(new ProblemDetails { Title = "Problem creating order" });
        }
    }
}