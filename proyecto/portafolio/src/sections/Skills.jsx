import AccordionCards from "@/components/AccordionCards.jsx"
import Title from "@/components/Title.jsx"

export default function Skills({ id, className, content }) {
  className = className ?? ""

  return (
    <section id={id} className={`relative h-screen min-h-200 flex flex-col gap-4 justify-center items-center md:pl-20 bg-ternary300 ${className}`}>
      <div className="absolute top-0 left-0 w-full h-40 bg-ternary500" style={{ clipPath: "polygon(0 0, 0 40%, 100% 0)" }}></div>
      <div className="flex flex-col items-center gap-8 text-center">
        <Title text={content.title}></Title>
        <h3 className="w-full max-w-160 text-neutral200 text-base md:text-xl px-4">{content.subtitle}</h3>
        <span className="text-sm md:text-base text-neutral300 flex items-center gap-2">
          <i className="fas fa-arrow-left"></i> {content.indication}
        </span>
      </div>
      <AccordionCards />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-ternary500" style={{ clipPath: "polygon(0 60%, 0 100%, 100% 100%)" }}></div>
    </section>
  )
}
