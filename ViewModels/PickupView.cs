using System;

/*
* Data annotations for tell EntityFramework
* how to treat the fields of each model.
*/
namespace PickupAPI.ViewModels
{
    public class PickupView
    {
        public int Id { get; set; }
        public string Body { get; set; }
    }
}
