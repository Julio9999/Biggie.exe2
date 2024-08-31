import frutas from "@/assets/Rpu23AmL4sCVh68ngGDt33lqL8sEB4QPZQkBUVEY.webp";
import chocolate from "@/assets/W7qd7rF9r921BxMTvX6rbnBOTRZVJyGFWwY2WJjc.webp"
import promo from "@/assets/ZRkxpIe7uZVYcnRol2H5zngqTXYhVxM3x3tFvIpI.webp"
import delivery from "@/assets/kL1d0r4M4YCzck8LEMM906uQ2sfMQInKjrXJaCrr.webp"


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




import { ResponsiveSlider, Slider } from '@/components';
import { SliderItem } from "@/interfaces";
import { RecomendedProducts } from "./ui/recomended-products";

export default function Home() {

  const srcs = [
    delivery,
    frutas,
    promo,
    chocolate,
  ]

  const secondarySrcs: SliderItem[] = [
    { image: alimentos, description: 'Alimentos Especiales' },
    { image: almacen, description: 'Almacén' },
    { image: asado, description: 'Asado' },
    { image: bebes, description: 'Bebes' },
    { image: bebidasAlcoholicas, description: 'Bebidas con Alcohol' },
    { image: bebidasSinAlcohol, description: 'Bebidas sin Alcohol' },
    { image: carniceria, description: 'Carneceria' },
    { image: golosinas, description: 'Chocolates y Golosinas' },
    { image: congelados, description: 'Congelados' },
    { image: fiambreria, description: 'Fiambreria' },
    { image: frutas_y_verduras, description: 'Frutería y Verduleria' },
    { image: heladeria, description: 'Heladeria y Confiteria' },
    { image: higiene, description: 'Higiene Personal' },
    { image: lacteos, description: 'Lácteos' },
    { image: libreria, description: 'Libreria' },
    { image: limpieza, description: 'Limpieza' },
    { image: mascotas, description: 'Mascotas' },
    { image: panaderia, description: 'Panaderia' },
    { image: snacks, description: 'Snacks' },
    { image: varios, description: 'Varios' }
  ]

  return (
    <main>
      <Slider srcs={srcs} />
      <div className="px-4 pb-4">
        <ResponsiveSlider items={secondarySrcs} />
        <RecomendedProducts />
      </div>
    </main>
  )
}
