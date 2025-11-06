import Image from './Image'
import Link from './Link'
import { formatDate } from 'pliny/utils/formatDate'
import Tag from './Tag'

const BlogPostCard = ({ title, summary, imageSource, slug, date, tags, locale = 'en-AU' }) => (
  <article className="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-shadow hover:bg-gray-50 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800">
    <Link href={`/blog/${slug}`} className="flex">
      <div className="relative flex-shrink-0">
        <Image
          className="h-full w-40 object-cover"
          src={imageSource}
          alt={title}
          width={256}
          height={256}
        />
        <div className="absolute bottom-2 left-2">
          <time
            dateTime={date}
            className="text-shadow-sm rounded bg-black/50 px-2 py-1 text-sm font-medium text-white shadow-black backdrop-blur-sm"
          >
            {formatDate(date, locale)}
          </time>
        </div>
      </div>
      <div className="p-2 sm:p-4">
        <h3 className="text-md font-bold text-gray-900 sm:text-lg dark:text-gray-100">{title}</h3>
        {!!tags?.length && (
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        )}
        <p className="sm:text-md mt-1 mb-1 line-clamp-6 text-sm text-gray-600 sm:line-clamp-4 dark:text-gray-300">
          {summary}
        </p>
        <div className="mt-1 hidden sm:block">
          <span className="text-primary-500 sm:text-md text-sm font-medium">Read more &rarr;</span>
        </div>
      </div>
    </Link>
  </article>
)

export default BlogPostCard
