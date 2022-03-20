using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;

namespace API.Data
{
    public static class DBInitializer
    {
        public static void Initialize(ECommerceContext context)
        {
            context.Database.EnsureCreated();

            if (context.Products.Any())
            {
                return; // DB has already been seeded
            }

            var products = new List<Product>{
                new Product{
                    Name = "Dell Inspiron Notebook",
                    Description = "description...",
                    Price = 1499.99,
                    Quantity = 51,
                    Category = "A",
                    ImgUrl = "DellInspironNotebook.webp"
                },
                new Product{
                    Name = "Acer Predator Helios",
                    Description = "description...",
                    Price = 1849.99,
                    Quantity = 38,
                    Category = "Laptop",
                    ImgUrl = "AcerPredatorHelio.webp"
                },
                                new Product{
                    Name = "Lenovo Yoga 9i Gen7",
                    Description = "description...",
                    Price = 1549.99,
                    Quantity = 15,
                    Category = "Laptop",
                    ImgUrl = "LenovoYoga9iGen7.webp"
                },
                    new Product{
                    Name = "ASUS X415 11th Gen Intel",
                    Description = "description...",
                    Price = 2100.49,
                    Quantity = 65,
                    Category = "Laptop",
                    ImgUrl = "ASUS-X415-11th-Gen-Intel.png"
                },
                    new Product{
                    Name = "Apple Macbook Air",
                    Description = "description...",
                    Price = 1999.99,
                    Quantity = 57,
                    Category = "Laptop",
                    ImgUrl = "MacbookAir.jpg"
                },
                new Product{
                    Name = "Microsoft Surface Laptop",
                    Description = "description...",
                    Price = 1749.99,
                    Quantity = 43,
                    Category = "Laptop",
                    ImgUrl = "MicrosoftSurfaceLaptop.webp"
                },

            };

            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}