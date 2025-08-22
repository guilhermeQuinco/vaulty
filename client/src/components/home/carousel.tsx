import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../ui/carousel";

export default function CarouselHome() {
    return (
        <div className="flex justify-center items-center w-full mt-8">
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 4,
          }}
          className="relative w-full max-w-5xl"
        >
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <Card className="relative aspect-square overflow-hidden">
                    <img
                      src={`https://picsum.photos/seed/${index}/400/300`}
                      alt={`Game ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </Card>
                  <div className="flex items-center justify-center mt-4">
                    <span>👁️ 100k</span>
                    <span>🟦 10k</span>
                    <span>❤️ 23k</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    )
}