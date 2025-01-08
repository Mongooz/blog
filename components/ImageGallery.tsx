'use client'
import type { LightGallery } from 'lightgallery/lightgallery'
import Masonry from 'react-masonry-css'

import LightGalleryComponent from 'lightgallery/react'
import 'lightgallery/css/lightgallery.css'

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lightgallery.css'
import Image from 'next/image'
import { useRef } from 'react'

export default function ImageGallery({ images }) {
  const lightbox = useRef<LightGallery | null>(null)

  return (
    <>
      <LightGalleryComponent
        onInit={(ref) => {
          if (ref) {
            lightbox.current = ref.instance
          }
        }}
        progressBar
        mode="lg-fade"
        plugins={[lgThumbnail, lgZoom]}
        dynamic
        dynamicEl={images.map((image) => ({
          src: `/_next/image?url=${encodeURI(image.imgSrc)}&w=1080&q=75`,
          thumb: `/_next/image?url=${encodeURIComponent(image.imgSrc)}&w=96&q=75`,
          width: (image.width || 1024).toString(),
          height: (image.height || 768).toString(),
          alt: image.title,
          subHtml: `<h3>${image.title}</h3>`
        }))}
      ></LightGalleryComponent>

      <Masonry className="flex gap-2" columnClassName="bg-clip-padding">
        {images.map((image, idx) => (
          <Image
            key={image.imgSrc}
            className="my-2 cursor-pointer hover:opacity-80"
            onClick={() => lightbox.current?.openGallery(idx)}
            src={image.imgSrc}
            alt={image.title}
            width={508}
            height={(508 / (image.width || 1)) * (image.height || 1)}
          />
        ))}
      </Masonry>
    </>
  )
}
