import React from "react";

export default function Header() {
  return (
    <header className="w-full py-8 md:py-12">
      <div className="container mx-auto px-4">
        <section className="flex flex-col items-center justify-center space-y-8">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl w-full font-bold tracking-tighter text-center bg-gradient-to-b from-white to-[#C6E8F3] bg-clip-text text-transparent">
            IP INFO
          </h1>
          <div className="max-w-2xl w-full">
            <div
              role="alert"
              className="flex flex-col items-start p-4 gap-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
            >
              <p className="text-sm sm:text-base text-white leading-relaxed">
                No data is stored on this website. Your privacy remains fully
                protected at all times. This website complies with the
                requirements of the General Data Protection Regulation (GDPR).
              </p>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}
