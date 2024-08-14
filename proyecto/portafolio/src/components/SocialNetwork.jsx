import "@/assets/styles/social-network.css"

export default function SocialNetwork({ icon, to }) {
  to = to ?? "#"

  return (
    <div className="sn-container size-14 sm:size-22 md:size-26 lg:size-32 flex justify-center items-center">
      <div className="sn-wrapper size-[70%]">
        <a href={to} target="_blank" className="bg-neutral100">
          <i className={`text-base sm:text-2xl md:text-3xl lg:text-4xl text-ternary500 transition duration-300 ${icon}`}></i>
        </a>
      </div>
    </div>
  )
}
