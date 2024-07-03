export default function PriceCard({
  backgroundColor,
  src,
  description,
  price,
}) {
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className="opacity-85 mx-auto flex items-center justify-between   border border-gray-20 rounded-2xl shadow-xl xsm:w-full lg:w-[1200px] h-[120px] xsm:px-2 md:p-6"
    >
      <div className="flex items-center gap-4">
        <img src={src} alt="" className="size-10" />
        <p className="xsm:text-[12px] md:text-[17px] ">{description}</p>
      </div>
      <p className="xsm:text-[14px] md:text-[18px] font-bold ">{price}</p>
    </div>
  );
}
