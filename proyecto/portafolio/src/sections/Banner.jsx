import SocialNetwork from "@/components/SocialNetwork.jsx"
import Hero from "@/components/Hero.jsx"
import AboutMe from "@/components/AboutMe.jsx"

import "@/assets/styles/banner.css"

export default function Banner({ id, className, content }) {
  className = className ?? ""

  const networks = [
    { to: "https://github.com/haroldcdb", icon: "fab fa-github" },
    { to: "https://www.linkedin.com/in/harold-c%C3%B3rdoba-arroyo-678aaa1ab/", icon: "fab fa-linkedin-in" },
    { to: "mailto:cordobaharold500@gmail.com", icon: "fa fa-envelope" },
    { to: "https://wa.me/+50683994675", icon: "fa fa-whatsapp" }
  ]

  return (
    <section id={id} className={`w-full max-w-[80rem] mx-auto px-4 md:pl-20 md:pr-0 ${className}`}>
      <div className="h-screen min-h-[25rem] md:min-h-[40rem] flex flex-col gap-12 sm:gap-16 lg:gap-20 justify-center items-center">
        <Hero content={content}></Hero>

        <article className="grid grid-cols-4 gap-10 sm:gap-16 md:gap-16 lg:gap-20 social-networks-wrapper px-4">
          {networks.map(({ to, icon }, index) => (
            <SocialNetwork to={to} icon={icon} key={`network-${index}`} />
          ))}
        </article>
      </div>

      <AboutMe text={content.aboutMe} />
    </section>
  )
}
