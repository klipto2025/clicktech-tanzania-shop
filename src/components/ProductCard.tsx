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
    <Card className="group hover:shadow-hover transition-smooth animate-fade-up">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
          />
          {product.featured && (
            <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
              Featured
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="destructive" className="absolute top-3 right-3">
              Out of Stock
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-xs">
              {product.brand}
            </Badge>
            <span className="text-sm text-muted-foreground">{product.category}</span>
          </div>
          
          <h3 className="font-semibold text-lg leading-tight">{product.name}</h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
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

          <div className="pt-2">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold text-primary">
                  {formatPrice(product.price, product.currency)}
                </span>
                <p className="text-xs text-muted-foreground">
                  Warranty: {product.warranty}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 space-x-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={() => onViewDetails?.(product.id)}
        >
          <Eye className="h-4 w-4 mr-1" />
          View Details
        </Button>
        <Button
          variant="cart"
          size="sm"
          className="flex-1"
          onClick={() => onAddToCart?.(product.id)}
          disabled={!product.inStock}
        >
          <ShoppingCart className="h-4 w-4 mr-1" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;