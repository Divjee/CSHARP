using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using PersonAPI.Data;
using PersonAPI.Models;
using System.Text.Json.Nodes;
using System.Text.Json.Serialization;

namespace PersonAPI.Controllers

{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ApartmentController : Controller
    {
        private readonly ApiContext _context;

        public ApartmentController(ApiContext context)
        {
            _context = context;
        }
        [HttpPost]
        public IActionResult CreateApartment(Apartment Request, int BuildingId)
        {
            var buidlingReq = _context.Buildings.Find(BuildingId);
            if(buidlingReq== null)
            {
                return new JsonResult("Building not found");
            }

            Apartment apartment = new Apartment();
            apartment.FullSqrMeters = Request.FullSqrMeters;
            apartment.Floor = Request.Floor;
            apartment.NrOfInhabitants = Request.NrOfInhabitants;
            apartment.ApartmentNumber = Request.ApartmentNumber;
            apartment.NumberOfRooms = Request.NumberOfRooms;
            apartment.FullSqrMeters = Request.FullSqrMeters;
            apartment.LivingAreaSqrMeters = Request.LivingAreaSqrMeters;
            apartment.BuildingId = buidlingReq.Id;

            _context.Apartments.Add(apartment);
            _context.SaveChanges();

            return Ok(apartment);
        }

        
        [HttpGet]
        public IActionResult GetApartment(int Id)
        {

            var result = _context.Apartments.Find(Id);

            if (result == null)
                return NotFound();

            return Ok(result);
        }

        
        [HttpPut]
        public IActionResult UpdateApartment(Apartment Request, int BuildingId)
        {
            try 
            {
                var buildingReq = _context.Buildings.Find(BuildingId);
                var apartment = _context.Apartments.FirstOrDefault(x => x.Id == Request.Id);
                if(apartment == null || buildingReq == null) 
                {
                    return NotFound();
                }

                apartment.FullSqrMeters = Request.FullSqrMeters;
                apartment.Floor = Request.Floor;
                apartment.NrOfInhabitants = Request.NrOfInhabitants;
                apartment.ApartmentNumber = Request.ApartmentNumber;
                apartment.NumberOfRooms = Request.NumberOfRooms;
                apartment.FullSqrMeters = Request.FullSqrMeters;
                apartment.LivingAreaSqrMeters = Request.LivingAreaSqrMeters;
                apartment.BuildingId = buildingReq.Id;

                _context.Entry(apartment).State = EntityState.Modified;
                _context.SaveChanges();
                var apartments = _context.Apartments.ToList();
                return Ok(apartment);
            }
            catch(Exception ex)
            {
                return StatusCode(500, "An error has occured");
            }
         }

        
        [HttpDelete]
        public IActionResult DeleteApartment(int Id)
        {
            var result = _context.Apartments.Find(Id);

            if (result == null)
                return NotFound();

            _context.Apartments.Remove(result);
            _context.SaveChanges();

            return Ok(result);
        }

        
        [HttpGet]
        public IActionResult GetAllApartments()
        {
            var result = _context.Apartments.ToList();

            return Ok(result);
        }
    }
}
