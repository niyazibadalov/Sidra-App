type Props = {
  title: string;
  action?: string; // sağdakı link: "Change"
  children: React.ReactNode;
};

// Başlıq + "Change" linki + məzmun (Payment Method, Delivery Address və s. üçün)
export default function SideBlock({ title, action = "Change", children }: Props) {
  return (
    <div className="border-b border-neutral-200 py-5 first:pt-0 last:border-0">
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-lg">{title}</h3>
        <a href="#" className="text-sm underline">{action}</a>
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}
