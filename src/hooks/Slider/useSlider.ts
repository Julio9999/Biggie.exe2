import { useRef, useEffect } from "react";

export const useSlider = () => {
    const sliderRef = useRef<HTMLDivElement>(null)

    const scrollLimits = (element: HTMLDivElement) => {
        const isLimitRight = element.scrollLeft + element.clientWidth === element.scrollWidth;
        const isLimitLeft = element.scrollLeft === 0;

        return {
            isLimitLeft,
            isLimitRight
        }
    }

    const moveForward = () => {
        const slider = sliderRef.current!
        const { isLimitRight } = scrollLimits(slider)
        if(isLimitRight){
            slider.scrollLeft = 0;
        }else{
            slider.scrollLeft += window.innerWidth
        }
    }

    const moveBackward = () => {
        const slider = sliderRef.current!
        const { isLimitLeft } = scrollLimits(slider)
        if(isLimitLeft){
            slider.scrollLeft = slider.scrollWidth;
        }else{
            slider.scrollLeft -= window.innerWidth
        }
    }

  return {
    moveBackward,
    moveForward,
    sliderRef
  }
}
