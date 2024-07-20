'use client'
import { IoCaretForward, IoCaretBack } from "react-icons/io5";
import { Slide } from "./Slide"
import { useSlider } from "@/hooks/Slider/useSlider"
import { StaticImageData } from "next/image";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from "react";
import { cn } from "@/lib/utils";


interface Props {
    srcs: StaticImageData[]
}


export const Slider = ({ srcs }: Props) => {

    const {
        moveBackward,
        moveForward,
        sliderRef
    } = useSlider()

    const [showButtons, setShowButtons] = useState(false);


    return (
        <Carousel
            className="mx-auto max-w-full flex flex-col overflow-hidden"
            opts={{
                loop: true
            }}
            onMouseEnter={() => setShowButtons(() => true)}
            onMouseLeave={() => setShowButtons(() => false)}
        >
            <CarouselContent className="border">
                {
                    srcs.map(src => (
                        <CarouselItem className="select-none">
                            <img src={src.src} />
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            {
                <>
                    <CarouselPrevious position={cn(showButtons ? "1rem" : "-2rem")} className="ease-in duration-200 transition-all" />
                    <CarouselNext position={cn(showButtons ? "1rem" : "-2rem")} className="ease-in duration-200 transition-all" />
                </>
            }
        </Carousel>
    )
}