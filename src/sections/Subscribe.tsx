import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section
      id="subscribe"
      className="px-4 pb-6 flex flex-col items-center justify-center
      md:px-8
      lg:px-16"
    >
      <h2
        className="capitalize mt-10 font-palanquin text-4xl leading-[50px] font-bold text-center
        lg:text-[60px]
        lg:leading-[70px]"
      >
        sign up for<span className="text-coral-red inline-block mt-3">updates</span> & newsletter
      </h2>
      <div
        className="relative mt-10 mb-6 w-full rounded-full text-gray-500
        sm:flex sm:items-center sm:h-16 sm:border sm:border-gray-500
        md:w-4/5"
      >
        <input type="email"
          className="outline-none rounded-full text-slate-gray border-4 w-full h-12 px-4 placeholder-gray-300
          sm:border-none sm:w-3/4 sm:ml-3
          md:w-3/5"
          placeholder="subscribe@nike.com"
        />
        <div className="mt-3
        sm:absolute sm:right-1 sm:-top-2">
          <Button label="Sign Up" />
        </div>
      </div>
    </section>
  )
}

export default Subscribe