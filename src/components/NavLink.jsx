import { storyblokEditable } from "@storyblok/react/rsc";

export default function NavLink({ blok }) {
  const url = blok.link?.url ? blok.link?.url : blok.link?.cached_url;

  return (
    <li {...storyblokEditable(blok)} className="list-none">
      
        <a href={url}
        className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
      >
        {blok.label}
      </a>
    </li>
  );
}