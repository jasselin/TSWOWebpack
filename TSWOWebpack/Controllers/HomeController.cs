using Microsoft.AspNetCore.Mvc;

namespace TSWOWebpack.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
