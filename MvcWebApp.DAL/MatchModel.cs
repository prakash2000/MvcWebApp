using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;

namespace DashBoard15.Models
{
    public class MatchModel
    {        
    }
    public class NewMatch
    {
        [Key]
        public int sno { get; set; }
        public string ground { get; set; }
        public string city { get; set; }
        public string result { get; set; }
        public string date { get; set; }
    }
}