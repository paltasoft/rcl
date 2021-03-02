using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;

namespace RCLConfig
{
    public class Cella
    {
        public int Riga { get; set; }
        public int Colonna { get; set; }
        public bool Selezionata { get; set; }
        public int Altezza { get; set; }
    }

    class Program
    {
        static int numeroDiRighe = 3;
        static int numeroDiColonne = 3;

        static void StampaGriglia(List<Cella> griglia)
        {
            Console.WriteLine();
            for (int r = 0; r < numeroDiRighe; r++)
            {
                for (int c = 0; c < numeroDiColonne; c++)
                {
                    if (griglia.Where(x => x.Riga == r && x.Colonna == c).Single().Selezionata)
                    {
                        Console.Write($"[{griglia.Where(x => x.Riga == r && x.Colonna == c).Single().Altezza.ToString().PadLeft(3, ' ')}]");
                    }
                    else
                    {
                        Console.Write("[   ]");
                    }
                }
                Console.WriteLine();
            }
        }

        static IEnumerable<IEnumerable<T>> GetPermutationsWithRept<T>(IEnumerable<T> list, int length)
        {
            if (length == 1) return list.Select(t => new T[] { t });
            return GetPermutationsWithRept(list, length - 1)
                .SelectMany(t => list,
                    (t1, t2) => t1.Concat(new T[] { t2 }));
        }

        static List<Cella> GeneraGriglia()
        {
            var griglia = new List<Cella>();
            for(int r =0; r< numeroDiRighe; r++)
            {
                for (int c = 0; c < numeroDiColonne; c++)
                {
                    griglia.Add(new Cella
                    {
                        Riga = r,
                        Colonna = c
                    });
                }
            }
            return griglia;
        }

