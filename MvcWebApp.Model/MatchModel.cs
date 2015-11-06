using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;

namespace MvcWebApp.DomainModel
{

    [Table("XYMatches")]
    public class MatchModel
    {       
       [Key]
       [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
       public int XYmid { get; set; }

        [Required]
        [StringLength(40)]
        public string XYground{ get; set; }

        [Required]
        [StringLength(40)]
        public string XYcity { get; set; }

        [Required]
        public DateTime XYmatchdate { get; set; }

        [Required]
        [StringLength(50)]
        public string XYResult { get; set; }
    }
}
