using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PersonAPI.Data;
using PersonAPI.Models;

namespace PersonAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class BuildingController : ControllerBase
    {
        private readonly ApiContext _context;

        public BuildingController(ApiContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult CreateBuilding(Building Request)
        {
            Building building = new Building();
            building.HouseNumber = Request.HouseNumber;
            building.StreetName = Request.StreetName;
            building.City = Request.City;
            building.Country = Request.Country;
            building.PostalCode = Request.PostalCode;
            

            _context.Buildings.Add(building);
            _context.SaveChanges();

            return Ok(building);
        }

        [HttpPut]
        public IActionResult UpdateBuilding(Building Request)
        {
            try
            {
                var building = _context.Buildings.FirstOrDefault(x => x.Id == Request.Id);
                if (building == null)
                {
                    return NotFound();
                }
                
                building.HouseNumber = Request.HouseNumber;
                building.StreetName = Request.StreetName;
                building.City = Request.City;
                building.Country = Request.Country;
                building.PostalCode = Request.PostalCode;


                _context.Entry(building).State = EntityState.Modified;
                _context.SaveChanges();
                var buildings = _context.Buildings.ToList();
                return Ok(building);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "An error has occured");
            }
            
        }


        [HttpGet]
        public IActionResult GetBuilding(int Id)
        {
            var result = _context.Buildings.Find(Id);

            if (result == null)
                return NotFound();

            return Ok(result);
        }

        [HttpDelete]
        public IActionResult DeleteBuilding(int Id)
        {
            var result = _context.Buildings.Find(Id);

            if (result == null)
                return NotFound();

            _context.Buildings.Remove(result);
            _context.SaveChanges();

            return Ok(result);
        }


        [HttpGet]
        public async Task<IActionResult> GetAllBuildings()
        {
            var result = await _context.Buildings.ToListAsync();

            return Ok(result);
        }

    }
}
