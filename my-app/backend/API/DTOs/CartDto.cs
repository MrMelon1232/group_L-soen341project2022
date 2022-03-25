namespace API.Models.DTOs
{
    public class CartDto
    {
        public int Id { get; set; }
        public string CustomerId { get; set; }
        public List<CartItemDto> Items { get; set; } = new();
    }
}