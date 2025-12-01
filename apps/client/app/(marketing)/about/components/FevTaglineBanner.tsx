import Image from "next/image";

export default function FevTaglineBanner() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="bg-gradient-to-r from-[#600FD7] to-[#050A30] py-8 md:py-12 px-6 md:px-12">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-white text-center text-xl md:text-4xl font-bold leading-tight max-w-4xl mx-auto">
            FEV connects people and businesses with the right vendors to make every event a{" "}
            <span className="relative inline-block">
              success
              <Image
                src="/line.png"
                alt="Decorative underline"
                width={130}
                height={20}
                className="absolute left-1/2 -translate-x-1/2 -bottom-1"
              />
            </span>
            .
          </h2>
        </div>
      </div>
    </div>
  );
}
