import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"

const PopularProducts = () => {
  return (
    <section
      id="popular"
      className="px-4 md:px-8 lg:px-16"
    >
      <h2
        className="capitalize mt-10 font-palanquin text-4xl leading-[50px] font-bold
        lg:text-[60px] lg:leading-[70px]"
      >
        our <span className="text-coral-red inline-block mt-3">popular</span> products
      </h2>

      <p
        className="font-montserrat text-slate-gray text-md leading-8 mt-6 mb-14
        lg:text-xl"
      >
        Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design and value.
      </p>

      <div
        className="flex flex-wrap gap-5 justify-center"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
      >
        {products.map((product) => (
          <PopularProductCard key={product.imgURL} product={product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts
