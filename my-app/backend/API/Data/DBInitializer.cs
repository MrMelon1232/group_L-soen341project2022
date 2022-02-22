using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;

namespace API.Data
{
    public class DBInitializer
    {
        public static void Initialize(ProductContext context)
        {
            context.Database.EnsureCreated();

            if (context.LoginItem.Any())
            {
                return; // DB has already been seeded
            }

            var user = new LoginItem[]{
                new LoginItem{Email="test@gmail.com", FirstName="TestName", LastName="TestLastName", ZipCode="H1H2H2", Address="11 Street", PhoneNumber=5141231111, Password="PW12345"}
            };
            foreach (LoginItem u in user)
            {
                context.LoginItem.Add(u);
            }
            context.SaveChanges();
        }
    }
}