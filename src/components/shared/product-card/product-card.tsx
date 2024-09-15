import { Card } from "@/components/ui/card";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { FavoriteDialog } from "@/components";


interface ProductChildrenProps {
    className?: string;
}

interface ProductImageProps extends ProductChildrenProps {
    productImage: StaticImageData;
}

interface ProductNameProps extends ProductChildrenProps {
    productName: string;
}

interface ProductCategoryProps extends ProductChildrenProps {
    productCategory: string;
}

interface ProductPriceProps extends ProductChildrenProps {
    price: string;
}

interface Props {
    className?: string;
    children?: ReactNode;
}

export const ProductCard = ({ className, children }: Props) => {
    return (
        <Card
            className={`h-[380px] gap-2 pt-5 shadow-md  max-w-[288px] md:max-w-[280px] outline-none hover:outline-offset-0 hover:outline-mainColor hover:outline-1 group relative ${className}`}
        >
            <span className="absolute w-10 h-10 top-1 right-2 z-50" >
                <FavoriteDialog />
            </span>
            {children}
        </Card>
    );
};

export const ProductImage = (({ productImage, className }: ProductImageProps) => {
    return (
        <div
            className={`h-[160px] w-full group-hover:animate-scaleUpDown ${className}`}
            style={{
                backgroundImage: `url(${productImage?.src})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
        </div>
    );
});

export const ProductName = (({ productName, className }: ProductNameProps) => {
    return (
        <span className={`text-sm font-medium text-center ${className}`}>{productName}</span>
    );
})

export const ProductCategory = (({ productCategory, className }: ProductCategoryProps) => {
    return (
        <span className={`text-sm text-grayText font-normal text-center ${className}`}>{productCategory}</span>
    );
})

export const ProductPrice = (({ price, className }: ProductPriceProps) => {
    return (
        <span className={`font-medium text-xl ${className}`}>{price}</span>
    );
})

export const ProductButton = ({ className }: ProductChildrenProps) => {

    return (
        <button
            className={`
            bg-mainColor tracking-widest rounded-3xl mt-3 text-white px-4 py-2 text-sm font-medium w-fit text-center
            ${className}
            `}>
            AGREGAR AL CARRITO
        </button>
    )
}


ProductCard.Price = ProductPrice;
ProductCard.Name = ProductName;
ProductCard.Image = ProductImage;
ProductCard.Category = ProductCategory;
ProductCard.Button = ProductButton;
