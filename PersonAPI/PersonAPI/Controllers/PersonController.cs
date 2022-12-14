using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using PersonAPI.Data;
using PersonAPI.Models;
using System.Globalization;
using System.Net.Mail;
using System.Text.RegularExpressions;

namespace PersonAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private readonly ApiContext _context;

        public PersonController(ApiContext context)
        {
            _context = context;
        }


       
        [HttpPost]
        public IActionResult CreatePerson(Person Request, int ApartmentId)
        {
            var apartmentReq = _context.Apartments.Find(ApartmentId);
            if (apartmentReq == null)
            {
               return NotFound();
            }
            string[] dateFormats = { "dd.MM.yyyy", "dd-MM-yyyy", "dd/MM/yyyy" };
            Person persons = new Person();
            persons.FirstName = Request.FirstName;
            persons.LastName = Request.LastName;
            persons.PhoneNumber = Request.PhoneNumber;
            persons.Email = Request.Email;
            persons.PersonalCode = Request.PersonalCode;
            persons.DateOfBirth = Request.DateOfBirth;
            persons.ApartmentId = apartmentReq.Id;

            DateTime tempDate;
            bool validDate = DateTime.TryParseExact(persons.DateOfBirth, dateFormats, DateTimeFormatInfo.InvariantInfo, DateTimeStyles.None, out tempDate);
            if (!validDate)
            {
                return new JsonResult("Wrong Date");
            }

            persons.PersonalCode = persons.PersonalCode.Replace("-", "");

            Match match = Regex.Match(persons.PersonalCode, "^[0-9]+$", RegexOptions.IgnoreCase);

            
            if (persons.PersonalCode.Length != 11 || !match.Success)
            {
                return new JsonResult("Wrong personal code");
            }

            try
            {
                MailAddress m = new MailAddress(persons.Email);
                _context.Person.Add(persons);
                _context.SaveChanges();
                return Ok(persons);

            }
            catch (FormatException)
            {
                return new JsonResult("Wrong Email");
            }
        }

        [HttpPut]
        public IActionResult UpdatePerson(Person Request, int ApartmentId)
        {
            string[] dateFormats = { "dd.MM.yyyy", "dd-MM-yyyy", "dd/MM/yyyy" };
            try
            {
                var apartmentReq = _context.Apartments.Find(ApartmentId);
                var person = _context.Person.FirstOrDefault(x => x.Id == Request.Id);
                if (person == null || apartmentReq == null)
                {
                    return NotFound();
                }

                person.FirstName = Request.FirstName;
                person.LastName = Request.LastName;
                person.PhoneNumber = Request.PhoneNumber;
                person.Email = Request.Email;
                person.PersonalCode = Request.PersonalCode;
                person.DateOfBirth = Request.DateOfBirth;
                person.ApartmentId = apartmentReq.Id;

                DateTime tempDate;
                bool validDate = DateTime.TryParseExact(person.DateOfBirth, dateFormats, DateTimeFormatInfo.InvariantInfo, DateTimeStyles.None, out tempDate);
                if (!validDate)
                {
                    return new JsonResult("Wrong Date");
                }

                person.PersonalCode = person.PersonalCode.Replace("-", "");

                Match match = Regex.Match(person.PersonalCode, "^[0-9]+$", RegexOptions.IgnoreCase);


                if (person.PersonalCode.Length != 11 || !match.Success)
                {
                    return new JsonResult("Wrong personal code");
                }

                try
                {
                    MailAddress m = new MailAddress(person.Email);
                    _context.Entry(person).State = EntityState.Modified;
                    _context.SaveChanges();
                    var persons = _context.Person.ToList();
                    return Ok(persons);
                }
                catch (FormatException)
                {
                    return new JsonResult("Wrong Email");
                }

            }
            catch (Exception ex)
            {
                return StatusCode(500, "An error has occured");
            }

            
        }


        [HttpDelete]
        public IActionResult DeletePerson(int Id)
        {
            var result = _context.Person.Find(Id);

            if (result == null)
                 return NotFound();

            _context.Person.Remove(result);
            _context.SaveChanges();

            return NoContent();
        }


        [HttpGet]
        public IActionResult GetAllPersons()
        {
            var result = _context.Person.ToList();

            return Ok(result);
        }


        [HttpGet]
        public IActionResult GetPerson(int Id)
        {
            var result = _context.Person.Find(Id);

            if (result == null)
                return NotFound();

            return Ok(result);
        }

    }
}
