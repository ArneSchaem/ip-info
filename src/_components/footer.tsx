import Container from "@/_components/container";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <footer className="mt-8 pt-6 pb-4 relative border-t border-[#252525] bg-[#121212]">
        <p className="text-center text-sm text-neutral-500">
          © {currentYear} IP INFO. All rights reserved.
        </p>
      </footer>
    </Container>
  );
}
