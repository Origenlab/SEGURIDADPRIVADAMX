/**
 * lib/seo.ts — JSON-LD canónico por pageType (SeguridadPrivadaMX).
 * REGLA DURA OrigenLab: cero `aggregateRating` fabricado (sólo con reseñas reales).
 */
import site from '@config/site';

const ctx = 'https://schema.org';

export function orgAndWebsite() {
  return [
    {
      '@context': ctx,
      '@type': 'Organization',
      name: site.nombre,
      url: site.url,
      ...(site.contacto.email ? { email: site.contacto.email } : {}),
      areaServed: site.zonas.map((z) => ({ '@type': 'AdministrativeArea', name: z })),
    },
    { '@context': ctx, '@type': 'WebSite', name: site.nombre, url: site.url, inLanguage: site.idioma },
  ];
}

export function article(o: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  author?: string;
}) {
  return {
    '@context': ctx,
    '@type': 'Article',
    headline: o.title,
    description: o.description,
    mainEntityOfPage: o.url,
    inLanguage: site.idioma,
    ...(o.datePublished ? { datePublished: o.datePublished } : {}),
    author: { '@type': 'Organization', name: o.author ?? site.nombre },
    publisher: { '@type': 'Organization', name: site.nombre, url: site.url },
  };
}

/** Service (para páginas de servicio). reseñas SOLO si son reales (aquí: nunca fabricar). */
export function service(o: { name: string; description: string; url: string }) {
  return {
    '@context': ctx,
    '@type': 'Service',
    name: o.name,
    description: o.description,
    serviceType: o.name,
    areaServed: site.zonas.map((z) => ({ '@type': 'AdministrativeArea', name: z })),
    provider: { '@type': 'Organization', name: site.nombre, url: site.url },
    url: o.url,
  };
}

export function jsonLd(data: unknown): string {
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}
