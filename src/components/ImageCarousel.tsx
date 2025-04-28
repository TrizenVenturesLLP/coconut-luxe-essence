import React, { useEffect, useState } from 'react';
import One from './assests/swipe/1.png';
import Two from './assests/swipe/2.png';
import Three from './assests/swipe/3.png';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
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

  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);

  // Sync activeIndex when manually swiping
  useEffect(() => {
    if (!api) return;

    const updateIndex = () => {
      const current = api.selectedScrollSnap();
      setActiveIndex(current);
    };

    // Listen to the carousel change
    api.on("select", updateIndex);

    // Set the initial index
    updateIndex();

    // Clean up
    return () => {
      api.off("select", updateIndex);
    };
  }, [api]);

  return (
    <section className="w-full bg-coconut-white py-4">
      <div className="container max-w-6xl mx-auto px-4">
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          className="relative w-full"
        >
          <CarouselContent>
            {carouselContent.map((item, index) => (
              <CarouselItem key={index} className="basis-full">
                <Card className="border-0 min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px]">
                  <CardContent className="flex flex-col items-center gap-6 p-4 sm:p-6">
                    <div className="w-full max-w-xl flex justify-center">
                      <img
                        src={item.image}
                        alt={`Carousel image ${index + 1}`}
                        className="object-contain w-full h-auto rounded-lg"
                      />
                    </div>
                    <p className="text-center text-sm sm:text-base text-gray-700 leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {carouselContent.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (api) {
                  api.scrollTo(index);
                }
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
