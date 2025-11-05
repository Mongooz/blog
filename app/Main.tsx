import Image from '@/components/Image'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import BlogPostCard from '@/components/BlogPostCard'

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
      <header className="">
        <div className="my-6 w-full overflow-hidden rounded-lg bg-[url(/static/images/banner.jpg)] bg-cover bg-center shadow shadow-lg">
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

      <main className="divide-gray-200 dark:divide-gray-700">
        <div className="mx-auto">
          <div className="mt-8">
            <h2 className="text-2xl leading-9 font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
              Personal stories
            </h2>
          </div>

          <ul className="mt-6 space-y-6">
            {!ourStoryPosts.length && <li>No posts found.</li>}
            {ourStoryPosts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, images } = post
              const imageSource = (images && images[0]?.trimEnd()) || '/static/images/title.png'

              return (
                <li key={slug}>
                  <BlogPostCard
                    title={title}
                    summary={summary}
                    imageSource={imageSource}
                    slug={slug}
                    date={date}
                    locale={siteMetadata.locale}
                    tags={[]}
                  />
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
            {otherPosts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, images } = post
              const imageSource = (images && images[0]?.trimEnd()) || '/static/images/title.png'

              return (
                <li key={slug}>
                  <BlogPostCard
                    title={title}
                    summary={summary}
                    imageSource={imageSource}
                    slug={slug}
                    date={date}
                    locale={siteMetadata.locale}
                    tags={[]}
                  />
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
