using API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using API.Models.OrderAggregate;

namespace API.Data
{
    public class ECommerceContext : IdentityDbContext<User, Role, int>
    {
        public ECommerceContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<Order> Orders { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<User>()
                .HasOne(e => e.Address)
                .WithOne()
                .HasForeignKey<UserAddress>(e => e.Id)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Role>()
            .HasData(
                new Role { Id = 1, Name = "Member", NormalizedName = "MEMBER" },
                new Role { Id = 2, Name = "Admin", NormalizedName = "ADMIN" },
                new Role { Id = 3, Name = "Seller", NormalizedName = "SELLER" }
            );
        }
    }
}