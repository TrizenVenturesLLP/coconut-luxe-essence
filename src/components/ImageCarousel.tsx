
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const ImageCarousel = () => {
  const images = [
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800'
  ];

  return (
    <section className="w-full py-10 bg-coconut-white">
      <div className="container max-w-6xl mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                <div className="p-1">
                  <Card className="border-0">
                    <CardContent className="flex aspect-[16/9] items-center justify-center p-0">
                      <img
                        src={image}
                        alt={`Carousel image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </section>
  );
};

export default ImageCarousel;
