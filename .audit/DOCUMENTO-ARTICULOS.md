# DOCUMENTO-ARTICULOS.md
## Guía Completa para Generación de Artículos del Blog - SeguridadPrivadaMX

---

## ÍNDICE

1. [Información General del Proyecto](#1-información-general-del-proyecto)
2. [Estructura de Archivos](#2-estructura-de-archivos)
3. [Paso 1: Crear la Card en blog.html](#3-paso-1-crear-la-card-en-bloghtml)
4. [Paso 2: Crear el Archivo del Artículo](#4-paso-2-crear-el-archivo-del-artículo)
5. [Paso 3: Estructura Completa del Artículo](#5-paso-3-estructura-completa-del-artículo)
6. [Paso 4: Configuración del Sidebar](#6-paso-4-configuración-del-sidebar)
7. [Paso 5: SEO y Meta Tags](#7-paso-5-seo-y-meta-tags)
8. [Paso 6: Schema.org (Datos Estructurados)](#8-paso-6-schemaorg-datos-estructurados)
9. [Paso 7: Estilos CSS del Artículo](#9-paso-7-estilos-css-del-artículo)
10. [Paso 8: Contenido y Marketing](#10-paso-8-contenido-y-marketing)
11. [Paso 9: CTAs y Conversión](#11-paso-9-ctas-y-conversión)
12. [Paso 10: Checklist Final](#12-paso-10-checklist-final)
13. [Plantillas Reutilizables](#13-plantillas-reutilizables)
14. [Paleta de Colores para Cards](#14-paleta-de-colores-para-cards)
15. [Conocimiento de Seguridad Privada en México](#15-conocimiento-de-seguridad-privada-en-méxico)

---

## 1. INFORMACIÓN GENERAL DEL PROYECTO

### Datos de la Empresa
- **Nombre:** SeguridadPrivadaMX
- **Dominio:** https://seguridadprivadamx.com
- **Especialización:** Seguridad privada para condominios en CDMX
- **Teléfono:** 55 1234 5678
- **WhatsApp:** 525512345678
- **Email:** contacto@seguridadprivadamx.com
- **Ubicación:** Av. Insurgentes Sur 1602, Piso 4, Col. Crédito Constructor, Benito Juárez, 03900 CDMX

### Propuesta de Valor
- Tecnología propia (app móvil y dashboard)
- Precios transparentes sin cargos ocultos
- Guardias 100% certificados SSC
- Cotización en 4 horas hábiles
- Respuesta a emergencias en menos de 10 minutos
- Más de 150 condominios protegidos
- 12 años de experiencia

### Tono de Comunicación
- Profesional pero accesible
- Experto sin ser condescendiente
- Transparente y honesto
- Orientado a soluciones
- Sin emojis en el contenido

---

## 2. ESTRUCTURA DE ARCHIVOS

```
/SEGURIDADPRIVADAMX/
├── blog.html                 # Página principal del blog (lista de artículos)
├── blog/                     # Carpeta con los artículos individuales
│   ├── seguridad-privada-para-condominios-guia-completa.html
│   ├── [nuevo-articulo].html
│   └── ...
├── css/
│   └── style.css            # Estilos globales del sitio
├── js/
│   └── app.js               # JavaScript del sitio
└── .audit/
    └── DOCUMENTO-ARTICULOS.md  # Este documento
```

### Nomenclatura de Archivos
- Usar kebab-case (palabras-separadas-por-guiones)
- Máximo 60 caracteres en el nombre
- Incluir keyword principal
- Ejemplo: `control-accesos-condominios-guia.html`

---

## 3. PASO 1: CREAR LA CARD EN blog.html

### Ubicación en blog.html
Las cards se encuentran dentro de `<div class="services-grid">` en la sección de "Artículos Destacados" o "Más Recursos".

### Estructura de una Card (sin enlace - artículo pendiente)
```html
<div class="service-card">
    <div class="service-image" style="background: linear-gradient(135deg, #COLOR1 0%, #COLOR2 100%);">
        <span class="service-image-text">Categoría</span>
    </div>
    <div class="service-content">
        <h3 class="service-title">Título del Artículo</h3>
        <p class="service-description">
            Descripción breve del artículo en 2-3 líneas que capture la atención del lector.
        </p>
        <ul class="service-features">
            <li>Punto clave 1</li>
            <li>Punto clave 2</li>
            <li>Punto clave 3</li>
            <li>Punto clave 4</li>
        </ul>
    </div>
</div>
```

### Estructura de una Card (con enlace - artículo publicado)
```html
<a href="blog/nombre-del-articulo.html" class="service-card" style="text-decoration: none;">
    <div class="service-image" style="background: linear-gradient(135deg, #COLOR1 0%, #COLOR2 100%);">
        <span class="service-image-text">Categoría</span>
    </div>
    <div class="service-content">
        <h3 class="service-title">Título del Artículo</h3>
        <p class="service-description">
            Descripción breve del artículo en 2-3 líneas que capture la atención del lector.
        </p>
        <ul class="service-features">
            <li>Punto clave 1</li>
            <li>Punto clave 2</li>
            <li>Punto clave 3</li>
            <li>Punto clave 4</li>
        </ul>
    </div>
</a>
```

### Orden de las Cards
- Los artículos más recientes/importantes van primero
- Mantener balance visual de colores (no poner dos cards del mismo color juntas)
- La primera sección "Artículos Destacados" tiene 6 cards
- La segunda sección "Más Recursos" tiene 6 cards adicionales

---

## 4. PASO 2: CREAR EL ARCHIVO DEL ARTÍCULO

### Ubicación
Crear el archivo en: `/blog/nombre-del-articulo.html`

### Rutas Relativas Importantes
Desde la carpeta `/blog/`, las rutas son:
- CSS: `../css/style.css`
- JS: `../js/app.js`
- Imágenes: `../images/`
- Páginas raíz: `../index.html`, `../servicios.html`, etc.
- Favicon: `../favicon.png`

---

## 5. PASO 3: ESTRUCTURA COMPLETA DEL ARTÍCULO

### Estructura HTML Base

```html
<!DOCTYPE html>
<html lang="es-MX">
<head>
    <!-- Meta tags básicos -->
    <!-- SEO Meta Tags -->
    <!-- Open Graph -->
    <!-- Twitter Card -->
    <!-- Favicon -->
    <!-- Google Fonts -->
    <!-- CSS -->
    <!-- Schema.org -->
    <!-- Estilos inline del artículo -->
</head>
<body>
    <!-- Header/Navegación -->
    <!-- Breadcrumb -->
    <!-- Article Hero -->
    <!-- Article Content Wrapper -->
        <!-- Article Content (main) -->
        <!-- Sidebar (aside) -->
    <!-- CTA Section -->
    <!-- Footer -->
    <!-- WhatsApp Float -->
    <!-- Scripts -->
</body>
</html>
```

### Header/Navegación (copiar exacto)
```html
<header class="header">
    <nav class="navbar">
        <div class="container">
            <div class="nav-wrapper">
                <a href="../index.html" class="logo">
                    <span class="logo-text">SeguridadPrivadaMX</span>
                </a>

                <button class="mobile-menu-toggle" aria-label="Abrir menú">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul class="nav-menu">
                    <li><a href="../index.html" class="nav-link">Inicio</a></li>
                    <li class="nav-item-dropdown">
                        <a href="../servicios.html" class="nav-link">Servicios</a>
                        <ul class="dropdown-menu">
                            <li><a href="../vigilancia-24-7.html">Vigilancia 24/7</a></li>
                            <li><a href="../control-accesos.html">Control de Accesos</a></li>
                            <li><a href="../camaras-monitoreo.html">Cámaras y Monitoreo</a></li>
                            <li><a href="../respuesta-emergencias.html">Respuesta a Emergencias</a></li>
                            <li><a href="../patrullaje-vehicular.html">Patrullaje Vehicular</a></li>
                            <li><a href="../reportes-analytics.html">Reportes y Analytics</a></li>
                        </ul>
                    </li>
                    <li><a href="../nosotros.html" class="nav-link">Nosotros</a></li>
                    <li><a href="../contacto.html" class="nav-link">Contacto</a></li>
                    <li><a href="tel:+525512345678" class="nav-phone">55 1234 5678</a></li>
                    <li><a href="../index.html#cotizacion" class="btn-primary-nav">Cotizar Gratis</a></li>
                </ul>
            </div>
        </div>
    </nav>
</header>
```

### Breadcrumb
```html
<div class="breadcrumb-wrapper" style="background: #0f172a; border-bottom: 1px solid rgba(255,255,255,0.1);">
    <div class="container">
        <div class="breadcrumb" style="color: rgba(255,255,255,0.7);">
            <a href="../index.html" style="color: rgba(255,255,255,0.7);">Inicio</a> /
            <a href="../blog.html" style="color: rgba(255,255,255,0.7);">Blog</a> /
            <span style="color: #60a5fa;">Título Corto del Artículo</span>
        </div>
    </div>
</div>
```

### Article Hero
```html
<section class="article-hero">
    <div class="container">
        <div class="article-hero-content">
            <span class="article-category">Categoría del Artículo</span>
            <h1>Título Principal del Artículo: Subtítulo Descriptivo</h1>
            <div class="article-meta">
                <div class="article-meta-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <span>Equipo SeguridadPrivadaMX</span>
                </div>
                <div class="article-meta-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span>XX min de lectura</span>
                </div>
                <div class="article-meta-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                    <span>Actualizado constantemente</span>
                </div>
            </div>
        </div>
    </div>
</section>
```

---

## 6. PASO 4: CONFIGURACIÓN DEL SIDEBAR

### Estructura Completa del Sidebar
```html
<aside class="article-sidebar">
    <!-- 1. Tabla de Contenidos -->
    <div class="sidebar-card">
        <h4>Contenido del Artículo</h4>
        <ul class="toc-list">
            <li><a href="#seccion-1">Sección 1</a></li>
            <li><a href="#seccion-2">Sección 2</a></li>
            <!-- Agregar todas las secciones H2 -->
        </ul>
    </div>

    <!-- 2. CTA Principal -->
    <div class="sidebar-cta">
        <h4>¿Necesitas Seguridad para tu Condominio?</h4>
        <p>Cotización gratuita y personalizada en menos de 4 horas hábiles.</p>
        <a href="../index.html#cotizacion" class="btn-primary">Solicitar Cotización</a>
    </div>

    <!-- 3. Contacto Directo -->
    <div class="sidebar-card">
        <h4>Contacto Directo</h4>
        <p style="margin-bottom: 12px; color: #475569; font-size: 0.95rem;">¿Prefieres hablar con un asesor?</p>
        <p style="margin-bottom: 8px;">
            <a href="tel:+525512345678" style="color: #1e40af; font-weight: 600; text-decoration: none; font-size: 1.1rem;">55 1234 5678</a>
        </p>
        <p style="margin-bottom: 0;">
            <a href="https://wa.me/525512345678" style="color: #25d366; font-weight: 500; text-decoration: none; font-size: 0.95rem;">WhatsApp disponible</a>
        </p>
    </div>

    <!-- 4. Servicios Relacionados -->
    <div class="sidebar-card">
        <h4>Servicios Relacionados</h4>
        <ul class="toc-list">
            <li><a href="../vigilancia-24-7.html">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1e40af" stroke-width="2" style="vertical-align: middle; margin-right: 6px;">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                Vigilancia 24/7
            </a></li>
            <li><a href="../control-accesos.html">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1e40af" stroke-width="2" style="vertical-align: middle; margin-right: 6px;">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                Control de Accesos
            </a></li>
            <li><a href="../camaras-monitoreo.html">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1e40af" stroke-width="2" style="vertical-align: middle; margin-right: 6px;">
                    <path d="M23 7l-7 5 7 5V7z"/>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                </svg>
                Cámaras y Monitoreo
            </a></li>
            <li><a href="../respuesta-emergencias.html">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1e40af" stroke-width="2" style="vertical-align: middle; margin-right: 6px;">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
                Respuesta a Emergencias
            </a></li>
            <li><a href="../reportes-analytics.html">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1e40af" stroke-width="2" style="vertical-align: middle; margin-right: 6px;">
                    <path d="M21 21H3V3"/>
                    <path d="M21 9l-6 6-4-4-6 6"/>
                </svg>
                Reportes y Analytics
            </a></li>
        </ul>
    </div>

    <!-- 5. Artículos Relacionados -->
    <div class="sidebar-card">
        <h4>Artículos Relacionados</h4>
        <ul class="toc-list" style="margin: 0; padding: 0;">
            <li style="margin-bottom: 16px;">
                <a href="URL-ARTICULO.html" style="display: block;">
                    <span style="font-weight: 600; color: #0f172a; display: block; margin-bottom: 4px;">Título del Artículo</span>
                    <span style="font-size: 0.85rem; color: #64748b;">Descripción breve</span>
                </a>
            </li>
            <!-- Repetir para 3-4 artículos -->
        </ul>
    </div>

    <!-- 6. Páginas de Interés -->
    <div class="sidebar-card">
        <h4>Páginas de Interés</h4>
        <ul class="toc-list">
            <li><a href="../nosotros.html">Conoce Nuestra Empresa</a></li>
            <li><a href="../servicios.html">Todos los Servicios</a></li>
            <li><a href="../contacto.html">Contacto y Ubicación</a></li>
            <li><a href="../index.html#clientes">Testimonios de Clientes</a></li>
            <li><a href="../blog.html">Más Artículos del Blog</a></li>
        </ul>
    </div>
</aside>
```

---

## 7. PASO 5: SEO Y META TAGS

### Meta Tags Obligatorios
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<!-- SEO Meta Tags -->
<title>[Keyword Principal]: [Beneficio/Descriptor] | SeguridadPrivadaMX</title>
<meta name="description" content="[150-160 caracteres con keyword principal, beneficio y CTA implícito]">
<meta name="keywords" content="[keyword principal], [variaciones], [long-tail], [relacionadas]">
<meta name="author" content="SeguridadPrivadaMX">
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
<link rel="canonical" href="https://seguridadprivadamx.com/blog/[nombre-archivo].html">
```

### Open Graph (Facebook/LinkedIn)
```html
<meta property="og:title" content="[Título atractivo max 60 chars]">
<meta property="og:description" content="[Descripción max 200 chars]">
<meta property="og:type" content="article">
<meta property="og:url" content="https://seguridadprivadamx.com/blog/[nombre-archivo].html">
<meta property="og:image" content="https://seguridadprivadamx.com/images/blog/[imagen-og].jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="es_MX">
<meta property="og:site_name" content="SeguridadPrivadaMX">
<meta property="article:publisher" content="https://www.facebook.com/seguridadprivadamx">
<meta property="article:section" content="[Categoría]">
<meta property="article:tag" content="[tag1]">
<meta property="article:tag" content="[tag2]">
```

### Twitter Card
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Título max 70 chars]">
<meta name="twitter:description" content="[Descripción max 200 chars]">
<meta name="twitter:image" content="https://seguridadprivadamx.com/images/blog/[imagen-twitter].jpg">
```

### Mejores Prácticas SEO para Títulos
- **Title tag:** 50-60 caracteres
- **Incluir:** Keyword principal + Beneficio + Marca
- **Formato:** [Keyword]: [Descriptor] | SeguridadPrivadaMX
- **Ejemplo:** "Control de Accesos para Condominios: Guía Completa | SeguridadPrivadaMX"

### Mejores Prácticas para Meta Description
- **Longitud:** 150-160 caracteres
- **Incluir:** Keyword, beneficio, llamada a la acción implícita
- **Ejemplo:** "Aprende a implementar un sistema de control de accesos efectivo en tu condominio. Tecnología, protocolos y mejores prácticas de expertos. Guía gratuita."

---

## 8. PASO 6: SCHEMA.ORG (DATOS ESTRUCTURADOS)

### Article Schema
```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "[Título del artículo]",
    "description": "[Descripción del artículo]",
    "image": "https://seguridadprivadamx.com/images/blog/[imagen].jpg",
    "author": {
        "@type": "Organization",
        "name": "SeguridadPrivadaMX",
        "url": "https://seguridadprivadamx.com"
    },
    "publisher": {
        "@type": "Organization",
        "name": "SeguridadPrivadaMX",
        "logo": {
            "@type": "ImageObject",
            "url": "https://seguridadprivadamx.com/images/logo.png"
        }
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://seguridadprivadamx.com/blog/[nombre-archivo].html"
    }
}
</script>
```

### FAQ Schema (si el artículo tiene preguntas frecuentes)
```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "[Pregunta 1]",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "[Respuesta 1]"
            }
        },
        {
            "@type": "Question",
            "name": "[Pregunta 2]",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "[Respuesta 2]"
            }
        }
    ]
}
</script>
```

### BreadcrumbList Schema
```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://seguridadprivadamx.com"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://seguridadprivadamx.com/blog.html"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "[Título corto]",
            "item": "https://seguridadprivadamx.com/blog/[nombre-archivo].html"
        }
    ]
}
</script>
```

---

## 9. PASO 7: ESTILOS CSS DEL ARTÍCULO

### Estilos Inline Obligatorios (dentro del <head>)
```html
<style>
    .article-hero {
        background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%);
        padding: 120px 0 80px;
        color: #ffffff;
    }
    .article-hero-content {
        max-width: 900px;
        margin: 0 auto;
    }
    .article-category {
        display: inline-block;
        background: rgba(59, 130, 246, 0.2);
        color: #60a5fa;
        padding: 6px 16px;
        border-radius: 20px;
        font-size: 0.875rem;
        font-weight: 500;
        margin-bottom: 20px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    .article-hero h1 {
        font-size: clamp(2rem, 5vw, 3rem);
        font-weight: 800;
        line-height: 1.2;
        margin-bottom: 24px;
        color: #ffffff;
    }
    .article-meta {
        display: flex;
        align-items: center;
        gap: 24px;
        flex-wrap: wrap;
        color: rgba(255,255,255,0.8);
        font-size: 0.95rem;
    }
    .article-meta-item {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .article-content-wrapper {
        display: grid;
        grid-template-columns: 1fr 300px;
        gap: 60px;
        max-width: 1200px;
        margin: 0 auto;
        padding: 60px 20px;
    }
    @media (max-width: 1024px) {
        .article-content-wrapper {
            grid-template-columns: 1fr;
        }
        .article-sidebar {
            order: -1;
        }
    }
    .article-content {
        max-width: 100%;
    }
    .article-content h2 {
        font-size: 1.75rem;
        font-weight: 700;
        color: #0f172a;
        margin: 48px 0 20px;
        padding-top: 24px;
        border-top: 1px solid #e2e8f0;
    }
    .article-content h2:first-of-type {
        margin-top: 0;
        padding-top: 0;
        border-top: none;
    }
    .article-content h3 {
        font-size: 1.35rem;
        font-weight: 600;
        color: #1e293b;
        margin: 32px 0 16px;
    }
    .article-content p {
        font-size: 1.1rem;
        line-height: 1.8;
        color: #334155;
        margin-bottom: 20px;
    }
    .article-content ul, .article-content ol {
        margin: 20px 0 28px 24px;
    }
    .article-content li {
        font-size: 1.05rem;
        line-height: 1.7;
        color: #334155;
        margin-bottom: 12px;
    }
    .article-content strong {
        color: #0f172a;
        font-weight: 600;
    }
    .highlight-box {
        background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
        border-left: 4px solid #3b82f6;
        padding: 24px 28px;
        margin: 32px 0;
        border-radius: 0 12px 12px 0;
    }
    .highlight-box h4 {
        color: #1e40af;
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 12px;
    }
    .highlight-box p {
        margin-bottom: 0;
        color: #1e3a5f;
    }
    .warning-box {
        background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
        border-left: 4px solid #f59e0b;
        padding: 24px 28px;
        margin: 32px 0;
        border-radius: 0 12px 12px 0;
    }
    .warning-box h4 {
        color: #92400e;
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 12px;
    }
    .warning-box p {
        margin-bottom: 0;
        color: #78350f;
    }
    .success-box {
        background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
        border-left: 4px solid #10b981;
        padding: 24px 28px;
        margin: 32px 0;
        border-radius: 0 12px 12px 0;
    }
    .success-box h4 {
        color: #065f46;
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 12px;
    }
    .success-box p, .success-box li {
        color: #064e3b;
    }
    .checklist {
        background: #f8fafc;
        border-radius: 12px;
        padding: 28px;
        margin: 32px 0;
    }
    .checklist h4 {
        font-size: 1.2rem;
        font-weight: 700;
        color: #0f172a;
        margin-bottom: 20px;
    }
    .checklist ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .checklist li {
        position: relative;
        padding-left: 36px;
        margin-bottom: 14px;
    }
    .checklist li::before {
        content: "✓";
        position: absolute;
        left: 0;
        top: 0;
        width: 24px;
        height: 24px;
        background: #10b981;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        font-weight: bold;
    }
    .comparison-table {
        width: 100%;
        border-collapse: collapse;
        margin: 32px 0;
        font-size: 0.95rem;
    }
    .comparison-table th {
        background: #0f172a;
        color: white;
        padding: 16px;
        text-align: left;
        font-weight: 600;
    }
    .comparison-table td {
        padding: 14px 16px;
        border-bottom: 1px solid #e2e8f0;
        color: #334155;
    }
    .comparison-table tr:nth-child(even) {
        background: #f8fafc;
    }
    .comparison-table tr:hover {
        background: #eff6ff;
    }
    .cta-inline {
        background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
        border-radius: 16px;
        padding: 40px;
        margin: 48px 0;
        text-align: center;
        color: white;
    }
    .cta-inline h3 {
        color: white;
        font-size: 1.5rem;
        margin-bottom: 12px;
    }
    .cta-inline p {
        color: rgba(255,255,255,0.9);
        margin-bottom: 24px;
        font-size: 1.1rem;
    }
    .cta-inline .btn-primary-large {
        background: white;
        color: #1e40af;
        padding: 16px 32px;
        font-weight: 600;
        display: inline-block;
        border-radius: 8px;
        text-decoration: none;
        transition: transform 0.2s, box-shadow 0.2s;
    }
    .cta-inline .btn-primary-large:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }
    .article-sidebar {
        position: sticky;
        top: 100px;
        height: fit-content;
    }
    .sidebar-card {
        background: #f8fafc;
        border-radius: 16px;
        padding: 28px;
        margin-bottom: 24px;
    }
    .sidebar-card h4 {
        font-size: 1.1rem;
        font-weight: 700;
        color: #0f172a;
        margin-bottom: 20px;
        padding-bottom: 12px;
        border-bottom: 2px solid #e2e8f0;
    }
    .toc-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .toc-list li {
        margin-bottom: 12px;
    }
    .toc-list a {
        color: #475569;
        text-decoration: none;
        font-size: 0.95rem;
        display: block;
        padding: 8px 12px;
        border-radius: 6px;
        transition: all 0.2s;
    }
    .toc-list a:hover {
        color: #1e40af;
        background: #eff6ff;
    }
    .sidebar-cta {
        background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%);
        border-radius: 16px;
        padding: 28px;
        color: white;
        text-align: center;
    }
    .sidebar-cta h4 {
        color: white;
        border-bottom: none;
        padding-bottom: 0;
        margin-bottom: 12px;
    }
    .sidebar-cta p {
        font-size: 0.95rem;
        color: rgba(255,255,255,0.8);
        margin-bottom: 20px;
    }
    .sidebar-cta .btn-primary {
        display: block;
        width: 100%;
        text-align: center;
    }
    .stat-highlight {
        display: grid !important;
        grid-template-columns: repeat(3, 1fr) !important;
        gap: 20px !important;
        margin: 40px 0 !important;
        background: transparent !important;
    }
    .stat-highlight .stat-item {
        text-align: center !important;
        padding: 24px !important;
        background: #ffffff !important;
        border-radius: 12px !important;
        border: 2px solid #e2e8f0 !important;
        box-shadow: 0 4px 12px rgba(0,0,0,0.05) !important;
    }
    .stat-highlight .stat-item .stat-number {
        font-size: 2.5rem !important;
        font-weight: 800 !important;
        color: #1e40af !important;
        display: block !important;
        line-height: 1.2 !important;
        background: transparent !important;
    }
    .stat-highlight .stat-item .stat-label {
        font-size: 0.9rem !important;
        color: #334155 !important;
        margin-top: 8px !important;
        display: block !important;
        line-height: 1.4 !important;
        background: transparent !important;
    }
    @media (max-width: 768px) {
        .stat-highlight {
            grid-template-columns: 1fr;
        }
        .article-content-wrapper {
            padding: 40px 16px;
        }
    }
    .author-box {
        display: flex;
        align-items: center;
        gap: 20px;
        background: #f8fafc;
        border-radius: 16px;
        padding: 28px;
        margin: 48px 0;
    }
    .author-avatar {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.5rem;
        font-weight: 700;
        flex-shrink: 0;
    }
    .author-info h4 {
        font-size: 1.1rem;
        font-weight: 700;
        color: #0f172a;
        margin-bottom: 4px;
    }
    .author-info p {
        font-size: 0.95rem;
        color: #64748b;
        margin: 0;
    }
    .share-buttons {
        display: flex;
        gap: 12px;
        margin: 32px 0;
        flex-wrap: wrap;
    }
    .share-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 20px;
        border-radius: 8px;
        font-size: 0.9rem;
        font-weight: 500;
        text-decoration: none;
        transition: transform 0.2s;
    }
    .share-btn:hover {
        transform: translateY(-2px);
    }
    .share-btn.facebook { background: #1877f2; color: white; }
    .share-btn.twitter { background: #1da1f2; color: white; }
    .share-btn.linkedin { background: #0a66c2; color: white; }
    .share-btn.whatsapp { background: #25d366; color: white; }
    .related-articles {
        margin-top: 60px;
        padding-top: 48px;
        border-top: 1px solid #e2e8f0;
    }
    .related-articles h3 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 28px;
    }
    .related-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    }
    @media (max-width: 768px) {
        .related-grid {
            grid-template-columns: 1fr;
        }
    }
    .related-card {
        background: #f8fafc;
        border-radius: 12px;
        padding: 24px;
        text-decoration: none;
        transition: transform 0.2s, box-shadow 0.2s;
    }
    .related-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    .related-card h4 {
        font-size: 1.1rem;
        font-weight: 600;
        color: #0f172a;
        margin-bottom: 8px;
    }
    .related-card p {
        font-size: 0.9rem;
        color: #64748b;
        margin: 0;
    }
</style>
```

---

## 10. PASO 8: CONTENIDO Y MARKETING

### Estructura de Contenido Recomendada

1. **Introducción (200-300 palabras)**
   - Hook que capture atención
   - Problema que resuelve el artículo
   - Qué aprenderá el lector
   - Estadísticas de credibilidad

2. **Desarrollo (2000-3500 palabras)**
   - 6-10 secciones H2
   - Subsecciones H3 donde aplique
   - Listas y bullets para escaneo fácil
   - Cajas destacadas (highlight, warning, success)
   - Tablas comparativas cuando sea relevante
   - CTAs inline cada 600-800 palabras

3. **Conclusión (200-300 palabras)**
   - Resumen de puntos clave
   - Lista de takeaways
   - CTA final fuerte

### Elementos de Contenido Disponibles

#### Caja de Información (Azul)
```html
<div class="highlight-box">
    <h4>Título de la Información</h4>
    <p>Contenido informativo destacado.</p>
</div>
```

#### Caja de Advertencia (Amarilla)
```html
<div class="warning-box">
    <h4>Advertencia o Precaución</h4>
    <p>Contenido de advertencia.</p>
</div>
```

#### Caja de Éxito/Tip (Verde)
```html
<div class="success-box">
    <h4>Consejo o Mejor Práctica</h4>
    <p>Contenido positivo o recomendación.</p>
</div>
```

#### Checklist con Checkmarks
```html
<div class="checklist">
    <h4>Título del Checklist</h4>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
</div>
```

#### Tabla Comparativa
```html
<table class="comparison-table">
    <thead>
        <tr>
            <th>Columna 1</th>
            <th>Columna 2</th>
            <th>Columna 3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Dato 1</td>
            <td>Dato 2</td>
            <td>Dato 3</td>
        </tr>
    </tbody>
</table>
```

#### Estadísticas Destacadas
```html
<div class="stat-highlight">
    <div class="stat-item">
        <span class="stat-number">XX%</span>
        <span class="stat-label">Descripción</span>
    </div>
    <!-- Repetir 3 veces -->
</div>
```

#### Caja de Autor
```html
<div class="author-box">
    <div class="author-avatar">SP</div>
    <div class="author-info">
        <h4>Equipo de Expertos SeguridadPrivadaMX</h4>
        <p>Descripción del equipo y credenciales.</p>
    </div>
</div>
```

---

## 11. PASO 9: CTAs Y CONVERSIÓN

### CTA Inline (dentro del contenido)
```html
<div class="cta-inline">
    <h3>Título del CTA</h3>
    <p>Descripción persuasiva del beneficio.</p>
    <a href="../index.html#cotizacion" class="btn-primary-large">Texto del Botón</a>
</div>
```

### Frecuencia de CTAs
- **Primer CTA:** Después de la primera sección importante (~600 palabras)
- **Segundo CTA:** A mitad del artículo
- **Tercer CTA:** Antes de la conclusión
- **CTA Final:** Al terminar el artículo

### Textos de CTA Efectivos
- "Solicitar Cotización Gratuita"
- "Obtener Evaluación Sin Costo"
- "Hablar con un Experto"
- "Cotizar en 4 Horas"
- "Proteger Mi Condominio"

### Botones de Compartir
```html
<div class="share-buttons">
    <span style="color: #64748b; font-weight: 500; margin-right: 12px;">Comparte este artículo:</span>
    <a href="https://www.facebook.com/sharer/sharer.php?u=URL" target="_blank" rel="noopener" class="share-btn facebook">
        <svg>...</svg> Facebook
    </a>
    <a href="https://twitter.com/intent/tweet?text=TITULO&url=URL" target="_blank" rel="noopener" class="share-btn twitter">
        <svg>...</svg> Twitter
    </a>
    <a href="https://www.linkedin.com/shareArticle?mini=true&url=URL" target="_blank" rel="noopener" class="share-btn linkedin">
        <svg>...</svg> LinkedIn
    </a>
    <a href="https://wa.me/?text=MENSAJE URL" target="_blank" rel="noopener" class="share-btn whatsapp">
        <svg>...</svg> WhatsApp
    </a>
</div>
```

### Artículos Relacionados al Final
```html
<div class="related-articles">
    <h3>Artículos Relacionados</h3>
    <div class="related-grid">
        <a href="URL" class="related-card">
            <h4>Título del Artículo</h4>
            <p>Descripción breve.</p>
        </a>
        <!-- Repetir 3 veces -->
    </div>
</div>
```

---

## 12. PASO 10: CHECKLIST FINAL

### Antes de Publicar, Verificar:

#### SEO
- [ ] Title tag con keyword principal (50-60 chars)
- [ ] Meta description optimizada (150-160 chars)
- [ ] URL amigable con keyword
- [ ] Canonical URL correcta
- [ ] H1 único con keyword
- [ ] H2s descriptivos con variaciones de keyword
- [ ] Alt text en imágenes (si las hay)
- [ ] Links internos a servicios y otras páginas
- [ ] Schema.org Article implementado
- [ ] Schema.org BreadcrumbList implementado
- [ ] Schema.org FAQ (si aplica)

#### Contenido
- [ ] Mínimo 2000 palabras
- [ ] Introducción con hook
- [ ] Conclusión con resumen
- [ ] Listas y bullets para escaneo
- [ ] Cajas destacadas donde aplique
- [ ] Sin errores ortográficos
- [ ] Sin emojis
- [ ] Tono profesional consistente

#### Conversión
- [ ] Mínimo 3 CTAs inline
- [ ] Sidebar con CTA
- [ ] Botones de compartir
- [ ] WhatsApp con mensaje preconfigurado
- [ ] Artículos relacionados

#### Técnico
- [ ] Rutas relativas correctas (../)
- [ ] Header y Footer completos
- [ ] Breadcrumb actualizado
- [ ] Estilos inline incluidos
- [ ] Mobile responsive verificado
- [ ] Links funcionando

#### blog.html
- [ ] Card agregada con enlace
- [ ] Orden correcto de cards
- [ ] Color de card diferente a adyacentes

---

## 13. PLANTILLAS REUTILIZABLES

### Plantilla de Card para blog.html
```html
<a href="blog/[URL].html" class="service-card" style="text-decoration: none;">
    <div class="service-image" style="background: linear-gradient(135deg, #[COLOR1] 0%, #[COLOR2] 100%);">
        <span class="service-image-text">[CATEGORÍA]</span>
    </div>
    <div class="service-content">
        <h3 class="service-title">[TÍTULO]</h3>
        <p class="service-description">[DESCRIPCIÓN 2-3 LÍNEAS]</p>
        <ul class="service-features">
            <li>[PUNTO 1]</li>
            <li>[PUNTO 2]</li>
            <li>[PUNTO 3]</li>
            <li>[PUNTO 4]</li>
        </ul>
    </div>
</a>
```

### Plantilla de WhatsApp Float
```html
<a href="https://wa.me/525512345678?text=Hola,%20leí%20su%20artículo%20sobre%20[TEMA]%20y%20me%20interesa%20una%20cotización"
   class="whatsapp-float"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Contactar por WhatsApp">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.824.738 5.488 2.032 7.792L0 32l8.416-2.016A15.908 15.908 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0z" fill="#25D366"/>
        <path d="M25.36 22.26c-.44 1.24-2.18 2.28-3.56 2.58-.96.2-2.2.36-6.4-1.38-5.36-2.22-8.82-7.66-9.08-8.02-.26-.36-2.12-2.82-2.12-5.38s1.34-3.82 1.82-4.34c.48-.52 1.04-.64 1.4-.64.36 0 .7.02 1.02.02.32 0 .76-.12 1.18.9.44 1.04 1.5 3.66 1.64 3.92.14.26.24.58.04.94-.18.36-.28.58-.56.9-.28.32-.58.7-.82.94-.26.26-.54.54-.24 1.06.3.52 1.34 2.2 2.88 3.56 1.96 1.76 3.62 2.3 4.14 2.56.52.26.82.22 1.12-.14.3-.36 1.3-1.5 1.64-2.02.34-.52.68-.44 1.14-.26.46.18 2.94 1.38 3.44 1.64.52.26.86.38 1 .6.14.22.14 1.26-.3 2.48z" fill="#fff"/>
    </svg>
</a>
```

---

## 14. PALETA DE COLORES PARA CARDS

Usar gradientes diferentes para cada card, evitando colores repetidos en cards adyacentes:

| Nombre | Color 1 | Color 2 | Uso Sugerido |
|--------|---------|---------|--------------|
| Azul | #1e40af | #3b82f6 | Guías principales, seguridad general |
| Verde | #059669 | #10b981 | Control de accesos, prevención |
| Morado | #7c3aed | #a78bfa | Tecnología, videovigilancia |
| Rojo | #dc2626 | #ef4444 | Emergencias, alertas |
| Amarillo | #f59e0b | #fbbf24 | Administración, presupuestos |
| Cyan | #0891b2 | #06b6d4 | Reportes, analytics, tendencias |

### Orden Recomendado en Grid (evitar repetición visual)
```
Fila 1: Azul - Verde - Morado
Fila 2: Rojo - Amarillo - Cyan
Fila 3: Azul - Verde - Morado
...
```

---

## 15. CONOCIMIENTO DE SEGURIDAD PRIVADA EN MÉXICO

### Marco Legal y Certificaciones

#### Certificaciones Obligatorias en CDMX
1. **SSC-CDMX (Secretaría de Seguridad Ciudadana)**
   - Permiso para operar en Ciudad de México
   - Renovación anual
   - Verificable en portal oficial

2. **DGSP (Dirección General de Seguridad Privada)**
   - Registro federal obligatorio
   - Dependiente de la Secretaría de Seguridad federal
   - Autoriza modalidades específicas de servicio

3. **REPSE (Registro de Prestadoras de Servicios Especializados)**
   - Obligatorio desde reforma laboral 2021
   - Requisito para facturación legal
   - Verificable en plataforma del IMSS

4. **Seguro de Responsabilidad Civil**
   - Mínimo recomendado: $5,000,000 MXN
   - Cobertura de daños a terceros
   - Protección para el condominio contratante

#### Certificación Individual de Guardias
- Cada guardia debe tener credencial SSC personal
- Capacitación mínima de 40 horas
- Evaluación psicológica
- Verificación de antecedentes penales
- Exámenes toxicológicos

### Tipos de Servicios de Seguridad Privada

1. **Vigilancia Fija**
   - Guardias en caseta/accesos
   - Cobertura 24/7 o turnos específicos
   - Control de acceso peatonal y vehicular

2. **Vigilancia Móvil/Patrullaje**
   - Rondines en vehículo
   - Cobertura perimetral
   - Ideal para fraccionamientos horizontales

3. **Monitoreo de Alarmas**
   - Central de monitoreo 24/7
   - Respuesta a eventos
   - Coordinación con autoridades

4. **Custodia y Traslado de Valores**
   - No aplica para condominios residenciales

### Estructura de Costos en el Mercado CDMX

#### Factores que Determinan el Precio
- Número de puestos de vigilancia
- Horario (24/7, nocturno, fines de semana)
- Ubicación y nivel de riesgo de la zona
- Tecnología incluida
- Tamaño del condominio
- Servicios adicionales

#### Rangos de Mercado (2024-2025)
| Tipo | Unidades | Precio Mensual |
|------|----------|----------------|
| Pequeño | 10-30 | $28,000 - $35,000 |
| Mediano | 31-80 | $35,000 - $55,000 |
| Grande | 80-150 | $55,000 - $85,000 |
| Premium | 150+ | $85,000 - $120,000+ |

#### Desglose Típico de Costos
- 65-70% Nómina y prestaciones del personal
- 10-15% Equipamiento y uniformes
- 10-12% Tecnología
- 5-8% Supervisión y administración
- 3-5% Margen operativo

### Problemáticas Comunes en Condominios

1. **Rotación de Personal**
   - Causa: bajos salarios, malas condiciones
   - Impacto: pérdida de conocimiento del lugar
   - Solución: empresas que paguen prestaciones completas

2. **Falta de Protocolos**
   - Causa: improvisación, falta de capacitación
   - Impacto: respuestas inconsistentes
   - Solución: protocolos documentados y capacitación

3. **Tecnología Obsoleta**
   - Causa: resistencia al cambio, costos
   - Impacto: ineficiencia operativa
   - Solución: proveedores con tecnología incluida

4. **Comunicación Deficiente**
   - Causa: falta de canales formales
   - Impacto: residentes desinformados, conflictos
   - Solución: apps y reportes automatizados

5. **Incumplimiento de Certificaciones**
   - Causa: empresas informales, ahorro de costos
   - Impacto: riesgo legal para el condominio
   - Solución: verificación rigurosa antes de contratar

### Tendencias en Seguridad Residencial

1. **Inteligencia Artificial**
   - Detección de comportamiento anómalo
   - Reconocimiento de placas (LPR)
   - Alertas predictivas

2. **Biometría**
   - Acceso por huella digital
   - Reconocimiento facial
   - Eliminación de tarjetas/llaves

3. **IoT y Sensores**
   - Sensores perimetrales
   - Detección de movimiento inteligente
   - Integración con domótica

4. **Apps Móviles**
   - Autorización de visitantes remota
   - Notificaciones en tiempo real
   - Acceso a cámaras en vivo

5. **Cloud Computing**
   - Almacenamiento de video en la nube
   - Acceso desde cualquier lugar
   - Respaldos automáticos

### Autoridades y Coordinación

#### En caso de Emergencia
- **911** - Emergencias generales
- **C5** - Centro de Comando, Control, Cómputo, Comunicaciones y Contacto Ciudadano
- **SSC CDMX** - Policía local
- **Guardia Nacional** - Apoyo federal

#### Reportes y Denuncias
- Ministerio Público para delitos
- 089 para denuncias anónimas
- App CDMX para reportes ciudadanos

---

## EJEMPLO DE USO DE ESTA GUÍA

Cuando se solicite un nuevo artículo:

1. **Leer este documento completo**
2. **Definir:**
   - Tema/keyword principal
   - Categoría
   - Color de card
   - Tiempo estimado de lectura

3. **Crear la card en blog.html:**
   - Agregar en posición apropiada
   - Usar color diferente a adyacentes
   - Escribir título, descripción y 4 puntos clave

4. **Crear el archivo del artículo:**
   - Nombre en kebab-case con keyword
   - Copiar estructura base
   - Configurar todos los meta tags
   - Implementar Schema.org

5. **Escribir el contenido:**
   - Mínimo 2000 palabras
   - Estructura con H2 y H3
   - Incluir cajas destacadas
   - Agregar CTAs cada 600-800 palabras

6. **Configurar sidebar:**
   - Tabla de contenidos con todos los H2
   - Servicios relacionados relevantes
   - Artículos relacionados
   - Páginas de interés

7. **Verificar con checklist final**

8. **Actualizar artículos relacionados** en otros artículos si es relevante

---

*Documento creado para SeguridadPrivadaMX*
*Última actualización: Diciembre 2024*
