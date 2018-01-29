using System;

/*
* Data annotations for tell EntityFramework
* how to treat the fields of each model.
*/
namespace pickupAPI.ViewModels
{
    public class pickupView
    {
        public int Id { get; set; }
        public string Body { get; set; }
    }
}
