import { storyblokEditable } from "@storyblok/react/rsc";

export default function SearchBar({ blok, query = "", department = "" }) {
  return (
    <form
      action="/jobs"
      method="get"
      className="flex flex-1 min-w-[240px] items-center gap-2"
      {...storyblokEditable(blok)}
    >
      {department && <input type="hidden" name="department" value={department} />}
      <label htmlFor="search" className="sr-only">
        {blok.label || "Sök"}
      </label>
      <input
        type="search"
        id="search"
        name="q"
        placeholder={blok.placeholder}
        defaultValue={query}
        className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
      />
      <button
        type="submit"
        className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-700 transition-colors"
      >
        Sök
      </button>
    </form>
  );
}