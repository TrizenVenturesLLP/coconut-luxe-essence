
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
            {carouselContent.map((item, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className="p-1">
                  <Card className="border-0">
                    <CardContent className="flex flex-col items-center justify-center p-0">
                      <div className="flex aspect-[4/3] w-full">
                        <img
                          src={item.image}
                          alt={`Carousel image ${index + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-center text-gray-700 mt-6 px-4 max-w-2xl mx-auto">
                        {item.description}
                      </p>
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
