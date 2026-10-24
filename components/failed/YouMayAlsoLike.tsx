import Image from "next/image";
import { Heart } from "lucide-react";
import { suggestions } from "@/data/failed";
import { usd } from "@/lib/format";

// count: neçə məhsul göstərilsin (5 = tam en, 4 = dar sütun)
export default function YouMayAlsoLike({ count = 5 }: { count?: number }) {
  const items = suggestions.slice(0, count);
  const columns = count === 5 ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" : "grid-cols-2 sm:grid-cols-4";

  return (
    <section className="mt-8">
      <h2 className="font-serif text-xl">You May Also Like</h2>

      <div className={`mt-4 grid gap-4 ${columns}`}>
        {items.map((item) => (
          <div key={item.id}>
            <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-[#f6e6da]">
              <Image src={item.image} alt={item.name} fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover" />
              <button
                aria-label="Add to wishlist"
                className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/80"
              >
                <Heart size={14} />
              </button>
            </div>
            <p className="mt-2 text-xs">{item.name}</p>
            <p className="text-sm font-semibold">{usd(item.price)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
