import star from '../assets/icons/star.svg'

interface IPopularProductCardProps {
    product: {
        imgURL: string,
        name: string,
        price: string,
    }
}

const PopularProductCard = ({ product }: IPopularProductCardProps) => {
  return (
    <div
        className="flex flex-col gap-1 w-64"
    >
        <img
            className=""
            src={product.imgURL}
            alt={product.name}
        />
        <div className="mt-2 flex justify-start gap-2.5">
            <img className='w-5' src={star} alt="rating" />
            <p className='font-montserrat text-xl leading-normal text-slate-gray'>(4.5)</p>
        </div>
        <h3 className='mt-0.5 text-xl leading-normal font-semibold font-palanquin'>{product.name}</h3>
        <p className='mt-0.5 font-semibold font-montserrat text-coral-red text-xl leading-normal'>{product.price}</p>
    </div>
  )
}

export default PopularProductCard