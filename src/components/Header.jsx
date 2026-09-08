import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";
import Link from "next/link";

export default function Header({ blok }) {
  return (
    <header
      className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white"
      {...storyblokEditable(blok)}
    >
      <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
        JOBBPORTAL
      </Link>
      <nav>
        <ul className="flex gap-6">
          {blok.navigation?.map((navBlok) => (
            <StoryblokServerComponent blok={navBlok} key={navBlok._uid} />
          ))}
        </ul>
      </nav>
    </header>
  );
}