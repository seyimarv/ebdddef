import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

interface ProductCardProps {
  product: ShopifyProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);
  const { node } = product;

  const firstVariant = node.variants.edges[0]?.node;
  const firstImage = node.images.edges[0]?.node;
  const price = node.priceRange.minVariantPrice;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!firstVariant) return;

    addItem({
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions || [],
    });

    toast.success("Added to cart", {
      description: node.title,
      position: "top-center",
    });
  };

  return (
    <Link to={`/product/${node.handle}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
        <div className="aspect-square overflow-hidden bg-muted">
          {firstImage ? (
            <img
              src={firstImage.url}
              alt={firstImage.altText || node.title}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              No image
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold truncate">{node.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {node.description || "No description available"}
          </p>
          <p className="text-lg font-bold mt-2">
            {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button onClick={handleAddToCart} className="w-full gap-2" disabled={!firstVariant?.availableForSale}>
            <ShoppingCart className="h-4 w-4" />
            {firstVariant?.availableForSale ? "Add to Cart" : "Out of Stock"}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};
