using API.DTOs;
using API.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using API.Services;
using API.Data;
using API.Extensions;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly UserManager<User> _userManager;
        private readonly TokenService _tokenService;
        private readonly ECommerceContext _context;

        public AccountController(UserManager<User> userManager, TokenService tokenService, ECommerceContext context)
        {
            _context = context;
            _tokenService = tokenService;
            _userManager = userManager;
        }

        //  public IEnumerable<string> Member { get; private set; }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _userManager.FindByNameAsync(loginDto.Username);
            if (user == null || !await _userManager.CheckPasswordAsync(user, loginDto.Password))
                return Unauthorized();

            var userCart = await RetrieveCart(loginDto.Username);
            var anonymousCart = await RetrieveCart(Request.Cookies["customerId"]);

            if (anonymousCart != null)
            {
                if (userCart != null) _context.Carts.Remove(userCart);
                anonymousCart.CustomerId = user.UserName;
                Response.Cookies.Delete("customerId");
                await _context.SaveChangesAsync();
            }

            return new UserDto
            {
                Email = user.Email,
                Token = await _tokenService.GenerateToken(user),
                Cart = anonymousCart != null ? anonymousCart.MapCartToDto() : userCart?.MapCartToDto()
            };
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register(RegisterDto registerDto)
        {
            var user = new User { UserName = registerDto.Username, Email = registerDto.Email };

            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(error.Code, error.Description);
                }

                return ValidationProblem();
            }

            await _userManager.AddToRoleAsync(user, "Member");
            return StatusCode(201);
        }
        [Authorize]
        [HttpGet("currentUser")]
        public async Task<ActionResult<UserDto>> GetCurrentUser()
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);

            var userCart = await RetrieveCart(User.Identity.Name);

            return new UserDto
            {
                Email = user.Email,
                Token = await _tokenService.GenerateToken(user),
                Cart = userCart?.MapCartToDto()
            };
        }

        private async Task<Cart> RetrieveCart(string customerId)
        {
            if (string.IsNullOrEmpty(customerId))
            {
                Response.Cookies.Delete("customerId");
                return null;
            }

            return await _context.Carts
                        .Include(i => i.Items)
                        .ThenInclude(p => p.Product)
                        .FirstOrDefaultAsync(x => x.CustomerId == customerId);
        }
    }
}