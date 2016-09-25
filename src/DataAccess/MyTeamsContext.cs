using DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace MyTeams.DataAccess
{
    public partial class MyTeamsContext : DbContext
    {
        public MyTeamsContext(DbContextOptions<MyTeamsContext> options)
            : base(options)
        {
        }

        public DbSet<Player> Players { get; set; }
        public DbSet<Season> Seasons { get; set; }
        public DbSet<Game> Games { get; set; }
        public DbSet<Team> Teams { get; set; }
    }
}