export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0c0b09] px-6 py-32 text-white lg:px-10">

      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-[#d6b477]">
            Get In Touch
          </p>

          <h1 className="mt-4 font-serif text-5xl md:text-6xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-white/50">
            Have a question about our fragrances?
            We would love to hear from you.
          </p>

        </div>

        {/* CONTENT */}
        <div className="mt-16 grid gap-12 md:grid-cols-2">

          {/* CONTACT INFO */}
          <div className="flex flex-col justify-center">

            <h2 className="font-serif text-4xl">
              Let’s Talk
            </h2>

            <p className="mt-6 max-w-md leading-8 text-white/50">
              Whether you have a question about our fragrances,
              your order, or anything else, our team is here to help.
            </p>

            <div className="mt-10 space-y-6">

              <div>
                <p className="text-xs uppercase tracking-widest text-[#d6b477]">
                  Email
                </p>

                <p className="mt-2 text-white/70">
                  hello@kokystouch.com
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-[#d6b477]">
                  Phone
                </p>

                <p className="mt-2 text-white/70">
                  +20 100 000 0000
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-[#d6b477]">
                  Location
                </p>

                <p className="mt-2 text-white/70">
                  Cairo, Egypt
                </p>
              </div>

            </div>

          </div>

          {/* FORM */}
          <div className="border border-white/10 bg-[#11100e] p-8">

            <div className="space-y-6">

              <div>
                <label className="text-sm text-white/60">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="mt-2 w-full border border-white/10 bg-black/30 px-4 py-3 outline-none transition focus:border-[#d6b477]"
                />
              </div>

              <div>
                <label className="text-sm text-white/60">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Your Email"
                  className="mt-2 w-full border border-white/10 bg-black/30 px-4 py-3 outline-none transition focus:border-[#d6b477]"
                />
              </div>

              <div>
                <label className="text-sm text-white/60">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="mt-2 w-full resize-none border border-white/10 bg-black/30 px-4 py-3 outline-none transition focus:border-[#d6b477]"
                />
              </div>

              <button className="w-full bg-[#d6b477] py-4 text-sm font-semibold uppercase tracking-widest text-black transition hover:bg-[#ead19d]">
                Send Message
              </button>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}