using Microsoft.Office.Interop.Excel;
using Microsoft.Office.Tools.Ribbon;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Windows.Forms;

namespace RCLExcelAddIn
{
    public partial class RCLRibbon
    {
        private Microsoft.Office.Tools.Excel.Worksheet ws;

        private void RCLRibbon_Load(object sender, RibbonUIEventArgs e)
        {
        }

        private void buttonGeneraCombinazioni_Click(object sender, RibbonControlEventArgs e)
        {
            var load = new LoaderForm();
            load.ShowDialog();
        }

        private void buttonLeggiAltezzaSingola50_Click(object sender, RibbonControlEventArgs e)
        {
            ws = Globals.Factory.GetVstoObject(Globals.ThisAddIn.Application.ActiveWorkbook.Worksheets[1]);

            var offset = 0;
            bool leggiBlocco = true;
            var combinazioni = new List<Combinazione>();
            while (leggiBlocco == true)
            {
                var c1 = ws.UsedRange.Columns[0].Cells[2 + offset];
                var c2 = ws.UsedRange.Columns[2].Cells[4 + offset];
                var rigaAccessori = ws.UsedRange.Rows[3 + offset];

                var combinazione = new Combinazione();
                Range blocco = ws.UsedRange.Range[c1, c2];
                foreach (dynamic c in blocco.Cells)
                {
                    combinazione.Celle.Add((int?)c.Value);
                }
                offset += 4;
                if (combinazione.Celle.All(x => x == null))
                {
                    leggiBlocco = false;
                }
                else
                {
                    combinazione.Lastra50X50 = (int)rigaAccessori.Cells[5].Value;
                    combinazione.Lastra25X50 = (int)rigaAccessori.Cells[6].Value;
                    combinazione.GiuntoAlto = (int)rigaAccessori.Cells[7].Value;
                    combinazione.GiuntoBasso = (int)rigaAccessori.Cells[8].Value;
                    combinazione.TiranteOrizzontale = (int)rigaAccessori.Cells[9].Value;
                    combinazione.TiranteObliquo = (int)rigaAccessori.Cells[10].Value;
                    combinazione.Angolare = (int)rigaAccessori.Cells[11].Value;
                    combinazione.SquadrettaAncoraggio = (int)rigaAccessori.Cells[12].Value;
                    combinazione.ElementoCrocera = (int)rigaAccessori.Cells[13].Value;
                    combinazione.Basamento = (int)rigaAccessori.Cells[14].Value;
                    combinazione.SpinottoCorto = (int)rigaAccessori.Cells[15].Value;
                    combinazione.PiastraLineare = (int)rigaAccessori.Cells[16].Value;
                    combinazione.PiastraAngolare = (int)rigaAccessori.Cells[17].Value;
                    combinazione.PiastraL = (int)rigaAccessori.Cells[18].Value;
                    combinazione.AllinZ = (int)rigaAccessori.Cells[19].Value;
                    combinazione.AllinL = (int)rigaAccessori.Cells[20].Value;
                    combinazioni.Add(combinazione);
                }
            }

            File.WriteAllText(@"C:\Users\yuris\Source\combinazioniH50.json", JsonConvert.SerializeObject(combinazioni));
            MessageBox.Show("OK");
        }

