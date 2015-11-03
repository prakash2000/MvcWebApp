using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcWebApp.Controllers
{
    public class MatchesController : Controller
    {
        //
        // GET: /Matches/

        public ActionResult NewMatch()
        {
            return PartialView();
        }
        public ActionResult ListMatch()
        {
            return PartialView();
        }

    }
}
