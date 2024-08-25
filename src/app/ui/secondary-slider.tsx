"use client"
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { SliderProps } from "@/interfaces"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react";


export const SecondarySlider = ({ srcs }: SliderProps) => {

    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)


    const handleNext = () => {
        if (current === 4) {
            const cycleThroughItems = () => {
                if (current < count) {
                    api?.scrollNext();
                    setTimeout(() => {
                        if (api?.selectedScrollSnap() === 0) return;
                        setCurrent(api?.selectedScrollSnap()! + 1);
                        cycleThroughItems();
                    }, 0); 
                }
            };
            cycleThroughItems();
        } else {
            api?.scrollTo(current + 2)
        }
    }

    const handlePrevious = () => {
        if (current === 1) {
            api?.scrollTo(17)
        } else {
            const cycleThroughItems = () => {
                if (current > 1) {
                    api?.scrollPrev();
                    setTimeout(() => {
                        const selectedSnap = api?.selectedScrollSnap()!;
                        setCurrent(selectedSnap + 1);
                        
                        if (selectedSnap > 0) {
                            cycleThroughItems();
                        } else {
                            setCurrent(1);
                        }
                    }, 0);
                }
            };
            cycleThroughItems();
        }
    };


    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })

    }, [api])

    return (
        <Carousel
            className="mx-auto max-w-full flex flex-col mt-2"
            opts={{
                loop: true,
            }}
            setApi={setApi}
        >
            <CarouselContent className="flex w-full">
                {
                    srcs.map(src => (
                        <CarouselItem
                            key={src.src}
                            style={{ flex: `0 0 ${100 / 17}%` }}

                        >
                            <picture>
                                <img src={src.src} alt="img" className="rounded-lg min-w-[100px] max-w-[100px]" />
                            </picture>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            {
                <>
                    <CarouselPrevious
                        className="ease-in duration-200 transition-all bg-mainColor hover:bg-mainColor border-transparent z-50"
                        position="-3rem"
                        onClick={() => handlePrevious()}
                    >
                        <ChevronLeftIcon color="white" className="h-6 w-6" />
                    </CarouselPrevious>
                    <CarouselNext
                        className="ease-in duration-200 transition-all bg-mainColor hover:bg-mainColor border-transparent z-50"
                        position="-3rem"
                        onClick={() => handleNext()}
                    >
                        <ChevronRightIcon color="white" className="h-6 w-6" />
                    </CarouselNext>
                </>
            }
        </Carousel>
    )
}