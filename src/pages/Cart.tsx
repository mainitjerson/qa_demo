import type { CartItem } from '../App'
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Cart({
  items,
  onUpdate,
  onRemove,
}: {
  items: CartItem[]
  onUpdate: (id: number, quantity: number) => void
  onRemove: (id: number) => void
}) {
  const [checkedOut, setCheckedOut] = useState(false)
  const total = items.length ? items[0].price * items[0].quantity : 0
  const checkoutTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="mx-auto max-w-5xl px-5 py-12 lg:px-8 lg:py-16">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1f5eff]">Your bag</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-950">
          Shopping cart
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          {items.length
            ? `${items.reduce((sum, item) => sum + item.quantity, 0)} items ready to go`
            : 'Your cart is waiting for something good.'}
        </p>
      </div>
      {!items.length ? (
        <div className="mt-12 rounded-3xl border border-dashed border-slate-300 bg-white py-20 text-center">
          <ShoppingBag className="mx-auto text-slate-300" size={42} strokeWidth={1.2} />
          <h2 className="mt-4 text-xl font-bold text-slate-900">Your cart is empty</h2>
          <p className="mt-2 text-sm text-slate-500">Discover something you’ll love.</p>
          <Link
            to="/shop"
            className="mt-6 inline-flex rounded-xl bg-[#1f5eff] px-5 py-3 text-sm font-bold text-white"
          >
            Start shopping
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_330px]">
          <div className="space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4"
              >
                <div
                  className="grid h-24 w-24 shrink-0 place-items-center rounded-xl"
                  style={{ background: item.color }}
                >
                  <span className="text-3xl">
                    {item.icon === 'sneaker'
                      ? '✦'
                      : item.icon === 'lamp'
                        ? '◒'
                        : item.icon === 'bag'
                          ? '▱'
                          : item.icon === 'headphones'
                            ? '◉'
                            : item.icon === 'sweater'
                              ? '✳'
                              : '◌'}
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                  <div className="flex justify-between gap-3">
                    <div>
                      <h2 className="font-bold text-slate-900">{item.name}</h2>
                      <p className="mt-1 text-xs text-slate-400">{item.category}</p>
                    </div>
                    <p className="font-extrabold text-slate-900">${item.price * item.quantity}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-2 py-1">
                      <button
                        aria-label="Decrease quantity"
                        onClick={() => onUpdate(item.id, item.quantity - 1)}
                      >
                        <Minus size={13} />
                      </button>
                      <span className="w-4 text-center text-xs font-bold">{item.quantity}</span>
                      <button
                        aria-label="Increase quantity"
                        onClick={() => onUpdate(item.id, item.quantity + 1)}
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-slate-400 hover:text-red-500"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <aside className="h-fit rounded-2xl bg-slate-950 p-6 text-white">
            <h2 className="text-lg font-bold">Order summary</h2>
            <div className="mt-6 space-y-3 border-b border-white/10 pb-5 text-sm">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal</span>
                <span className="text-white">${total}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Shipping</span>
                <span className="text-green-400">Free</span>
              </div>
            </div>
            <div className="flex justify-between pt-5 text-lg font-extrabold">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <button
              onClick={() => setCheckedOut(true)}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1f5eff] py-3.5 text-sm font-bold transition hover:bg-blue-500"
            >
              Checkout <ArrowRight size={16} />
            </button>
            {checkedOut && (
              <p className="mt-4 rounded-xl bg-green-500/15 px-3 py-3 text-center text-xs font-semibold text-green-300">
                Order placed for ${checkoutTotal}. Thanks for shopping with us!
              </p>
            )}
            <p className="mt-4 text-center text-[11px] text-slate-500">
              Secure checkout · Easy returns
            </p>
          </aside>
        </div>
      )}
    </div>
  )
}
