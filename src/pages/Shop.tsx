import { products, type Product } from '../App'
import ProductArt from '../components/ProductArt'

export default function Shop({ onAdd }: { onAdd: (product: Product) => void }) {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1f5eff]">
            The collection
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-950">
            Find your next favorite
          </h1>
          <p className="mt-3 text-sm text-slate-500">Useful things, considered carefully.</p>
        </div>
        {/* <button className="flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-600">
          <SlidersHorizontal size={16} /> Filter{' '}
          <span className="rounded bg-slate-100 px-1.5 text-xs">All</span>
        </button> */}
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <article
            key={product.id}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            <ProductArt product={product} />
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="font-bold text-slate-900">{product.name}</h2>
                  <p className="mt-1 text-xs text-slate-400">{product.category}</p>
                </div>
                <p className="font-extrabold text-slate-900">${product.price}</p>
              </div>
              <button
                onClick={() => onAdd(product)}
                className="mt-5 w-full rounded-xl bg-slate-950 py-3 text-xs font-bold text-white transition hover:bg-[#1f5eff]"
              >
                Add to cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
