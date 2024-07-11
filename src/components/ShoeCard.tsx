interface IShoeCardProps {
    shoe: {
        thumbnail: string;
        bigShoe: string;
    },
    activeShoe: string,
    changeBigShoeImage: (img: string) => void,
}

const ShoeCard = ({ shoe, activeShoe, changeBigShoeImage }: IShoeCardProps) => {

    const handleClick = () => {
        changeBigShoeImage(shoe.bigShoe);
    };

  return (
    <div
        className={`border-2 rounded-xl
        ${activeShoe === shoe.bigShoe
            ? 'border-coral-red'
            : 'border-transparent'}
        cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
    >
        <div
            className="flex justify-center items-center bg-card bg-center
            bg-cover w-20 h-20 rounded-xl p-2
            lg:w-28 lg:h-28
            xl:w-36 xl:h-36"
        >
            <img 
                className="w-[110px] hover:w-[300px] transition-all"
                src={shoe.thumbnail}
                alt="shoe collection"
            />
        </div>
    </div>
  )
}

export default ShoeCard