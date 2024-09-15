import { secondarySrcs } from "../page";

const Page = () => {
    return (
        <main>
            <section className="text-center">
                <h2 className="font-bold text-xl">Categorías</h2>
                <article className="flex flex-wrap gap-x-6 lg:gap-x-24 gap-y-2 px-12 mt-8 mb-20 justify-center md:justify-start">
                    {
                        secondarySrcs.map(item => (
                            <div key={item.id} className="flex flex-col items-center w-[100px]">
                                <picture>
                                    <img 
                                    className="rounded-md"
                                    src={item.image.src} 
                                    alt={item.description} />
                                </picture>
                                <span className="font-bold break-words" >{item.description}</span>
                            </div>
                        ))
                    }
                </article>
            </section>

        </main>
    )
}

export default Page;