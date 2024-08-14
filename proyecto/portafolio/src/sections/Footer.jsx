export default function Footer({ className, content }) {
  className = className ?? ""

  const networks = [
    { to: "https://github.com/haroldcdb", icon: "fab fa-github" },
    { to: "https://www.linkedin.com/in/harold-c%C3%B3rdoba-arroyo-678aaa1ab/", icon: "fab fa-linkedin-in" },
    { to: "mailto:cordobaharold500@gmail.com", icon: "fa fa-envelope" },
    { to: "https://wa.me/+50683994675", icon: "fa fa-whatsapp" }
  ]

  return (
    <footer className="w-full flex justify-center bg-ternary400 py-2 md:py-4 md:pl-20">
      <div className="w-full max-w-[100rem] px-16 md:px-20 flex flex-col sm:flex-row justify-between items-center md:gap-2">
        <ul className="flex justify-center items-center gap-6 footer-icon-wrapper">
          {networks.map(({ to, icon }, index) => (
            <li key={index}>
              <a href={to} className="text-xl" target="_blank">
                <i className={`${icon} transition duration-200 hover:scale-125`}></i>
              </a>
            </li>
          ))}
        </ul>
        <p className="font-bold text-center text-sm md:text-base">{content.slogan}</p>
      </div>
    </footer>
  )
}
