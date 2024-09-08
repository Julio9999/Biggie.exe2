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
import { RecomendedProducts } from "./ui";
import { CarouselItem } from "./ui/carousel-item";

export const secondarySrcs: SliderItem[] = [
  { image: alimentos, description: 'Alimentos Especiales', id: 'Alimentos Especiales' },
  { image: almacen, description: 'Almacén', id: 'Almacén' },
  { image: asado, description: 'Asado', id: 'Asado'  },
  { image: bebes, description: 'Bebes', id: 'Bebes' },
  { image: bebidasAlcoholicas, description: 'Bebidas con Alcohol', id: 'Bebidas con Alcohol' },
  { image: bebidasSinAlcohol, description: 'Bebidas sin Alcohol', id: 'Bebidas sin Alcohol' },
  { image: carniceria, description: 'Carneceria', id: 'Carneceria' },
  { image: golosinas, description: 'Chocolates y Golosinas', id:  'Chocolates y Golosinas'},
  { image: congelados, description: 'Congelados', id: 'Congelados' },
  { image: fiambreria, description: 'Fiambreria', id: 'Fiambreria' },
  { image: frutas_y_verduras, description: 'Frutería y Verduleria', id: 'Frutería y Verduleria'  },
  { image: heladeria, description: 'Heladeria y Confiteria', id:  'Heladeria y Confiteria' },
  { image: higiene, description: 'Higiene Personal', id: 'Higiene Personal' },
  { image: lacteos, description: 'Lácteos', id: 'Lácteos' },
  { image: libreria, description: 'Libreria', id: 'Libreria' },
  { image: limpieza, description: 'Limpieza', id:'Limpieza'  },
  { image: mascotas, description: 'Mascotas', id: 'Mascotas' },
  { image: panaderia, description: 'Panaderia', id: 'Panaderia' },
  { image: snacks, description: 'Snacks', id: 'Snacks' },
  { image: varios, description: 'Varios', id: 'Varios' }
]

export default function Home() {

  const srcs = [
    delivery,
    frutas,
    promo,
    chocolate,
  ]

  

  return (
    <main>
      <Slider srcs={srcs} />
      <div className="px-4 pb-4">
        <ResponsiveSlider
          items={secondarySrcs}
          sliderItemComponent={<CarouselItem />}
          carrouselItemsClassName="max-w-[80px] lg:max-w-[100px] p-0 mx-2 "
        />
        <RecomendedProducts />
      </div>
    </main>
  )
}
