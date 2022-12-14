using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using System.ComponentModel.DataAnnotations;

namespace PersonAPI.Models
{
    public class Building
    {

        [Key]
        public int Id { get; set; }
       
        public string? HouseNumber { get; set; }
        
        public string? StreetName { get; set; }
        
        public string? City { get; set; }
        public string? Country { get; set; }
        public string? PostalCode { get; set; }
        

    }
}
