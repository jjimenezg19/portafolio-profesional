export default function Timeline({ data, onRight }) {
  return (
    <section className="timeline w-full max-w-[54em] px-4">
      {data.map(({ time, title, subtitle, text }, index) => (
        <article key={index} className={`flex gap-8 items-stretch ${onRight && "flex-row-reverse"}`}>
          <div className={`hidden md:flex items-center w-45 shrink-0 text-neutral300 text-right text-base ${onRight ? "justify-start" : "justify-end"}`}>{time}</div>
          <div className="hidden md:flex justify-center items-center min-h-full relative">
            <div className="absolute h-full w-2 bg-neutral100"></div>
            <div className="relative shrink-0 size-6 rounded-full border-4 border-neutral100 bg-gradient-to-br from-primary100 to-primary400"></div>
          </div>
          <div className={`timeline-text transition-all duration-1000 flex flex-col gap-3 opacity-0 py-12 md:py-25 ${onRight ? "-translate-x-25" : "translate-x-25"}`}>
            <div className={`${onRight ? "text-right" : "text-left"}`}>
              <div className="text-2xl font-bold">{title}</div>
              <div className="text-lg text-neutral300">{subtitle}</div>
              <div className="block md:hidden text-sm text-neutral500 italic">{time}</div>
            </div>
            <div className="text-base text-neutral200">{text}</div>
          </div>
        </article>
      ))}
    </section>
  )
}
