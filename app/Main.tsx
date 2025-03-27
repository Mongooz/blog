import Image from '@/components/Image'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  const ourStoryPosts = posts.filter((post: { tags: string[] }) =>
    post.tags?.some((tag: string) => tag === 'Our Story')
  )

  const otherPosts = posts.filter((post: { tags: string[] }) =>
    post.tags?.every((tag: string) => tag !== 'Our Story')
  )
  return (
    <>
      <div className="divide-gray-200 dark:divide-gray-700">
        <div className="relative">
          <h1 className="top-0 m-5 text-4xl text-gray-900 sm:absolute sm:top-12 sm:left-0 sm:m-2 sm:text-center sm:text-2xl sm:text-4xl sm:text-gray-100 sm:[text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)] md:text-6xl dark:text-gray-100">
            Discover the Charm of the Hobby Farm
          </h1>
          <Image
            className="rounded-sm"
            src="/static/images/banner.jpg"
            alt={'The beautiful view from our patio overlooking the paddocks and the dam'}
            width={3303}
            height={939}
          />
        </div>
        <div>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <div className="space-y-2 md:space-y-5">
          <h2 className="text-2xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14 dark:text-gray-100">
            Personal stories
          </h2>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!ourStoryPosts.length && 'No posts found.'}
          {ourStoryPosts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, images } = post
            const imageSource = (images && images[0]?.trimEnd()) || '/static/images/title.png'

            return (
              <li key={slug} className="py-6">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-5 xl:items-baseline xl:space-y-0">
                    <dl className="space-y-2">
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                      <Link href={`/blog/${slug}`}>
                        <Image
                          className="h-32 w-32 rounded-lg transition duration-300 ease-in-out hover:scale-110"
                          src={imageSource}
                          alt={title}
                          width={128}
                          height={128}
                        />
                      </Link>
                    </dl>
                    <div className="space-y-2 xl:col-span-4">
                      <div className="space-y-2">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-primary-900 dark:text-primary-100"
                            >
                              {title}
                            </Link>
                          </h2>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>

        <div className="space-y-2 md:space-y-5">
          <h2 className="text-2xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14 dark:text-gray-100">
            Other posts
          </h2>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!otherPosts.length && 'No posts found.'}
          {otherPosts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, images } = post
            const imageSource = (images && images[0]?.trimEnd()) || '/static/images/title.png'

            return (
              <li key={slug} className="py-2">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-5 xl:items-baseline xl:space-y-0">
                    <dl className="space-y-2">
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                      <Image
                        className="h-32 w-32 rounded-lg"
                        src={imageSource}
                        alt={title}
                        width={3303}
                        height={939}
                      />
                    </dl>
                    <div className="space-y-2 xl:col-span-4">
                      <div className="space-y-2">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
