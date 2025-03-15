
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Sample product data
const products = [
  {
    id: 1,
    name: "Hydrating Face Serum",
    price: "$42.00",
    image: "/placeholder.svg",
    badge: "BEST SELLER",
  },
  {
    id: 2,
    name: "Coconut Cleansing Balm",
    price: "$36.00",
    image: "/placeholder.svg",
    badge: "NEW",
  },
  {
    id: 3,
    name: "Daily Moisture SPF 30",
    price: "$48.00",
    image: "/placeholder.svg",
    badge: "BEST SELLER",
  },
  {
    id: 4,
    name: "Overnight Recovery Mask",
    price: "$52.00",
    image: "/placeholder.svg",
    badge: null,
  },
  {
    id: 5,
    name: "Gentle Exfoliating Toner",
    price: "$32.00",
    image: "/placeholder.svg",
    badge: "NEW",
  },
];

const ProductCarousel = () => {
  return (
    <div className="w-full py-8">
      <h3 className="text-xl md:text-2xl font-medium mb-6">Best Sellers</h3>
      
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Card className="border-none shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    {product.badge && (
                      <Badge 
                        className="absolute top-2 right-2 bg-coconut-accent text-gray-800 hover:bg-coconut-accent/90"
                      >
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h4 className="font-medium text-sm md:text-base">{product.name}</h4>
                    <p className="text-gray-600 mt-1">{product.price}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
