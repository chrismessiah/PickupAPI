using System;
using System.ComponentModel.DataAnnotations;

/*
* Data annotations for tell EntityFramework
* how to treat the fields of each model.
*/
namespace pickupAPI.Models
{
    public class pickup
    {
        [Key] // Primary Key attribute
        public int Id { get; set; }

        [Required]
        [MaxLength(10000)]
        public string Body { get; set; }

        public DateTime? ShowUntil { get; set; }
    }
}
