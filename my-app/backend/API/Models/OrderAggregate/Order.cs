namespace API.Models.OrderAggregate
{
    public class Order
    {
        public int Id { get; set; }
        public string CustomerId { get; set; }
        public ShippingAddress ShippingAddress { get; set; }
        public DateTime OrderDate { get; set; }
        public List<OrderItem> OrderItems { get; set; }
        public double Subtotal { get; set; }
        public OrderStatus OrderStatus { get; set; } = OrderStatus.Pending;
    }
}