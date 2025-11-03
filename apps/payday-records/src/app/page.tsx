import About from "./sections/about/about";
import Contact from "./sections/contact/contact";
import Hero from "./sections/hero/hero";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Contact />
    </main>
  );
}
