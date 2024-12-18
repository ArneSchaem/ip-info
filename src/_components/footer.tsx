import Container from "@/_components/container";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06]">
      <Container>
        <div className="py-4 lg:py-6">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} IP INFO. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
