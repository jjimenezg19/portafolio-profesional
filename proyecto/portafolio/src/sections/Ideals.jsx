import Title from "@/components/Title.jsx"

export default function Ideals({ id, className, content }) {
  className = className ?? ""

  return (
    <section id={id} className={`relative min-h-screen py-40 flex justify-center items-center md:pl-20 bg-ternary300 ${className}`}>
      <div className="absolute top-0 left-0 w-full h-40 bg-ternary500" style={{ clipPath: "polygon(0 0, 100% 40%, 100% 0)" }}></div>
      <section className="flex flex-col gap-8 md:gap-16 px-4 md:px-8">
        <Title text={content.title}></Title>
        <div className="flex justify-center flex-wrap gap-5 md:gap-10 md:px-8">
          {content.content.map(({ title, text }, index) => (
            <article key={index} className="shrink-0 text-sm md:text-base text-neutral300 md:max-w-100 w-full p-5 md:p-8 rounded-2xl cursor-default bg-ternary500 transition md:hover:scale-110 shadow-lg">
              <h2 className="text-neutral100 font-bold text-xl md:text-2xl mb-4">{title}</h2>
              {text}
            </article>
          ))}
        </div>
      </section>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-ternary500" style={{ clipPath: "polygon(100% 60%, 0 100%, 100% 100%)" }}></div>
    </section>
  )
}
