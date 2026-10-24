import { ReviewSeller } from "@/data/review";

// Bir satıcının hesablaması
export function sellerTotals(seller: ReviewSeller) {
  const subtotal = seller.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const fee = seller.shipping.price;
  const total = subtotal + fee - seller.discount;
  const tax = Math.floor((total * 20) / 120); // KDV 20% qiymətə daxildir
  return { subtotal, fee, discount: seller.discount, tax, total };
}

// Bütün satıcıların ümumi məbləği
export function grandTotal(sellers: ReviewSeller[]) {
  return sellers.reduce((sum, s) => sum + sellerTotals(s).total, 0);
}
