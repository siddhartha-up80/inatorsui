"use client"

// add Toaster component to rootlayout
// import { Toaster } from "@/components/ui/sonner";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head />
//       <body>
//         <main>{children}</main>
//         <Toaster />
//       </body>
//     </html>
//   );
// }

import React from 'react'
import { toast } from "sonner"
 
import { Button } from "@/components/ui/button"

const Snackbarbasic = () => {
  return (
    <div>
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Toast Basic
      </Button>
    </div>
  );
}

export default Snackbarbasic