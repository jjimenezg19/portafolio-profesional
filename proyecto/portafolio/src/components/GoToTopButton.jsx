export default function GoToTopButton({ show, onClick }) {
  return (
    <div onClick={onClick} className={`${show ? "bottom-4" : "-bottom-14"} z-10 group goToTopButton fixed right-4 size-10 md:size-14 rounded-full flex flex-col justify-center items-center bg-secondary300 text-ternary500 cursor-pointer`}>
      <i className="fas fa-arrow-up text-xl md:text-2xl group-hover:text-lg md:group-hover:text-xl group-hover:-mt-2"></i>
      <p className="hidden md:block text-[0.6rem] h-0 opacity-0 group-hover:h-3 group-hover:opacity-100 group-hover:-mt-1 font-semibold">Go to top</p>
    </div>
  )
}
