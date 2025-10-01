import { useCallback, useEffect, useMemo, useState } from 'react'

// Static image items
const mediaItems = [
  {
    type: 'image',
    alt: 'Construction project 1',
    src:
      'https://readdy.ai/api/search-image?query=Modern%20luxury%20home%20exterior%20with%20contemporary%20architecture%2C%20clean%20lines%20and%20large%20windows%2C%20premium%20materials%20like%20stone%20and%20glass%2C%20professional%20architectural%20photography%2C%20landscaped%20front%20yard%20with%20modern%20design%20elements%2C%20high-end%20residential%20construction%20showcase&width=600&height=400&seq=photo-1&orientation=landscape',
  },
  {
    type: 'image',
    alt: 'Construction project 2',
    src:
      'https://readdy.ai/api/search-image?query=Modern%20luxury%20home%20interior%20with%20open%20concept%20living%20space%2C%20high-end%20finishes%20and%20contemporary%20design%2C%20floor%20to%20ceiling%20windows%20with%20natural%20light%2C%20premium%20kitchen%20with%20island%2C%20professional%20interior%20photography%20showcasing%20quality%20construction&width=600&height=400&seq=photo-2&orientation=landscape',
  },
  {
    type: 'image',
    alt: 'Construction project 3',
    src:
      'https://readdy.ai/api/search-image?query=Modern%20commercial%20office%20building%20exterior%20with%20glass%20facade%20and%20contemporary%20architecture%2C%20professional%20business%20building%20with%20clean%20geometric%20design%2C%20urban%20commercial%20construction%20project%2C%20high-quality%20building%20materials%20and%20modern%20architectural%20elements&width=600&height=400&seq=photo-3&orientation=landscape',
  },
  {
    type: 'image',
    alt: 'Construction project 4',
    src:
      'https://readdy.ai/api/search-image?query=Modern%20office%20building%20interior%20with%20open%20workspace%20design%2C%20contemporary%20office%20space%20with%20natural%20lighting%2C%20professional%20commercial%20interior%20construction%2C%20modern%20business%20environment%20with%20high-end%20finishes%20and%20design%20elements&width=600&height=400&seq=photo-4&orientation=landscape',
  },
  {
    type: 'image',
    alt: 'Construction project 5',
    src:
      'https://readdy.ai/api/search-image?query=Historic%20home%20renovation%20exterior%20showing%20restored%20colonial%20architecture%2C%20traditional%20design%20elements%20preserved%2C%20professional%20renovation%20work%20with%20period-appropriate%20materials%2C%20historic%20home%20restoration%20project%20showcasing%20quality%20craftsmanship%20and%20attention%20to%20detail&width=600&height=400&seq=photo-5&orientation=landscape',
  },
  {
    type: 'image',
    alt: 'Construction project 6',
    src:
      'https://readdy.ai/api/search-image?query=Historic%20home%20renovation%20interior%20with%20modern%20amenities%20and%20preserved%20original%20character%2C%20traditional%20architectural%20details%20maintained%2C%20updated%20kitchen%20and%20living%20spaces%2C%20professional%20renovation%20photography%20showing%20blend%20of%20historic%20and%20modern%20elements&width=600&height=400&seq=photo-6&orientation=landscape',
  },
  {
    type: 'image',
    alt: 'Construction project 7',
    src:
      'https://readdy.ai/api/search-image?query=Custom%20mountain%20home%20exterior%20with%20natural%20stone%20and%20timber%20construction%2C%20large%20windows%20overlooking%20mountain%20views%2C%20rustic%20modern%20architecture%20with%20premium%20natural%20materials%2C%20luxury%20mountain%20retreat%20construction%20project&width=600&height=400&seq=photo-7&orientation=landscape',
  },
  {
    type: 'image',
    alt: 'Construction project 8',
    src:
      'https://readdy.ai/api/search-image?query=Custom%20mountain%20home%20interior%20with%20natural%20wood%20beams%20and%20stone%20fireplace%2C%20rustic%20luxury%20design%20with%20modern%20amenities%2C%20panoramic%20mountain%20views%20through%20large%20windows%2C%20professional%20interior%20construction%20photography&width=600&height=400&seq=photo-8&orientation=landscape',
  },
  {
    type: 'image',
    alt: 'Construction project 9',
    src:
      'https://readdy.ai/api/search-image?query=Modern%20retail%20shopping%20center%20exterior%20with%20contemporary%20storefront%20design%2C%20commercial%20construction%20project%20with%20multiple%20retail%20spaces%2C%20professional%20commercial%20architecture%20with%20parking%20area%2C%20modern%20retail%20complex%20construction&width=600&height=400&seq=photo-9&orientation=landscape',
  },
  {
    type: 'image',
    alt: 'Construction project 10',
    src:
      'https://readdy.ai/api/search-image?query=Home%20addition%20exterior%20showing%20seamless%20integration%20with%20existing%20house%2C%20two-story%20residential%20addition%20project%2C%20professional%20home%20expansion%20construction%2C%20quality%20residential%20building%20work%20with%20matching%20architectural%20style&width=600&height=400&seq=photo-10&orientation=landscape',
  },
  {
    type: 'image',
    alt: 'Construction project 11',
    src:
      'https://readdy.ai/api/search-image?query=Modern%20family%20home%20with%20beautiful%20landscaping%20and%20outdoor%20living%20space%2C%20contemporary%20residential%20construction%20with%20large%20patio%20and%20garden%2C%20professional%20home%20construction%20photography%20showing%20quality%20workmanship%20and%20design&width=600&height=400&seq=photo-11&orientation=landscape',
  },
  {
    type: 'image',
    alt: 'Construction project 12',
    src:
      'https://readdy.ai/api/search-image?query=Modern%20warehouse%20and%20industrial%20building%20exterior%20with%20steel%20construction%2C%20commercial%20industrial%20construction%20project%2C%20professional%20building%20construction%20with%20loading%20docks%2C%20contemporary%20industrial%20architecture%20design&width=600&height=400&seq=photo-12&orientation=landscape',
  },
  {
    type: 'image',
    alt: 'Construction project 13',
    src:
      'https://readdy.ai/api/search-image?query=Kitchen%20renovation%20showing%20modern%20design%20with%20granite%20countertops%20and%20stainless%20steel%20appliances%2C%20professional%20kitchen%20remodeling%20work%2C%20contemporary%20kitchen%20renovation%20with%20custom%20cabinets%20and%20island%2C%20quality%20renovation%20craftsmanship&width=600&height=400&seq=photo-13&orientation=landscape',
  },
  {
    type: 'image',
    alt: 'Construction project 14',
    src:
      'https://readdy.ai/api/search-image?query=Bathroom%20renovation%20with%20modern%20fixtures%20and%20elegant%20tile%20work%2C%20luxury%20bathroom%20remodeling%20project%2C%20contemporary%20bathroom%20design%20with%20walk-in%20shower%20and%20vanity%2C%20professional%20renovation%20photography%20showing%20quality%20finishes&width=600&height=400&seq=photo-14&orientation=landscape',
  },
  {
    type: 'image',
    alt: 'Construction project 15',
    src:
      'https://readdy.ai/api/search-image?query=Custom%20luxury%20home%20with%20unique%20architectural%20features%20and%20premium%20materials%2C%20bespoke%20home%20construction%20with%20distinctive%20design%20elements%2C%20high-end%20custom%20home%20building%20showcasing%20craftsmanship%20and%20attention%20to%20detail&width=600&height=400&seq=photo-15&orientation=landscape',
  },
  {
    type: 'image',
    alt: 'Construction project 16',
    src:
      'https://readdy.ai/api/search-image?query=New%20construction%20residential%20neighborhood%20with%20multiple%20homes%20under%20construction%2C%20residential%20development%20project%20showing%20framing%20and%20construction%20progress%2C%20professional%20construction%20site%20photography%20of%20home%20building%20process&width=600&height=400&seq=photo-16&orientation=landscape',
  },
  {
    type: 'image',
    alt: 'Construction project 17',
    src:
      'https://readdy.ai/api/search-image?query=Medical%20office%20building%20exterior%20with%20modern%20healthcare%20facility%20design%2C%20professional%20medical%20construction%20project%2C%20contemporary%20healthcare%20building%20with%20parking%20and%20landscaping%2C%20quality%20commercial%20construction%20work&width=600&height=400&seq=photo-17&orientation=landscape',
  },
  {
    type: 'image',
    alt: 'Construction project 18',
    src:
      'https://readdy.ai/api/search-image?query=Custom%20home%20with%20outdoor%20entertainment%20area%20and%20pool%2C%20luxury%20backyard%20construction%20with%20outdoor%20kitchen%20and%20living%20space%2C%20premium%20outdoor%20construction%20and%20landscaping%2C%20professional%20outdoor%20living%20space%20photography&width=600&height=400&seq=photo-18&orientation=landscape',
  },
]

