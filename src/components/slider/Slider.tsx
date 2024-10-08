'use client'
import { StaticImageData } from "next/image";
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";


interface Props {
    srcs: StaticImageData[];
}


export const Slider = ({ srcs }: Props) => {

    const [showButtons, setShowButtons] = useState(false);


    return (
        <Carousel
            className="mx-auto max-w-full flex flex-col overflow-hidden"
            opts={{
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 2000
                })
            ]}
            onMouseEnter={() => setShowButtons(() => true)}
            onMouseLeave={() => setShowButtons(() => false)}
        >
            <CarouselContent className="border">
                {
                    srcs.map(src => (
                        <CarouselItem key={src.src} className="select-none">
                            <picture>
                                <img src={src.src} alt="img" />
                            </picture>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            {
                <>
                    <CarouselPrevious
                        className={cn(`ease-in duration-200 -left-10 transition-all bg-gray-400 p-1 box-content   hover:bg-mainColor border-transparent`, {
                            "left-4": showButtons
                        })}
                    >
                        <ChevronLeftIcon color="white" className="h-6 w-6" />
                    </CarouselPrevious>
                    <CarouselNext
                        className={cn(`ease-in duration-200 -right-10 transition-all bg-gray-400 p-1 box-content hover:bg-mainColor border-transparent`, {
                            "right-4": showButtons
                        })}
                    >
                        <ChevronRightIcon color="white" className="h-6 w-6" />
                    </CarouselNext> 
                </>
            }
        </Carousel>
    )
}