"use client"
import { CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

interface Range {
    start: number;
    end: number;
}

export const useResponsiveSlider = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const [ranges, setRanges] = useState<Range[]>([]);
    const [slidesInView, setSlidesInView] = useState(0);


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
        if (!api) return;

        const updateSlidesInView = () => {

            setTimeout(() => {
                const visibleSlides = api.slidesInView().length;
                setSlidesInView(visibleSlides);
                setCurrent(api.selectedScrollSnap() + 1);
                setCount(api.scrollSnapList().length);
                const count = api.scrollSnapList().length;

                const ranges = calculateRangeForDots(count, visibleSlides);
                setRanges(() => ranges)

                api.on("select", () => {
                    setCurrent(api.selectedScrollSnap() + 1)
                })
            }, 0);
        };
        updateSlidesInView();
    }, [api, slidesInView]);

    const calculateRangeForDots = (totalSlides: number, slidesInView: number) => {
        const points = Math.ceil(totalSlides / slidesInView);
        let ranges = [];
        for (let i = 0; i < points; i++) {
            const start = i * slidesInView + 1;
            const end = (i + 1) * slidesInView;
            ranges.push({ start, end });
        }
        return ranges;
    };

    return {
        setApi,
        current,
        ranges,
        handleNext,
        handlePrevious,
        api,
        setSlidesInView
    }
}