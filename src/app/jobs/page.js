import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export default async function JobsPage({ searchParams }) {
  const params = await searchParams;
  const department = params.department ?? "";
  const query = params.q ?? "";

  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get("cdn/stories/jobs/", {
    version: "draft",
  });

  return (
    <StoryblokServerComponent
      blok={data.story.content}
      department={department}
      query={query}
    />
  );
}