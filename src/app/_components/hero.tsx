import React from "react";
import Ipv4Card from "@/app/_components/cards/ipv4card";
import Ipv6Card from "@/app/_components/cards/ipv6card";
import UserAgentCard from "@/app/_components/cards/useragentcard";
import BrowserCard from "@/app/_components/cards/browsercard";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mx-auto max-w-6xl">
      <Ipv4Card />
      <Ipv6Card />
      <BrowserCard />
      <UserAgentCard />
    </section>
  );
}
