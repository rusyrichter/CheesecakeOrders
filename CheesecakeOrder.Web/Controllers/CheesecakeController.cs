using CheesecakeOrder.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace CheesecakeOrder.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CheeseCakeController : ControllerBase
    {
        private string _connectionString;

        public CheeseCakeController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [HttpPost]
        [Route("addorder")]

        public void AddOrder(CheeseCake cheesecake)
        {
            var repo = new CheeseCakeRepository(_connectionString);
            repo.AddOrder(cheesecake);
        }

        [HttpGet]
        [Route("getall")]
        public List<CheeseCake> GetAll()
        {
            var repo = new CheeseCakeRepository(_connectionString);
            var orders = repo.GetAll();
            return orders;

        }
        [HttpGet]
        [Route("getbyId")]
        public CheeseCake GetAll(int id)
        {
            var repo = new CheeseCakeRepository(_connectionString);
            var order = repo.GetById(id);
            return order;
        }

    }
}
