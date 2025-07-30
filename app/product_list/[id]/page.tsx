import { ProductCurrent } from "@/components/product_current";
import { getCurrentProduct } from "@/lib/page";

export default async function ProductItem({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const chosenProduct = await getCurrentProduct(Number(id));
  
  return <ProductCurrent product={chosenProduct} />;
}
