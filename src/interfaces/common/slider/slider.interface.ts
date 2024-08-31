import { StaticImageData } from "next/image";

export interface SliderItem {
    image: StaticImageData;
    description: string;
}

export interface SliderProps {
    items: SliderItem[]
}