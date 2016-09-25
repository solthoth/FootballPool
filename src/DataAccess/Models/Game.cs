using System;
using System.ComponentModel.DataAnnotations;

namespace MyTeams.DataAccess.Models
{
    public class Game
    {
        [Key]
        public int Id { get; set; }

        public int Week { get; set; }
        public Team Home { get; set; }
        public Team Away { get; set; }
        public DateTime Craeted { get; set; }
        public DateTime LastUpdate { get; set; }
    }
}