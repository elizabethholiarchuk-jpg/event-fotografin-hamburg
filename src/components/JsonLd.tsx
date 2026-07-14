/**
 * Server component that renders a <script type="application/ld+json"> tag.
 * Must only be used in Server Components (not client components).
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
