interface IServiceCardProps {
    imgURL: string,
    label: string,
    subtext: string
}

const ServiceCard = (service: IServiceCardProps) => {
  return (
    <div className="w-[256px] rounded-[20px] shadow-3xl px-6 py-8">
        <div
            className="w-7 h-7 p-1 flex justify-center items-center bg-coral-red rounded-full"
        >
            <img src={service.imgURL} alt={service.label} />
        </div>
        <h3 className="mt-3 font-palanquin text-xl font-bold">{service.label}</h3>
        <p className="mt-2 break-words font-montserrat text-sm text-slate-gray">{service.subtext}</p>
    </div>
  )
}

export default ServiceCard