        static void Main(string[] args)
        {
            var outDir = "Combinazioni";
            //var selezioniPossibili = new bool[] { true, false };
            //var combinazioniSelezioni = GetPermutationsWithRept(selezioniPossibili, 9);

            var combinazioniSelezioni = new List<List<bool>>();

            var c01 = new List<bool> { false, false, false, false, true, false, false, false, false };
            combinazioniSelezioni.Add(c01);

            var c02 = new List<bool> { false, false, false, true, true, false, false, false, false };
            combinazioniSelezioni.Add(c02);
            var c03 = new List<bool> { true, false, false, true, true, false, false, false, false };
            combinazioniSelezioni.Add(c03);
            var c04 = new List<bool> { false, false, false, true, true, false, true, false, false };
            combinazioniSelezioni.Add(c04);
            var c05 = new List<bool> { false, true, false, true, true, false, false, false, false };
            combinazioniSelezioni.Add(c05);
            var c06 = new List<bool> { true, true, false, true, true, false, false, false, false };
            combinazioniSelezioni.Add(c06);
            var c07 = new List<bool> { false, false, false, true, true, false, false, true, false };
            combinazioniSelezioni.Add(c07);
            var c08 = new List<bool> { false, false, false, true, true, false, true, true, false };
            combinazioniSelezioni.Add(c08);

            var c09 = new List<bool> { false, false, false, false, true, true, false, false, false }; 
            combinazioniSelezioni.Add(c09);
            var c10 = new List<bool> { false, true, false, false, true, true, false, false, false }; 
            combinazioniSelezioni.Add(c10);
            var c11 = new List<bool> { false, false, false, false, true, true, false, true, false };
            combinazioniSelezioni.Add(c11);
            var c12 = new List<bool> { false, false, true, false, true, true, false, false, false };
            combinazioniSelezioni.Add(c12);
            var c13 = new List<bool> { false, false, false, false, true, true, false, false, true };
            combinazioniSelezioni.Add(c13);
            var c14 = new List<bool> { false, true, true, false, true, true, false, false, false };
            combinazioniSelezioni.Add(c14);
            var c15 = new List<bool> { false, false, false, false, true, true, false, true, true };
            combinazioniSelezioni.Add(c15);

            var c16 = new List<bool> { false, false, false, true, true, true, false, false, false };
            combinazioniSelezioni.Add(c16);
            var c17 = new List<bool> { true, false, false, true, true, true, false, false, false };
            combinazioniSelezioni.Add(c17);
            var c18 = new List<bool> { false, true, false, true, true, true, false, false, false };
            combinazioniSelezioni.Add(c18);
            var c19 = new List<bool> { false, false, true, true, true, true, false, false, false };
            combinazioniSelezioni.Add(c19);
            var c20 = new List<bool> { true, false, true, true, true, true, false, false, false };
            combinazioniSelezioni.Add(c20);
            var c21 = new List<bool> { false, true, true, true, true, true, false, false, false };
            combinazioniSelezioni.Add(c21);
            var c22 = new List<bool> { true, false, true, true, true, true, false, false, false };
            combinazioniSelezioni.Add(c22);
            var c23 = new List<bool> { true, true, true, true, true, true, false, false, false };
            combinazioniSelezioni.Add(c23);
            var c24 = new List<bool> { false, false, false, true, true, true, true, false, false };
            combinazioniSelezioni.Add(c24);
            var c25 = new List<bool> { false, false, false, true, true, true, false, true, false };
            combinazioniSelezioni.Add(c25);
            var c26 = new List<bool> { false, false, false, true, true, true, false, false, true };
            combinazioniSelezioni.Add(c26);
            var c27 = new List<bool> { false, false, false, true, true, true, true, true, false };
            combinazioniSelezioni.Add(c27);
            var c28 = new List<bool> { false, false, false, true, true, true, false, true, true };
            combinazioniSelezioni.Add(c28);
            var c29 = new List<bool> { false, false, false, true, true, true, true, false, true };
            combinazioniSelezioni.Add(c29);
            var c30 = new List<bool> { false, false, false, true, true, true, true, true, true };
            combinazioniSelezioni.Add(c30);

            var c31 = new List<bool> { false, false, false, false, true, false, false, true, false };
            combinazioniSelezioni.Add(c31);
            var c32 = new List<bool> { false, false, false, true, true, false, false, true, false };
            combinazioniSelezioni.Add(c32);
            var c33 = new List<bool> { false, false, false, false, true, false, true, true, false };
            combinazioniSelezioni.Add(c33);
            var c34 = new List<bool> { false, false, false, true, true, false, true, true, false };
            combinazioniSelezioni.Add(c34);
            var c35 = new List<bool> { false, false, false, false, true, true, false, true, false };
            combinazioniSelezioni.Add(c35);
            var c36 = new List<bool> { false, false, false, false, true, false, false, true, true };
            combinazioniSelezioni.Add(c36);
            var c37 = new List<bool> { false, false, false, false, true, true, false, true, true };
            combinazioniSelezioni.Add(c37);

            var c38 = new List<bool> { false, true, false, false, true, false, false, false, false };
            combinazioniSelezioni.Add(c38);
            var c39 = new List<bool> { true, true, false, false, true, false, false, false, false };
            combinazioniSelezioni.Add(c39);
            var c40 = new List<bool> { false, true, false, true, true, false, false, false, false };
            combinazioniSelezioni.Add(c40);
            var c41 = new List<bool> { true, true, false, true, true, false, false, false, false };
            combinazioniSelezioni.Add(c41);
            var c42 = new List<bool> { false, true, true, false, true, false, false, false, false };
            combinazioniSelezioni.Add(c42);
            var c43 = new List<bool> { false, true, false, false, true, true, false, false, false };
            combinazioniSelezioni.Add(c43);
            var c44 = new List<bool> { false, true, true, false, true, true, false, false, false };
            combinazioniSelezioni.Add(c44);

            var c45 = new List<bool> { false, true, false, false, true, false, false, true, false };
            combinazioniSelezioni.Add(c45);
            var c46 = new List<bool> { true, true, false, false, true, false, false, true, false };
            combinazioniSelezioni.Add(c46);
            var c47 = new List<bool> { false, true, false, true, true, false, false, true, false };
            combinazioniSelezioni.Add(c47);
            var c48 = new List<bool> { false, true, false, false, true, false, true, true, false };
            combinazioniSelezioni.Add(c48);
            var c49 = new List<bool> { true, true, false, true, true, false, false, true, false };
            combinazioniSelezioni.Add(c49);
            var c50 = new List<bool> { false, true, false, true, true, false, true, true, false };
            combinazioniSelezioni.Add(c50);
            var c51 = new List<bool> { true, true, false, false, true, false, true, true, false };
            combinazioniSelezioni.Add(c51);
            var c52 = new List<bool> { true, true, false, true, true, false, true, true, false };
            combinazioniSelezioni.Add(c52);
            var c53 = new List<bool> { false, true, true, false, true, false, false, true, false };
            combinazioniSelezioni.Add(c53);
            var c54 = new List<bool> { false, true, false, false, true, true, false, true, false };
            combinazioniSelezioni.Add(c54);
            var c55 = new List<bool> { false, true, false, false, true, false, false, true, true };
            combinazioniSelezioni.Add(c55);
            var c56 = new List<bool> { false, true, true, false, true, true, false, true, false };
            combinazioniSelezioni.Add(c56);
            var c57 = new List<bool> { false, true, false, false, true, true, false, true, true };
            combinazioniSelezioni.Add(c57);
            var c58 = new List<bool> { false, true, true, false, true, false, false, true, true };
            combinazioniSelezioni.Add(c58);
            var c59 = new List<bool> { false, true, true, false, true, true, false, true, true };
            combinazioniSelezioni.Add(c59);


            var altezzePossibili = new int[] { 50, 75, 100 };
            var combinazioniAltezze = GetPermutationsWithRept(altezzePossibili, 9);

            if (!System.IO.Directory.Exists(outDir)) 
            {
                System.IO.Directory.CreateDirectory(outDir);
            }

            var combinazioniTotali = combinazioniAltezze.Count() * combinazioniSelezioni.Count;

            var risultati = new List<List<Cella>>();

            var index = 1;
            foreach(var combinazioneAltezze in combinazioniAltezze)
            {
                foreach (var selezione in combinazioniSelezioni)
                {
                    var griglia = GeneraGriglia();
                    for (int i = 0; i < griglia.Count; i++)
                    {
                        griglia[i].Selezionata = selezione[i];
                        griglia[i].Altezza = combinazioneAltezze.ElementAt(i);
                    }
                    StampaGriglia(griglia);
                    //risultati.Add(griglia);
                    //System.IO.File.WriteAllText(System.IO.Path.Combine(outDir, $"{index}.json"), JsonConvert.SerializeObject(griglia));
                    index++;
                    var perc = Math.Round((Convert.ToDouble(index) / Convert.ToDouble(combinazioniTotali)) * 100.0, 3);
                    Console.Write("\r{0}%   ", perc);
                }
            }

            System.IO.File.WriteAllText(System.IO.Path.Combine(outDir, $"output.json"), JsonConvert.SerializeObject(risultati));
            Console.WriteLine("\nDone!");
            Console.ReadLine();
        }
    }
}
