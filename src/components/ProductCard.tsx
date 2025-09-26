import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product, formatPrice } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string) => void;
  onViewDetails?: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart, 
  onViewDetails 
}) => {
  return (
    <Card className="group hover:shadow-neon transition-smooth animate-fade-up bg-card/80 backdrop-blur-md border-2 border-primary/20 hover:border-primary/50 glow-border">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-xl">
          <div className="absolute inset-0 bg-gradient-cyber/20 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-500"
          />
          {product.featured && (
            <Badge className="absolute top-4 left-4 bg-gradient-cyber text-white border-0 z-20 animate-pulse-neon font-bold">
              Neural Elite
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="destructive" className="absolute top-4 right-4 z-20 font-bold">
              Offline
            </Badge>
          )}
          <div className="absolute inset-0 bg-gradient-cyber/10 group-hover:bg-gradient-cyber/30 transition-all duration-500 z-10"></div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-xs border-primary/30 text-primary bg-primary/10 font-bold">
              {product.brand}
            </Badge>
            <span className="text-sm text-primary font-bold capitalize">{product.category}</span>
          </div>
          
          <h3 className="font-black text-xl leading-tight text-cyber">{product.name}</h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-1">
            {product.specifications.processor && (
              <div className="text-xs text-muted-foreground">
                <span className="font-medium">CPU:</span> {product.specifications.processor}
              </div>
            )}
            {product.specifications.ram && (
              <div className="text-xs text-muted-foreground">
                <span className="font-medium">RAM:</span> {product.specifications.ram}
              </div>
            )}
            {product.specifications.storage && (
              <div className="text-xs text-muted-foreground">
                <span className="font-medium">Storage:</span> {product.specifications.storage}
              </div>
            )}
          </div>

          <div className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-3xl font-black text-cyber">
                  {formatPrice(product.price, product.currency)}
                </span>
                <p className="text-xs text-primary font-bold">
                  Neural Warranty: {product.warranty}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 space-x-3">
        <Button
          variant="neon"
          size="sm"
          className="flex-1"
          onClick={() => onViewDetails?.(product.id)}
        >
          <Eye className="h-4 w-4 mr-1" />
          Neural Scan
        </Button>
        <Button
          variant="cyber"
          size="sm"
          className="flex-1"
          onClick={() => onAddToCart?.(product.id)}
          disabled={!product.inStock}
        >
          <ShoppingCart className="h-4 w-4 mr-1" />
          Acquire Tech
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;