import Header from "@/components/delivery/Header";
import Footer from "@/components/Footer";
import ReviewClient from "@/components/review/ReviewClient";

export default function ReviewPage() {
  return (
    <div className="min-h-screen bg-[#faf6f1] text-neutral-900">
      <Header />
      <ReviewClient />
      <Footer />
    </div>
  );
}
