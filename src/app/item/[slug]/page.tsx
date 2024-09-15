import { ProductCard, ResponsiveSlider } from "@/components";
import product from "@/assets/card-image.webp"
import Link from "next/link";
import { SuggestProduct, SuggestProductProps } from "./ui/suggest-product";


interface Params {
    params: {
        slug: string;
    }
}

const items: SuggestProductProps[] = [
    {
        category: "Carne Envasada Biggie",
        image: product,
        name: "Costilla de Primera Biggie Envasado al Vacio x Kg",
        price: "G 29.950",
        id: "1"
    },
    {
        category: "Carne Envasada Biggie",
        image: product,
        name: "Costilla de Primera Biggie Envasado al Vacio x Kg",
        price: "G 29.950",
        id: "2"

    },
    {
        category: "Carne Envasada Biggie",
        image: product,
        name: "Costilla de Primera Biggie Envasado al Vacio x Kg",
        price: "G 29.950",
        id: "3"

    },
    {
        category: "Carne Envasada Biggie",
        image: product,
        name: "Costilla de Primera Biggie Envasado al Vacio x Kg",
        price: "G 29.950",
        id: "4"
    },
    {
        category: "Carne Envasada Biggie",
        image: product,
        name: "Costilla de Primera Biggie Envasado al Vacio x Kg",
        price: "G 29.950",
        id: "5"
    },
    {
        category: "Carne Envasada Biggie",
        image: product,
        name: "Costilla de Primera Biggie Envasado al Vacio x Kg",
        price: "G 29.950",
        id: "6"
    },
    {
        category: "Carne Envasada Biggie",
        image: product,
        name: "Costilla de Primera Biggie Envasado al Vacio x Kg",
        price: "G 29.950",
        id: "7"
    },
    {
        category: "Carne Envasada Biggie",
        image: product,
        name: "Costilla de Primera Biggie Envasado al Vacio x Kg",
        price: "G 29.950",
        id: "8"
    },
    {
        category: "Carne Envasada Biggie",
        image: product,
        name: "Costilla de Primera Biggie Envasado al Vacio x Kg",
        price: "G 29.950",
        id: "9"
    },
    {
        category: "Carne Envasada Biggie",
        image: product,
        name: "Costilla de Primera Biggie Envasado al Vacio x Kg",
        price: "G 29.950",
        id: "10"
    },
    {
        category: "Carne Envasada Biggie",
        image: product,
        name: "Costilla de Primera Biggie Envasado al Vacio x Kg",
        price: "G 29.950",
        id: "11"
    },
    {
        category: "Carne Envasada Biggie",
        image: product,
        name: "Costilla de Primera Biggie Envasado al Vacio x Kg",
        price: "G 29.950",
        id: "12"
    }
] ;

const Page = ({ params }: Params) => {

    const slug = params.slug;


    return (
        <main className="px-4 pb-4 ">
            <section className="text-center flex flex-col">
                <h1 className="text-[32px] font-bold lg:text-start">Detalles del producto</h1>

                <ProductCard className="shadow-none flex max-w-full md:max-w-full flex-col w-full border-none outline-none hover:outline-[0px]">
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:items-start w-full max-w-full ">
                        <div className="w-full max-w-56 lg:max-w-[400px]">
                            <ProductCard.Image className="md:h-52 lg:h-80 xl:h-96 w-full max-w-full" productImage={product} />
                        </div>
                        <div className="flex flex-col flex-1 h-full  md:max-w-full">
                            <div>
                                <ProductCard.Name className="text-base lg:text-2xl  w-full block md:text-start" productName="Costilla de Primera Biggie Envasado al Vacio x Kg" />
                            </div>
                            <div className="flex md:items-center flex-col md:flex-row md:justify-between h-full">
                                <ProductCard.Category className="text-base md:text-lg mb-2 md:mb-0" productCategory="Carne Envasada Biggie" />
                                <div className="flex flex-col justify-center items-center">
                                    <ProductCard.Price className="lg:text-[34px] md:text-[25px] font-bold" price="G 29.950" />
                                    <ProductCard.Button />
                                </div>
                            </div>
                        </div>
                    </div>
                </ProductCard>
            </section>

            <section className="mt-12">
                <h2 className="text-2xl font-bold text-lightDark mb-6">También le podria interesar</h2>
                <article className="flex gap-6  py-2 z-50">

                    <ResponsiveSlider
                        items={items}
                        sliderItemComponent={
                            <SuggestProduct />
                        }
                        carrouselItemsClassName="max-w-[270px] p-0 mx-2 py-1"
                    />
                </article>
            </section>

        </main>

    )
}


export default Page;