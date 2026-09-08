import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";
import Link from "next/link";

export default function Header({ blok }) {
  return (
    <header {...storyblokEditable(blok)}>
      <Link href="/">
        <strong>JOBBPORTAL</strong>
      </Link>
      <nav>
        <ul>
          {blok.navigation?.map((navBlok) => (
            <StoryblokServerComponent blok={navBlok} key={navBlok._uid} />
          ))}
        </ul>
      </nav>
    </header>
  );
}