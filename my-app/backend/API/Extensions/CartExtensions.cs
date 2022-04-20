using API.Models;
using API.Models.DTOs;

namespace API.Extensions
{
    public static class CartExtensions
    {
        public static CartDto MapCartToDto(this Cart cart)
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
    }
}
