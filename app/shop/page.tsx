const products = [
  {
    name: "Koky’s Touch",
    size: "100ml",
    price: "2,100 EGP",
  },
  {
    name: "Koky’s Touch",
    size: "50ml",
    price: "1,250 EGP",
  },
];

export default function Shop() {
  return (
    <main className="min-h-screen bg-[#0c0b09] px-6 py-32 text-white lg:px-10">

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-[#d6b477]">
            The Collection
          </p>

          <h1 className="mt-4 font-serif text-5xl md:text-6xl">
            Find Your Signature
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-white/50">
            Discover the perfect fragrance for every moment.
          </p>

        </div>

        {/* PRODUCTS */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {products.map((product) => (

            <div
              key={product.size}
              className="group border border-white/10 bg-[#11100e] p-8 transition hover:border-[#d6b477]/40"
            >

              <div className="flex h-[500px] items-center justify-center overflow-hidden">

                <img
                  src="/image10.jpeg"
                  alt={product.name}
                  className="h-full w-auto object-contain transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="mt-8 text-center">

                <h2 className="font-serif text-3xl">
                  {product.name}
                </h2>

                <p className="mt-2 text-sm text-white/50">
                  Eau de Parfum • {product.size}
                </p>

                <p className="mt-5 text-xl text-[#d6b477]">
                  {product.price}
                </p>

                {/* BUTTONS */}
                <div className="mt-6 flex flex-col items-center gap-3">

                  {/* ADD TO CART */}
                  <button
                    type="button"
                    className="inline-flex h-12 w-40 items-center justify-center border border-[#d6b477] text-sm uppercase tracking-widest text-[#d6b477] transition hover:bg-[#d6b477] hover:text-black"
                  >
                    Add To Cart
                  </button>

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

          ))}

        </div>

      </div>

    </main>
  );
}