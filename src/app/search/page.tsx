import { SearchComponent } from "./ui/search-component";

const Page = () => {
    return (
        <main>
            <SearchComponent />
            <section className="text-center my-6">
                <h2 className="text-xl font-bold">Catálogo de Productos</h2>
            </section>
        </main>
    )
}

export default Page;