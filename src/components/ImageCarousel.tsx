
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
    <section className="w-full pt-0 pb-2 bg-coconut-white">
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
              <CarouselItem key={index} className="basis-full h-screen">
              <div className="h-full">
                <Card className="border-0 h-full">
                  <CardContent className="flex flex-col justify-center items-center p-4 h-full">
                    {/* Image Area */}
                    <div className="w-full flex-1 flex items-center justify-center overflow-hidden">
                      <img
                        src={item.image}
                        alt={`Carousel image ${index + 1}`}
                        className="max-h-full max-w-full object-contain rounded-lg" // Added rounded-lg
                      />
                    </div>
            
                    {/* Description Area */}
                    <p className="text-center text-gray-700 px-4 max-w-2xl">
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

