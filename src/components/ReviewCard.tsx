import star from '../assets/icons/star.svg'

interface IReviewCardProps {
    imgURL: string,
    customerName: string,
    rating: number,
    feedback: string
}

const ReviewCard = (review: IReviewCardProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 text-sm
      sm:px-16
      lg:gap-8 lg:px-8 lg:w-1/3
      xl:text-lg"
    >
        <img
          className='rounded-full w-1/4 h-1/4
          lg:w-2/5 lg:h-2/5'
          src={review.imgURL} alt='img'
        />
        <blockquote className='text-center font-montserrat'>
            {review.feedback}
        </blockquote>
        <div className="mt-2 flex justify-start gap-2.5">
            <img src={star} alt="*" />
            <p className='font-montserrat text-slate-gray'>{`(${review.rating})`}</p>
        </div>
        <h3 className='font-bold text-xl md:text-2xl'>{review.customerName}</h3>
    </div>
  )
}

export default ReviewCard