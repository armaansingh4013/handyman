import { useEffect } from 'react'
import AboutHero from '../components/about/AboutHero'
import OurStory from '../components/about/OurStory'
import CoreValues from '../components/about/CoreValues'
import LeadershipTeam from '../components/about/LeadershipTeam'
import TrackRecord from '../components/about/TrackRecord'
import Certifications from '../components/about/Certifications'
import WorkWithUsCta from '../components/about/WorkWithUsCta'
import TestimonialsSection from '../components/TestimonialsSection'

export default function About() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.scroll-animate'))
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <AboutHero />
      <OurStory />
      <CoreValues />
      {/* <LeadershipTeam /> */}
      {/* <TestimonialsSection/> */}
      {/* <TrackRecord />
      <Certifications /> */}
      <WorkWithUsCta />
    </div>
  )
}


