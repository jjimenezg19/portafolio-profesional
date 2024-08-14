import HaroldTitle from "@/components/HaroldTitle.jsx"

export default function Hero({ content }) {
  return (
    <div className="presentation-wrapper text-center text-neutral100">
      <h1 className="text-4xl sm:text-6xl lg:text-[5.5rem] flex flex-wrap items-end justify-center gap-y-2 gap-x-4 lg:gap-x-8">
        {content.titleOne} <HaroldTitle className="w-40 sm:w-65 lg:w-100 -rotate-[3deg] hover:rotate-0 transition-transform duration-300 shrink-0" />
      </h1>
      <h1 className="text-4xl sm:text-6xl lg:text-[5.5rem]">{content.titleTwo}</h1>
      <h2 className="reveal-text-animation w-fit mx-auto text-xs sm:text-xl lg:text-2xl mt-4 overflow-hidden relative flex">
        <div className="shrink-0 bg-ternary500 z-[1] pr-[6px] font-bold text-ternary500 relative">{content.subtitleOne}</div>
        <div className="right text-neutral300">{content.subtitleTwo}</div>
        <div className="left z-[2] shrink-0 font-bold">{content.subtitleOne}</div>
      </h2>
    </div>
  )
}
