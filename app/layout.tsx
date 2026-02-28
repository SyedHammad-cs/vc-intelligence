import "./globals.css"
import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>

        <div className="flex h-screen">

          {/* Sidebar */}
          <div className="sidebar w-64 flex flex-col">

            <div className="p-6 border-b border-slate-700">
              <h1 className="text-lg font-semibold">
                VC Intelligence
              </h1>
            </div>

            <nav className="p-4">

              <Link href="/companies">

                <div className="
                  px-4 py-2
                  rounded-md
                  hover:bg-slate-800
                  cursor-pointer
                ">
                  Companies
                </div>

              </Link>

            </nav>

          </div>

          {/* Main */}
          <div className="flex-1 flex flex-col">

            {/* Header */}
            <div className="
              bg-white
              border-b
              border-slate-200
              px-6
              py-4
            ">
              <h2 className="font-semibold">
                Dashboard
              </h2>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto">
              {children}
            </div>

          </div>

        </div>

      </body>
    </html>
  )
}