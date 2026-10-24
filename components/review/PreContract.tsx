import { Building2, Headphones, Package, Receipt, RotateCcw } from "lucide-react";

const tiles = [
  { icon: Package, title: "Product Characteristics", text: "Product details, materials, size, care instructions" },
  { icon: Building2, title: "Seller & Platform Identity", text: "Seller company information and platform details" },
  { icon: Receipt, title: "Total Price & Delivery Charges", text: "Final price, tax (KDV) and shipping fees" },
  { icon: RotateCcw, title: "Cancellation & Withdrawal Terms", text: "Your right of withdrawal and seller-specific return policies" },
  { icon: Headphones, title: "Complaints & Support", text: "How to contact us in case of any issues" },
];

export default function PreContract() {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-[#fffdfa] p-5">
      <h3 className="font-serif text-xl">Pre-Contract Information</h3>
      <p className="text-sm text-neutral-600">Please review the following information before completing your purchase.</p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {tiles.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex gap-3 rounded-xl bg-[#fdf3ea] p-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#fdeee2] text-[#c9895d]">
              <Icon size={18} />
            </span>
            <div className="text-xs">
              <p className="font-semibold">{title}</p>
              <p className="mt-0.5 text-neutral-600">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
