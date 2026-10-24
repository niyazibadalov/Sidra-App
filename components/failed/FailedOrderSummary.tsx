import Image from "next/image";
import { failedItems } from "@/data/failed";
import { usd } from "@/lib/format";

export default function FailedOrderSummary() {
  const subtotal = failedItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <section className="rounded-2xl border border-neutral-200 bg-[#fffdfa] p-5">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-lg">
          Order Summary <span className="font-sans text-xs text-neutral-500">({failedItems.length} items)</span>
        </h2>
        <a href="#" className="text-sm underline">View Cart</a>
      </div>

      <ul className="mt-4 divide-y divide-neutral-200">
        {failedItems.map((item) => (
          <li key={item.id} className="flex items-center gap-3 py-3">
            <Image
              src={item.image}
              alt={item.name}
              width={56}
              height={56}
              className="h-14 w-14 shrink-0 rounded-lg object-cover"
            />
            <div className="flex-1 text-sm">
              <p className="font-medium">{item.name}</p>
              <p className="text-xs text-neutral-500">{item.variant}</p>
              <p className="text-xs text-neutral-500">Seller: {item.seller}</p>
            </div>
            <div className="text-right text-sm">
              <p className="font-semibold">{usd(item.price)}</p>
              <p className="text-xs text-neutral-500">Qty: {item.qty}</p>
            </div>
          </li>
        ))}
      </ul>

      <dl className="space-y-1.5 border-t border-neutral-200 pt-4 text-sm">
        <div className="flex justify-between"><dt>Subtotal</dt><dd>{usd(subtotal)}</dd></div>
        <div className="flex justify-between"><dt>Shipping</dt><dd>Free</dd></div>
        <div className="flex justify-between"><dt>Tax (Included)</dt><dd>{usd(0)}</dd></div>
      </dl>

      <div className="mt-3 flex items-baseline justify-between border-t border-neutral-200 pt-3">
        <span className="font-serif text-lg">Total</span>
        <span className="font-serif text-2xl">{usd(subtotal)}</span>
      </div>
    </section>
  );
}
