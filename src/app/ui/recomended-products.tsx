import { ProductCard } from "@/components"
import product from "@/assets/card-image.webp"

export const RecomendedProducts = () => {
    return (
        <section className="text-center mt-10 w-full">
            <h1 className="text-xl md:text-4xl md:text-start font-bold mb-6">Productos Recomendados</h1>
            <article className="flex gap-6 md:gap-3 w-full justify-center  items-center flex-wrap">
            {
                Array.from({length: 12}).map((_,index) => (
                    <ProductCard
                        key={index}
                        imgUrl={product}
                        price="G 29.950"
                        productName="Costilla de Primera Biggie Envasado al Vacio x Kg"
                        productCategory="Carne Envasada Biggie"
                    />
                ))
            }
            </article>
        </section>
    )
}