using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using DashBoard15.Models;
using System.Globalization;

namespace DashBoard15.DAL
{
    public class AppContext:DbContext
    {
        public AppContext()
            : base("DefaultConnection")
        {
            
        }
        public DbSet<NewMatch> Matches { get; set; }

    }
}