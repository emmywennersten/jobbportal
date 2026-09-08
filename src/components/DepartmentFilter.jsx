import { storyblokEditable } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";

export default async function DepartmentFilter({ blok, department = "", query = "" }) {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/datasource_entries", {
    datasource: "job-departments",
  });
  const options = data.datasource_entries;

  return (
    <form
      action="/jobs"
      method="get"
      className="flex items-center gap-2"
      {...storyblokEditable(blok)}
    >
      {query && <input type="hidden" name="q" value={query} />}
      <label htmlFor="department" className="sr-only">
        Avdelning
      </label>
      <select
        id="department"
        name="department"
        defaultValue={department}
        className="border border-gray-300 rounded-full px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-900"
      >
        <option value="">Alla avdelningar</option>
        {options.map((opt) => (
          <option key={opt.id} value={opt.value}>
            {opt.name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="text-sm font-medium text-gray-700 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 transition-colors"
      >
        Filtrera
      </button>
    </form>
  );
}