"use client"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useState } from "react";

import { IoMdArrowDropdown } from "react-icons/io";

const selectItems = [
    { id: 1, label: 'Todas las categorías' },
    { id: 2, label: 'Alimentos Especiales' },
    { id: 3, label: 'Almacén' },
    { id: 4, label: 'Asado' },
    { id: 5, label: 'Bebes' },
    { id: 6, label: 'Bebidas con Alcohol' },
    { id: 7, label: 'Bebidas sin Alcohol' },
    { id: 8, label: 'Carniceria' },
    { id: 9, label: 'Chocolates y Golosinas' },
    { id: 10, label: 'Congelados' },
    { id: 11, label: 'FARMACIA' },
    { id: 12, label: 'Fiambreria' },
    { id: 13, label: 'Frutería y Verdulería' },
    { id: 14, label: 'Heladeria y Confiteria' },
    { id: 15, label: 'Higiene Personal' },
    { id: 16, label: 'Lácteos' },
    { id: 17, label: 'Libreria' },
    { id: 18, label: 'Limpieza' },
    { id: 19, label: 'Mascotas' },
    { id: 20, label: 'Panaderia' },
    { id: 21, label: 'Snacks' },
    { id: 22, label: 'Varios' },
]


export const CategorySelect = () => {

    const [value, setValue] = useState('');

    return (
        <Select onValueChange={(value) =>  setValue(() => value) }>
            <SelectTrigger
                className={cn("h-full border-none outline text-base p-0 text-grayText outline-none focus:ring-0 truncate w-36", {
                    'text-black': value
                })}
                icon={<IoMdArrowDropdown size={25}
                    className={cn("text-black w-8", {
                        "text-mainColor": value
                    })} />
                }
            >
                <SelectValue className="border-2 w-2" placeholder="Categorias" />
            </SelectTrigger>
            <SelectContent>
                <>
                    {
                        selectItems.map(item => (
                            <SelectItem value={item.id.toString()} key={item.id}>{item.label}</SelectItem>
                        ))
                    }
                </>
            </SelectContent>
        </Select>
    )
}