export default function RotatingHardHat() {
  return (
    <div className="relative h-80 overflow-hidden rounded-2xl bg-brand-dark sm:h-[420px]">
      <video autoPlay loop muted playsInline className="h-full w-full object-cover">
        <source src="/videos/hard-hat-3d-spin.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
