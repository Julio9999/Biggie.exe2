import { ProductButton, ProductCard } from "@/components";
import product from "@/assets/card-image.webp"

interface Params {
    params: {
        slug: string;
    }
}

const Page = ({ params }: Params) => {

    const slug = params.slug;


    return (
        <main className="px-4 pb-4 text-center flex flex-col">
            <h1 className="text-[32px] font-bold text-start">Detalles del producto</h1>

            <ProductCard className="shadow-none flex max-w-full md:max-w-full flex-col w-full border-none outline-none hover:outline-[0px]">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:items-start w-full max-w-full ">
                    <div className="w-full max-w-56 lg:max-w-[450px]">
                        <ProductCard.Image className="md:h-52 lg:h-80 xl:h-96 w-full max-w-full" productImage={product} />
                    </div>
                    <div className="flex flex-col flex-1  md:max-w-ful">
                        <div>
                            <ProductCard.Name className="text-base md:text-2xl  w-full block md:text-start" productName="Costilla de Primera Biggie Envasado al Vacio x Kg" />
                        </div>
                        <div className="flex md:items-start lg:items-center flex-col md:flex-row md:justify-between">
                            <ProductCard.Category className="text-base md:text-lg mb-2 md:mb-0" productCategory="Carne Envasada Biggie" />
                            <div className="flex flex-col justify-center items-center">
                                <ProductCard.Price className="text-[25px] md:text-3xl font-semibold" price="G 29.950" />
                                <ProductButton />
                            </div>
                        </div>
                    </div>
                </div>
            </ProductCard>
        </main>

    )
}


export default Page;