import Image from "next/image";

export default function RotatingHardHat() {
  return (
    <div className="relative h-80 overflow-hidden rounded-2xl bg-brand-orange sm:h-[420px]">
      <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: "1200px" }}>
        <div
          className="relative h-[68%] w-[68%] animate-[spin-y_7s_linear_infinite]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src="/images/hero/hard-hat-3d.jpg"
            alt="Masterpoint safety hard hat"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
