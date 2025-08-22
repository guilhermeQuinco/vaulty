import CarouselHome from "@/components/home/carousel";
import { Header } from "@/components/home/header";
import InfiniteScrollGames from "@/components/home/infinite-scroll-games";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <CarouselHome />
        <InfiniteScrollGames />
      </main>
    </div>
  );
}
