using Microsoft.EntityFrameworkCore;
using API.Models;

namespace API.Data
{
    public class ProductContext : DbContext
    {
        public ProductContext(DbContextOptions<ProductContext> options) : base(options)
        {
        }

        public DbSet<LoginItem> LoginItem { get; set; }
    }
}