import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="mt-6 bg-pale-blue flex flex-col items-center justify-center p-8">
        <h3
          className="capitalize font-palanquin text-4xl leading-[50px] font-bold
          lg:text-[60px]
          lg:leading-[70px]"
        >
          what our <span className="text-coral-red inline-block mt-3">customers</span> <br /> 
          say?
        </h3>
        <p
          className="font-montserrat text-slate-gray text-md leading-8 mt-6 mb-14
          lg:text-xl"
        >
          Hear genuine stories from our satisfied customers 
          about their exceptional experience with us
        </p>

        <div
          className="flex flex-col gap-12
          lg:flex-row justify-center"
        >
          {reviews.map((review) => (
            <ReviewCard key={review.imgURL} {...review} />
          ))}
        </div>
    </section>
  )
}

export default CustomerReviews