import Title from "@/components/Title.jsx"

import Lottie from "lottie-react"
import contactme from "@/assets/lottie/contactme.json"

import { toast } from "react-toastify"
import { useEffect, useState } from "react"
import FormData from "form-data"
import axios from "axios"

const MAILGUN_KEY = import.meta.env.VITE_MAILGUN_KEY
const MAILGUN_URL = import.meta.env.VITE_MAILGUN_URL
const SECRET_WORD = import.meta.env.VITE_SECRET_WORD

export default function Contact({ id, className, content }) {
  className = className ?? ""

  const DEFAULT_VALUES = { email: "", subject: "", text: "" }

  const [contactForm, setContactForm] = useState(DEFAULT_VALUES)
  const [validForm, setValidForm] = useState(false)

  useEffect(() => {
    const { email, subject, text } = contactForm
    setValidForm(email && subject && text && subject.includes(SECRET_WORD))
  }, [contactForm])

  const handleInput = (target, input) => {
    setContactForm((value) => ({ ...value, [target]: input }))
  }

  const sendEmail = () => {
    if (!validForm) return

    const { email, subject, text } = contactForm

    const form = new FormData()
    form.append("from", `Web Portfolio <${email}>`)
    form.append("to", "cordobaharold500@gmail.com")
    form.append("subject", subject)
    form.append("text", text)

    axios
      .post(`https://api.mailgun.net/v3/${MAILGUN_URL}/messages`, form, {
        auth: {
          username: "api",
          password: MAILGUN_KEY
        }
      })
      .then(() => {
        setContactForm(DEFAULT_VALUES)
        toast.success("Thank you for your email")
      })
      .catch((error) => {
        console.error(error)
        toast.error("Sorry, something went wrong")
      })
  }

  return (
    <section id={id} className={`h-screen min-h-200 flex flex-col justify-center items-center gap-8 md:gap-16 md:pl-20 ${className}`}>
      <div className="flex flex-col items-center gap-8 text-center">
        <Title text={content.title}></Title>
        <h3 className="w-full max-w-160 text-neutral300 text-base md:text-xl px-4">{content.subtitle}</h3>
      </div>
      <div className="w-full flex flex-col-reverse sm:flex-row items-center justify-center relative">
        <Lottie className="absolute sm:relative w-full sm:w-full sm:max-w-110 opacity-40 sm:opacity-100" animationData={contactme} loop={true} />
        <div className="w-full max-w-120 flex flex-col gap-4 px-4 relative">
          <input value={contactForm.email} onInput={({ target }) => handleInput("email", target.value)} className="h-input w-full" placeholder={content.email} />
          <input value={contactForm.subject} onInput={({ target }) => handleInput("subject", target.value)} className="h-input w-full" placeholder={content.subject} />
          <textarea value={contactForm.text} onInput={({ target }) => handleInput("text", target.value)} className="h-textarea w-full h-35 md:h-50" placeholder={content.message}></textarea>
          <div className="flex justify-end">
            <button disabled={!validForm} onClick={sendEmail} className="px-4 py-2 text-sm md:text-base font-bold text-ternary500 flex items-center justify-center rounded-md md:rounded-lg bg-primary300 hover:bg-primary200 disabled:bg-ternary100 disabled:cursor-not-allowed disabled:text-neutral400 transition cursor-pointer">
              {content.button}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
