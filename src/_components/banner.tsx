import Container from "./container";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative border-b border-white/[0.06]">
      <Container>
        <div className="py-4 text-center text-sm">
          <div className="text-[#FFFFFF99] text-xs sm:text-sm flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-center">
            <span>The code for this project is</span>
            <Link href="https://github.com/ArneSchaem/ip-info">
              <span className="inline-flex items-center p-1 text-xs font-medium text-[#ACF3A6] bg-[#ACF3A6]/10 rounded-md border border-[#ACF3A6]/20 hover:bg-[#ACF3A6]/20 transition-colors duration-200 ">
                available on GitHub
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
