import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../ui/carousel";

export default function CarouselHome() {
    return (
        <div className="flex justify-center items-center w-full mt-8">
        <Carousel
          opts={{
            align: "start",
          }}
          className="relative w-full max-w-5xl"
        >
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
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