import Button from "../components/Button"
import shoe8 from "../assets/images/shoe8.svg"

const SuperQuality = () => {
  return (
    <section
      id="super-quality"
      className="flex flex-col justify-between items-center gap-10 w-full px-4
      md:flex-row md:px-8
      lg:px-16
      xl:mt-12"
    >
      <div
        className="md:w-3/5"
      >
        <h2
          className="capitalize mt-10 font-palanquin text-4xl leading-[50px] font-bold
          lg:text-[60px]
          lg:leading-[70px]"
        >
          we provide you <span className="text-coral-red inline-block mt-3">super</span> <br /> 
          <span className="text-coral-red inline-block mt-3">quality</span> shoes
        </h2>

        <p
          className="font-montserrat text-slate-gray text-md leading-8 mt-6 mb-14
          lg:text-xl"
        >
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your 
          experience, providing you with unmatched quality, innovation, and a touch of elegance.
          <br /><br />
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Button label="View details" />
      </div>

      <div
        className="flex justify-center items-center w-64
        sm:w-80
        md:w-[500px]"
      >
        <img
          src={shoe8}
          alt="shoe8"
          className="w-full"
        />
      </div>
    </section>
  )
}

export default SuperQuality