"use client";
import React from "react";
// import { products } from "@/dummyData";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { RootState } from "@/lib/redux/store";
import Link from "next/link";
import { Product } from "@/lib/types/products.types";

const ProductsGrid = () => {
  const { menProducts, womenProducts } = useSelector(
    (state: RootState) => state.products
  );

  const { personType } = useParams();

  let productsToRender: Product[] = [];
  if (personType === "women") {
    productsToRender = womenProducts;
  } else if (personType === "men") {
    productsToRender = menProducts;
  }

  const test =
    productsToRender?.length > 0 ? (
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:col-span-3 lg:gap-x-8">
        {productsToRender.map((product: Product) => (
          <Link
            key={product._id}
            href={`/${personType}/products/${product._id}`}
            className="group text-sm"
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
              <img
                src={product.mainImage}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h3 className="mt-4 font-medium text-gray-900">{product.name}</h3>
            {/* <p className="italic text-gray-500">{product.availability}</p> */}
            hola mundo
            <p className="mt-2 font-medium text-gray-900">$ {product.price}</p>
            <p className="mt-2 font-medium text-gray-900"> hola mundo</p>
          </Link>
        ))}
      </div>
    ) : (
      <h1 className="text-gray-900 text-center w-full">No items found</h1>
    );

  return test;
};

export default ProductsGrid;
