import { IProduct } from "@/types/api_types/api_types";
import Image from "next/image";

interface ICurrentProduct {
  product: IProduct;
}

export const ProductItem = ({ product }: ICurrentProduct) => {
  return (
    <section
      className="bg-amber-50 rounded-lg p-4 flex flex-col gap-2.5 items-center hover:scale-103 hover:duration-75 h-full
    "
    >
      <Image
        src={product.images[0]}
        alt="product-image"
        width={350}
        height={350}
        className="bg-blue-100 rounded-lg"
      />
      <h2 className="text-lg font-bold text-center ">{product.title}</h2>
      <p className="text-base font-normal">
        Price: <span className="text-lg font-normal">{product.price}$</span>
      </p>
    </section>
  );
};
