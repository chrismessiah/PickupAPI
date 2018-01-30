using Microsoft.EntityFrameworkCore;
using PickupAPI;
using PickupAPI.Models;
// Need to change this

/*
* provides EntityFramework a database context so that it knows to build
* a table using our Pickup Model
*/

namespace PickupAPI.Data
{
    /*
    * We define a database context by creating a class that extends the
    * DbContext class from EntityFramework.
    */
    public class PickupDbContext : DbContext
    {
        // *********** CONFIGURES POSTRES FOR THIS CONTEXT VIA DEP. INJ. *********
        public PickupDbContext(DbContextOptions options) : base(options) {}
        // *********** CONFIGURES POSTRES FOR THIS CONTEXT VIA DEP. INJ. *********

        /*
        * Reference our Pickup table using this:
        * A DbSet is a generic collection which is treated as the database table
        * which relates to our model. Its identifier is how we will be
        * retrieving data from the database using EF.
        *
        * "Database Context" - the link between your code and the database
        */
        public DbSet<Pickup> Pickups { get; set; }

    }
}
