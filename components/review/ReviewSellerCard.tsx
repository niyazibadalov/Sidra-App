import Image from "next/image";
import { BadgeCheck, CalendarDays, ChevronRight, MapPin, RotateCcw, Truck } from "lucide-react";
import { ReviewSeller } from "@/data/review";
import { money } from "@/lib/format";

// Sağ tərəfdəki kiçik məlumat sətri (ikon + başlıq + mətn)
function InfoRow({ icon: Icon, label, children }: { icon: typeof Truck; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#fdeee2] text-[#c9895d]">
        <Icon size={18} />
      </span>
      <div className="flex-1 text-sm">
        <p className="text-xs text-neutral-500">{label}</p>
        {children}
      </div>
    </div>
  );
}

export default function ReviewSellerCard({ seller }: { seller: ReviewSeller }) {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-[#fffdfa] p-4 sm:p-5">
      {/* Satıcı başlığı */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <Image
            src={seller.logo}
            alt={seller.name}
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 rounded-full object-cover"
          />
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="font-serif text-lg">{seller.name}</h2>
              <span className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">
                <BadgeCheck size={12} /> Verified Seller
              </span>
            </div>
            <p className="flex flex-wrap items-center gap-x-3 text-xs text-neutral-500">
              {seller.legalName}
              <span className="flex items-center gap-1">
                <MapPin size={12} /> {seller.city}
              </span>
            </p>
          </div>
        </div>
        <a href="#" className="flex shrink-0 items-center gap-1 text-sm text-neutral-700 hover:underline">
          View Store <ChevronRight size={16} />
        </a>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {/* Məhsullar */}
        <div className="space-y-3">
          {seller.items.map((item) => (
            <div key={item.id} className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-3">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="h-20 w-20 shrink-0 rounded-lg object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-neutral-500">{item.variant}</p>
                <p className="text-xs text-neutral-500">SKU: {item.sku}</p>
                <p className="mt-1 text-sm font-semibold">{money(item.price)}</p>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 text-sm">
                {item.qty}
              </span>
            </div>
          ))}
        </div>

        {/* Çatdırılma və qaytarma */}
        <div className="space-y-4 border-t border-neutral-200 pt-4 md:border-l md:border-t-0 md:pl-5 md:pt-0">
          <InfoRow icon={Truck} label="Shipping Method">
            <div className="flex justify-between gap-2">
              <div>
                <p className="font-semibold">{seller.shipping.name}</p>
                <p className="text-xs text-neutral-500">{seller.shipping.days}</p>
              </div>
              <p className="font-semibold">{money(seller.shipping.price)}</p>
            </div>
          </InfoRow>

          <InfoRow icon={CalendarDays} label="Estimated Delivery">
            <p className="font-semibold">{seller.estimatedDelivery}</p>
          </InfoRow>

          <InfoRow icon={RotateCcw} label="Return / Cancellation Policy">
            <p className="text-xs text-neutral-600">
              Unused product can be returned within {seller.returnDays} days.
            </p>
            <a href="#" className="text-xs font-semibold underline">View Seller Policy</a>
          </InfoRow>
        </div>
      </div>
    </section>
  );
}
