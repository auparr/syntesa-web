import type { CourseItem, FaqItem, ItemListEntry } from "~/utils/seo";
import {
  generateBreadcrumbJsonLd,
  generateCourseJsonLd,
  generateFaqJsonLd,
  generateItemListJsonLd,
  mergeJsonLd,
} from "~/utils/seo";

interface SEOProps {
  breadcrumbs?: Array<{ name: string; path: string }>;
  faq?: FaqItem[];
  courses?: CourseItem[];
  itemList?: { items: ItemListEntry[]; name: string };
}

export function SEO({ breadcrumbs, faq, courses, itemList }: SEOProps) {
  const schemas = mergeJsonLd(
    breadcrumbs?.length ? generateBreadcrumbJsonLd(breadcrumbs) : null,
    faq?.length ? generateFaqJsonLd(faq) : null,
    ...(courses?.length ? (generateCourseJsonLd(courses) ?? []) : []),
    itemList?.items.length ? generateItemListJsonLd(itemList.items, itemList.name) : null,
  );

  if (!schemas.length) return null;

  const jsonLdContent = JSON.stringify(schemas);

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdContent }} />;
}
