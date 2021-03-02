using System.Collections.Generic;

namespace RCLExcelAddIn
{
    public class Combinazione
    {
        public List<int?> Celle { get; set; } = new List<int?>();

        public int Lastra50X50 { get; set; }
        public int Lastra25X50 { get; set; }
        public int GiuntoAlto { get; set; }
        public int GiuntoBasso { get; set; }
        public int TiranteOrizzontale { get; set; }
        public int TiranteObliquo { get; set; }
        public int TiranteObliquoH50 { get; set; }
        public int TiranteObliquoH75 { get; set; }
        public int TiranteObliquoH100 { get; set; }
        public int Angolare { get; set; }
        public int SquadrettaAncoraggio { get; set; }
        public int ElementoCrocera { get; set; }
        public int Basamento { get; set; }
        public int SpinottoCorto { get; set; }
        public int PiastraLineare { get; set; }
        public int PiastraAngolare { get; set; }
        public int PiastraL { get; set; }
        public int AllinZ { get; set; }
        public int AllinL { get; set; }
    }
}
