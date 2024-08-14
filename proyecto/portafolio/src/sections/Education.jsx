import Timeline from "@/components/Timeline.jsx"
import Title from "@/components/Title.jsx"

export default function Education({ id, className, content }) {
  className = className ?? ""

  return (
    <section id={id} className={`flex flex-col gap-8 md:gap-16 items-center md:pl-20 py-14 md:py-30 ${className}`}>
      <Title text={content.title}></Title>
      <Timeline data={content.content} onRight />
    </section>
  )
}
