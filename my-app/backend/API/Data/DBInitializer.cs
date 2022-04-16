using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.AspNetCore.Identity;
namespace API.Data
{
    public static class DBInitializer
    {
        public static async Task Initialize(ECommerceContext context, UserManager<User> userManager)
        {
            if(!userManager.Users.Any())
                {
                    var user = new User
                    {
                        UserName = "bob",
                        Email = "bob@test.com"
                    };

                    await userManager.CreateAsync(user, "Pa$$w0rd");
                    await userManager.AddToRoleAsync(user, "Member");
                    
                     var admin = new User
                    {
                        UserName = "admin",
                        Email = "admin@test.com"
                    };

                     await userManager.CreateAsync(admin, "Pa$$w0rd");
                     await userManager.AddToRolesAsync(admin,new[]{"Member","Admin"});

                     var seller = new User
                    {
                        UserName = "seller",
                        Email = "seller@test.com"
                    };

                     await userManager.CreateAsync(seller, "Pa$$w0rd");
                     await userManager.AddToRolesAsync(seller,new[]{"Member","User"});
                    
                }
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
                    Category = "Laptop",
                    Type = "Electronics",
                    ImgUrl = "DellInspironNotebook.webp"
                },
                new Product{
                    Name = "Acer Predator Helios",
                    Description = "description...",
                    Price = 1849.99,
                    Quantity = 38,
                    Category = "Laptop",
                    Type = "Electronics",
                    ImgUrl = "AcerPredatorHelio.webp"
                },
                new Product{
                    Name = "Lenovo Yoga 9i Gen7",
                    Description = "description...",
                    Price = 1549.99,
                    Quantity = 15,
                    Category = "Laptop",
                    Type = "Electronics",
                    ImgUrl = "LenovoYoga9iGen7.webp"
                },
                new Product{
                    Name = "ASUS X415 11th Gen Intel",
                    Description = "description...",
                    Price = 2100.49,
                    Quantity = 65,
                    Category = "Laptop",
                    Type = "Electronics",
                    ImgUrl = "ASUS-X415-11th-Gen-Intel.png"
                },
                new Product{
                    Name = "Apple Macbook Air",
                    Description = "description...",
                    Price = 1999.99,
                    Quantity = 57,
                    Category = "Laptop",
                    Type = "Electronics",
                    ImgUrl = "MacbookAir.jpg"
                },
                new Product{
                    Name = "Microsoft Surface Laptop",
                    Description = "description...",
                    Price = 1749.99,
                    Quantity = 43,
                    Category = "Laptop",
                    Type = "Electronics",
                    ImgUrl = "MicrosoftSurfaceLaptop.webp"
                },
                 new Product{
                    Name = "Logitech G502 Hero",
                    Description = "description...",
                    Price = 49.99,
                    Quantity = 23,
                    Category = "Mouse",
                    Type = "Electronics",
                    ImgUrl = "Logitech G502 Hero.jpeg"
                },
                 new Product{
                    Name = "Corsair HARPOON RGB PRO Mouse",
                    Description = "description...",
                    Price = 64.97,
                    Quantity = 5,
                    Category = "Mouse",
                    Type = "Electronics",
                    ImgUrl = "Corsair HARPOON RGB PRO Mouse.jpeg"
                },
                new Product{
                    Name = "Microsoft Bluetooth BlueTrack Mouse - Matte Black",
                    Description = "description...",
                    Price = 54.99,
                    Quantity = 7,
                    Category = "Mouse",
                    Type = "Electronics",
                    ImgUrl = "Microsoft Bluetooth BlueTrack Mouse - Matte Black.jpeg"
                },
                new Product{
                    Name = "Logitech MX Anywhere 3 Bluetooth Darkfield Mouse - Grey",
                    Description = "description...",
                    Price = 99.99,
                    Quantity = 30,
                    Category = "Mouse",
                    Type = "Electronics",
                    ImgUrl = "Logitech MX Anywhere 3 Bluetooth Darkfield Mouse - Grey.jpeg"
                },
                 new Product{
                    Name = "Logitech MX Keys Wireless Backlit Keyboard",
                    Description = "description...",
                    Price = 149.99,
                    Quantity = 30,
                    Category = "Keyboards",
                    Type = "Electronics",
                    ImgUrl = "Logitech MX Keys Wireless Backlit Keyboard.jpeg"
                },
                new Product{
                    Name = "Logitech Wireless Keyboard (K360) - Black",
                    Description = "description...",
                    Price = 24.99,
                    Quantity = 23,
                    Category = "Keyboards",
                    Type = "Electronics",
                    ImgUrl = "Logitech Wireless Keyboard (K360) - Black.jpeg"
                },
                new Product{
                    Name = "HyperX Alloy Core Membrane Gaming Keyboard - English",
                    Description = "description...",
                    Price = 44.99,
                    Quantity = 33,
                    Category = "Keyboards",
                    Type = "Electronics",
                    ImgUrl = "HyperX Alloy Core Membrane Gaming Keyboard - English.jpeg"
                },
                new Product{
                    Name = "Razer Huntsman V2 TKL Backlit Mechanical Clicky Optical Ergonomic Gaming Keyboard - English",
                    Description = "description...",
                    Price = 169.99,
                    Quantity = 16,
                    Category = "Keyboards",
                    Type = "Electronics",
                    ImgUrl = "Razer Huntsman V2 TKL Backlit Mechanical Clicky Optical Ergonomic Gaming Keyboard - English.jpeg"
                },
                 new Product{
                    Name = "Tiger of Sweden Tarek Tapered Pants",
                    Description = "description...",
                    Price = 249.99,
                    Quantity = 6,
                    Category = "Pants",
                    Type = "Clothing",
                    ImgUrl = "Tiger of Sweden Tarek Tapered Pants.webp"
                },
                new Product{
                    Name = "PS Paul Smith Organic Cotton Zebra Badge Tailored Shirt",
                    Description = "description...",
                    Price = 89.99,
                    Quantity = 12,
                    Category = "Tops",
                    Type = "Clothing",
                    ImgUrl = "PS Paul Smith Organic Cotton Zebra Badge Tailored Shirt.webp"
                },
                new Product{
                    Name = "River Island Elastic-Waist Pleat-Front Trousers",
                    Description = "description...",
                    Price = 91.99,
                    Quantity = 15,
                    Category = "Pants",
                    Type = "Clothing",
                    ImgUrl = "River Island Elastic-Waist Pleat-Front Trousers.webp"
                },
                new Product{
                    Name = "Calvin Klein Pocket Shirt",
                    Description = "description...",
                    Price = 64.35,
                    Quantity = 21,
                    Category = "Tops",
                    Type = "Clothing",
                    ImgUrl = "Calvin Klein Pocket Shirt.webp"
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