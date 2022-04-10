namespace API.Models.DTOs
{
    public class CartItemDto
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public string Category { get; set; }
        public int Quantity { get; set; }
        public string ImgUrl { get; set; }
    }
}