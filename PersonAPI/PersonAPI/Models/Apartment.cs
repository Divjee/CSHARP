using System.ComponentModel.DataAnnotations;
using System.Text.Json.Nodes;

namespace PersonAPI.Models
{
    public class Apartment
    {
        [Key]
        public int Id { get; set; }
        public int ApartmentNumber { get; set; }    
        public int Floor { get; set; }
        public int NumberOfRooms { get; set; }
        public int NrOfInhabitants { get; set; }
        public int FullSqrMeters { get; set; }
        public int LivingAreaSqrMeters {get; set; } 
        public int BuildingId { get; set; }



    }
}
