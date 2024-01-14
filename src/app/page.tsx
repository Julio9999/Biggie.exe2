import frutas from "../../public/Rpu23AmL4sCVh68ngGDt33lqL8sEB4QPZQkBUVEY.webp";
import chocolate from "../../public/W7qd7rF9r921BxMTvX6rbnBOTRZVJyGFWwY2WJjc.webp"
import promo from "../../public/ZRkxpIe7uZVYcnRol2H5zngqTXYhVxM3x3tFvIpI.webp"
import delivery from "../../public/kL1d0r4M4YCzck8LEMM906uQ2sfMQInKjrXJaCrr.webp"


import { Slider } from '@/components';

export default function Home() {

  const srcs = [
    delivery,
    frutas,
    promo,
    chocolate,
]

  return (
    <>
      <Slider srcs={srcs} />
    </>
  )
}
