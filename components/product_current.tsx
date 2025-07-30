import { IProduct } from "@/types/api_types/api_types";
import Image from "next/image";
import Link from "next/link";

interface IProductCurrent {
  product: IProduct;
}

export const ProductCurrent = ({ product }: IProductCurrent) => {
  return (
    <div className="flex flex-row items-center size-full ">
      <section className="flex flex-col items-center w-400 gap-y-3">
        <h1 className="text-4xl ">{product.title}</h1>
        <p className="text-lg font-semibold text-center">{product.description}</p>
        <p className="text-lg font-semibold">Category: <span className="font-normal">{product.category}</span></p>
        <p className="text-lg font-semibold">Price: <span className="font-normal">{product.price}$</span></p>
        <p className="text-lg font-semibold">Warranty: <span className="font-normal">{product.warrantyInformation}</span></p>
        <Link href={"/"} className="self-center">
          <button className="h-14 p-2.5 text-lg font-normal bg-black text-white rounded-lg border-none hover:bg-gray-700">
            Вернуться назад
          </button>
        </Link>
      </section>
      <section className="w-300 flex justify-center items-center">
        <Image
          src={product.images[0]}
          alt="chosen product"
          width={300}
          height={300}
          className="object-contain"
        />
      </section>
    </div>
  );
};
