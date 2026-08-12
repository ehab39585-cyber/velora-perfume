export default function About() {
  return (
    <main className="min-h-screen bg-[#0c0b09] text-white">

      <section className="relative flex min-h-[600px] w-full items-center overflow-hidden">

        {/* FULL WIDTH BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/image10.jpeg')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/45" />

        {/* CONTENT */}
<div className="relative z-10 w-full max-w-7xl px-6 py-24 lg:ml-1 lg:px-10">
          <div className="max-w-3xl">

            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#d6b477]">
              About The Perfume
            </p>

            <h1 className="font-serif text-6xl leading-none md:text-7xl">
              A Scent That
              <br />
              <span className="text-[#d6b477]">
                Feels Like You
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-5 text-white/60">
              Koky’s Touch is an irresistible blend of rich and elegant
              notes designed to create a signature scent that stays
              with you all day.
            </p>

            {/* NOTES */}
            <div className="mt-20 grid max-w-3xl grid-cols-3 border-t border-white/20 pt-">

              <div>
                <p className="text-xs uppercase tracking-widest text-[#d6b477]">
                  Top Notes
                </p>

                <p className="mt-3 font-serif">
                  Bergamot
                </p>

                <p className="font-serif text-white/80">
                  Lemon
                </p>
              </div>

              <div className="border-l border-white/20 pl-6">
                <p className="text-xs uppercase tracking-widest text-[#d6b477]">
                  Heart Notes
                </p>

                <p className="mt-3 font-serif">
                  Rose
                </p>

                <p className="font-serif text-white/80">
                  Jasmine
                </p>
              </div>

              <div className="border-l border-white/20 pl-6">
                <p className="text-xs uppercase tracking-widest text-[#d6b477]">
                  Base Notes
                </p>

                <p className="mt-3 font-serif">
                  Vanilla
                </p>

                <p className="font-serif text-white/80">
                  Amber
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}