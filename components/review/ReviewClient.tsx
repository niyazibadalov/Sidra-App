"use client";

import { useState } from "react";
import { Truck } from "lucide-react";
import { reviewSellers } from "@/data/review";
import { grandTotal } from "@/lib/totals";
import { money } from "@/lib/format";
import Stepper from "../delivery/Stepper";
import ReviewSellerCard from "./ReviewSellerCard";
import ReviewSidebar from "./ReviewSidebar";
import PreContract from "./PreContract";

export default function ReviewClient() {
  // şərtləri qəbul edibmi? (düymə buna görə aktiv olur)
  const [accepted, setAccepted] = useState(false);

  return (
    <main className="mx-auto max-w-310 px-6 py-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="font-serif text-4xl">Review Your Order</h1>
          <p className="mt-2 max-w-md text-sm text-neutral-600">
            Please review your order details before completing your payment.
          </p>
        </div>
        <Stepper current={4} showChecks={false} />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          {/* Məlumat banneri */}
          <div className="flex items-start gap-4 rounded-2xl bg-[#fdeee2] p-4">
            <Truck className="mt-1 text-[#c9895d]" />
            <div className="text-sm">
              <p className="font-semibold">Your order contains items from {reviewSellers.length} different sellers.</p>
              <p className="text-neutral-600">
                Items will be shipped separately and you will receive separate invoices for each seller.
              </p>
            </div>
          </div>

          {reviewSellers.map((seller) => (
            <ReviewSellerCard key={seller.id} seller={seller} />
          ))}
        </div>

        <ReviewSidebar sellers={reviewSellers} />
      </div>

      <div className="mt-6 space-y-5">
        <PreContract />

        {/* Razılıq və ödəniş düyməsi */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <label className="flex cursor-pointer items-start gap-3 text-xs text-neutral-700">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-black"
            />
            <span>
              I have read and accept the pre-contract information, seller policies,{" "}
              <a href="#" className="underline">Terms &amp; Conditions</a> and{" "}
              <a href="#" className="underline">Privacy Policy</a>. I understand that my order contains
              items from different sellers and they may be shipped separately with separate invoices and
              return processes.
            </span>
          </label>

          <button
            disabled={!accepted}
            className="w-full shrink-0 rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-300 lg:w-auto"
          >
            Order &amp; Pay {money(grandTotal(reviewSellers))} →
          </button>
        </div>
      </div>
    </main>
  );
}
