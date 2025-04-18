import React from 'react';
import { Lightbulb, ShoppingBag, Droplet, TestTube, Cloud } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const CategoryItem = ({ icon: Icon, label, className = '' }: { 
  icon: React.ElementType, 
  label: string,
  className?: string 
}) => (
  <div className={`flex flex-col items-center space-y-3 ${className}`}>
    <div className="w-24 h-24 rounded-full bg-coconut-beige flex items-center justify-center transition-all hover:scale-105">
      <Icon className="w-10 h-10 text-gray-800" strokeWidth={1.5} />
    </div>
    <span className="text-xs font-medium tracking-wide text-center font-sans">{label}</span>
  </div>
);

const ProductItem = ({ 
  image, 
  title, 
  badge 
}: { 
  image: string, 
  title: string, 
  badge?: 'NEW' | 'BEST SELLER' 
}) => (
  <div className="flex flex-col">
    <Card className="relative overflow-hidden border-0 shadow-sm group">
      {badge && (
        <div className="absolute top-3 right-3 z-10">
          <Badge variant="outline" className={`px-3 py-1 rounded-full text-xs font-medium font-sans ${
            badge === 'NEW' ? 'bg-coconut-beige' : 'bg-coconut-accent'
          }`}>
            {badge}
          </Badge>
        </div>
      )}
      <CardContent className="p-0 overflow-hidden">
        <div className="h-80 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105 rounded-lg"
          />
        </div>
      </CardContent>
    </Card>
    <h3 className="mt-3 text-sm font-medium text-center font-sans">{title}</h3>
  </div>
);

const ShopByCategory = () => {
  const categories = [
    { icon: Lightbulb, label: 'BEST SELLERS' },
    { icon: ShoppingBag, label: 'NEW' },
    { icon: Droplet, label: 'CLEANSERS + TONERS' },
    { icon: TestTube, label: 'SERUMS' },
    { icon: Cloud, label: 'MOISTURIZERS' },
    { icon: ShoppingBag, label: 'ALL' }
  ];

  const products = [
    {
      image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?q=80&w=1887&auto=format&fit=crop',
      title: 'Peptide Cream',
      badge: 'BEST SELLER' as const
    },
    {
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop',
      title: 'Rosewater Facial Mist',
      badge: 'BEST SELLER' as const
    },
    {
      image: 'https://images.unsplash.com/photo-1601612628452-9e99ced43524?q=80&w=1887&auto=format&fit=crop',
      title: 'Hydrating Serum',
      badge: 'BEST SELLER' as const
    },
    {
      image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1887&auto=format&fit=crop',
      title: 'Overnight Repair Mask',
      badge: 'NEW' as const
    },
    {
      image: 'https://images.unsplash.com/photo-1607602132700-068258431c8c?q=80&w=1887&auto=format&fit=crop',
      title: 'Revitalizing Eye Cream',
      badge: 'BEST SELLER' as const
    }
  ];

  return (
    <section className="w-full py-16 bg-coconut-cream">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display mb-2">shop by category</h2>
          <a href="#" className="text-sm text-gray-700 border-b border-gray-400 hover:border-gray-800 transition-colors font-sans">
            shop all
          </a>
        </div>

        <div className="mb-16 overflow-x-auto hide-scrollbar">
          <div className="flex space-x-8 md:space-x-12 min-w-max md:min-w-0 justify-center md:justify-between">
            {categories.map((category, index) => (
              <CategoryItem key={index} icon={category.icon} label={category.label} />
            ))}
          </div>
        </div>

        <Carousel className="mx-auto">
          <CarouselContent className="-ml-4">
            {products.map((product, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <ProductItem 
                  image={product.image} 
                  title={product.title} 
                  badge={product.badge} 
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 md:-left-12" />
          <CarouselNext className="right-0 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default ShopByCategory;
