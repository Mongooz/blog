import galleryData from '@/data/galleryData'
import { genPageMetadata } from 'app/seo'
import ImageGallery from '@/components/ImageGallery'

export const metadata = genPageMetadata({ title: 'Gallery' })

export default function Gallery() {
  return (
    <>
      <div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Gallery
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A collection of photographs taken around the farm. Most are also showcased in blog
            posts.
          </p>
        </div>
        <ImageGallery images={galleryData} />
      </div>
    </>
  )
}
