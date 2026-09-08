import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

export default function Page({ blok, ...rest }) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          {...rest}
        />
      ))}
    </main>
  );
}
