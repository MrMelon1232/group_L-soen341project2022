namespace API.Controllers
{
    public class HomeController
    {
       [SessionExpire]
    public class HomeController : Controller
    {
       
        public ActionResult Home()
        {
            List<Product> prolist = ProductDetails.callme();
            ViewData["pl"] = prolist;
            string sessionId = SessionManagement.CreateSession(int.Parse(Request.Cookies["customer_id"].Value));
            ViewData["sessionId"] = sessionId;
            ViewBag.a = 1;
            ViewBag.customer = int.Parse(Request.Cookies["customer_id"].Value);
            ViewBag.Count = int.Parse(Request.Cookies["Count"].Value);
            ViewBag.firstname = Request.Cookies["firstname"].Value;
            return View();

        }


        


    } 
    }
}