        private void buttonLeggi75_Click(object sender, RibbonControlEventArgs e)
        {
            ws = Globals.Factory.GetVstoObject(Globals.ThisAddIn.Application.ActiveWorkbook.Worksheets[1]);

            var offset = 0;
            bool leggiBlocco = true;
            var combinazioni = new List<Combinazione>();
            while (leggiBlocco == true)
            {
                var c1 = ws.UsedRange.Columns[0].Cells[2 + offset];
                var c2 = ws.UsedRange.Columns[2].Cells[4 + offset];
                var rigaAccessori = ws.UsedRange.Rows[3 + offset];

                var combinazione = new Combinazione();
                Range blocco = ws.UsedRange.Range[c1, c2];
                foreach (dynamic c in blocco.Cells)
                {
                    combinazione.Celle.Add((int?)c.Value);
                }
                offset += 4;
                if (combinazione.Celle.All(x => x == null))
                {
                    leggiBlocco = false;
                }
                else
                {
                    combinazione.Lastra50X50 = (int)rigaAccessori.Cells[5].Value;
                    combinazione.Lastra25X50 = (int)rigaAccessori.Cells[6].Value;
                    combinazione.GiuntoAlto = (int)rigaAccessori.Cells[7].Value;
                    combinazione.GiuntoBasso = (int)rigaAccessori.Cells[8].Value;
                    combinazione.TiranteOrizzontale = (int)rigaAccessori.Cells[9].Value;
                    combinazione.TiranteObliquoH75 = (int)rigaAccessori.Cells[10].Value;
                    combinazione.TiranteObliquoH50 = (int)rigaAccessori.Cells[11].Value;
                    combinazione.Angolare = (int)rigaAccessori.Cells[12].Value;
                    combinazione.SquadrettaAncoraggio = (int)rigaAccessori.Cells[13].Value;
                    combinazione.ElementoCrocera = (int)rigaAccessori.Cells[14].Value;
                    combinazione.Basamento = (int)rigaAccessori.Cells[15].Value;
                    combinazione.SpinottoCorto = (int)rigaAccessori.Cells[16].Value;
                    combinazione.PiastraLineare = (int)rigaAccessori.Cells[17].Value;
                    combinazione.PiastraAngolare = (int)rigaAccessori.Cells[18].Value;
                    combinazione.PiastraL = (int)rigaAccessori.Cells[19].Value;
                    combinazione.AllinZ = (int)rigaAccessori.Cells[20].Value;
                    combinazione.AllinL = (int)rigaAccessori.Cells[21].Value;
                    combinazioni.Add(combinazione);
                }
            }

            File.WriteAllText(@"C:\Users\yuris\Source\combinazioniH75.json", JsonConvert.SerializeObject(combinazioni));
            MessageBox.Show("OK");
        }

        private void buttonLeggiH100_Click(object sender, RibbonControlEventArgs e)
        {
            ws = Globals.Factory.GetVstoObject(Globals.ThisAddIn.Application.ActiveWorkbook.Worksheets[1]);

            var offset = 0;
            bool leggiBlocco = true;
            var combinazioni = new List<Combinazione>();
            while (leggiBlocco == true)
            {
                var c1 = ws.UsedRange.Columns[0].Cells[2 + offset];
                var c2 = ws.UsedRange.Columns[2].Cells[4 + offset];
                var rigaAccessori = ws.UsedRange.Rows[3 + offset];

                var combinazione = new Combinazione();
                Range blocco = ws.UsedRange.Range[c1, c2];
                foreach (dynamic c in blocco.Cells)
                {
                    combinazione.Celle.Add((int?)c.Value);
                }
                offset += 4;
                if (combinazione.Celle.All(x => x == null))
                {
                    leggiBlocco = false;
                }
                else
                {
                    combinazione.Lastra50X50 = (int)rigaAccessori.Cells[5].Value;
                    combinazione.Lastra25X50 = (int)rigaAccessori.Cells[6].Value;
                    combinazione.GiuntoAlto = (int)rigaAccessori.Cells[7].Value;
                    combinazione.GiuntoBasso = (int)rigaAccessori.Cells[8].Value;
                    combinazione.TiranteOrizzontale = (int)rigaAccessori.Cells[9].Value;
                    combinazione.TiranteObliquoH100 = (int)rigaAccessori.Cells[10].Value;
                    combinazione.TiranteObliquoH50 = (int)rigaAccessori.Cells[11].Value;
                    combinazione.Angolare = (int)rigaAccessori.Cells[12].Value;
                    combinazione.SquadrettaAncoraggio = (int)rigaAccessori.Cells[13].Value;
                    combinazione.ElementoCrocera = (int)rigaAccessori.Cells[14].Value;
                    combinazione.Basamento = (int)rigaAccessori.Cells[15].Value;
                    combinazione.SpinottoCorto = (int)rigaAccessori.Cells[16].Value;
                    combinazione.PiastraLineare = (int)rigaAccessori.Cells[17].Value;
                    combinazione.PiastraAngolare = (int)rigaAccessori.Cells[18].Value;
                    combinazione.PiastraL = (int)rigaAccessori.Cells[19].Value;
                    combinazione.AllinZ = (int)rigaAccessori.Cells[20].Value;
                    combinazione.AllinL = (int)rigaAccessori.Cells[21].Value;
                    combinazioni.Add(combinazione);
                }
            }

            File.WriteAllText(@"C:\Users\yuris\Source\combinazioniH100.json", JsonConvert.SerializeObject(combinazioni));
            MessageBox.Show("OK");
        }

