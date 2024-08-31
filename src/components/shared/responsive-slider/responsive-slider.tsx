"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { SliderProps } from "@/interfaces"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import clsx from "clsx";
import { useResponsiveSlider } from "./use-responsive-slider";




export const ResponsiveSlider = ({ items }: SliderProps) => {

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
            className="pt-3 w-full flex md:flex-row flex-col"
            opts={{
                loop: true,
                dragFree: true,
                watchResize: () => setSlidesInView(() => api?.slidesInView().length!)
            }}
            setApi={setApi}
        >
            <CarouselContent className="flex -ml-1">
                {
                    items.map(item => (
                        <CarouselItem
                            key={item.image.src}
                            className="basis-[80px] md:basis-[100px] pl-1"
                        // style={{ flex: `0 0 ${100 / 17}%` }}

                        >
                            <picture className="w-full flex flex-col gap-2" >
                                <img src={item.image.src} alt="img"
                                    className="w-full h-full rounded-lg"
                                // className="rounded-lg min-w-[100px] max-w-[100px]" 
                                />
                                <span className="text-xs text-center font-bold">{item.description}</span>
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
                        disabled={false}
                    onClick={() => handlePrevious()}
                    >
                        <ChevronLeftIcon color="white" className="h-6 w-6" />
                    </CarouselPrevious>
                    <CarouselNext
                        className="ease-in duration-200 transition-all bg-mainColor hover:bg-mainColor border-transparent z-50"
                        position="-3rem"
                        disabled={false}
                    onClick={() => handleNext()}
                    >
                        <ChevronRightIcon color="white" className="h-6 w-6" />
                    </CarouselNext>
                </>
            }

            {
                <div className="w-full h-6 mt-2 flex items-center justify-around px-10 md:hidden">
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