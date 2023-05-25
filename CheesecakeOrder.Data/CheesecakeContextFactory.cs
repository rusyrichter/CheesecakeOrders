using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace CheesecakeOrder.Data
{
    public class CheesecakeContextFactory : IDesignTimeDbContextFactory<CheesecakeDataContext>
    {
        public CheesecakeDataContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}CheesecakeOrder.Web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new CheesecakeDataContext(config.GetConnectionString("ConStr"));
        }
    }
}