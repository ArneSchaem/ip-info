import Container from "./container";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative border-b border-white/[0.06]">
      <Container>
        <div className="py-2 text-center text-sm">
          <span className="text-white">
            The code for this project is{" "}
            <Link
              href="https://github.com/ArneSchaem/ip-info"
              className="text-white/80 hover:text-white underline underline-offset-4 transition-colors duration-200"
            >
              available on GitHub
            </Link>
            .
          </span>
        </div>
      </Container>
    </div>
  );
}
