import React from 'react';
import One from './assests/swipe/1.png';
import Two from './assests/swipe/2.png';
import Three from './assests/swipe/3.png';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const ImageCarousel = () => {
  const carouselContent = [
    {
      image: One,
      description: "No more hiding. No more harsh treatments. Our science-backed, plant-powered formulas target blemishes and fade dark spots—gently, effectively. Clear skin, zero drama. Just confidence."
    },
    {
      image: Two,
      description: "Each Aelqemy formula is crafted with skin-intelligent ingredients—nutrient-rich coconut water, plant extracts, and clinically proven actives—working together to hydrate, brighten, and revive."
    },
    {
      image: Three,
      description: "Our formulations adapt to nourish, balance, and restore. Powered by nature, perfected by science—skincare that meets your skin exactly where it is."
    }
  ];

  return (
    <section className="w-full bg-coconut-white m-0">
      <div className="container max-w-6xl py-4 md:py-6 lg:py-8 mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative w-full h-full"
        >
          <CarouselContent className="h-full">
            {carouselContent.map((item, index) => (
              <CarouselItem key={index} className="basis-full h-full">
                <Card className="border-0 h-full">
                  <CardContent className="flex flex-col justify-center items-center h-full gap-6">
                    <div className="flex items-center justify-center w-full max-h-[60vh]">
                      <img
                        src={item.image}
                        alt={`Carousel image ${index + 1}`}
                        className="object-contain max-h-full max-w-full rounded-lg"
                      />
                    </div>
                    <p className="text-center text-gray-700 px-4 max-w-2xl">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Center Arrows Vertically */}
          <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 absolute" />
          <CarouselNext className="right-2 top-1/2 -translate-y-1/2 absolute" />
        </Carousel>
      </div>
    </section>
  );
};

export default ImageCarousel;
