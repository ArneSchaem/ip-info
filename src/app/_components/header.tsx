import React from "react";

export default function Header() {
  return (
    <header className="w-full py-8 md:py-12">
      <div className="container mx-auto px-4">
        <section className="flex flex-col items-center justify-center space-y-8">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tighter text-center text-gray-900">
            IP INFO
          </h1>
          <div className="max-w-2xl w-full">
            <div
              role="alert"
              className="flex items-center justify-center bg-blue-50 border border-blue-200 rounded-2xl p-6"
            >
              <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed">
                Auf dieser Website werden keine Daten gespeichert. Ihre
                Privatsphäre bleibt zu jeder Zeit vollständig geschützt. Diese
                Website entspricht den Anforderungen der
                Datenschutz-Grundverordnung (DSGVO).
              </p>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}