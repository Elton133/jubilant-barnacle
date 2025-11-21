import Image from "next/image";

export function FevTaglineBanner() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="bg-gradient-to-r from-[#600FD7] to-[#050A30] py-8 md:py-12 px-6 md:px-12 -skew-x-12 transform">
        <div className="skew-x-12 transform flex flex-col items-center gap-4">
          <h2 className="text-white text-center text-xl md:text-2xl font-bold leading-tight max-w-4xl mx-auto">
            FEV connects people and businesses with the right vendors to make every event a success.
          </h2>

          {/* Your line image */}
          <Image
            src="/line.png"
            alt="Decorative underline"
            width={180}
            height={30}
          />
        </div>
      </div>
    </div>
  );
}
