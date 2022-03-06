namespace components.BuyersCart
{
    public class Basket
    {
        public int Id{get; set ;} 
        public string BuyerId{get; set;}
        public List<BasketItem> Items{get; set;}= new() ;

        //Method to Add an item to the cart

        public void AddItem(Product product, int quantity)
        {
            if(Items.All(Items => Items.ProductId != product.Id))
            {
                Items.Add(new BasketItem{Product = product, Quantity = quantity}) ;

            }
            var existingItem = Items.FirstOrDefault(Items => Items.productId == product.Id);
            if(existingItem != null) existingItem.Quantity += quantity ;

        }

        // Method to remove an item from the cart

        public void RemoveItem(int productId, int quantity)
        {
            var item = Items.FirstOrDefault(item => item.ProductId == productId);
            if(item == null) return;
            item.Quantity -= quantity ;
            if(item.Quantity == 0) Items.Remove(item) ;
 
        }




    }

}