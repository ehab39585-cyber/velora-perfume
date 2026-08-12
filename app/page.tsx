const products = [
  {
    name: "Koky’s Touch",
    type: "Eau de Parfum",
    size: "100ml",
    price: "2,100 EGP",
  },
  {
    name: "Koky’s Touch",
    type: "Eau de Parfum",
    size: "50ml",
    price: "1,250 EGP",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0b09] text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

          <div>
            <h1 className="font-serif text-2xl tracking-[0.25em] text-[#d6b477]">
              Koky’s Touch
            </h1>

            <p className="text-center text-[8px] tracking-[0.4em] text-white/60">
              PERFUMES
            </p>
          </div>

          <div className="hidden items-center gap-10 text-sm uppercase tracking-widest md:flex">

            <a href="/" className="transition hover:text-[#d6b477]">
              Home
            </a>

            <a href="/about" className="transition hover:text-[#d6b477]">
              About
            </a>

            <a href="/shop" className="transition hover:text-[#d6b477]">
              Shop
            </a>

            <a href="/reviews" className="transition hover:text-[#d6b477]">
              Reviews
            </a>

            <a href="/contact" className="transition hover:text-[#d6b477]">
              Contact
            </a>

          </div>

          <div className="flex items-center gap-5">
            <button className="text-xl">⌕</button>
            <button className="text-xl">♧</button>
            <button className="text-xl md:hidden">☰</button>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: "url('/image9.jpeg')",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20 lg:px-10">
          <div className="max-w-2xl">

            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#d6b477]">
              Discover Your Essence
            </p>

            <h2 className="font-serif text-6xl leading-none md:text-8xl">
              Koky’s Touch
              <br />
              <span className="text-[#d6b477]"></span>
            </h2>

            <p className="mt-6 font-serif text-2xl italic text-white/80">
              The Scent of Confidence
            </p>

            <p className="mt-6 max-w-lg text-base leading-8 text-white/60">
              A bold and mysterious fragrance crafted for those who
              leave a lasting impression.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col items-start gap-3">

              {/* SHOP NOW */}
              <a
                href="/shop"
                className="inline-flex h-14 w-40 items-center justify-center border border-[#d6b477] text-sm uppercase tracking-widest text-[#d6b477] transition hover:bg-[#d6b477] hover:text-black"
              >
                SHOP NOW
              </a>

              {/* INSTAGRAM */}
              <a
  href="https://www.instagram.com/kokys_touch/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex h-14 w-40 items-center justify-center gap-2 border border-[#d6b477] text-sm uppercase tracking-widest text-[#d6b477] transition hover:bg-[#d6b477] hover:text-black"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-5 w-5"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>

  INSTAGRAM
</a>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}


      {/* FEATURES */}


      {/* PRODUCTS */}


      {/* REVIEWS */}


      {/* CTA */}


      {/* FOOTER */}


    </main>
  );
}