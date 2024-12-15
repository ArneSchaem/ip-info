import Container from "./container";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="bg-neutral-50 border-neutral-200 text-black border-b ">
      <Container>
        <div className="py-2 text-center text-sm">
          Der Code für dieses Projekt ist{" "}
          <Link
            href="https://github.com/ArneSchaem/ip-info"
            className="underline hover:text-success duration-200 transition-colors"
          >
            auf GitHub verfügbar
          </Link>
          .
        </div>
      </Container>
    </div>
  );
}
