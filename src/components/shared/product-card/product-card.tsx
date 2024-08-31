import { Card, CardContent } from "@/components/ui/card";
import { StaticImageData } from "next/image";
import { FaRegHeart } from "react-icons/fa";


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
        <Card className="border h-[380px] gap-2 pt-5 shadow-md">
            <CardContent className="flex flex-col items-center relative">
                <FaRegHeart className="absolute -top-2 right-4" size={20} color="red" />
                <div
                    className={`h-[160px] mx-4 w-full`}
                    style={{
                        backgroundImage: `url(${imgUrl.src})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}
                >
                </div>
                <div className="flex flex-col px-4">
                    <span className="font-medium text-xl">{price}</span>
                    <span className="text-sm font-medium">{productName}</span>
                    <span className="text-sm text-gray-500 font-normal">{productCategory}</span>
                </div>
                <button
                    className="bg-mainColor tracking-widest rounded-3xl text-white px-4 py-2 text-sm font-medium w-fit text-center">
                    AGREGAR AL CARRITO
                </button>
            </CardContent>
        </Card>
    )
}