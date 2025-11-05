import Image from '@/components/Image'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }: any) {
  const ourStoryPosts = posts.filter((post: { tags: string[] }) =>
    post.tags?.some((tag: string) => tag === 'Our Story')
  )

  const otherPosts = posts.filter((post: { tags: string[] }) =>
    post.tags?.every((tag: string) => tag !== 'Our Story')
  )
  return (
    <>
      <header className="">
        <div className="w-full bg-[url(/static/images/banner.jpg)] bg-cover bg-center my-6 shadow-lg shadow rounded-lg overflow-hidden">
          <div className="flex h-full w-full items-center justify-center bg-black/30 py-8 backdrop-opacity-30">
            <div className="text-center">
              <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl text-center">
                  <h2 className="text-4xl font-bold text-gray-100 lg:text-5xl">
                    The New Hobby Farmer Blog
                  </h2>
                  <Link
                    href={`/blog`}
                    className="hover:bg-primary-100 mt-8 inline-block w-full rounded border-2 border-transparent bg-gray-50 px-8 py-4 text-sm font-bold text-gray-800 uppercase transition duration-200 md:mr-6 md:w-auto"
                  > 
                    Discover the charm of the hobby farm
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="divide-gray-200 dark:divide-gray-700 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mt-8">
            <h2 className="text-2xl leading-9 font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
              Personal stories
            </h2>
          </div>

          <ul className="mt-6 space-y-6">
            {!ourStoryPosts.length && <li>No posts found.</li>}
            {ourStoryPosts.slice(0, MAX_DISPLAY).map((post: any) => {
              const { slug, date, title, summary, images } = post
              const imageSource = (images && images[0]?.trimEnd()) || '/static/images/title.png'

              return (
                <li key={slug}>
                  <article className="group overflow-hidden rounded-lg border border-gray-100 bg-white dark:bg-gray-900 dark:border-gray-800 shadow-sm transition-shadow hover:shadow-md">
                    <Link href={`/blog/${slug}`} className="block sm:flex">
                      <div className="sm:flex-shrink-0">
                        <Image
                          className="w-full h-44 object-cover sm:h-full sm:w-40"
                          src={imageSource}
                          alt={title}
                          width={128}
                          height={128}
                        />
                      </div>
                      <div className="p-4">
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </div>
                        <h3 className="mt-2 text-lg font-bold text-gray-900 dark:text-gray-100">
                          {title}
                        </h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-3">
                          {summary}
                        </p>
                        <div className="mt-3">
                          <span className="text-primary-500 font-medium">Read more &rarr;</span>
                        </div>
                      </div>
                    </Link>
                  </article>
                </li>
              )
            })}
          </ul>

          <div className="mt-10">
            <h2 className="text-2xl leading-9 font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
              Other posts
            </h2>
          </div>

          <ul className="mt-6 space-y-4">
            {!otherPosts.length && <li>No posts found.</li>}
            {otherPosts.slice(0, MAX_DISPLAY).map((post: any) => {
              const { slug, date, title, summary, images } = post
              const imageSource = (images && images[0]?.trimEnd()) || '/static/images/title.png'

              return (
                <li key={slug}>
                  <article className="flex items-start space-x-4 py-3">
                    <Image
                      className="h-20 w-20 rounded-lg object-cover"
                      src={imageSource}
                      alt={title}
                      width={128}
                      height={128}
                    />
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </div>
                      <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
                        <Link href={`/blog/${slug}`} className="hover:underline">
                          {title}
                        </Link>
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300 line-clamp-2">
                        {summary}
                      </p>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>

          {posts.length > MAX_DISPLAY && (
            <div className="mt-6 flex justify-end text-base leading-6 font-medium">
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
            <div className="mt-8 flex items-center justify-center">
              <NewsletterForm />
            </div>
          )}
        </div>
      </main>
    </>
  )
}
