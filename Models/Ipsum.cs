using System;
using System.ComponentModel.DataAnnotations;

/*
* Data annotations for tell EntityFramework
* how to treat the fields of each model.
*/
namespace DotNetApp.Models
{
    public class Ipsum
    {
        [Key] // Primary Key attribute
        public int Id { get; set; }

        [Required]
        [MaxLength(255)]
        // [Index(IsUnique=true)]
        public string Title { get; set; }

        [Required]
        [MaxLength(10000)]
        public string Body { get; set; }
    }
}
