import { renderRichText } from "@storyblok/react";
import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";

export default function JobPost({ blok }) {
  const renderedContent = renderRichText(blok.content);

  return (
    <article className="job-post" {...storyblokEditable(blok)}>
      <p>
        <Link href="/jobs">← Tillbaka till lediga jobb</Link>
      </p>

      <h1>{blok.title}</h1>

      <p className="meta">
        {blok.location} · {blok.department}
      </p>

      <p className="summary">{blok.summary}</p>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: renderedContent }}
      />
    </article>
  );
}