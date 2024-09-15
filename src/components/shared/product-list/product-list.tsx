import { ProductCard } from "@/components"
import product from "@/assets/card-image.webp"
import Link from "next/link"

interface Props {
    title: string;
}

export const ProductList = ({title}: Props) => {

    const slug = 'costilla-de-primera-biggie-envasado-al-vacio-x-kg-60168';

    return (
        <section className="text-center mt-10 w-full">
            <h1 className="text-xl md:text-4xl md:text-start font-bold mb-6">{title}</h1>
            <article className="flex gap-6 md:gap-3 w-full justify-center  items-center flex-wrap">
                {
                    Array.from({ length: 12 }).map((_, index) => (
                        <Link key={index} href={`item/${slug}`}>
                            <ProductCard className="flex items-center justify-center flex-col">
                                <ProductCard.Image productImage={product} />
                                <ProductCard.Price price="G 29.950" />
                                <ProductCard.Name productName="Costilla de Primera Biggie Envasado al Vacio x Kg" />
                                <ProductCard.Category productCategory="Carne Envasada Biggie" />
                                <ProductCard.Button />
                            </ProductCard>
                        </Link>
                    ))
                }
            </article>
        </section>
    )
}