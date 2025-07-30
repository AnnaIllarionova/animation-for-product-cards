import Link from "next/link";
import { ProductItem } from "@/components/product_item";
import { getProducts } from "@/lib/page";

export const Products = async () => {
  const allProducts = await getProducts();
  return (
    <main className="grid grid-cols-3 gap-10 h-full overflow-y-scroll no-scrollbar p-5">
      {allProducts.map((product) => (
        <Link href={`/product_list/${product.id}`} key={product.id}>
          <ProductItem product={product} />
        </Link>
      ))}
    </main>
  );
};
