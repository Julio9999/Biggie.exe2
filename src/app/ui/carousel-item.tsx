"use client"

import { StaticImageData } from "next/image";

interface Props {
    image?: StaticImageData;
    description?: string;
}

export const CarouselItem = ({image, description}: Props) => {

    return (
        <picture className="w-full flex flex-col gap-2" >
            <img src={image!.src} alt="img"
                className="w-full h-full rounded-lg"
            />
            <span className="text-xs text-center font-bold">{description}</span>
        </picture>

    )
}