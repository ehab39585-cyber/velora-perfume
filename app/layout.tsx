import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koky’s Touch | Perfumes",
  description: "Koky’s Touch - A Touch of Beauty, A Touch of Luxury.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0c0b09] text-white">

        {/* NAVBAR */}
        <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

            {/* LOGO */}
            <a href="/" className="block">
              <h1 className="font-serif text-2xl tracking-[0.25em] text-[#d6b477]">
                Koky’s Touch
              </h1>

              <p className="text-center text-[8px] tracking-[0.4em] text-white/60">
                PERFUMES
              </p>
            </a>

            {/* MENU */}
            <div className="hidden items-center gap-10 text-sm uppercase tracking-widest md:flex">

              <a
                href="/"
                className="transition hover:text-[#d6b477]"
              >
                Home
              </a>

              <a
                href="/about"
                className="transition hover:text-[#d6b477]"
              >
                About
              </a>

              <a
                href="/shop"
                className="transition hover:text-[#d6b477]"
              >
                Shop
              </a>

              <a
                href="/reviews"
                className="transition hover:text-[#d6b477]"
              >
                Reviews
              </a>

              <a
                href="/contact"
                className="transition hover:text-[#d6b477]"
              >
                Contact
              </a>

            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-5">
              <button className="text-xl">
                ⌕
              </button>

              <button className="text-xl">
                ♧
              </button>

              <button className="text-xl md:hidden">
                ☰
              </button>
            </div>

          </div>
        </nav>

        {/* PAGE */}
        <div className="flex-1">
          {children}
        </div>

        {/* FOOTER */}
        <footer className="border-t border-white/10 bg-[#0c0b09] px-6 py-12 text-white">

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-10 md:grid-cols-4">

              {/* BRAND */}
              <div>
                <h2 className="font-serif text-2xl tracking-[0.2em] text-[#d6b477]">
                  Koky’s Touch
                </h2>

                <p className="mt-4 max-w-xs text-sm leading-6 text-white/50">
                  Timeless fragrances crafted with elegance,
                  quality, and individuality.
                </p>
              </div>

              {/* QUICK LINKS */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[#d6b477]">
                  Quick Links
                </h3>

                <div className="mt-5 space-y-3 text-sm text-white/50">

                  <a
                    href="/"
                    className="block transition hover:text-[#d6b477]"
                  >
                    Home
                  </a>

                  <a
                    href="/about"
                    className="block transition hover:text-[#d6b477]"
                  >
                    About Us
                  </a>

                  <a
                    href="/shop"
                    className="block transition hover:text-[#d6b477]"
                  >
                    Shop
                  </a>

                  <a
                    href="/contact"
                    className="block transition hover:text-[#d6b477]"
                  >
                    Contact
                  </a>

                </div>
              </div>

              {/* CUSTOMER SERVICE */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[#d6b477]">
                  Customer Service
                </h3>

                <div className="mt-5 space-y-3 text-sm text-white/50">
                  <p>Shipping Policy</p>
                  <p>Returns & Exchanges</p>
                  <p>FAQ</p>
                  <p>Privacy Policy</p>
                </div>
              </div>

              {/* CONTACT */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[#d6b477]">
                  Contact Us
                </h3>

                <div className="mt-5 space-y-3 text-sm text-white/50">

                  <p>karimahossam24@gmail.com</p>

                  <p>Koky Hossam</p>

                  <p>Cairo, Egypt</p>

                </div>
              </div>

            </div>

            {/* COPYRIGHT */}
            <div className="mt-10 border-t border-white/10 pt-6 text-center">
              <p className="text-xs text-white/40">
                © 2026 Koky’s Touch. All rights reserved.
              </p>
            </div>

          </div>

        </footer>

      </body>
    </html>
  );
}