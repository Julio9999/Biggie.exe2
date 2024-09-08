"use client"
import { ProductCard } from "@/components"
import { StaticImageData } from "next/image"

export interface SuggestProductProps {
    image?:StaticImageData;
    price?: string;
    name?: string;
    category?: string;
    id?: string;
}

export const SuggestProduct = ({
    image,
    price,
    name,
    category
}: SuggestProductProps) => {


    return (
        <ProductCard className="flex items-center justify-center flex-col">
             <ProductCard.Image productImage={image!} />
             <ProductCard.Price price={price!} />
             <ProductCard.Name productName={name!} />
             <ProductCard.Category productCategory={category!} />
             <ProductCard.Button />
        </ProductCard>
    )
}