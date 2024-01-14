'use client'
import { IoCaretForward, IoCaretBack } from "react-icons/io5";
import { Slide } from "./Slide"
import { useSlider } from "@/hooks/Slider/useSlider"
import { StaticImageData } from "next/image";

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
            <div className="relative border-red-900 border">
                <div className="absolute left-0 top-0 bottom-0 min-w-[100vw] flex justify-between items-center">
                    <IoCaretBack size={100}
                    className="cursor-pointer"
                    onClick={() => moveBackward()}
                      />
                    <IoCaretForward size={100} 
                    className="cursor-pointer"
                    onClick={() => moveForward() }
                    />
                </div>
                <div className="flex flex-row overflow-hidden min-w-[100vw] select-none" ref={sliderRef}>
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