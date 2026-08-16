import { Headphones, LampCeiling, ShoppingBag, Sparkles, Watch, Wind } from "lucide-react";
import type { Product } from "../App";

export default function ProductArt({ product, large = false }: { product: Product; large?: boolean }) {
  const icons = { sneaker: Wind, lamp: LampCeiling, bag: ShoppingBag, headphones: Headphones, sweater: Sparkles, watch: Watch };
  const Icon = icons[product.icon as keyof typeof icons];
  return <div className={`relative grid place-items-center overflow-hidden ${large ? "h-80" : "h-56"}`} style={{ backgroundColor: product.color }}><div className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-white/45" /><div className="absolute -bottom-20 -left-8 h-44 w-44 rounded-full bg-white/35" /><Icon size={large ? 104 : 82} strokeWidth={1.1} style={{ color: product.accent }} /><span className="absolute bottom-4 left-4 rounded-full bg-white/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: product.accent }}>{product.category}</span></div>;
}