        private void buttonLeggiSkyline_Click(object sender, RibbonControlEventArgs e)
        {
            ws = Globals.Factory.GetVstoObject(Globals.ThisAddIn.Application.ActiveWorkbook.Worksheets[1]);

            var offset = 0;
            bool leggiBlocco = true;
            var combinazioni = new List<Combinazione>();
            while (leggiBlocco == true)
            {
                var c1 = ws.UsedRange.Columns[0].Cells[2 + offset];
                var c2 = ws.UsedRange.Columns[2].Cells[4 + offset];
                var rigaAccessori = ws.UsedRange.Rows[3 + offset];

                Range blocco = ws.UsedRange.Range[c1, c2];

                var combinazione = new Combinazione();
                foreach (dynamic c in blocco.Cells)
                {
                    combinazione.Celle.Add((int?)c.Value);
                }
                offset += 4;
                if (combinazione.Celle.All(x => x == null))
                {
                    leggiBlocco = false;
                }
                else
                {
                    try
                    {
                        if ((int?)rigaAccessori.Cells[5].Value != null)
                        {
                          combinazione.Lastra50X50 = (int)rigaAccessori.Cells[5].Value;
                          combinazione.Lastra25X50 = (int)rigaAccessori.Cells[6].Value;
                          combinazione.GiuntoAlto = (int)rigaAccessori.Cells[7].Value;
                          combinazione.GiuntoBasso = (int)rigaAccessori.Cells[8].Value;
                          combinazione.TiranteOrizzontale = (int)rigaAccessori.Cells[9].Value;
                          combinazione.TiranteObliquoH50 = (int)rigaAccessori.Cells[10].Value;
                          combinazione.TiranteObliquoH75 = (int)rigaAccessori.Cells[11].Value;
                          combinazione.TiranteObliquoH100 = (int)rigaAccessori.Cells[12].Value;
                          combinazione.Angolare = (int)rigaAccessori.Cells[13].Value;
                          combinazione.SquadrettaAncoraggio = (int)rigaAccessori.Cells[14].Value;
                          combinazione.ElementoCrocera = (int)rigaAccessori.Cells[15].Value;
                          combinazione.Basamento = (int)rigaAccessori.Cells[16].Value;
                          combinazione.SpinottoCorto = (int)rigaAccessori.Cells[17].Value;
                          combinazione.PiastraLineare = (int)rigaAccessori.Cells[18].Value;
                          combinazione.PiastraAngolare = (int)rigaAccessori.Cells[19].Value;
                          combinazione.PiastraL = (int)rigaAccessori.Cells[20].Value;
                          combinazione.AllinZ = (int)rigaAccessori.Cells[21].Value;
                          try
                          {
                            combinazione.AllinL = (int)rigaAccessori.Cells[22].Value;
                          }
                          catch
                          {
                            combinazione.AllinL = 0;
                          }
                          
                        }
                        else
                        {
                            combinazione.Lastra50X50 = -1;
                            combinazione.Lastra25X50 = -1;
                            combinazione.GiuntoAlto = -1;
                            combinazione.GiuntoBasso = -1;
                            combinazione.TiranteOrizzontale = -1;
                            combinazione.TiranteObliquoH50 = -1;
                            combinazione.TiranteObliquoH75 = -1;
                            combinazione.TiranteObliquoH100 = -1;
                            combinazione.Angolare = -1;
                            combinazione.SquadrettaAncoraggio = -1;
                            combinazione.ElementoCrocera = -1;
                            combinazione.Basamento = -1;
                            combinazione.SpinottoCorto = -1;
                            combinazione.PiastraLineare = -1;
                            combinazione.PiastraAngolare = -1;
                            combinazione.PiastraL = -1;
                            combinazione.AllinZ = -1;
                            combinazione.AllinL = -1;
                        }
                        combinazioni.Add(combinazione);
                    }
                    catch(Exception ex)
                    {
                        var i = 0;
                    }
                }
            }

            File.WriteAllText(@"C:\Users\yuris\Source\combinazioniSkylinePlastica.json", JsonConvert.SerializeObject(combinazioni));
            MessageBox.Show("OK");
        }
    }
}
