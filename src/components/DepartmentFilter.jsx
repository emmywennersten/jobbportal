import { storyblokEditable } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";

export default async function DepartmentFilter({ blok, department = "", query = "" }) {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/datasource_entries", {
    datasource: "job-departments",
  });
  const options = data.datasource_entries;

  return (
    <form action="/jobs" method="get" {...storyblokEditable(blok)}>
      {query && <input type="hidden" name="q" value={query} />}
      <label htmlFor="department">Avdelning</label>
      <select id="department" name="department" defaultValue={department}>
        <option value="">Alla avdelningar</option>
        {options.map((opt) => (
          <option key={opt.id} value={opt.value}>
            {opt.name}
          </option>
        ))}
      </select>
      <button type="submit">Filtrera</button>
    </form>
  );
}