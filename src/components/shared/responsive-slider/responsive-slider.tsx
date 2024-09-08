"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import clsx from "clsx";
import { useResponsiveSlider } from "./use-responsive-slider";
import React, { ReactElement } from "react";

export interface SliderItem {
    item: React.ReactNode;
    id: string;
}

export interface SliderProps {
    items: any[];
    sliderItemComponent: ReactElement;
    carrouselItemsClassName?: string;
}




export const ResponsiveSlider = ({ items, carrouselItemsClassName, sliderItemComponent }: SliderProps) => {

    const {
        setApi,
        handlePrevious,
        handleNext,
        ranges,
        current,
        api,
        setSlidesInView
    } = useResponsiveSlider()



    return (
        <Carousel
            className="pt-3 w-full flex lg:flex-row flex-col lg:px-12 xl:px-0"
            opts={{
                loop: true,
                dragFree: true,
                watchResize: () => setSlidesInView(() => api?.slidesInView().length!)
            }}
            setApi={setApi}
        >
            <CarouselContent className="flex -ml-4">
                {
                    items.map(sliderITem => (
                        <CarouselItem
                            key={sliderITem.id}
                            className={`${carrouselItemsClassName}`}

                        >
                            {React.cloneElement(sliderItemComponent, {
                                ...sliderITem
                            })} 
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            {
                <>
                    <CarouselPrevious
                        className="ease-in duration-200 hidden lg:flex left-0 xl:-left-12 transition-all bg-mainColor hover:bg-mainColor border-transparent z-50 box-content p-1"
                        disabled={false}
                        onClick={() => handlePrevious()}
                    >
                        <ChevronLeftIcon color="white" className="h-6 w-6" />
                    </CarouselPrevious>
                    <CarouselNext
                        className="ease-in duration-200 hidden lg:flex right-0 xl:-right-12 transition-all bg-mainColor hover:bg-mainColor border-transparent z-50 box-content p-1"
                        disabled={false}
                        onClick={() => handleNext()}
                    >
                        <ChevronRightIcon color="white" className="h-6 w-6" />
                    </CarouselNext>
                </>
            }

            {
                <div className="w-full h-6 mt-2 flex items-center justify-around px-10 lg:hidden">
                    {
                        ranges?.map((range, index) => (
                            <span
                                key={index}
                                className={clsx(`
                            w-[5px] h-[5px] rounded-full bg-gray-300`, {
                                    'bg-gray-950': current >= range.start && current <= range.end
                                })}
                                onClick={() => api?.scrollTo(range.start - 1)}
                            ></span>
                        ))
                    }
                </div>
            }
        </Carousel>
    )
}