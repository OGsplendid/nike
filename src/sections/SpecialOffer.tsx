import Button from "../components/Button"

import arrowRight from "../assets/icons/arrow-right.svg"
import offer from "../assets/images/offer.svg"

const SpecialOffer = () => {
  return (
      <section
        id="special-offer"
        className="relative flex flex-col justify-center items-start w-full pt-8 gap-10 px-4
        sm:pt-16 md:flex-row-reverse items-center
        md:px-8
        lg:px-16"
      >
        <div className="md:w-1/2">
          <h1
            className="mt-10 font-palanquin text-4xl leading-[50px] font-bold capitalize
            md:mt-0
            lg:text-[60px]
            lg:leading-[70px]"
          >
            <span className="text-coral-red inline-block mt-3 md:mt-0">special</span> offer
          </h1>
          <p
            className="font-montserrat text-slate-gray text-md leading-8 mt-6 mb-14
            md:mb-6
            lg:text-xl"
          >
            Embark on a shopping journey that redefines your experience with unbeatable deals.
            From premier selections to incredible savings, we offer unparalleled value that sets us apart.
            <br /><br />
            Navigate a realm of possibilities designed to fullfill your unique desires, surpassing the
            lofties expectations. Your journey with us is nothing short of exceptional.
          </p>
          <div
            className="flex flex-col mt-11 gap-4
            md:flex-row"
          >
            <Button label="Shop now" iconURL={arrowRight} />
            <Button
              label="Learn more"
              bgColor='bg-white'
              borderColor='border-slate-gray'
              textColor='text-stale-gray'
            />
          </div>
        </div>

        <div className="md:w-1/2">
          <img src={offer} alt="offer" />
        </div>
      </section>
  )
}

export default SpecialOffer