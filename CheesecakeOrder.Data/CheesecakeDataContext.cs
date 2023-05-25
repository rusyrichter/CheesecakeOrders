using Microsoft.EntityFrameworkCore;

namespace CheesecakeOrder.Data
{
    public class CheesecakeDataContext : DbContext
    {
        private string _connectionString;

        public CheesecakeDataContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        public DbSet<CheeseCake> cheesecakes { get; set; }

    }
}