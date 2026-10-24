import { ChevronRight } from "lucide-react";

const columns = [
  { title: "Shop", links: ["Rings", "Necklaces", "Earrings", "Bracelets"] },
  { title: "Customer Care", links: ["Help Center", "Shipping", "Returns", "Contact Us"] },
  { title: "About", links: ["Our Story", "Sustainability", "Careers", "Press"] },
];

const socials = ["IG", "X", "FB", "YT", "IN"];

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-neutral-200 bg-[#fbf8f4]">
      <div className="mx-auto grid max-w-310 gap-8 px-6 py-8 md:grid-cols-[1fr_2fr_1.2fr_auto]">
        <div>
          <div className="font-serif text-2xl tracking-[0.2em]">SIDRA</div>
          <p className="mt-1 text-[10px] tracking-widest text-neutral-500">FINE JEWELLERY MARKETPLACE</p>
        </div>

        <div className="grid grid-cols-3 gap-4 text-xs">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-2 font-semibold">{col.title}</p>
              <ul className="space-y-1 text-neutral-600">
                {col.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold">Join our newsletter</p>
          <div className="flex items-center rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-500">
            <span className="flex-1">Enter your email</span>
            <ChevronRight size={14} />
          </div>
        </div>

        <div className="flex items-start gap-2">
          {socials.map((s) => (
            <span key={s} className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 text-[10px] font-semibold">
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-310 flex-col gap-2 px-6 pb-6 text-xs text-neutral-500 sm:flex-row sm:justify-between">
        <span>© 2026 Sidra. All rights reserved.</span>
        <span className="flex gap-4">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Cookies</span>
        </span>
      </div>
    </footer>
  );
}
