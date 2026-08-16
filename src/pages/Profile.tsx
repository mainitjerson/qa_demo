import { Check, LogOut, UserRound } from "lucide-react";

export default function Profile({ isLoggedIn, onLogout }: { isLoggedIn: boolean; onLogout: () => void }) {
  if (!isLoggedIn) return null;

  return <div className="mx-auto max-w-4xl px-5 py-12 lg:px-8 lg:py-16"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1f5eff]">Your account</p><h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-950">Profile</h1><div className="mt-10 grid gap-6 sm:grid-cols-[160px_1fr]"><div className="grid h-40 place-items-center rounded-3xl bg-blue-50 text-[#1f5eff]"><UserRound size={58} strokeWidth={1.2} /></div><div className="rounded-3xl border border-slate-200 bg-white p-7"><div className="flex items-center gap-2 text-green-600"><Check size={18} /><span className="text-sm font-bold">Signed in</span></div><h2 className="mt-3 text-2xl font-extrabold text-slate-950">Demo Shopper</h2><p className="mt-1 text-sm text-slate-500">demo@shopeasy.com</p><button onClick={onLogout} className="mt-7 inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-red-200 hover:text-red-600"><LogOut size={16} /> Log out</button></div></div></div>;
}
