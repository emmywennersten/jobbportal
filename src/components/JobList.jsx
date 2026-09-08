import { storyblokEditable } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import Link from "next/link";

export default async function JobList({ blok, department = "", query = "" }) {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.getStories({
    version: "draft",
    starts_with: "jobs/",
    content_type: "job-post",
    ...(department && { filter_query: { department: { in: department } } }),
    ...(query && { search_term: query }),
  });

  const stories = data.stories;

  return (
    <section className="max-w-3xl mx-auto px-6 py-8" {...storyblokEditable(blok)}>
      {blok.heading && (
        <h1 className="text-2xl font-bold text-gray-900 mb-6">{blok.heading}</h1>
      )}

      {stories.length === 0 ? (
        <p className="text-gray-500">{blok.empty_text || "Inga jobb."}</p>
      ) : (
        <div className="flex flex-col gap-4">
          {stories.map((story) => (
            <Link
              href={`/${story.full_slug}`}
              key={story.uuid}
              className="block border border-gray-200 rounded-xl p-5 hover:border-gray-400 hover:shadow-sm transition-all"
            >
              <article className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {story.content.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {story.content.location}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {story.content.summary}
                  </p>
                  {story.content.department && (
                    <span className="inline-block mt-3 text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {story.content.department}
                    </span>
                  )}
                </div>
                <span className="text-gray-400 text-xl">›</span>
              </article>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}