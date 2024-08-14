export default function NavigationIndicator({ color, open, className }) {
  color = color ?? "#D9D9D9"
  className = className ?? ""

  return (
    <div className={`relative flex justify-center items-center ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 152" fill="none">
        <path className="navigation-path" clipRule="evenodd" fillRule="evenodd" d="M80 0H0v152h80v-11.491c-.123-3.302-.8867-5.499-2.0977-7.062-1.2168-1.567-2.9296-2.556-5.0761-3.353-1.3262-.493-2.7852-.901-4.3672-1.33C44.1797 123.479 26 101.863 26 76c0-25.8647 18.1836-47.4822 42.4648-52.7654l1.0743-.2949 1.0332-.2952c.4609-.136.9101-.2746 1.3457-.4194.3086-.1028.6113-.2087.9082-.3189 2.1465-.7973 3.8593-1.7863 5.0761-3.3532 1.211-1.5628 1.9747-3.76 2.0977-7.0623V0Z" />
      </svg>

      <div className={`w-15 md:w-20 h-15 md:h-20 absolute flex justify-center items-center transition duration-300 ${open ? "translate-x-1/2" : "-translate-x-full"}`}>
        <div className="absolute w-17 md:w-22 h-17 md:h-22 rounded-full bg-gradient-to-br from-primary100 to-primary400"></div>
        <div className="absolute w-full h-full rounded-full bg-secondary100"></div>
      </div>
    </div>
  )
}
