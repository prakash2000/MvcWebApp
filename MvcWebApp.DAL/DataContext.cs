using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using MvcWebApp.DomainModel;
using System.Globalization;

namespace MvcWebApp.DAL
{
    public class DataContext:DbContext
    {
        public DataContext()
            :base("DefaultConnection")
        {
           Database.SetInitializer<DataContext>(new DropCreateDatabaseIfModelChanges<DataContext>());
        }

        public DbSet<MatchModel> Matches { get; set; }
    }
}
