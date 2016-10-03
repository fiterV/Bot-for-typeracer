using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Net;
using System.Diagnostics;
using System.Threading;

namespace Bot
{
    public partial class Form1 : Form
    {
        public bool b=false;
        public Process pr;
        int i = 0;
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            this.Text = "Bot for play.typeracer.com";
            numericUpDown1.Text = "20";
            button2.Text = "Start";
            label1.Width = 100;
            label1.Height = 50;
            label1.Text = "Save the page to a.txt . \n Press Button - Start. \n Wait 3 seconds and then have fun.";
        }
		
        private String found_tag(String s)
        {
            while (i<s.Length-1 && s[i] != '"' ) i++;

            i++;
            String b="";
            while (i < s.Length - 1 &&  s[i] != '-')
            {
                b = b + s[i];
                i++;
            }
            while (i < s.Length - 1 && s[i] != '>') i++;
            i++;
            return b;
        }

        private String found_first(String s)
        {
            String b;
            i = 0;
            while (i < s.Length - 1)
            {
                b = found_tag(s);
                //i++;
                if (b == "nhwMiddlegwt")
                {
                    break;
                }

            }
            if (i < s.Length - 1)
            {
                b = "";
                //while (i < s.Length - 1 && s[i] != '>') i++;
                //i++;
                while (i < s.Length - 1 && s[i] != '<')
                {
                    b = b + s[i];
                    i++;
                }
                return b;
            }
            return "";
        }

        private void Save_Page()
        {
           while(System.IO.File.Exists("a.txt")) System.IO.File.Delete("a.txt");
            Thread.Sleep(3000);
            SendKeys.SendWait("^s");
            Thread.Sleep(500);
            SendKeys.SendWait("a.txt");
            Thread.Sleep(300);
            SendKeys.SendWait("~");

            while (!System.IO.File.Exists("a.txt")) ;
            Thread.Sleep(200);
            while (!System.IO.File.Exists("a.txt")) ;
            Thread.Sleep(200);
        }


        private void button2_Click(object sender, EventArgs e)
        {
		Save_Page();
            String b;

            String s;// = webBrowser1.DocumentText;
            //webBrowser1.Document.ToString();

            System.IO.StreamReader sr = new System.IO.StreamReader("a.txt");
            s = sr.ReadToEnd();
            //MessageBox.Show(s);
            sr.Close();
            i = 0;
            while (i < s.Length-1)
            {
                b = found_tag(s);
                //i++;
                if (b == "nhwRightgwt")
                {
                    break;
                }

            }
            if (i < s.Length - 1)
            {
                b = "";
                //while (i < s.Length - 1 && s[i] != '>') i++;
                //i++;
                while (i < s.Length - 1 && s[i] != '<')
                {
                    b = b + s[i];
                    i++;
                }
            }
            else b = "NONE";
            Thread.Sleep(3000);
            b = found_first(s)+b;
            for (int p = 0; p < b.Length; p++)
            {
                SendKeys.Send(b[p]+"");
                Thread.Sleep(Convert.ToInt32(numericUpDown1.Text));
            }
                                  
            //SendKeys.Send(b);

        }

    }
}