function GalleryGrid({ filter = 'Photos' }) {
  // Discover local videos under src/assets/videos using Vite glob import
  const discoveredVideos = useMemo(() => {
    const modules = import.meta.glob('/src/assets/videos/*.{mp4,MP4,webm,WebM,ogg,OGG}', {
      eager: true,
    })
    return Object.entries(modules).map(([path, mod]) => {
      const src = mod.default || mod
      const fileName = path.split('/').pop() || 'video'
      const baseName = fileName.replace(/\.[^.]+$/, '')
      return {
        type: 'video',
        alt: baseName,
        videoSrc: src,
        // thumbnail will be generated on mount
        thumbnail: '',
      }
    })
  }, [])

  const [videoThumbnails, setVideoThumbnails] = useState({})
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [shuffledItems, setShuffledItems] = useState([...mediaItems])

  // Merge images with discovered videos (thumbnails filled later)
  const allItems = useMemo(() => {
    const items = [...mediaItems, ...discoveredVideos.map((v) => ({
      ...v,
      // fallback to generated thumbnail if present
      thumbnail: videoThumbnails[v.videoSrc] || v.thumbnail || '',
    }))]
    return items
  }, [discoveredVideos, videoThumbnails])

  const shuffleArray = useCallback((arr) => {
    const copy = [...arr]
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
  }, [])

  const filteredItems = useMemo(() => {
    if (filter === 'Photos') return allItems.filter((i) => i.type === 'image')
    if (filter === 'Video') return allItems.filter((i) => i.type === 'video')
    return allItems
  }, [allItems, filter])

  useEffect(() => {
    // On every filter change, re-shuffle to display a random order for that tab
    setShuffledItems(shuffleArray(filteredItems))
  }, [filter, shuffleArray, filteredItems])

  // Generate thumbnails from first frame for each discovered video
  useEffect(() => {
    const toProcess = discoveredVideos.filter((v) => !videoThumbnails[v.videoSrc])
    if (toProcess.length === 0) return

    let isCancelled = false

    const generate = async (videoSrc) => {
      return new Promise((resolve) => {
        const video = document.createElement('video')
        video.src = videoSrc
        video.muted = true
        video.playsInline = true
        video.crossOrigin = 'anonymous'
        video.preload = 'auto'

        const onLoaded = async () => {
          try {
            // Seek to 0.5s to avoid black first frame when possible
            const capture = () => {
              const canvas = document.createElement('canvas')
              const width = video.videoWidth
              const height = video.videoHeight
              if (!width || !height) {
                resolve('')
                return
              }
              canvas.width = width
              canvas.height = height
              const ctx = canvas.getContext('2d')
              ctx.drawImage(video, 0, 0, width, height)
              const dataUrl = canvas.toDataURL('image/jpeg', 0.8)
              resolve(dataUrl)
            }

            if (video.readyState >= 2) {
              try {
                video.currentTime = Math.min(0.5, video.duration || 0)
                video.addEventListener('seeked', () => capture(), { once: true })
              } catch {
                capture()
              }
            } else {
              capture()
            }
          } catch {
            resolve('')
          }
        }

        video.addEventListener('loadeddata', onLoaded, { once: true })
        video.addEventListener('error', () => resolve(''), { once: true })
      })
    }

    ;(async () => {
      const entries = await Promise.all(
        toProcess.map(async (v) => [v.videoSrc, await generate(v.videoSrc)])
      )
      if (!isCancelled) {
        setVideoThumbnails((prev) => {
          const next = { ...prev }
          for (const [k, val] of entries) next[k] = val
          return next
        })
      }
    })()

    return () => {
      isCancelled = true
    }
  }, [discoveredVideos, videoThumbnails])

  const openModal = useCallback((item) => {
    setSelectedItem(item)
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    setSelectedItem(null)
  }, [])

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') closeModal()
    }
    if (isOpen) {
      document.addEventListener('keydown', onKeyDown)
      const { body } = document
      const previousOverflow = body.style.overflow
      body.style.overflow = 'hidden'
      return () => {
        document.removeEventListener('keydown', onKeyDown)
        body.style.overflow = previousOverflow
      }
    }
  }, [isOpen, closeModal])

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {shuffledItems.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
              <div className="relative group cursor-pointer" onClick={() => openModal(item)}>
                {item.type === 'video' ? (
                  <img
                    alt={item.alt}
                    src={item.thumbnail || videoThumbnails[item.videoSrc] || ''}
                    className="w-full h-64 object-cover object-top transition-transform duration-300 group-hover:scale-105 bg-black"
                  />
                ) : (
                  <img
                    alt={item.alt}
                    src={item.src}
                    className="w-full h-64 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                )}
                {item.type === 'video'?<div className="absolute inset-0 bg-black/30 opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/90 rounded-full">
                    <span className="text-4xl text-orange-600"><i class="ri-play-circle-line"></i></span>
                  </div>
                </div>:
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/90 rounded-full">
                    <span className="text-xl text-orange-600">👁️</span>
                  </div>
                </div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/70"
            onClick={closeModal}
          />

          <div className="relative z-10 w-full max-w-screen-md lg:max-w-screen-lg">
            <button
              aria-label="Close"
              onClick={closeModal}
              className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-white text-gray-800 rounded-full shadow px-2 py-1 hover:bg-gray-100 focus:outline-none"
            >
              <i className="ri-close-large-line" />
            </button>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {selectedItem.type === 'video' ? (
                <video
                  src={selectedItem.videoSrc}
                  className="w-full max-h-[80vh] bg-black"
                  controls
                  autoPlay
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  className="w-full max-h-[80vh] object-contain bg-black"
                />
              )}
              {/* <div className="px-4 py-3 text-sm text-gray-700">
                {selectedItem.alt}
              </div> */}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default GalleryGrid


