using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using pickupAPI;
using pickupAPI.Data;
using pickupAPI.Models;
using pickupAPI.ViewModels;

namespace pickupAPI.Controllers
{
    [Route("api/[controller]")]
    public class pickupsController : Controller
    {
        // *********** REQUIRED FOR DATABASE CALLS *********
        private readonly pickupDbContext _context;
        public pickupsController(pickupDbContext context) { _context = context; }
        // *********** REQUIRED FOR DATABASE CALLS *********

        // GET api/pickups
        [HttpGet]
        public IEnumerable<pickupView> Get()
        {
            //return _context.pickups.Where(t => t.ShowUntil >= DateTime.Now).ToList();
            var list = _context.pickups.Where(t => t.ShowUntil >= DateTime.Now).ToList();
            return list.Select(e => new pickupView { Id=e.Id, Body = e.Body});
            //return _context.pickups.Where(t => t.ShowUntil >= DateTime.Now).ToList();
        }

        // GET api/pickups/5
        [HttpGet("{id}")]
        public pickupView Get(int id)
        {
            return _context.pickups.Select(e => new pickupView { Id = e.Id, Body = e.Body }).First(t => t.Id == id);
        }

        // POST api/pickups
        [HttpPost]
        public void Post([FromForm] pickup pickup)
        {
            pickup.ShowUntil = GetShowWindow();
            _context.pickups.Add(pickup);
            _context.SaveChanges();
        }

        // PUT api/pickups
        [HttpPut("{id}")]
        public void Put(int id, [FromForm] pickup pickup)
        {
            pickup.Id = id;
            pickup.ShowUntil = GetShowWindow();
            _context.pickups.Update(pickup);
            _context.SaveChanges();
        }

        // DELETE api/pickups/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            // Check if element exists
            if ( _context.pickups.Where(t => t.Id == id).Count() > 0 ) {
                _context.pickups.Remove(_context.pickups.First(t => t.Id == id));
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
