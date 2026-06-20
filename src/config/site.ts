/**
 * SSoT del sitio — SeguridadPrivadaMX (Astro 6 + Markdown, stack canónico OrigenLab).
 */
export const site = {
  nombre: 'SeguridadPrivadaMX',
  tagline: 'Seguridad privada para condominios y residenciales',
  descripcion:
    'Guardias intramuros, control de acceso, CCTV y patrullaje para condominios y residenciales en CDMX y Edomex.',
  url: 'https://seguridadprivadamx.com',
  dominio: 'seguridadprivadamx.com',
  idioma: 'es-MX',
  themeColor: '#070b15',
  zonas: ['CDMX', 'Estado de México'],
  contacto: {
    email: 'contacto@seguridadprivadamx.com',
    cotizaciones: 'cotizaciones@seguridadprivadamx.com',
    // ⚠️ El sitio trae teléfono/WhatsApp PLACEHOLDER (55 1234 5678). Pendiente el real.
    telefono: '',
    whatsapp: '',
  },
  nav: [
    { label: 'Servicios', href: '/servicios.html' },
    { label: 'Nosotros', href: '/nosotros.html' },
    { label: 'Blog', href: '/blog.html' },
    { label: 'Contacto', href: '/contacto.html' },
  ],
} as const;

export default site;
