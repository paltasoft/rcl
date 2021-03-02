using Microsoft.Office.Interop.Excel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Reflection;
using System.Text.RegularExpressions;
using System.Windows.Forms;

namespace RCLExcelAddIn
{
    public partial class LoaderForm : Form
    {
        private Microsoft.Office.Tools.Excel.Worksheet ws;

        public LoaderForm()
        {
            ws = Globals.Factory.GetVstoObject(Globals.ThisAddIn.Application.ActiveWorkbook.Worksheets[1]);
            InitializeComponent();
        }

        private IEnumerable<IEnumerable<T>> GetPermutationsWithRept<T>(IEnumerable<T> list, int length)
        {
            if (length == 1) return list.Select(t => new T[] { t });
            return GetPermutationsWithRept(list, length - 1)
                .SelectMany(t => list,
                    (t1, t2) => t1.Concat(new T[] { t2 }));
        }

        private void LoaderForm_Load(object sender, EventArgs e)
        {
            progressBarOverall.Maximum = 100;
        }

        private void Disegna(List<int> selezione, int offset)
        {
            Range col036 = ws.UsedRange.Columns[1];
            Range col147 = ws.UsedRange.Columns[2];
            Range col258 = ws.UsedRange.Columns[3];
            Range col369 = ws.UsedRange.Columns[4];

            if (offset > 1)
            {
                col036 = ws.UsedRange.Columns[0];
                col147 = ws.UsedRange.Columns[1];
                col258 = ws.UsedRange.Columns[2];
                col369 = ws.UsedRange.Columns[3];
            }

            for (int i = 0; i < selezione.Count; i++)
            {
                Range column = col147;
                if (i == 0 || i == 3 || i == 6)
                {
                    column = col147;
                }
                if (i == 1 || i == 4 || i == 7)
                {
                    column = col258;
                }
                if (i == 2 || i == 5 || i == 8)
                {
                    column = col369;
                }
                var riga = offset;
                if (i == 0 || i == 1 || i == 2)
                {
                    riga += 0;
                }
                if (i == 3 || i == 4 || i == 5)
                {
                    riga += 1;
                }
                if (i == 6 || i == 7 || i == 8)
                {
                    riga += 2;
                }

                column.Cells[riga].BorderAround(Missing.Value, XlBorderWeight.xlMedium, XlColorIndex.xlColorIndexAutomatic, ColorTranslator.ToOle(Color.FromArgb(0, 0, 0)));
                if (selezione[i] != 0)
                {
                    column.Cells[riga].Interior.Color = ColorTranslator.ToOle(Color.Bisque);
                    column.Cells[riga].Value = selezione[i];
                }
            }
        }

