using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using PickupAPI;
using PickupAPI.Data;
using PickupAPI.Models;
using PickupAPI.ViewModels;

namespace PickupAPI.Controllers
{
    [Route("api/[controller]")]
    public class PickupsController : Controller
    {
        // *********** REQUIRED FOR DATABASE CALLS *********
        private readonly PickupDbContext _context;
        public PickupsController(PickupDbContext context) { _context = context; }
        // *********** REQUIRED FOR DATABASE CALLS *********

        // GET api/Pickups
        [HttpGet]
        public IEnumerable<PickupView> Get()
        {
            //return _context.Pickups.Where(t => t.ShowUntil >= DateTime.Now).ToList();
            var list = _context.Pickups.Where(t => t.ShowUntil >= DateTime.Now).ToList();
            return list.Select(e => new PickupView { Id=e.Id, Body = e.Body});
            //return _context.Pickups.Where(t => t.ShowUntil >= DateTime.Now).ToList();
        }

        // GET api/Pickups/5
        [HttpGet("{id}")]
        public PickupView Get(int id)
        {
            return _context.Pickups.Select(e => new PickupView { Id = e.Id, Body = e.Body }).First(t => t.Id == id);
        }

        // POST api/Pickups
        [HttpPost]
        public void Post([FromForm] Pickup Pickup)
        {
            Pickup.ShowUntil = GetShowWindow();
            _context.Pickups.Add(Pickup);
            _context.SaveChanges();
        }

        // PUT api/Pickups
        [HttpPut("{id}")]
        public void Put(int id, [FromForm] Pickup Pickup)
        {
            Pickup.Id = id;
            Pickup.ShowUntil = GetShowWindow();
            _context.Pickups.Update(Pickup);
            _context.SaveChanges();
        }

        // DELETE api/Pickups/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            // Check if element exists
            if ( _context.Pickups.Where(t => t.Id == id).Count() > 0 ) {
                _context.Pickups.Remove(_context.Pickups.First(t => t.Id == id));
                _context.SaveChanges();
            }
        }

        private DateTime GetShowWindow()
        {
          DateTime currentTime = DateTime.Now;
          currentTime = currentTime.AddMinutes(60);
          return currentTime;
        }

    }
}
