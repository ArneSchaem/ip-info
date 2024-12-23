import React from "react";
import Ipv4Card from "@/_components/cards/ipv4card";
import Ipv6Card from "@/_components/cards/ipv6card";
import UserAgentCard from "@/_components/cards/useragentcard";
import BrowserCard from "@/_components/cards/browsercard";
import LocationCard from "@/_components/cards/locationcard";
import IspCard from "@/_components/cards/ispcard";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
      <Ipv4Card />
      <Ipv6Card />
      <BrowserCard />
      <UserAgentCard />
      <LocationCard />
      <IspCard />
    </section>
  );
}
