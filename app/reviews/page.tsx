const reviews = [
  {
    name: "Ahmed R.",
    review:
      "The best perfume I've ever used. It lasts all day and gets so many compliments.",
  },
  {
    name: "Sarah M.",
    review:
      "Absolutely obsessed with Koky’s Touch. The scent is unique and extremely sophisticated.",
  },
  {
    name: "Mostafa H.",
    review:
      "Premium quality and elegant packaging. Will definitely order again.",
  },
];

export default function Reviews() {
  return (
    <main className="min-h-screen bg-[#eee7dc] px-6 py-32 text-black lg:px-10">

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-[#a47d39]">
            Customer Reviews
          </p>

          <h1 className="mt-4 font-serif text-5xl md:text-6xl">
            Loved by Many
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-black/50">
            See what our customers have to say about Koky’s Touch.
          </p>

        </div>

        {/* REVIEWS */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {reviews.map((item) => (

            <div
              key={item.name}
              className="border border-black/10 bg-white/40 p-8"
            >

              <div className="text-xl tracking-widest text-[#b58a43]">
                ★★★★★
              </div>

              <p className="mt-6 leading-8 text-black/60">
                "{item.review}"
              </p>

              <div className="mt-8 border-t border-black/10 pt-5">
                <p className="font-serif text-xl">
                  {item.name}
                </p>

                <p className="mt-1 text-xs uppercase tracking-widest text-black/40">
                  Verified Customer
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}