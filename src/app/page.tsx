import frutas from "../../public/Rpu23AmL4sCVh68ngGDt33lqL8sEB4QPZQkBUVEY.webp";
import chocolate from "../../public/W7qd7rF9r921BxMTvX6rbnBOTRZVJyGFWwY2WJjc.webp"
import promo from "../../public/ZRkxpIe7uZVYcnRol2H5zngqTXYhVxM3x3tFvIpI.webp"
import delivery from "../../public/kL1d0r4M4YCzck8LEMM906uQ2sfMQInKjrXJaCrr.webp"


import alimentos from "@/assets/alimentos.jpg";
import almacen from "@/assets/almacen.jpg";
import asado from "@/assets/parrilla.jpg";
import bebes from "@/assets/bebes.jpg";
import bebidasAlcoholicas from "@/assets/bebidas_alcohol.jpg";
import bebidasSinAlcohol from "@/assets/sin_alcohol.jpg";
import carniceria from "@/assets/carne.jpg";
import golosinas from "@/assets/chocolate_golosinas.jpg";
import congelados from "@/assets/congelados.jpg";
import fiambreria from "@/assets/fiambreria.jpg";
import frutas_y_verduras from "@/assets/verduras.webp";
import heladeria from "@/assets/heladeria-y-confiteria.jpg";
import higiene from "@/assets/higuiene-personal.jpg";
import lacteos from "@/assets/lacteos.jpg";
import libreria from "@/assets/libreria.jpg";
import limpieza from "@/assets/Limpieza.jpg";
import mascotas from "@/assets/mascotas.jpg";
import panaderia from "@/assets/panificados_helados.webp";
import snacks from "@/assets/snacks.jpg";
import varios from "@/assets/productos-varios.jpg";




import { Slider } from '@/components';
import { SecondarySlider } from "./ui/secondary-slider";

export default function Home() {

  const srcs = [
    delivery,
    frutas,
    promo,
    chocolate,
  ]

  const secondarySrcs = [
    alimentos,
    almacen,
    asado,
    bebes,
    bebidasAlcoholicas,
    bebidasSinAlcohol,
    carniceria,
    golosinas,
    congelados,
    fiambreria,
    frutas_y_verduras,
    heladeria,
    higiene,
    lacteos,
    libreria,
    limpieza,
    mascotas,
    panaderia,
    snacks,
    varios
  ]

  return (
    <main>
      <Slider srcs={srcs} />
      <SecondarySlider srcs={secondarySrcs} />
    </main>
  )
}
