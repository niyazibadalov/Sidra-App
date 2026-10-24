import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock3, CreditCard, Headphones, MapPin, RefreshCw, ShieldCheck, Truck } from "lucide-react";
import Header from "@/components/delivery/Header";
import Stepper from "@/components/delivery/Stepper";
import Footer from "@/components/Footer";
import SideBlock from "@/components/failed/SideBlock";
import FailedOrderSummary from "@/components/failed/FailedOrderSummary";
import YouMayAlsoLike from "@/components/failed/YouMayAlsoLike";
import { failedAddress, failedCard } from "@/data/failed";

// Başlığın altındakı 3 məlumat bloku
const benefits = [
  { icon: ShieldCheck, title: "No duplicate order", text: "Retrying will not create a duplicate order." },
  { icon: CreditCard, title: "No additional charge", text: "We will not charge you again if the payment is still being confirmed." },
  { icon: RefreshCw, title: "Automatic reconciliation", text: "We will reconcile the payment and order status before creating your order." },
];

export default function OrderFailedPage() {
  return (
    <div className="min-h-screen bg-[#faf6f1] text-neutral-900">
      <Header />

      <main className="mx-auto max-w-310 px-4 py-8 sm:px-6">
        <div className="flex justify-center">
          <Stepper current={4} showChecks={false} />
        </div>

        {/* Xəta paneli (sağda şəkil, yalnız böyük ekranda) */}
        <section className="relative mt-6 overflow-hidden rounded-2xl bg-[#fde9e7] p-5 sm:p-8">
          <div className="absolute inset-y-0 right-0 hidden w-2/5 md:block">
            <Image src="/products/rings-hero.jpg" alt="" fill sizes="40vw" className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-r from-[#fde9e7] via-[#fde9e7]/60 to-transparent" />
          </div>

          <div className="relative">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e5646a] text-2xl font-bold text-white sm:h-14 sm:w-14">
                !
              </span>
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl">We Couldn’t Place Your Order</h1>
                <p className="mt-2 text-sm text-neutral-800 sm:text-base">
                  Something interrupted checkout. Your order has not been created.
                </p>
                <p className="mt-1 max-w-xl text-xs text-neutral-600 sm:text-sm">
                  Your payment may have been authorized and is currently being verified. No duplicate
                  order will be created, and you will not be charged again if the payment is still processing.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 rounded-xl bg-white/70 p-4 md:grid-cols-3 md:divide-x md:divide-neutral-200">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-3 md:px-3 md:first:pl-0">
                  <Icon size={26} className="shrink-0 text-[#c9895d]" />
                  <div className="text-sm">
                    <p className="font-semibold">{title}</p>
                    <p className="text-xs text-neutral-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          {/* Sol: xülasə + tövsiyələr */}
          <div>
            <FailedOrderSummary />
            <YouMayAlsoLike count={4} />
          </div>

          {/* Sağ: ünvan, çatdırılma, ödəniş */}
          <section className="h-fit rounded-2xl border border-neutral-200 bg-[#fffdfa] p-5">
            <SideBlock title="Delivery Address">
              <div className="flex gap-3 text-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f3ece4]">
                  <MapPin size={16} />
                </span>
                <div>
                  <p className="font-medium">{failedAddress.name}</p>
                  {failedAddress.lines.map((line) => (
                    <p key={line} className="text-neutral-600">{line}</p>
                  ))}
                </div>
              </div>
            </SideBlock>

            <SideBlock title="Delivery Method">
              <div className="flex gap-3 text-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f3ece4]">
                  <Truck size={16} />
                </span>
                <div>
                  <p className="font-medium">Standard Shipping</p>
                  <p className="text-neutral-600">5–7 business days</p>
                  <p className="text-neutral-600">Free</p>
                </div>
              </div>
            </SideBlock>

            <SideBlock title="Payment Method">
              <div className="flex gap-3 text-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f3ece4]">
                  <CreditCard size={16} />
                </span>
                <div>
                  <p className="font-medium">Visa ending in {failedCard.last4}</p>
                  <p className="text-xs text-neutral-500">Expires {failedCard.expires}</p>
                </div>
              </div>

              {/* Ödəniş statusu */}
              <div className="mt-3 flex gap-3 rounded-xl bg-[#fdeee2] p-3 text-xs">
                <Clock3 size={18} className="shrink-0 text-[#c9895d]" />
                <div>
                  <p className="font-semibold text-[#9a5a35]">Payment status: verifying</p>
                  <p className="text-neutral-600">
                    Your payment has been authorized and is being confirmed. No final charge has been made yet.
                  </p>
                </div>
              </div>
            </SideBlock>

            <div className="mt-2 space-y-3">
              <button className="flex w-full items-center justify-center gap-2 rounded-full bg-black py-3 text-sm font-medium text-white hover:bg-neutral-800">
                <RefreshCw size={16} /> Try Again
              </button>
              <Link
                href="/checkout/review"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-neutral-800 py-3 text-sm font-medium hover:bg-neutral-100"
              >
                <ArrowLeft size={16} /> Back to Review
              </Link>
              <button className="flex w-full items-center justify-center gap-2 py-2 text-sm">
                <Headphones size={16} /> Contact Support
              </button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
