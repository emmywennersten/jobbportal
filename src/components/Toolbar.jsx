import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

export default function Toolbar({ blok, ...rest }) {
  return (
    <div
      className="max-w-3xl mx-auto px-6 pt-8 flex flex-wrap gap-3 items-center"
      {...storyblokEditable(blok)}
    >
      {blok.blocks?.map((nestedBlok) => (
        <StoryblokServerComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          {...rest}
        />
      ))}
    </div>
  );
}