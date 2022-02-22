using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Data;
using API.Models;


namespace API.Controllers
{
    [Route("api/LoginItems")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ProductContext _context;

        public LoginsController(ProductContext context)
        {
            _context = context;
        }

        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LoginItem>>> GetLogin()
        {
            return await _context.LoginItem.ToListAsync();
        }

        
        [HttpGet("{Email}")]
        public async Task<ActionResult<LoginItem>> GetLogin(string Email)
        {
            var login = await _context.LoginItem.FindAsync(Email);

            if (login == null)
            {
                return NotFound();
            }

            return login;
        }

        
        
        [HttpPut("{Email}")]
        public async Task<IActionResult> PutLogin(string Email, LoginItem login)
        {
            if (Email != login.Email)
            {
                return BadRequest();
            }

            _context.Entry(login).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LoginItemExists(Email))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        
        
        [HttpPost]
        public async Task<ActionResult<Product>> PostLogin(LoginItem login)
        {
            _context.Product.Add(login);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLogin", new { Email = login.Email }, login);
        }

        
        [HttpDelete("{Email}")]
        public async Task<IActionResult> DeleteLogin(string Email)
        {
            var login = await _context.LoginItem.FindAsync(Email);
            if (login == null)
            {
                return NotFound();
            }

            _context.LoginItem.Remove(login);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LoginExists(string Email)
        {
            return _context.Product.Any(e => e.Email == Email);
        }
    }
}