import { renderRichText } from "@storyblok/react";
import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";

export default function JobPost({ blok }) {
  const renderedContent = renderRichText(blok.content);

  return (
    <article
      className="max-w-2xl mx-auto px-6 py-10"
      {...storyblokEditable(blok)}
    >
      <Link
        href="/jobs"
        className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
      >
        ← Tillbaka till lediga jobb
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mt-4">{blok.title}</h1>

      <div className="flex items-center gap-3 mt-2">
        <p className="text-sm text-gray-500">{blok.location}</p>
        {blok.department && (
          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
            {blok.department}
          </span>
        )}
      </div>

      <p className="text-base text-gray-700 mt-6">{blok.summary}</p>

      <div
        className="prose prose-gray max-w-none mt-8"
        dangerouslySetInnerHTML={{ __html: renderedContent }}
      />
    </article>
  );
}