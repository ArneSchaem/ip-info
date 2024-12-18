import Footer from "@/_components/footer";
import Container from "@/_components/container";
import Header from "@/_components/header";
import Hero from "@/_components/hero";

export default function Home() {
  return (
    <main>
      <Container>
        <Header />
        <Hero />
      </Container>
      <Footer />
    </main>
  );
}
