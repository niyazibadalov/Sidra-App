import Link from "next/link";

// Hər addımın adı və getdiyi səhifə
const steps = [
  { label: "Cart", href: "#" }, // Cart səhifəsi hələ yoxdur
  { label: "Delivery", href: "/checkout/delivery" },
  { label: "Payment", href: "/checkout/payment-failed" }, // müvəqqəti: Payment səhifəsi yazılmayıb
  { label: "Review", href: "/checkout/review" },
];

type Props = {
  current?: number;
  showChecks?: boolean; // false olarsa, keçilmiş addımlarda ✓ yox, rəqəm görünür
};

export default function Stepper({ current = 2, showChecks = true }: Props) {
  return (
    <ol className="flex items-center gap-2">
      {steps.map((step, i) => {
        const number = i + 1;
        const isActive = number === current;
        const isDone = number < current;

        // dairənin rəngi
        let circleStyle = "border-neutral-300 bg-white text-neutral-500";
        if (isActive) circleStyle = "border-black bg-black text-white";
        if (isDone) circleStyle = "border-neutral-400 bg-white text-neutral-600";

        return (
          <li key={step.label} className="flex items-center gap-2">
            <Link href={step.href} className="flex flex-col items-center gap-1 hover:opacity-70">
              <span className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm ${circleStyle}`}>
                {isDone && showChecks ? "✓" : number}
              </span>
              <span className={`text-xs ${isActive ? "font-semibold" : "text-neutral-600"}`}>{step.label}</span>
            </Link>
            {number < steps.length && <span className="mb-5 h-px w-8 bg-neutral-300 sm:w-12" />}
          </li>
        );
      })}
    </ol>
  );
}