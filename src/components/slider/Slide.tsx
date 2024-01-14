import React from 'react'
import Image from 'next/image'

interface Props {
    src: string;
}

export const Slide = ({src}: Props) => {
    return (
        <div className="min-w-[100vw]">
            <Image
                src={src}
                alt="delivery"
                width={800}
                height={800}
                className="w-full h-full"
            />
        </div>
    )
}
