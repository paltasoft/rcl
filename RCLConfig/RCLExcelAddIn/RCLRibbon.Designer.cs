namespace RCLExcelAddIn
{
    partial class RCLRibbon : Microsoft.Office.Tools.Ribbon.RibbonBase
    {
        /// <summary>
        /// Variabile di progettazione necessaria.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        public RCLRibbon()
            : base(Globals.Factory.GetRibbonFactory())
        {
            InitializeComponent();
        }

        /// <summary> 
        /// Pulire le risorse in uso.
        /// </summary>
        /// <param name="disposing">ha valore true se le risorse gestite devono essere eliminate, false in caso contrario.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Codice generato da Progettazione componenti

        /// <summary>
        /// Metodo necessario per il supporto della finestra di progettazione. Non modificare
        /// il contenuto del metodo con l'editor di codice.
        /// </summary>
        private void InitializeComponent()
        {
            this.tab1 = this.Factory.CreateRibbonTab();
            this.groupGenerateCombinations = this.Factory.CreateRibbonGroup();
            this.buttonGeneraCombinazioni = this.Factory.CreateRibbonButton();
            this.buttonRead = this.Factory.CreateRibbonButton();
            this.buttonLeggi75 = this.Factory.CreateRibbonButton();
            this.buttonLeggiH100 = this.Factory.CreateRibbonButton();
            this.buttonLeggiSkyline = this.Factory.CreateRibbonButton();
            this.tab1.SuspendLayout();
            this.groupGenerateCombinations.SuspendLayout();
            this.SuspendLayout();
            // 
            // tab1
            // 
            this.tab1.ControlId.ControlIdType = Microsoft.Office.Tools.Ribbon.RibbonControlIdType.Office;
            this.tab1.Groups.Add(this.groupGenerateCombinations);
            this.tab1.Label = "TabAddIns";
            this.tab1.Name = "tab1";
            // 
            // groupGenerateCombinations
            // 
            this.groupGenerateCombinations.Items.Add(this.buttonGeneraCombinazioni);
            this.groupGenerateCombinations.Items.Add(this.buttonRead);
            this.groupGenerateCombinations.Items.Add(this.buttonLeggi75);
            this.groupGenerateCombinations.Items.Add(this.buttonLeggiH100);
            this.groupGenerateCombinations.Items.Add(this.buttonLeggiSkyline);
            this.groupGenerateCombinations.Label = "Genera Combinazioni";
            this.groupGenerateCombinations.Name = "groupGenerateCombinations";
            // 
            // buttonGeneraCombinazioni
            // 
            this.buttonGeneraCombinazioni.Label = "GENERA";
            this.buttonGeneraCombinazioni.Name = "buttonGeneraCombinazioni";
            this.buttonGeneraCombinazioni.Click += new Microsoft.Office.Tools.Ribbon.RibbonControlEventHandler(this.buttonGeneraCombinazioni_Click);
            // 
            // buttonRead
            // 
            this.buttonRead.Label = "LEGGI H50";
            this.buttonRead.Name = "buttonRead";
            this.buttonRead.Click += new Microsoft.Office.Tools.Ribbon.RibbonControlEventHandler(this.buttonLeggiAltezzaSingola50_Click);
            // 
            // buttonLeggi75
            // 
            this.buttonLeggi75.Label = "LEGGI H75";
            this.buttonLeggi75.Name = "buttonLeggi75";
            this.buttonLeggi75.Click += new Microsoft.Office.Tools.Ribbon.RibbonControlEventHandler(this.buttonLeggi75_Click);
            // 
            // buttonLeggiH100
            // 
            this.buttonLeggiH100.Label = "LEGGI H100";
            this.buttonLeggiH100.Name = "buttonLeggiH100";
            this.buttonLeggiH100.Click += new Microsoft.Office.Tools.Ribbon.RibbonControlEventHandler(this.buttonLeggiH100_Click);
            // 
            // buttonLeggiSkyline
            // 
            this.buttonLeggiSkyline.Label = "LEGGI SKYLINE";
            this.buttonLeggiSkyline.Name = "buttonLeggiSkyline";
            this.buttonLeggiSkyline.Click += new Microsoft.Office.Tools.Ribbon.RibbonControlEventHandler(this.buttonLeggiSkyline_Click);
            // 
            // RCLRibbon
            // 
            this.Name = "RCLRibbon";
            this.RibbonType = "Microsoft.Excel.Workbook";
            this.Tabs.Add(this.tab1);
            this.Load += new Microsoft.Office.Tools.Ribbon.RibbonUIEventHandler(this.RCLRibbon_Load);
            this.tab1.ResumeLayout(false);
            this.tab1.PerformLayout();
            this.groupGenerateCombinations.ResumeLayout(false);
            this.groupGenerateCombinations.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        internal Microsoft.Office.Tools.Ribbon.RibbonTab tab1;
        internal Microsoft.Office.Tools.Ribbon.RibbonGroup groupGenerateCombinations;
        internal Microsoft.Office.Tools.Ribbon.RibbonButton buttonGeneraCombinazioni;
        internal Microsoft.Office.Tools.Ribbon.RibbonButton buttonRead;
        internal Microsoft.Office.Tools.Ribbon.RibbonButton buttonLeggi75;
        internal Microsoft.Office.Tools.Ribbon.RibbonButton buttonLeggiH100;
        internal Microsoft.Office.Tools.Ribbon.RibbonButton buttonLeggiSkyline;
    }

    partial class ThisRibbonCollection
    {
        internal RCLRibbon RCLRibbon
        {
            get { return this.GetRibbon<RCLRibbon>(); }
        }
    }
}
