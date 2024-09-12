import { CategorySelect } from "@/components"
import { IoSearchOutline } from "react-icons/io5";
import bgImage from "@/assets/search-img.webp"

export const SearchComponent = () => {
    return (
        <div
            className="h-44 flex w-full"
            style={{
                backgroundImage: `url(${bgImage?.src})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}>
            <div className="w-full rounded-full border h-12 mt-6 flex px-4 justify-between bg-white"
            >
                <div className="w-1/2 max-w-[50%]">
                    <CategorySelect />
                </div>
                <span className="border h-full w-[0.5px]"></span>
                <div className="flex-1 relative py-1.5  box-border group">
                    <input
                        className="h-full w-full pl-1.5 pr-8 ring-0 border-none outline-none focus-visible:outline-none focus-visible:ring-ring placeholder:text-grayText"
                        placeholder="Buscar"
                    />
                    <IoSearchOutline className="absolute group-focus-within:text-mainColor top-3 right-0" size={20} />
                </div>
            </div>
        </div>
    )
}