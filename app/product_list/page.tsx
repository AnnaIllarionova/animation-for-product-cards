import { Products } from "@/components/products";

export const ProductList = async () => {

  return (
    <div className="flex flex-col gap-8 h-full overflow-hidden ">
      <h1 className="text-6xl">The best products ever!</h1>
      <Products />
    </div>
  );
};
