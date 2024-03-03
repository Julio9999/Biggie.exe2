'use client'
import { IoCaretForward, IoCaretBack } from "react-icons/io5";
import { Slide } from "./Slide"
import { useSlider } from "@/hooks/Slider/useSlider"
import { StaticImageData } from "next/image";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";


interface Props {
    srcs: StaticImageData[]
}


export const Slider = ({ srcs }: Props) => {

    const {
        moveBackward,
        moveForward,
        sliderRef
    } = useSlider()


    return (
        <>
            <div className="relative slider w-full">
                <div className="absolute left-0 overflow-hidden top-0 bottom-0 w-full flex justify-between items-center">
                    <MdOutlineKeyboardArrowLeft color="white" size={40}
                    className="cursor-pointer mx-10  rounded-3xl slider-button translate-x-[-200%]"
                    onClick={() => moveBackward()}
                      />
                    <MdOutlineKeyboardArrowRight color="white" size={40} 
                    className="cursor-pointer mx-10 rounded-3xl slider-button translate-x-[200%]"
                    onClick={() => moveForward() }
                    />
                </div>
                <div className="flex flex-row w-full mx-auto select-none transition-all border-[red] border-4 overflow-x-auto scroll-smooth snap-mandatory slider" ref={sliderRef}>
                    {
                        srcs.map(item => (
                            <Slide
                                src={item.src}
                                key={item.src}
                            />
                        ))
                    }
                </div>

            </div>
        </>
    )
}