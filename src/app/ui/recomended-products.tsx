import { ProductCard } from "@/components"
import product from "@/assets/card-image.webp"

export const RecomendedProducts = () => {
    return (
        <section className="text-center mt-10">
            <h1 className="text-xl font-bold mb-6">Productos Recomendados</h1>
            <article className="flex flex-col gap-6">
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