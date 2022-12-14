using Microsoft.EntityFrameworkCore;
using PersonAPI.Models;

namespace PersonAPI.Data

{
    public class ApiContext : DbContext 
    {

        public DbSet<Building> Buildings { get; set; }
        public DbSet<Apartment> Apartments { get; set; }
        public DbSet<Person> Person { get; set; }


        public ApiContext(DbContextOptions<ApiContext> options) 
            :base(options)
        {
            
        }
    }
}
