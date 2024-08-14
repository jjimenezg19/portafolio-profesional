export default function Title({ text, className }) {
  className = className ?? ""
  return (
    <div className={`flex flex-col items-center gap-2 md:gap-4 text-center ${className}`}>
      <h1 className="text-neutral100 text-3xl md:text-5xl">{text}</h1>
      <div className="rounded-xl h-1 bg-primary300 w-22 md:w-40"></div>
    </div>
  )
}
