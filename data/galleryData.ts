import imagesData from 'app/image-data.json';

interface Gallery {
  title: string
  description?: string
  href?: string
  imgSrc?: string
}

const galleryData: Gallery[] = imagesData

export default galleryData
