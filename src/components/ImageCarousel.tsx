
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
    <section className="w-full bg-coconut-white py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative w-full"
        >
          <CarouselContent>
            {carouselContent.map((item, index) => (
              <CarouselItem key={index} className="basis-full">
                <Card className="border-0 min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px]">
                  <CardContent className="flex flex-col justify-center items-center h-full gap-4 sm:gap-6 p-4 sm:p-6">
                    <div className="flex items-center justify-center w-full max-h-[50vh]">
                      <img
                        src={item.image}
                        alt={`Carousel image ${index + 1}`}
                        className="object-contain max-h-full max-w-full rounded-lg"
                      />
                    </div>
                    <p className="text-center text-sm sm:text-base text-gray-700 max-w-2xl">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Center Arrows Vertically */}
          <div className="hidden sm:block">
            <CarouselPrevious className="left-2 sm:left-4 top-1/2 -translate-y-1/2 absolute" />
            <CarouselNext className="right-2 sm:right-4 top-1/2 -translate-y-1/2 absolute" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ImageCarousel;
