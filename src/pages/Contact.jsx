import ContactHero from "../components/contact/ContactHero"
import ContactInfoCards from "../components/contact/ContactInfoCards"
import ContactFormAndVisit from "../components/contact/ContactFormAndVisit"
import EmergencyCta from "../components/contact/EmergencyCta"

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ContactHero />
      <ContactInfoCards />
      <ContactFormAndVisit />
      <EmergencyCta />
    </div>
  )
}


