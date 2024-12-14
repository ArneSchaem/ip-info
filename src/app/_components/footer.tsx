import Container from "@/app/_components/container";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-100">
      <Container>
        <div className="py-8 lg:py-12">
          <div className="mt-8 pt-8 border-t border-neutral-200">
            <p className="text-center text-sm text-gray-900">
              © {currentYear} IP INFO. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
