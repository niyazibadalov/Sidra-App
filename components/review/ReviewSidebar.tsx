"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, CreditCard, Info, MapPin, Truck } from "lucide-react";
import { ReviewSeller, reviewAddress, reviewPayment } from "@/data/review";
import { grandTotal, sellerTotals } from "@/lib/totals";
import { money } from "@/lib/format";

// Hər satıcı üçün açılıb-bağlanan hesablama qrupu
function SummaryGroup({ seller }: { seller: ReviewSeller }) {
  const [open, setOpen] = useState(true);
  const t = sellerTotals(seller);
  const count = seller.items.length;

  return (
    <div className="mt-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-2 rounded-lg bg-[#fdeee2]/70 px-3 py-2 text-sm"
      >
        <Truck size={16} className="text-[#c9895d]" />
        <span className="font-medium">{seller.name}</span>
        <span className="text-xs text-neutral-500">({count} {count === 1 ? "item" : "items"})</span>
        <span className="ml-auto">{open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</span>
      </button>

      {open && (
        <div className="space-y-1.5 px-3 pt-3 text-sm">
          <div className="flex justify-between"><span>Items Subtotal</span><span>{money(t.subtotal)}</span></div>
          <div className="flex justify-between"><span>Delivery Fee</span><span>{money(t.fee)}</span></div>
          {t.discount > 0 && (
            <div className="flex justify-between text-green-700">
              <span className="underline">Discount</span><span>-{money(t.discount)}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="flex items-center gap-1">Tax (KDV 20%, included) <Info size={12} className="text-neutral-400" /></span>
            <span>{money(t.tax)}</span>
          </div>
          <div className="flex justify-between rounded-lg bg-[#fdeee2]/70 px-3 py-2 font-semibold">
            <span>Total <span className="text-xs font-normal text-neutral-500">(incl. tax)</span></span>
            <span>{money(t.total)}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ReviewSidebar({ sellers }: { sellers: ReviewSeller[] }) {
  return (
    <aside className="space-y-6">
      {/* Ünvan və ödəniş */}
      <section className="rounded-2xl border border-neutral-200 bg-[#fffdfa] p-5">
        <div className="flex items-center justify-between">
          <h3 className="flex items-center gap-2 font-serif text-lg"><MapPin size={18} /> Delivery Address</h3>
          <a href="#" className="text-xs underline">Edit</a>
        </div>
        <div className="mt-3 space-y-0.5 text-sm text-neutral-700">
          <p className="font-medium text-neutral-900">{reviewAddress.name}</p>
          {reviewAddress.lines.map((line) => <p key={line}>{line}</p>)}
          <p>{reviewAddress.phone}</p>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-neutral-200 pt-5">
          <h3 className="flex items-center gap-2 font-serif text-lg"><CreditCard size={18} /> Payment Method</h3>
          <a href="#" className="text-xs underline">Edit</a>
        </div>
        <div className="mt-3 flex items-center gap-3 text-sm">
          {/* Mastercard loqosu (iki dairə) */}
          <span className="relative flex h-8 w-12 items-center justify-center rounded-md border border-neutral-200 bg-white">
            <span className="h-4 w-4 rounded-full bg-red-500" />
            <span className="-ml-1.5 h-4 w-4 rounded-full bg-orange-400/90" />
          </span>
          <div>
            <p className="font-medium">•••• {reviewPayment.last4}</p>
            <p className="text-xs text-neutral-500">Expires {reviewPayment.expires}</p>
          </div>
        </div>
      </section>

      {/* Sifariş xülasəsi */}
      <section className="rounded-2xl border border-neutral-200 bg-[#fffdfa] p-5">
        <h3 className="font-serif text-lg">Order Summary</h3>
        {sellers.map((seller) => (
          <SummaryGroup key={seller.id} seller={seller} />
        ))}
        <div className="mt-4 flex items-baseline justify-between rounded-xl bg-[#fdeee2] px-4 py-3">
          <span className="font-serif">Grand Total <span className="text-xs text-neutral-500">(incl. tax)</span></span>
          <span className="font-serif text-2xl">{money(grandTotal(sellers))}</span>
        </div>
      </section>
    </aside>
  );
}
