// Using
using System.Runtime.InteropServices;


// Global var
public const int WM_NCLBUTTONDOWN = 0xA1;
public const int HT_CAPTION = 0x2;


// dll Imports
[DllImportAttribute("user32.dll")]
public static extern int SendMessage(IntPtr hWnd, int Msg, int wParam, int lParam);
[DllImportAttribute("user32.dll")]
public static extern bool ReleaseCapture();


// Handle
private void /*Control_name*/_MouseDown(object sender, MouseEventArgs e) {
    ReleaseCapture();
    SendMessage(this.Handle, WM_NCLBUTTONDOWN, HT_CAPTION, 0);
}