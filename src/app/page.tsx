import Container from "@/app/_components/container";
import Banner from "@/app/_components/banner";
import Hero from "@/app/_components/hero";
import Header from "@/app/_components/header";

export default function Index() {
  return (
    <main>
      <Banner />

      <Container>
        <Header />
        <Hero />
      </Container>
    </main>
  );
}
