import CustomerReviews from "../sections/CustomerReviews";
import Hero from "../sections/Hero";
import PopularProducts from "../sections/PopularProducts";
import Services from "../sections/Services";
import SpecialOffer from "../sections/SpecialOffer";
import Subscribe from "../sections/Subscribe";
import SuperQuality from "../sections/SuperQuality";

const Main = () => {
  return (
    <main className="relative">
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe />
    </main>
  )
}

export default Main