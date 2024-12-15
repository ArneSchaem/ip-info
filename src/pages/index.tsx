import Footer from "@/_components/footer";
import Container from "@/_components/container";
import Header from "@/_components/header";
import Hero from "@/_components/hero";
import Banner from "@/_components/banner";

export default function Home() {
  return (
    <main>
      <Banner />
      <Container>
        <Header />
        <Hero />
      </Container>
      <Footer />
    </main>
  );
}
