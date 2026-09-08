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
    <section className="job-list" {...storyblokEditable(blok)}>
      {blok.heading && <h1>{blok.heading}</h1>}

      {stories.length === 0 ? (
        <p>{blok.empty_text || "Inga jobb."}</p>
      ) : (
        stories.map((story) => (
          <article key={story.uuid}>
            <h2>
              <Link href={`/${story.full_slug}`}>{story.content.title}</Link>
            </h2>
            <p>{story.content.location} · {story.content.department}</p>
            <p>{story.content.summary}</p>
          </article>
        ))
      )}
    </section>
  );
}