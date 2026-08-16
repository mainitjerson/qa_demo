import { Menu, Search, ShoppingBag, UserRound, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './index.css'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Index from './pages/Index'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import Shop from './pages/Shop'

export type Product = {
  id: number
  name: string
  category: string
  price: number
  icon: string
  color: string
  accent: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Cloud Runner Sneakers',
    category: 'Footwear',
    price: 89,
    icon: 'sneaker',
    color: '#e8f1ff',
    accent: '#3066be',
  },
  {
    id: 2,
    name: 'Lumen Desk Lamp',
    category: 'Home office',
    price: 54,
    icon: 'lamp',
    color: '#fff3dd',
    accent: '#ef9d28',
  },
  {
    id: 3,
    name: 'Everyday Canvas Tote',
    category: 'Accessories',
    price: 32,
    icon: 'bag',
    color: '#e8f5ed',
    accent: '#3d9464',
  },
  {
    id: 4,
    name: 'Soundwave Headphones',
    category: 'Electronics',
    price: 129,
    icon: 'headphones',
    color: '#f0eaff',
    accent: '#7b5bc5',
  },
  {
    id: 5,
    name: 'Weekend Knit Sweater',
    category: 'Clothing',
    price: 68,
    icon: 'sweater',
    color: '#ffebeb',
    accent: '#d95f67',
  },
  {
    id: 6,
    name: 'Orbit Smart Watch',
    category: 'Electronics',
    price: 149,
    icon: 'watch',
    color: '#e6f4f5',
    accent: '#238a91',
  },
]

export type CartItem = Product & { quantity: number }

function Header({ itemCount }: { itemCount: number }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const location = useLocation()
  const searchResults = query
    ? products.filter((product) => product.name.includes(query) || product.category.includes(query))
    : []
  const navItems = [
    ['Home', '/'],
    ['Shop', '/shop'],
    ['Cart', '/cart'],
    ['Contact', '/contact-us'],
  ]

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#1f5eff] text-white shadow-lg shadow-blue-200">
            <ShoppingBag size={19} strokeWidth={2.5} />
          </span>
          <span className="text-xl font-extrabold tracking-tight text-slate-950">
            Shop<span className="text-[#1f5eff]">Easy</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map(([label, href]) => (
            <Link
              key={label}
              to={href}
              className={`text-sm font-semibold transition ${location.pathname === href || (label === 'Home' && location.pathname === '/') ? 'text-[#1f5eff]' : 'text-slate-500 hover:text-slate-950'}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="relative flex items-center gap-2">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen(!searchOpen)}
            className="rounded-full p-2.5 text-slate-500 hover:bg-slate-100"
          >
            <Search size={19} />
          </button>
          <Link
            aria-label="Account"
            to="/profile"
            className="rounded-full p-2.5 text-slate-500 hover:bg-slate-100"
          >
            <UserRound size={19} />
          </Link>
          <Link
            aria-label="Cart"
            to="/cart"
            className="relative rounded-full p-2.5 text-slate-700 hover:bg-slate-100"
          >
            <ShoppingBag size={20} />
            <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-[#1f5eff] px-1 text-[10px] font-bold text-white">
              {itemCount}
            </span>
          </Link>
          <button
            aria-label="Toggle menu"
            className="rounded-full p-2.5 text-slate-700 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          {searchOpen && (
            <div className="absolute right-0 top-14 z-20 w-[min(19rem,calc(100vw-2.5rem))] rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
              <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3">
                <Search size={16} className="text-slate-400" />
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search products..."
                  className="w-full bg-transparent py-3 text-sm outline-none"
                />
              </div>
              <div className="mt-2">
                {!query ? (
                  <p className="px-3 py-3 text-xs text-slate-400">Type a product name to search.</p>
                ) : searchResults.length ? (
                  searchResults.map((product) => (
                    <Link
                      key={product.id}
                      to="/shop"
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm hover:bg-blue-50"
                    >
                      <span className="font-semibold text-slate-700">{product.name}</span>
                      <span className="text-xs font-bold text-[#1f5eff]">${product.price}</span>
                    </Link>
                  ))
                ) : (
                  <p className="px-3 py-3 text-xs text-slate-400">No products found.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      {menuOpen && (
        <nav className="border-t border-slate-100 px-5 py-3 md:hidden">
          {navItems.map(([label, href]) => (
            <Link
              onClick={() => setMenuOpen(false)}
              key={label}
              to={href}
              className="block border-b border-slate-100 py-3 text-sm font-semibold text-slate-600 last:border-0"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-9 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="font-bold text-slate-900">
            Shop<span className="text-[#1f5eff]">Easy</span>
          </p>
          <p className="mt-1">Good finds. Easy living.</p>
        </div>
        <div className="flex items-center gap-5">
          <Link to="/shop" className="hover:text-slate-900">
            Shop
          </Link>
          <Link to="/contact-us" className="hover:text-slate-900">
            Contact
          </Link>
          <span>© 2024 ShopEasy</span>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [cart, setCart] = useState<CartItem[]>([])
  const addToCart = (product: Product) =>
    setCart((current) => {
      return [...current, { ...product, quantity: 1 }]
    })
  const updateQuantity = (id: number, quantity: number) =>
    setCart((current) => current.map((item) => (item.id === id ? { ...item, quantity } : item)))
  const removeFromCart = (id: number) =>
    setCart((current) => current.filter((item) => item.id !== id))
  const itemCount = useMemo(() => cart.reduce((total, item) => total + item.quantity, 0), [cart])

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      <Header itemCount={itemCount} />
      <main className="min-h-[calc(100vh-80px)] bg-[#f8faff]">
        <Routes>
          <Route path="/" element={<Index onAdd={addToCart} />} />
          <Route path="/shop" element={<Shop onAdd={addToCart} />} />
          <Route
            path="/cart"
            element={<Cart items={cart} onUpdate={updateQuantity} onRemove={removeFromCart} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
          <Route
            path="/profile"
            element={
              isLoggedIn ? (
                <Profile isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
