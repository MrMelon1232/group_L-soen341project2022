using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace API.DTOs
{
    public class CreateProductDto
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        [Range(100, Double.PositiveInfinity)]
        public double Price { get; set; }
        [Required]
        public string Category { get; set; }
        [Required]
        public string Type { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        [Range (0, 200)]
        public int Quantity { get; set; }
    
        public  IFormFile File { get; set; }
    }
}