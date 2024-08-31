import { Card, CardContent } from "@/components/ui/card";
import { StaticImageData } from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { CustomToltip } from "../custom-toltip/custom-toltip";


interface Props {
    imgUrl: StaticImageData;
    price: string;
    productName: string;
    productCategory: string;
}

export const ProductCard = (
    {
        imgUrl,
        price,
        productName,
        productCategory
    }
        : Props) => {

    return (
        <Card
            className="h-[380px] gap-2 pt-5 shadow-md max-w-[288px] md:max-w-[280px] outline-none hover:outline-offset-0 hover:outline-mainColor hover:outline-1"
        >
            <CardContent className="flex flex-col items-center relative">
                <span className="absolute w-10 h-10 -top-4 right-2 hover:bg-mainColorTransparent p-2 hover:rounded-full">
                    <CustomToltip text={"Agregar a favoritos"}>
                        <FaRegHeart
                            className="text-mainColor cursor-pointer"
                            size={25} />
                    </CustomToltip>
                </span>
                <div
                    className={`h-[160px] mx-4 w-full hover:animate-scaleUpDown`}
                    style={{
                        backgroundImage: `url(${imgUrl.src})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                >
                </div>
                <div className="flex flex-col px-4">
                    <span className="font-medium text-xl">{price}</span>
                    <span className="text-sm font-medium">{productName}</span>
                    <span className="text-sm text-gray-500 font-normal">{productCategory}</span>
                </div>
                <button
                    className="bg-mainColor tracking-widest rounded-3xl mt-3 text-white px-4 py-2 text-sm font-medium w-fit text-center">
                    AGREGAR AL CARRITO
                </button>
            </CardContent>
        </Card>
    )
}