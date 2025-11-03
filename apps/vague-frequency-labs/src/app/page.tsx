import About from "./sections/about/about";
import ArtistProfiles from "./sections/artistProfiles/artistProfiles";
import MusicList from "./sections/musicList/MusicList";
import Hero from "./sections/hero/hero";
import { Footer, Header } from "./sections";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <ArtistProfiles />
        <MusicList />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
