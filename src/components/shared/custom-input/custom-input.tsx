import { Input } from "@/components/ui/input"
import { IoSearchSharp } from "react-icons/io5";
import { GoChevronLeft } from "react-icons/go";

interface Props {
    className?: string;
    handleClick: () => void;
}

export const CustomInput = ({ className, handleClick }: Props) => {
    return (
        <div className={`relative w-full items-center gap-4 ${className}`}>
            <GoChevronLeft size={25} className={"text-mainColor"} onClick={() => handleClick()} />
            <Input
                className={`rounded-3xl border-2 border-mainColor outline outline-none focus-visible:ring-0 w-full pr-12 `}
                placeholder="Buscar productos"
            />
            <div className="flex-1 absolute top-2 right-5">
                <IoSearchSharp size={20}
                    className={"text-mainColor"}
                />
            </div>
        </div>
    )
}