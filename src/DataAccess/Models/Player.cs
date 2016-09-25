using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MyTeams.DataAccess.Models
{
    public class Player
    {
        [Key]
        public int Id { get; set; }

        public string Username { get; set; }
        public string Password { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastUpdate { get; set; }

        public List<Season> Seasons { get; set; }
    }
}