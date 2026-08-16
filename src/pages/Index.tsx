import { ArrowRight, Check, Package, ShieldCheck, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { products, type Product } from '../App'
import ProductArt from '../components/ProductArt'

export default function Index({ onAdd }: { onAdd: (product: Product) => void }) {
  return (
    <div>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8 lg:pb-24 lg:pt-20">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-[#1f5eff]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1f5eff]" /> New season, new favorites
          </div>
          <h1 className="max-w-xl text-5xl font-extrabold leading-[1.04] tracking-[-0.055em] text-slate-950 sm:text-6xl">
            Everyday things.
            <br />
            <span className="text-[#1f5eff]">Made easy.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-slate-500">
            A thoughtful collection of useful, beautiful products for the way you live, work, and
            play.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-xl bg-[#1f5eff] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Explore the collection <ArrowRight size={17} />
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 transition hover:border-slate-300"
            >
              Talk to us
            </Link>
          </div>
          <div className="mt-9 flex items-center gap-4 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1.5">
              <Check size={15} className="text-[#1f5eff]" /> Curated picks
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={15} className="text-[#1f5eff]" /> Easy returns
            </span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-blue-100/60 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] bg-[#dfeaff] p-5">
            <div className="rounded-[1.5rem] bg-white/50 p-4">
              <ProductArt product={products[0]} large />
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Featured pick
                  </p>
                  <p className="mt-1 font-extrabold text-slate-900">Cloud Runner Sneakers</p>
                </div>
                <p className="font-extrabold text-[#1f5eff]">$89</p>
              </div>
            </div>
            <div className="absolute bottom-10 left-0 rounded-2xl bg-white p-3 shadow-xl shadow-blue-200/60">
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-green-100 text-green-600">
                  <Truck size={18} />
                </span>
                <span>
                  <strong className="block text-xs text-slate-900">Free delivery</strong>
                  <small className="text-[11px] text-slate-400">On orders over $50</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-6 sm:grid-cols-3 lg:px-8">
          <div className="flex items-center gap-3">
            <Truck className="text-[#1f5eff]" size={21} />
            <div>
              <p className="text-sm font-bold text-slate-900">Fast, free shipping</p>
              <p className="text-xs text-slate-500">On orders over $50</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-[#1f5eff]" size={21} />
            <div>
              <p className="text-sm font-bold text-slate-900">Shop with confidence</p>
              <p className="text-xs text-slate-500">30-day easy returns</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Package className="text-[#1f5eff]" size={21} />
            <div>
              <p className="text-sm font-bold text-slate-900">Packed with care</p>
              <p className="text-xs text-slate-500">Thoughtful, always</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1f5eff]">
              Just for you
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
              Featured favorites
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden items-center gap-1 text-sm font-bold text-[#1f5eff] sm:flex"
          >
            View all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <ProductArt product={product} />
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-slate-900">{product.name}</h3>
                    <p className="mt-1 text-xs text-slate-400">{product.category}</p>
                  </div>
                  <span className="font-extrabold text-slate-900">${product.price}</span>
                </div>
                <button
                  onClick={() => onAdd(product)}
                  className="mt-4 w-full rounded-xl bg-slate-950 py-2.5 text-xs font-bold text-white transition hover:bg-[#1f5eff]"
                >
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
