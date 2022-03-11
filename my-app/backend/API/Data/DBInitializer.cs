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
                    Name = "name of the prod",
                    Description = "description...",
                    Price = 18.2,
                    Quantity = 5,
                    Category = "A",
                    ImgUrl = "someURL"
                },
                new Product{
                    Name = "name of the prod",
                    Description = "description...",
                    Price = 12.5,
                    Quantity = 3,
                    Category = "B",
                    ImgUrl = "someURL"
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