using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MyTeams.DataAccess.Models
{
    public class Season
    {
        [Key]
        public int Id { get; set; }

        public int Year { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastUpdate { get; set; }

        public List<Game> Games { get; set; }
    }
}