using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using DotNetApp;
using DotNetApp.Data;
using DotNetApp.Models;

namespace DotNetApp.Controllers
{
    [Route("api/[controller]")]
    public class IpsumsController : Controller
    {
        // *********** REQUIRED FOR DATABASE CALLS *********
        private readonly IpsumDbContext _context;
        public IpsumsController(IpsumDbContext context) { _context = context; }
        // *********** REQUIRED FOR DATABASE CALLS *********

        // GET api/Ipsums
        [HttpGet]
        public IEnumerable<Ipsum> Get()
        {
            return _context.Ipsums.ToList();
        }

        // GET api/Ipsums/5
        [HttpGet("{id}")]
        public Ipsum Get(int id)
        {
            return _context.Ipsums.First(t => t.Id == id);
        }

        // POST api/Ipsums
        [HttpPost]
        public void Post([FromForm] Ipsum Ipsum)
        {
            _context.Ipsums.Add(Ipsum);
            _context.SaveChanges();
        }

        // PUT api/Ipsums
        [HttpPut()]
        public void Put([FromForm] Ipsum Ipsum)
        {
            _context.Ipsums.Update(Ipsum);
            _context.SaveChanges();
        }

        // DELETE api/Ipsums/5
        [HttpDelete()]
        public void Delete([FromForm] Ipsum Ipsum)
        {
            // Check if element exists
            if ( _context.Ipsums.Where(t => t.Id == Ipsum.Id).Count() > 0 ) {
                _context.Ipsums.Remove(_context.Ipsums.First(t => t.Id == Ipsum.Id));
                _context.SaveChanges();
            }
        }

    }
}
