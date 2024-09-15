import { CategorySelect } from "@/components"
import { IoSearchOutline } from "react-icons/io5";
import bgImage from "@/assets/search-img.webp";
import { Switch } from "@/components/ui/switch"

export const SearchComponent = () => {
    return (
        <div
            className="flex flex-col pb-8 gap-4"
            style={{
                backgroundImage: `url(${bgImage?.src})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div className="flex w-full flex-col lg:gap-0 gap-6 lg:flex-row items-center mt-6 lg:max-w-[900px]   mx-auto">
                <div className="flex w-full">
                    <div className="w-full rounded-full lg:rounded-s-full lg:rounded-e-none border h-12  flex px-4 justify-between bg-white"
                    >
                        <div className="w-1/2 max-w-[50%] lg:max-w-full">
                            <CategorySelect />
                        </div>
                        <span className=" h-full w-[0.5px]"></span>
                        <div className="flex-1 relative py-1.5  box-border group">
                            <input
                                className="h-full w-full pl-1.5 pr-8 ring-0 border-none outline-none focus-visible:outline-none focus-visible:ring-ring placeholder:text-grayText"
                                placeholder="Buscar"
                            />
                            <IoSearchOutline className="absolute group-focus-within:text-mainColor top-3 right-0" size={20} />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center text-center ">
                    <div className="bg-white flex h-12 px-3 items-center gap-2 rounded-full lg:rounded-e-full lg:rounded-s-none text-grayText">
                        <Switch />
                        <span className="font-normal">Ofertas</span>
                    </div>
                </div>
            </div>
        </div>
    )
}