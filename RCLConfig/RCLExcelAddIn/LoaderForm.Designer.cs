namespace RCLExcelAddIn
{
    partial class LoaderForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.progressBarOverall = new System.Windows.Forms.ProgressBar();
            this.backgroundWorker1 = new System.ComponentModel.BackgroundWorker();
            this.labelOverall = new System.Windows.Forms.Label();
            this.labelTxt1 = new System.Windows.Forms.Label();
            this.labelTxtGrp = new System.Windows.Forms.Label();
            this.labelGrp = new System.Windows.Forms.Label();
            this.progressBarGrp = new System.Windows.Forms.ProgressBar();
            this.buttonGenera = new System.Windows.Forms.Button();
            this.textBoxAltezze = new System.Windows.Forms.TextBox();
            this.labelAltezze = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // progressBarOverall
            // 
            this.progressBarOverall.Location = new System.Drawing.Point(12, 109);
            this.progressBarOverall.Name = "progressBarOverall";
            this.progressBarOverall.Size = new System.Drawing.Size(775, 50);
            this.progressBarOverall.TabIndex = 0;
            // 
            // backgroundWorker1
            // 
            this.backgroundWorker1.WorkerReportsProgress = true;
            this.backgroundWorker1.WorkerSupportsCancellation = true;
            this.backgroundWorker1.DoWork += new System.ComponentModel.DoWorkEventHandler(this.backgroundWorker1_DoWork);
            this.backgroundWorker1.ProgressChanged += new System.ComponentModel.ProgressChangedEventHandler(this.backgroundWorker1_ProgressChanged);
            this.backgroundWorker1.RunWorkerCompleted += new System.ComponentModel.RunWorkerCompletedEventHandler(this.backgroundWorker1_RunWorkerCompleted);
            // 
            // labelOverall
            // 
            this.labelOverall.Location = new System.Drawing.Point(13, 160);
            this.labelOverall.Name = "labelOverall";
            this.labelOverall.Size = new System.Drawing.Size(774, 34);
            this.labelOverall.TabIndex = 1;
            this.labelOverall.Text = "-";
            this.labelOverall.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // labelTxt1
            // 
            this.labelTxt1.AutoSize = true;
            this.labelTxt1.Location = new System.Drawing.Point(9, 83);
            this.labelTxt1.Name = "labelTxt1";
            this.labelTxt1.Size = new System.Drawing.Size(174, 20);
            this.labelTxt1.TabIndex = 2;
            this.labelTxt1.Text = "Progresso Complessivo";
            // 
            // labelTxtGrp
            // 
            this.labelTxtGrp.AutoSize = true;
            this.labelTxtGrp.Location = new System.Drawing.Point(11, 192);
            this.labelTxtGrp.Name = "labelTxtGrp";
            this.labelTxtGrp.Size = new System.Drawing.Size(139, 20);
            this.labelTxtGrp.TabIndex = 5;
            this.labelTxtGrp.Text = "Progresso Gruppo";
            // 
            // labelGrp
            // 
            this.labelGrp.Location = new System.Drawing.Point(15, 269);
            this.labelGrp.Name = "labelGrp";
            this.labelGrp.Size = new System.Drawing.Size(774, 34);
            this.labelGrp.TabIndex = 4;
            this.labelGrp.Text = "-";
            this.labelGrp.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // progressBarGrp
            // 
            this.progressBarGrp.Location = new System.Drawing.Point(14, 218);
            this.progressBarGrp.Name = "progressBarGrp";
            this.progressBarGrp.Size = new System.Drawing.Size(775, 50);
            this.progressBarGrp.TabIndex = 3;
            // 
            // buttonGenera
            // 
            this.buttonGenera.Location = new System.Drawing.Point(12, 306);
            this.buttonGenera.Name = "buttonGenera";
            this.buttonGenera.Size = new System.Drawing.Size(777, 63);
            this.buttonGenera.TabIndex = 6;
            this.buttonGenera.Text = "Genera";
            this.buttonGenera.UseVisualStyleBackColor = true;
            this.buttonGenera.Click += new System.EventHandler(this.buttonGenera_Click);
            // 
            // textBoxAltezze
            // 
            this.textBoxAltezze.Location = new System.Drawing.Point(12, 43);
            this.textBoxAltezze.Name = "textBoxAltezze";
            this.textBoxAltezze.Size = new System.Drawing.Size(776, 26);
            this.textBoxAltezze.TabIndex = 7;
            // 
            // labelAltezze
            // 
            this.labelAltezze.AutoSize = true;
            this.labelAltezze.Location = new System.Drawing.Point(12, 17);
            this.labelAltezze.Name = "labelAltezze";
            this.labelAltezze.Size = new System.Drawing.Size(187, 20);
            this.labelAltezze.TabIndex = 8;
            this.labelAltezze.Text = "Altezze (p.es. 50-75-100)";
            // 
            // LoaderForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 387);
            this.Controls.Add(this.labelAltezze);
            this.Controls.Add(this.textBoxAltezze);
            this.Controls.Add(this.buttonGenera);
            this.Controls.Add(this.labelTxtGrp);
            this.Controls.Add(this.labelGrp);
            this.Controls.Add(this.progressBarGrp);
            this.Controls.Add(this.labelTxt1);
            this.Controls.Add(this.labelOverall);
            this.Controls.Add(this.progressBarOverall);
            this.Name = "LoaderForm";
            this.Text = "RCL Generatore";
            this.Load += new System.EventHandler(this.LoaderForm_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.ProgressBar progressBarOverall;
        private System.ComponentModel.BackgroundWorker backgroundWorker1;
        private System.Windows.Forms.Label labelOverall;
        private System.Windows.Forms.Label labelTxt1;
        private System.Windows.Forms.Label labelTxtGrp;
        private System.Windows.Forms.Label labelGrp;
        private System.Windows.Forms.ProgressBar progressBarGrp;
        private System.Windows.Forms.Button buttonGenera;
        private System.Windows.Forms.TextBox textBoxAltezze;
        private System.Windows.Forms.Label labelAltezze;
    }
}