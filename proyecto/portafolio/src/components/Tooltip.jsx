export default function Tooltip({ children, content }) {
  return (
    <div className="relative flex justify-center group">
      <div>{children}</div>
      <div style={{ top: "calc(100% + 8px)" }} className="w-max absolute opacity-0 group-hover:opacity-100 bg-neutral100 text-ternary500 font-bold px-2 py-1 transition rounded-lg text-sm cursor-default">
        <div className="size-2 bg-neutral100 rotate-45 absolute -top-1 left-0 right-0 mx-auto"></div>
        {content}
      </div>
    </div>
  )
}
