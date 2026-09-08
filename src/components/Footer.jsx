import { storyblokEditable } from "@storyblok/react/rsc";

export default function Footer({ blok }) {
  return (
    <footer
      className="border-t border-gray-200 mt-16 py-8 px-6 text-center text-sm text-gray-500"
      {...storyblokEditable(blok)}
    >
      <p>{blok.copyright}</p>
      {blok.description && <p className="mt-1">{blok.description}</p>}
    </footer>
  );
}