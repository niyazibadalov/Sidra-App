import { CircleX, CreditCard, Headphones, Info, MapPin, RefreshCw } from "lucide-react";
import Header from "@/components/delivery/Header";
import Stepper from "@/components/delivery/Stepper";
import Footer from "@/components/Footer";
import VisaBadge from "@/components/failed/VisaBadge";
import SideBlock from "@/components/failed/SideBlock";
import FailedOrderSummary from "@/components/failed/FailedOrderSummary";
import YouMayAlsoLike from "@/components/failed/YouMayAlsoLike";
import { failedAddress, failedCard } from "@/data/failed";

export default function PaymentFailedPage() {
  return (
    <div className="min-h-screen bg-[#faf6f1] text-neutral-900">
      <Header />

      <main className="mx-auto max-w-310 px-4 py-8 sm:px-6">
        <div className="flex justify-center">
          <Stepper current={3} showChecks={false} />
        </div>

        {/* Xəta paneli */}
        <section className="mt-6 rounded-2xl bg-[#fde9e7] p-5 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e5646a] text-2xl font-bold text-white sm:h-14 sm:w-14">
              !
            </span>
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl">Payment Couldn’t Be Completed</h1>
              <p className="mt-2 max-w-lg text-sm text-neutral-700 sm:text-base">
                We were unable to process your payment. Your card was declined by the bank. Please try
                again or use a different payment method.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1fr] lg:items-center">
            {/* Kart məlumatı */}
            <div className="flex items-center gap-4 rounded-xl bg-[#fbdedb] p-4">
              <VisaBadge />
              <div className="text-sm">
                <p className="font-medium">Visa ending in {failedCard.last4}</p>
                <p className="text-xs text-neutral-500">Expires {failedCard.expires}</p>
                <p className="flex items-center gap-1 font-medium text-red-600">
                  Declined by your bank <Info size={14} />
                </p>
              </div>
            </div>

            {/* Nə baş verdi */}
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><CircleX size={16} className="shrink-0 text-red-500" /> Your order <b>has not</b> been placed</li>
              <li className="flex items-center gap-2"><CircleX size={16} className="shrink-0 text-red-500" /> No amount has been charged</li>
              <li className="flex items-center gap-2"><CircleX size={16} className="shrink-0 text-red-500" /> You can <b>try again</b> or choose another payment method</li>
            </ul>
          </div>
        </section>

        {/* Sifariş xülasəsi + sağ panel */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <FailedOrderSummary />

          <section className="h-fit rounded-2xl border border-neutral-200 bg-[#fffdfa] p-5">
            <SideBlock title="Payment Method">
              <div className="flex items-center gap-3 text-sm">
                <VisaBadge />
                <div>
                  <p className="font-medium">Visa ending in {failedCard.last4}</p>
                  <p className="text-xs text-neutral-500">Expires {failedCard.expires}</p>
                </div>
              </div>
            </SideBlock>

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

            <div className="mt-2 space-y-3">
              <button className="flex w-full items-center justify-center gap-2 rounded-full bg-black py-3 text-sm font-medium text-white hover:bg-neutral-800">
                <RefreshCw size={16} /> Retry Payment
              </button>
              <button className="flex w-full items-center justify-center gap-2 rounded-full border border-neutral-800 py-3 text-sm font-medium hover:bg-neutral-100">
                <CreditCard size={16} /> Choose Another Payment Method
              </button>
              <button className="flex w-full items-center justify-center gap-2 py-2 text-sm">
                <Headphones size={16} /> Contact Support
              </button>
            </div>
          </section>
        </div>

        <YouMayAlsoLike count={5} />
      </main>

      <Footer />
    </div>
  );
}
