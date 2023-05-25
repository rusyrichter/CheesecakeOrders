namespace CheesecakeOrder.Data
{
    public class CheeseCake
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string BaseFlavor { get; set; }
        public string Toppings { get; set; }
        public string SpecialRequest { get; set; }
        public int Quantity { get; set; }
        public DateTime Date { get; set; }
        public Decimal Total { get; set; }
    }
}