        private void backgroundWorker1_DoWork(object sender, System.ComponentModel.DoWorkEventArgs e)
        {
            ws.Columns.ColumnWidth = 3;
            ws.Rows.RowHeight = 19;

            int offset = 1;

            var gruppi = new Dictionary<int, List<List<bool>>>();

            var gruppo = new List<List<bool>>
            {
                new List<bool> { false, false, false, false, true, false, false, false, false }
            };
            gruppi.Add(0, gruppo);

            gruppo = new List<List<bool>>
            {
                new List<bool> { false, false, false, true, true, false, false, false, false },
                new List<bool> { false, false, false, false, true, true, false, false, false },
                new List<bool> { false, false, false, false, true, false, false, true, false },
                new List<bool> { false, true, false, false, true, false, false, false, false },
            };
            gruppi.Add(1, gruppo);

            gruppo = new List<List<bool>>
            {
                new List<bool> { true, false, false, true, true, false, false, false, false },
                new List<bool> { false, false, false, true, true, false, true, false, false },
                new List<bool> { false, true, false, true, true, false, false, false, false },
                new List<bool> { false, false, false, true, true, false, false, true, false },
                new List<bool> { false, true, false, false, true, true, false, false, false },
                new List<bool> { false, false, false, false, true, true, false, true, false },
                new List<bool> { false, false, true, false, true, true, false, false, false },
                new List<bool> { false, false, false, false, true, true, false, false, true },
                new List<bool> { false, false, false, false, true, false, true, true, false },
                new List<bool> { false, false, false, false, true, false, false, true, true },
                new List<bool> { true, true, false, false, true, false, false, false, false },
                new List<bool> { false, true, true, false, true, false, false, false, false },
            };
            gruppi.Add(2, gruppo);

            gruppo = new List<List<bool>>
            {
                new List<bool> { true, true, false, true, true, false, false, false, false },
                new List<bool> { false, false, false, true, true, false, true, true, false },
                new List<bool> { false, true, true, false, true, true, false, false, false },
                new List<bool> { false, false, false, false, true, true, false, true, true },
            };
            gruppi.Add(3, gruppo);

            gruppo = new List<List<bool>>
            {
                new List<bool> { false, false, false, true, true, true, false, false, false },
                new List<bool> { false, true, false, false, true, false, false, true, false },
            };
            gruppi.Add(4, gruppo);

            gruppo = new List<List<bool>>
            {
                new List<bool> { true, false, false, true, true, true, false, false, false },
                new List<bool> { false, false, true, true, true, true, false, false, false },
                new List<bool> { false, false, false, true, true, true, true, false, false },
                new List<bool> { false, false, false, true, true, true, false, false, true },
                new List<bool> { false, true, false, false, true, false, true, true, false },
                new List<bool> { false, true, false, false, true, false, false, true, true },
                new List<bool> { true, true, false, false, true, false, false, true, false },
                new List<bool> { false, true, true, false, true, false, false, true, false },
            };
            gruppi.Add(5, gruppo);

            gruppo = new List<List<bool>>
            {
                new List<bool> { true, true, false, true, true, false, true, true, false },
                new List<bool> { false, true, true, false, true, true, false, true, true },
                new List<bool> { true, true, true, true, true, true, false, false, false },
                new List<bool> { false, false, false, true, true, true, true, true, true },
            };
            gruppi.Add(6, gruppo);

            gruppo = new List<List<bool>>
            {
                new List<bool> { false, true, false, true, true, true, false, false, false },
                new List<bool> { false, false, false, true, true, true, false, true, false },
                new List<bool> { false, true, false, false, true, true, false, true, false },
                new List<bool> { false, true, false, true, true, false, false, true, false },
            };
            gruppi.Add(7, gruppo);

            gruppo = new List<List<bool>>
            {
                new List<bool> { true, false, true, true, true, true, false, false, false },
                new List<bool> { false, false, false, true, true, true, true, false, true },
                new List<bool> { false, true, true, false, true, false, false, true, true },
                new List<bool> { true, true, false, false, true, false, true, true, false },
            };
            gruppi.Add(8, gruppo);

            gruppo = new List<List<bool>>
            {
                new List<bool> { false, true, true, true, true, true, false, false, false },
                new List<bool> { false, false, false, true, true, true, true, true, false },
                new List<bool> { false, false, false, true, true, true, false, true, true },
                new List<bool> { true, true, false, true, true, true, false, false, false },
                new List<bool> { true, true, false, true, true, false, false, true, false },
                new List<bool> { false, true, false, true, true, false, true, true, false },
                new List<bool> { false, true, true, false, true, true, false, true, false },
                new List<bool> { false, true, false, false, true, true, false, true, true },
            };
            gruppi.Add(9, gruppo);

            var altezzeDaUsare = textBoxAltezze.Text.Split('-');

            var indexOverall = 1;
            foreach (var grp in gruppi)
            {
                if (altezzeDaUsare.Count() == 1)
                {
                    var grpIndex = 1;
                    foreach (var sel in grp.Value)
                    {
                        var daDisegnare = new List<int>();
                        foreach (var val in sel)
                        {
                            if (backgroundWorker1.CancellationPending == true)
                            {
                                e.Cancel = true;
                                return;
                            }
                            if (val == true)
                            {
                                daDisegnare.Add(Convert.ToInt32(altezzeDaUsare[0]));
                            }
                            else
                            {
                                daDisegnare.Add(0);
                            }
                        }
                        Disegna(daDisegnare, offset);
                        offset += 4;

                        var progressGrp = Convert.ToInt32(Math.Round(((double)grpIndex / (double)grp.Value.Count) * 100.0, 0));
                        backgroundWorker1.ReportProgress(progressGrp, "grp");
                        grpIndex++;
                    }
                }
                else
                {
                    var numeroDiCelle = grp.Value[0].Where(x => x == true).Count();
                    var distribuzioneAltezze = GetPermutationsWithRept(altezzeDaUsare, numeroDiCelle);
                    var grpIndex = 1;
                    foreach (var combAltezze in distribuzioneAltezze)
                    {
                        var altezzeDiverse = combAltezze.Distinct().Count();
                        if (altezzeDiverse > 1)
                        {
                            foreach (var sel in grp.Value)
                            {
                                if (backgroundWorker1.CancellationPending == true)
                                {
                                    e.Cancel = true;
                                    return;
                                }
                                var indiceAltezza = 0;
                                var daDisegnare = new List<int>();
                                foreach (var val in sel)
                                {
                                    if (val == true)
                                    {
                                        daDisegnare.Add(Convert.ToInt32(combAltezze.ElementAt(indiceAltezza)));
                                        indiceAltezza++;
                                    }
                                    else
                                    {
                                        daDisegnare.Add(0);
                                    }
                                }

                                //NON DISEGNARE SE QUADRATO
                                var altezzaCentrale = daDisegnare[4];
                                var altezzaPiu1 = daDisegnare[5];
                                var altezzaPiu2 = daDisegnare[6];
                                var altezzaPiu3 = daDisegnare[7];
                                var altezzaPiu4 = daDisegnare[8];
                                var altezzaMeno1 = daDisegnare[3];
                                var altezzaMeno2 = daDisegnare[2];
                                var altezzaMeno3 = daDisegnare[1];
                                var altezzaMeno4 = daDisegnare[0];
                                var combinazione1 = new List<int> { altezzaCentrale, altezzaPiu1, altezzaPiu3, altezzaPiu4 };
                                var combinazione2 = new List<int> { altezzaCentrale, altezzaMeno1, altezzaPiu3, altezzaPiu2 };
                                var combinazione3 = new List<int> { altezzaCentrale, altezzaMeno1, altezzaMeno3, altezzaMeno4 };
                                var combinazione4 = new List<int> { altezzaCentrale, altezzaPiu1, altezzaMeno3, altezzaMeno2 };
                                var quadrato = false;
                                if (combinazione1.Where(x => x != 0).Count() == 4)
                                {
                                    quadrato = true;
                                }
                                if (combinazione2.Where(x => x != 0).Count() == 4)
                                {
                                    quadrato = true;
                                }
                                if (combinazione3.Where(x => x != 0).Count() == 4)
                                {
                                    quadrato = true;
                                }
                                if (combinazione4.Where(x => x != 0).Count() == 4)
                                {
                                    quadrato = true;
                                }
                                if (!quadrato)
                                {
                                    Disegna(daDisegnare, offset);
                                    offset += 4;
                                }
                            }
                        }
                        var progressGrp = Convert.ToInt32(Math.Round(((double)grpIndex / (double)distribuzioneAltezze.Count()) * 100.0, 0));
                        backgroundWorker1.ReportProgress(progressGrp, "grp");
                        grpIndex++;
                    }
                }
                var progress = Convert.ToInt32(Math.Round(((double)indexOverall / (double)gruppi.Count()) * 100.0, 0));
                backgroundWorker1.ReportProgress(progress, "overall");
                indexOverall++;
            }
        }

        private void backgroundWorker1_ProgressChanged(object sender, ProgressChangedEventArgs e)
        {
            if (e.UserState.ToString() == "overall")
            {
                labelOverall.Text = $"{e.ProgressPercentage} %";
                progressBarOverall.Value = e.ProgressPercentage;
            }
            if (e.UserState.ToString() == "grp")
            {
                labelGrp.Text = $"{e.ProgressPercentage} %";
                progressBarGrp.Value = e.ProgressPercentage;
            }
        }

        private void backgroundWorker1_RunWorkerCompleted(object sender, RunWorkerCompletedEventArgs e)
        {
            Dispose();
        }

        private void buttonGenera_Click(object sender, EventArgs e)
        {
            if (!backgroundWorker1.IsBusy)
            {
                buttonGenera.Text = "Stop";
                backgroundWorker1.RunWorkerAsync();
            }
            else
            {
                backgroundWorker1.CancelAsync();
            }
        }
    }
}