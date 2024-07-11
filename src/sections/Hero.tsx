import Button from "../components/Button"
import bigShoe1 from "../assets/images/big-shoe1.png"

import arrowRight from "../assets/icons/arrow-right.svg"
import { statistics, shoes } from "../constants"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex flex-col items-center justify-between min-h-screen max-container px-4
      md:px-8
      lg:flex-row lg:px-16"
    >
      <div
        className="relative flex flex-col justify-center items-start w-full pt-28
        lg:w-2/5"
      >
        <p
          className="text-xl font-montserrat text-coral-red
          lg:text-4xl"
        >
          Our Summer Collection
        </p>
        <h1
          className="mt-10 font-palanquin text-4xl leading-[50px] font-bold capitalize
          lg:text-[60px]
          lg:leading-[70px]"
        >
          <span className="lg:bg-white lg:whitespace-nowrap relative pr-10">the new arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">nike</span> shoes
        </h1>
        <p
          className="font-montserrat text-slate-gray text-md leading-8 mt-6 mb-14
          lg:text-xl"
        >
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>

        <Button label="Shop now" iconURL={arrowRight} />
 
        <div
          className="flex justify-center items-start flex-wrap w-full mt-8 mb-8 gap-8
          md:justify-start"
        >
          {statistics.map((stat, index) => (
            <div key={index}>
              <p
                className="text-[36px] font-palanquin font-bold
                lg:text-[48px]"
              >
                  {stat.value}
              </p>
              <p
                className="leading-7 font-montserrat text-slate-gray
                lg:text-[18px]"
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex flex-col justify-center items-center lg:min-h-screen bg-primary bg-hero bg-cover p-2
        lg:w-3/5 lg:justify-center lg:gap-20 lg:flex-col"
      >
        <img
          className="object-contain relative w-60 h-auto
          sm:w-96
          lg:w-[420px]
          xl:w-[540px]"
          src={bigShoeImage}
          alt="shoe collection"
        />

        <div
          className="flex flex-wrap justify-center gap-3 mt-5
          lg:flex-row lg:flex-wrap"
        >
            {shoes.map((shoe) => (
              <div key={shoe.thumbnail}>
                <ShoeCard
                  activeShoe={bigShoeImage}
                  shoe={shoe}
                  changeBigShoeImage={(shoe) => setBigShoeImage(shoe)} />
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Hero