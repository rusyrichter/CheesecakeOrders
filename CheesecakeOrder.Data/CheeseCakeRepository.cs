using System;
using System.Collections.Generic;

namespace CheesecakeOrder.Data
{
    public class CheeseCakeRepository
    {
        public string _connectionString { get; set; }

        public CheeseCakeRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public void AddOrder(CheeseCake ck)
        {
            using var context = new CheesecakeDataContext(_connectionString);
            context.cheesecakes.Add(ck);
            context.SaveChanges();
        }
        public List<CheeseCake> GetAll()
        {
            using var context = new CheesecakeDataContext(_connectionString);
            return context.cheesecakes.ToList();
        }
        public CheeseCake GetById(int id)
        {
            using var context = new CheesecakeDataContext(_connectionString);
            return context.cheesecakes.FirstOrDefault(c => c.Id == id);
        }
    }
}