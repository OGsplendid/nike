import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {
  return (
    <section
      className="flex flex-wrap justify-center gap-4 mt-14 px-4
      md:px-8
      lg:px-16"
    >
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Services