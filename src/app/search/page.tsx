import { ProductList } from "@/components";
import { SearchComponent } from "./ui/search-component";

const Page = () => {
    return (
        <main>
            <SearchComponent />
            <section className="text-center my-6">
                <ProductList title="Catalogo de productos" />
            </section>
        </main>
    )
}

export default Page;