import { Toaster } from "react-hot-toast";
import "../globals.css";
export default function signUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        
        {children}
      </body>
    </html>
  );
}
