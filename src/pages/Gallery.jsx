import { useState } from 'react'
import GalleryHero from '../components/gallery/GalleryHero.jsx'
import GalleryFilters from '../components/gallery/GalleryFilters.jsx'
import GalleryGrid from '../components/gallery/GalleryGrid.jsx'
import GalleryCta from '../components/gallery/GalleryCta.jsx'

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('Photos')
  return (
    <div className="min-h-screen bg-gray-50">
      <GalleryHero />
      <GalleryFilters activeFilter={activeFilter} onChange={setActiveFilter} />
      <GalleryGrid filter={activeFilter} />
      <GalleryCta />
    </div>
  )
}

export default Gallery


