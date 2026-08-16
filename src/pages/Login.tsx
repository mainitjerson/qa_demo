import { useState } from "react";
import { LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }: { onLogin: () => void }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const submitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email === "demo@shopeasy.com" && password === "shopeasy123") {
      onLogin();
      navigate("/profile");
    } else {
      setLoginError("Those credentials do not match the demo account.");
    }
  };

  return <div className="mx-auto max-w-4xl px-5 py-12 lg:px-8 lg:py-16"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1f5eff]">Welcome back</p><h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-950">Sign in</h1><div className="mt-10 max-w-md rounded-3xl border border-slate-200 bg-white p-7"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-[#1f5eff]"><LogIn size={22} /></div><h2 className="mt-5 text-2xl font-extrabold text-slate-950">Sign in to ShopEasy</h2><p className="mt-2 text-sm leading-6 text-slate-500">Use the demo account to view your profile.</p><form onSubmit={submitLogin} className="mt-6"><label className="text-sm font-bold text-slate-700">Email<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="demo@shopeasy.com" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-normal outline-none focus:border-[#1f5eff] focus:bg-white" /></label><label className="mt-4 block text-sm font-bold text-slate-700">Password<input required type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="shopeasy123" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-normal outline-none focus:border-[#1f5eff] focus:bg-white" /></label><p className="mt-4 rounded-xl bg-blue-50 p-3 text-xs leading-5 text-blue-700">Demo email: demo@shopeasy.com<br />Demo password: shopeasy123</p>{loginError && <p className="mt-3 text-xs font-semibold text-red-500">{loginError}</p>}<button className="mt-5 w-full rounded-xl bg-[#1f5eff] py-3.5 text-sm font-bold text-white transition hover:bg-blue-700">Sign in</button></form></div></div>;
}
