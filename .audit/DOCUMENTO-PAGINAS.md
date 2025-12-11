# GUÍA PARA CREAR NUEVAS PÁGINAS - SEGURIDAD PRIVADA MX

## Documento de Referencia para Generación de Páginas de Servicio

**Versión:** 1.5
**Última actualización:** Noviembre 2025
**Página de referencia:** `/vigilancia-24-7.html`

---

## ÍNDICE

1. [Información de la Empresa](#1-información-de-la-empresa)
2. [Arquitectura de Páginas](#2-arquitectura-de-páginas)
3. [Estructura HTML Base](#3-estructura-html-base)
4. [Secciones Disponibles](#4-secciones-disponibles)
5. [Sistema de Estilos CSS](#5-sistema-de-estilos-css)
6. [Componentes Reutilizables](#6-componentes-reutilizables)
7. [Plantilla Completa](#7-plantilla-completa)
8. [Formato de Entrada de Datos](#8-formato-de-entrada-de-datos)
9. [Checklist de Validación](#9-checklist-de-validación)
10. [Errores Comunes a Evitar](#10-errores-comunes-a-evitar)
11. [Reglas de Código Estrictas](#11-reglas-de-código-estrictas)

---

## 1. INFORMACIÓN DE LA EMPRESA

### Datos Corporativos
- **Nombre comercial:** SeguridadPrivadaMX
- **Sector:** Seguridad privada para condominios residenciales
- **Ubicación:** Ciudad de México (CDMX)
- **Teléfono:** 55 1234 5678
- **Email:** contacto@seguridadprivadamx.com
- **Horario:** Lunes a Domingo 24/7

### Certificaciones
- SSC-CDMX Vigente
- Registro DGSP
- REPSE Activo
- Seguro de Responsabilidad Civil

### Propuesta de Valor
- Guardias 100% certificados SSC
- Tecnología propia
- Precios transparentes
- Servicio especializado en condominios residenciales

### Zonas de Cobertura
- Benito Juárez
- Miguel Hidalgo
- Coyoacán
- Cuauhtémoc
- Álvaro Obregón
- Todas las Alcaldías de CDMX

---

## 2. ARQUITECTURA DE PÁGINAS

### Estructura de Archivos
```
SEGURIDADPRIVADAMX/
├── index.html                  # Página principal
├── servicios.html              # Listado de servicios
├── vigilancia-24-7.html        # Página de servicio (REFERENCIA)
├── control-accesos.html        # Página de servicio
├── camaras-monitoreo.html      # Página de servicio
├── respuesta-emergencias.html  # Página de servicio
├── patrullaje-vehicular.html   # Página de servicio
├── reportes-analytics.html     # Página de servicio
├── [nueva-pagina].html         # Nueva página a crear
├── css/
│   └── style.css              # Estilos globales (NO MODIFICAR)
└── js/
    └── app.js                 # JavaScript global (NO MODIFICAR)
```

### Convenciones de Nomenclatura
- **Archivos HTML:** kebab-case (ej: `nombre-servicio.html`)
- **URLs amigables:** Descriptivas y con keywords SEO
- **IDs de sección:** kebab-case (ej: `#seccion-nombre`)

---

## 3. ESTRUCTURA HTML BASE

### Documento HTML Completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="[DESCRIPCIÓN SEO - 150-160 caracteres máximo]">
    <meta name="keywords" content="[KEYWORDS SEPARADAS POR COMAS]">
    <title>[TÍTULO DE PÁGINA] | SeguridadPrivadaMX</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- CONTENIDO -->
    <script src="js/app.js"></script>
</body>
</html>
```

### Meta Tags Requeridos
| Meta Tag | Descripción | Ejemplo |
|----------|-------------|---------|
| `description` | Descripción SEO de la página | "Servicio de [X] para condominios en CDMX..." |
| `keywords` | Palabras clave relevantes | "seguridad, condominios, CDMX, [servicio]" |
| `title` | Título de la página | "[Servicio] para Condominios \| SeguridadPrivadaMX" |

---

## 4. SECCIONES DISPONIBLES

### 4.1 HEADER / NAVEGACIÓN (OBLIGATORIO)

```html
<!-- Header / Navegación -->
<header class="header">
    <nav class="navbar">
        <div class="container">
            <div class="nav-wrapper">
                <a href="index.html" class="logo">
                    <span class="logo-text">SeguridadPrivadaMX</span>
                </a>

                <button class="mobile-menu-toggle" aria-label="Abrir menú">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul class="nav-menu">
                    <li><a href="index.html" class="nav-link">Inicio</a></li>
                    <li class="nav-item-dropdown">
                        <a href="servicios.html" class="nav-link active">Servicios</a>
                        <ul class="dropdown-menu">
                            <li><a href="vigilancia-24-7.html">Vigilancia 24/7</a></li>
                            <li><a href="control-accesos.html">Control de Accesos</a></li>
                            <li><a href="camaras-monitoreo.html">Cámaras y Monitoreo</a></li>
                            <li><a href="respuesta-emergencias.html">Respuesta a Emergencias</a></li>
                            <li><a href="patrullaje-vehicular.html">Patrullaje Vehicular</a></li>
                            <li><a href="reportes-analytics.html">Reportes y Analytics</a></li>
                            <!-- Agregar nuevos servicios aquí -->
                        </ul>
                    </li>
                    <li><a href="tel:+525512345678" class="nav-phone">55 1234 5678</a></li>
                    <li><a href="index.html#cotizacion" class="btn-primary-nav">Cotizar Gratis</a></li>
                </ul>
            </div>
        </div>
    </nav>
</header>
```

**Notas:**
- Agregar clase `active` al nav-link correspondiente a la página actual
- Actualizar el dropdown-menu con nuevos servicios cuando se agreguen

---

### 4.2 BREADCRUMB (OBLIGATORIO)

```html
<!-- Breadcrumb -->
<div class="breadcrumb-wrapper">
    <div class="container">
        <div class="breadcrumb">
            <a href="index.html">Inicio</a> / <a href="servicios.html">Servicios</a> / <span>[NOMBRE DEL SERVICIO]</span>
        </div>
    </div>
</div>
```

---

### 4.3 HERO SECTION (OBLIGATORIO)

```html
<!-- Hero Section -->
<section class="hero">
    <div class="container">
        <div class="hero-grid">
            <div class="hero-content">
                <h1 class="hero-title">
                    [TÍTULO PRINCIPAL DEL SERVICIO]
                </h1>
                <p class="hero-subtitle">
                    [DESCRIPCIÓN BREVE DEL SERVICIO - 2-3 oraciones con <strong>palabras clave destacadas</strong>]
                </p>
            </div>

            <div class="hero-description">
                <div class="description-card">
                    <h2 class="description-title">[SUBTÍTULO DE VALOR]</h2>
                    <p class="description-text">
                        [PÁRRAFO 1 - Explicación del servicio con <strong>beneficios destacados</strong>]
                    </p>
                    <p class="description-text">
                        [PÁRRAFO 2 - Diferenciadores con <strong>características únicas</strong>]
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
```

---

### 4.4 CARACTERÍSTICAS / SERVICIOS (OBLIGATORIO)

```html
<!-- Características Principales -->
<section class="services" style="background-color: #ffffff;">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">[PREGUNTA O TÍTULO DE LA SECCIÓN]</h2>
            <p class="section-subtitle">
                [SUBTÍTULO DESCRIPTIVO]
            </p>
        </div>

        <div class="services-grid">
            <!-- CARD DE CARACTERÍSTICA - Repetir según sea necesario -->
            <div class="service-card">
                <div class="service-image" style="background: linear-gradient(135deg, [COLOR1] 0%, [COLOR2] 100%);">
                    <span class="service-image-text">[TÍTULO CORTO]</span>
                </div>
                <div class="service-content">
                    <h3 class="service-title">[TÍTULO DE LA CARACTERÍSTICA]</h3>
                    <p class="service-description">
                        [DESCRIPCIÓN BREVE]
                    </p>
                    <ul class="service-features">
                        <li>[Característica 1]</li>
                        <li>[Característica 2]</li>
                        <li>[Característica 3]</li>
                        <li>[Característica 4]</li>
                    </ul>
                </div>
            </div>
            <!-- FIN CARD -->
        </div>
    </div>
</section>
```

**Paleta de Colores para Cards:**
| Color | Gradient CSS |
|-------|--------------|
| Azul | `linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)` |
| Verde | `linear-gradient(135deg, #059669 0%, #10b981 100%)` |
| Morado | `linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)` |
| Rojo | `linear-gradient(135deg, #dc2626 0%, #ef4444 100%)` |
| Amarillo | `linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)` |
| Cyan | `linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)` |

---

### 4.5 PROCESO DE IMPLEMENTACIÓN (OPCIONAL)

```html
<!-- Proceso de Implementación -->
<section class="implementation-process">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">[TÍTULO DEL PROCESO]</h2>
            <p class="section-subtitle">
                [DESCRIPCIÓN DEL PROCESO]
            </p>
        </div>

        <div class="process-grid">
            <!-- PASO - Repetir para cada paso -->
            <div class="process-card">
                <div class="process-card-header">
                    <span class="process-number">01</span>
                    <h3 class="process-title">[TÍTULO DEL PASO]</h3>
                </div>
                <div class="process-card-body">
                    <p class="process-description">[DESCRIPCIÓN BREVE]</p>
                    <ul class="process-list">
                        <li>[Detalle 1]</li>
                        <li>[Detalle 2]</li>
                        <li>[Detalle 3]</li>
                        <li>[Detalle 4]</li>
                    </ul>
                </div>
            </div>
            <!-- FIN PASO -->
        </div>
    </div>
</section>
```

**Nota:** Se recomienda usar 5 pasos para el proceso de implementación.

---

### 4.6 BENEFICIOS (OPCIONAL)

```html
<!-- Beneficios del Servicio -->
<section class="benefits-section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">[TÍTULO DE BENEFICIOS]</h2>
            <p class="section-subtitle">
                [SUBTÍTULO]
            </p>
        </div>

        <div class="benefits-grid">
            <!-- BENEFICIO - Repetir según sea necesario -->
            <div class="benefit-card">
                <div class="benefit-icon">
                    <!-- SVG ICON - Ver biblioteca de iconos abajo -->
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        [PATH DEL ICONO]
                    </svg>
                </div>
                <h3 class="benefit-title">[TÍTULO DEL BENEFICIO]</h3>
                <p class="benefit-description">[DESCRIPCIÓN DEL BENEFICIO]</p>
            </div>
            <!-- FIN BENEFICIO -->
        </div>
    </div>
</section>
```

**Biblioteca de Iconos SVG Disponibles:**

```html
<!-- Escudo / Protección -->
<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
</svg>

<!-- Casa -->
<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
</svg>

<!-- Candado -->
<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
</svg>

<!-- Reloj -->
<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
</svg>

<!-- Dinero -->
<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
</svg>

<!-- Documento -->
<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
</svg>

<!-- Cámara -->
<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
</svg>

<!-- Usuario / Persona -->
<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
</svg>

<!-- Check / Verificación -->
<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <polyline points="20 6 9 17 4 12"/>
</svg>

<!-- Alerta -->
<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
</svg>
```

---

### 4.7 PREGUNTAS FRECUENTES (RECOMENDADO)

```html
<!-- Preguntas Frecuentes -->
<section class="services" style="background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">[TÍTULO DE FAQ]</h2>
            <p class="section-subtitle">
                [SUBTÍTULO]
            </p>
        </div>

        <div class="faq-container" style="max-width: 900px; margin: 0 auto;">
            <!-- FAQ ITEM - Repetir según sea necesario -->
            <div class="faq-item">
                <button class="faq-question">
                    <span>[PREGUNTA]</span>
                    <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
                <div class="faq-answer">
                    <p>[RESPUESTA DETALLADA]</p>
                </div>
            </div>
            <!-- FIN FAQ ITEM -->
        </div>
    </div>
</section>
```

**Recomendaciones:**
- Incluir entre 6-10 preguntas frecuentes
- Las preguntas deben ser específicas del servicio
- Las respuestas deben ser completas pero concisas (2-4 oraciones)

---

### 4.8 CTA SECTION (OBLIGATORIO)

```html
<!-- CTA Section -->
<section class="cta-section">
    <div class="container">
        <div class="cta-content">
            <h2>[TÍTULO CTA - Pregunta o llamada a la acción]</h2>
            <p>[DESCRIPCIÓN - Beneficio de contactar + tiempo de respuesta]</p>
            <div class="cta-buttons">
                <a href="index.html#cotizacion" class="btn-primary-large">Solicitar Cotización Gratis</a>
                <a href="servicios.html" class="btn-secondary-large">Ver Todos los Servicios</a>
            </div>
        </div>
    </div>
</section>
```

---

### 4.9 FOOTER (OBLIGATORIO)

```html
<!-- Footer -->
<footer class="footer">
    <div class="container">
        <div class="footer-main">
            <div class="footer-grid">
                <div class="footer-column footer-brand">
                    <h3 class="footer-brand-title">SeguridadPrivadaMX</h3>
                    <p class="footer-brand-text">
                        Empresa líder en seguridad privada para condominios en CDMX. Tecnología propia, precios transparentes y guardias 100% certificados.
                    </p>
                    <div class="footer-contact-info">
                        <p class="footer-contact-item">
                            <span class="footer-contact-label">Teléfono:</span>
                            <a href="tel:+525512345678">55 1234 5678</a>
                        </p>
                        <p class="footer-contact-item">
                            <span class="footer-contact-label">Email:</span>
                            <a href="mailto:contacto@seguridadprivadamx.com">contacto@seguridadprivadamx.com</a>
                        </p>
                        <p class="footer-contact-item">
                            <span class="footer-contact-label">Horario:</span>
                            <span>Lunes a Domingo 24/7</span>
                        </p>
                    </div>
                </div>

                <div class="footer-column">
                    <h4 class="footer-column-title">Servicios</h4>
                    <ul class="footer-links">
                        <li><a href="vigilancia-24-7.html">Vigilancia 24/7</a></li>
                        <li><a href="control-accesos.html">Control de Accesos</a></li>
                        <li><a href="camaras-monitoreo.html">Cámaras y Monitoreo</a></li>
                        <li><a href="respuesta-emergencias.html">Respuesta a Emergencias</a></li>
                        <li><a href="servicios.html">Patrullaje Vehicular</a></li>
                        <li><a href="servicios.html">Reportes y Analytics</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h4 class="footer-column-title">Empresa</h4>
                    <ul class="footer-links">
                        <li><a href="index.html#nosotros">Quiénes Somos</a></li>
                        <li><a href="index.html#clientes">Testimonios</a></li>
                        <li><a href="index.html#cotizacion">Solicitar Cotización</a></li>
                        <li><a href="preguntas-frecuentes.html">Preguntas Frecuentes</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="index.html#contacto">Contacto</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h4 class="footer-column-title">Cobertura CDMX</h4>
                    <ul class="footer-links">
                        <li><a href="index.html#contacto">Benito Juárez</a></li>
                        <li><a href="index.html#contacto">Miguel Hidalgo</a></li>
                        <li><a href="index.html#contacto">Coyoacán</a></li>
                        <li><a href="index.html#contacto">Cuauhtémoc</a></li>
                        <li><a href="index.html#contacto">Álvaro Obregón</a></li>
                        <li><a href="index.html#contacto">Todas las Alcaldías</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="footer-certifications">
            <div class="certification-item">
                <span class="certification-label">Certificaciones y Registros:</span>
            </div>
            <div class="certification-item">
                <span>SSC-CDMX Vigente</span>
            </div>
            <div class="certification-item">
                <span>Registro DGSP</span>
            </div>
            <div class="certification-item">
                <span>REPSE Activo</span>
            </div>
            <div class="certification-item">
                <span>Seguro de Responsabilidad Civil</span>
            </div>
        </div>
    </div>

    <div class="footer-bottom">
        <div class="container">
            <div class="footer-bottom-content">
                <p class="footer-copyright">
                    &copy; 2025 SeguridadPrivadaMX. Todos los derechos reservados.
                </p>
                <div class="footer-legal-links">
                    <a href="aviso-privacidad.html">Aviso de Privacidad</a>
                    <span class="separator">|</span>
                    <a href="terminos-condiciones.html">Términos y Condiciones</a>
                </div>
            </div>
        </div>
    </div>
</footer>
```

---

### 4.10 WHATSAPP FLOAT BUTTON (OBLIGATORIO)

```html
<!-- WhatsApp Float Button -->
<a href="https://wa.me/525512345678?text=Hola,%20me%20interesa%20información%20sobre%20el%20servicio%20de%20[NOMBRE-SERVICIO-URL-ENCODED]"
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

**Nota:** Reemplazar `[NOMBRE-SERVICIO-URL-ENCODED]` con el nombre del servicio codificado para URL (espacios = %20).

---

## 5. SISTEMA DE ESTILOS CSS

### Variables CSS Disponibles

```css
/* Colores Corporativos */
--color-primary: #1e40af;        /* Azul principal */
--color-primary-dark: #1e3a8a;   /* Azul oscuro */
--color-primary-light: #3b82f6;  /* Azul claro */
--color-secondary: #0891b2;      /* Cyan */
--color-accent: #f59e0b;         /* Amarillo/Naranja */

/* Estados */
--color-success: #10b981;        /* Verde éxito */
--color-error: #ef4444;          /* Rojo error */
--color-warning: #f59e0b;        /* Amarillo advertencia */

/* Grises */
--color-dark: #111827;           /* Texto principal */
--color-gray-700: #374151;       /* Texto secundario */
--color-gray-600: #4b5563;       /* Texto terciario */
--color-gray-500: #6b7280;       /* Texto sutil */

/* Espaciado */
--spacing-xs: 0.5rem;            /* 8px */
--spacing-sm: 1rem;              /* 16px */
--spacing-md: 1.5rem;            /* 24px */
--spacing-lg: 2rem;              /* 32px */
--spacing-xl: 3rem;              /* 48px */
--spacing-2xl: 4rem;             /* 64px */
--spacing-3xl: 6rem;             /* 96px */

/* Bordes */
--border-radius-sm: 0.375rem;    /* 6px */
--border-radius-md: 0.5rem;      /* 8px */
--border-radius-lg: 0.75rem;     /* 12px */
--border-radius-xl: 1rem;        /* 16px */
```

### Clases de Utilidad Disponibles
- `.text-center` - Texto centrado
- `.text-left` - Texto alineado a la izquierda
- `.text-right` - Texto alineado a la derecha
- `.mb-0` - Sin margen inferior
- `.mt-0` - Sin margen superior

---

## 6. COMPONENTES REUTILIZABLES

### 6.1 Botones

```html
<!-- Botón Primario -->
<a href="#" class="btn-primary">Texto del Botón</a>

<!-- Botón Secundario -->
<a href="#" class="btn-secondary">Texto del Botón</a>

<!-- Botón Grande Primario -->
<a href="#" class="btn-primary-large">Texto del Botón</a>

<!-- Botón Grande Secundario -->
<a href="#" class="btn-secondary-large">Texto del Botón</a>

<!-- Botón de Navegación -->
<a href="#" class="btn-primary-nav">Texto del Botón</a>
```

### 6.2 Contenedor

```html
<div class="container">
    <!-- Contenido centrado con ancho máximo de 1200px -->
</div>
```

### 6.3 Encabezado de Sección

```html
<div class="section-header">
    <h2 class="section-title">[TÍTULO]</h2>
    <p class="section-subtitle">[SUBTÍTULO]</p>
</div>
```

### 6.4 Grid de Servicios

```html
<div class="services-grid">
    <!-- Cards de servicio -->
</div>
```

### 6.5 Grid de Beneficios

```html
<div class="benefits-grid">
    <!-- Cards de beneficios -->
</div>
```

### 6.6 Grid de Proceso

```html
<div class="process-grid">
    <!-- Cards de proceso -->
</div>
```

---

## 7. PLANTILLA COMPLETA

A continuación se presenta una plantilla completa lista para usar. Reemplazar todos los campos entre `[CORCHETES]`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="[META_DESCRIPTION]">
    <meta name="keywords" content="[META_KEYWORDS]">
    <title>[TITULO_PAGINA] | SeguridadPrivadaMX</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Header / Navegación -->
    <header class="header">
        <nav class="navbar">
            <div class="container">
                <div class="nav-wrapper">
                    <a href="index.html" class="logo">
                        <span class="logo-text">SeguridadPrivadaMX</span>
                    </a>

                    <button class="mobile-menu-toggle" aria-label="Abrir menú">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <ul class="nav-menu">
                        <li><a href="index.html" class="nav-link">Inicio</a></li>
                        <li class="nav-item-dropdown">
                            <a href="servicios.html" class="nav-link active">Servicios</a>
                            <ul class="dropdown-menu">
                                <li><a href="vigilancia-24-7.html">Vigilancia 24/7</a></li>
                                <li><a href="control-accesos.html">Control de Accesos</a></li>
                                <li><a href="camaras-monitoreo.html">Cámaras y Monitoreo</a></li>
                                <li><a href="respuesta-emergencias.html">Respuesta a Emergencias</a></li>
                            </ul>
                        </li>
                        <li><a href="tel:+525512345678" class="nav-phone">55 1234 5678</a></li>
                        <li><a href="index.html#cotizacion" class="btn-primary-nav">Cotizar Gratis</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <!-- Breadcrumb -->
    <div class="breadcrumb-wrapper">
        <div class="container">
            <div class="breadcrumb">
                <a href="index.html">Inicio</a> / <a href="servicios.html">Servicios</a> / <span>[NOMBRE_SERVICIO]</span>
            </div>
        </div>
    </div>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-grid">
                <div class="hero-content">
                    <h1 class="hero-title">
                        [HERO_TITULO]
                    </h1>
                    <p class="hero-subtitle">
                        [HERO_SUBTITULO]
                    </p>
                </div>

                <div class="hero-description">
                    <div class="description-card">
                        <h2 class="description-title">[DESCRIPTION_TITULO]</h2>
                        <p class="description-text">
                            [DESCRIPTION_PARRAFO_1]
                        </p>
                        <p class="description-text">
                            [DESCRIPTION_PARRAFO_2]
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Características Principales -->
    <section class="services" style="background-color: #ffffff;">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">[CARACTERISTICAS_TITULO]</h2>
                <p class="section-subtitle">
                    [CARACTERISTICAS_SUBTITULO]
                </p>
            </div>

            <div class="services-grid">
                [CARACTERISTICAS_CARDS]
            </div>
        </div>
    </section>

    <!-- Proceso de Implementación -->
    <section class="implementation-process">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">[PROCESO_TITULO]</h2>
                <p class="section-subtitle">
                    [PROCESO_SUBTITULO]
                </p>
            </div>

            <div class="process-grid">
                [PROCESO_PASOS]
            </div>
        </div>
    </section>

    <!-- Beneficios del Servicio -->
    <section class="benefits-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">[BENEFICIOS_TITULO]</h2>
                <p class="section-subtitle">
                    [BENEFICIOS_SUBTITULO]
                </p>
            </div>

            <div class="benefits-grid">
                [BENEFICIOS_CARDS]
            </div>
        </div>
    </section>

    <!-- Preguntas Frecuentes -->
    <section class="services" style="background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">[FAQ_TITULO]</h2>
                <p class="section-subtitle">
                    [FAQ_SUBTITULO]
                </p>
            </div>

            <div class="faq-container" style="max-width: 900px; margin: 0 auto;">
                [FAQ_ITEMS]
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
        <div class="container">
            <div class="cta-content">
                <h2>[CTA_TITULO]</h2>
                <p>[CTA_DESCRIPCION]</p>
                <div class="cta-buttons">
                    <a href="index.html#cotizacion" class="btn-primary-large">Solicitar Cotización Gratis</a>
                    <a href="servicios.html" class="btn-secondary-large">Ver Todos los Servicios</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <!-- [COPIAR FOOTER COMPLETO DE SECCIÓN 4.9] -->
    </footer>

    <!-- WhatsApp Float Button -->
    <a href="https://wa.me/525512345678?text=Hola,%20me%20interesa%20información%20sobre%20[WHATSAPP_SERVICIO]"
       class="whatsapp-float"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Contactar por WhatsApp">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0C7.164 0 0 7.164 0 16c0 2.824.738 5.488 2.032 7.792L0 32l8.416-2.016A15.908 15.908 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0z" fill="#25D366"/>
            <path d="M25.36 22.26c-.44 1.24-2.18 2.28-3.56 2.58-.96.2-2.2.36-6.4-1.38-5.36-2.22-8.82-7.66-9.08-8.02-.26-.36-2.12-2.82-2.12-5.38s1.34-3.82 1.82-4.34c.48-.52 1.04-.64 1.4-.64.36 0 .7.02 1.02.02.32 0 .76-.12 1.18.9.44 1.04 1.5 3.66 1.64 3.92.14.26.24.58.04.94-.18.36-.28.58-.56.9-.28.32-.58.7-.82.94-.26.26-.54.54-.24 1.06.3.52 1.34 2.2 2.88 3.56 1.96 1.76 3.62 2.3 4.14 2.56.52.26.82.22 1.12-.14.3-.36 1.3-1.5 1.64-2.02.34-.52.68-.44 1.14-.26.46.18 2.94 1.38 3.44 1.64.52.26.86.38 1 .6.14.22.14 1.26-.3 2.48z" fill="#fff"/>
        </svg>
    </a>

    <script src="js/app.js"></script>
</body>
</html>
```

---

## 8. FORMATO DE ENTRADA DE DATOS

Para generar una nueva página, proporcionar la siguiente información estructurada:

### Información Básica
```yaml
NOMBRE_ARCHIVO: [nombre-del-servicio.html]
TITULO_PAGINA: [Título para el tab del navegador]
NOMBRE_SERVICIO: [Nombre del servicio para breadcrumb]
META_DESCRIPTION: [Descripción SEO de 150-160 caracteres]
META_KEYWORDS: [palabra1, palabra2, palabra3, ...]
```

### Hero Section
```yaml
HERO_TITULO: [Título principal H1]
HERO_SUBTITULO: [Subtítulo con palabras clave destacadas]
DESCRIPTION_TITULO: [Título H2 de la tarjeta de descripción]
DESCRIPTION_PARRAFO_1: [Primer párrafo explicativo]
DESCRIPTION_PARRAFO_2: [Segundo párrafo con diferenciadores]
```

### Características (6 mínimo)
```yaml
CARACTERISTICAS:
  - titulo_corto: [Texto para imagen de fondo]
    titulo: [Título H3 de la característica]
    descripcion: [Párrafo descriptivo]
    color: [azul|verde|morado|rojo|amarillo|cyan]
    items:
      - [Item 1]
      - [Item 2]
      - [Item 3]
      - [Item 4]
```

### Proceso de Implementación (5 pasos)
```yaml
PROCESO:
  - numero: "01"
    titulo: [Título del paso]
    descripcion: [Descripción breve]
    items:
      - [Detalle 1]
      - [Detalle 2]
      - [Detalle 3]
      - [Detalle 4]
```

### Beneficios (6 mínimo)
```yaml
BENEFICIOS:
  - icono: [escudo|casa|candado|reloj|dinero|documento|camara|usuario|check|alerta]
    titulo: [Título del beneficio]
    descripcion: [Descripción del beneficio]
```

### Preguntas Frecuentes (6-10)
```yaml
FAQ:
  - pregunta: [¿Pregunta?]
    respuesta: [Respuesta detallada]
```

### CTA
```yaml
CTA_TITULO: [Título de llamada a la acción]
CTA_DESCRIPCION: [Descripción con beneficio y tiempo de respuesta]
WHATSAPP_SERVICIO: [Nombre del servicio URL encoded para WhatsApp]
```

---

## 9. CHECKLIST DE VALIDACIÓN

Antes de publicar una nueva página, verificar:

### Estructura
- [ ] Archivo HTML nombrado correctamente (kebab-case)
- [ ] Meta tags completos (charset, viewport, description, keywords, title)
- [ ] Link a CSS correcto (`css/style.css`)
- [ ] Script JS al final del body (`js/app.js`)

### Contenido
- [ ] Header con navegación completa
- [ ] Breadcrumb con ruta correcta
- [ ] Hero section con título H1 único
- [ ] Mínimo 6 características en services-grid
- [ ] Proceso de implementación con 5 pasos
- [ ] Mínimo 6 beneficios
- [ ] Mínimo 6 preguntas frecuentes
- [ ] CTA section con botones funcionales
- [ ] Footer completo
- [ ] WhatsApp button con mensaje correcto

### SEO
- [ ] Meta description entre 150-160 caracteres
- [ ] Title único y descriptivo
- [ ] Keywords relevantes
- [ ] H1 único por página
- [ ] H2 y H3 jerárquicamente correctos
- [ ] Texto alternativo en imágenes (cuando aplique)

### Funcionalidad
- [ ] Todos los enlaces funcionan
- [ ] FAQ accordion funciona
- [ ] Menú móvil funciona
- [ ] WhatsApp abre con mensaje correcto
- [ ] Teléfono es clickeable

### Responsive
- [ ] Verificar en desktop (1200px+)
- [ ] Verificar en tablet (768px-1199px)
- [ ] Verificar en móvil (320px-767px)

---

## NOTAS IMPORTANTES

1. **NO modificar** el archivo `css/style.css` - todos los estilos necesarios ya están incluidos
2. **NO modificar** el archivo `js/app.js` - la funcionalidad está lista
3. **SIEMPRE** agregar nuevos servicios al dropdown del menú en el header
4. **SIEMPRE** agregar nuevos servicios al listado del footer
5. **MANTENER** consistencia en el tono de voz: profesional, técnico y orientado a resultados
6. **EVITAR** jerga excesiva - el contenido debe ser comprensible para administradores de condominios
7. **DESTACAR** certificaciones SSC-CDMX en todo momento
8. **INCLUIR** llamadas a la acción claras y visibles

---

## PROCESO POST-CREACIÓN DE PÁGINA

**IMPORTANTE:** Después de crear una nueva página de servicio, se debe actualizar TODAS las páginas existentes para incluir el nuevo servicio en:

### Checklist de Actualización de Enlaces

Al crear una nueva página (ej: `nuevo-servicio.html`), actualizar en TODOS los archivos HTML:

#### 1. Dropdown Menu (Header)
Agregar en `<ul class="dropdown-menu">`:
```html
<li><a href="nuevo-servicio.html">Nuevo Servicio</a></li>
```

**Archivos a actualizar:**
- [ ] `index.html`
- [ ] `servicios.html`
- [ ] `vigilancia-24-7.html`
- [ ] `control-accesos.html`
- [ ] `camaras-monitoreo.html`
- [ ] `respuesta-emergencias.html`
- [ ] `patrullaje-vehicular.html`
- [ ] `reportes-analytics.html`
- [ ] `[nueva-pagina].html` (la página recién creada)

#### 2. Footer - Columna Servicios
Agregar en `<ul class="footer-links">` dentro de la columna "Servicios":
```html
<li><a href="nuevo-servicio.html">Nuevo Servicio</a></li>
```

**Archivos a actualizar:** (mismos que arriba)

#### 3. Cards de Servicio (si aplica)
Actualizar el botón de la card correspondiente en:
- [ ] `index.html` - Sección de servicios
- [ ] `servicios.html` - Sección de servicios

Cambiar de:
```html
<a href="index.html#cotizacion" class="btn-service">Nombre Servicio</a>
```
A:
```html
<a href="nuevo-servicio.html" class="btn-service">Nombre Servicio</a>
```

#### 4. Actualizar este Documento
- [ ] Agregar el nuevo archivo en "Estructura de Archivos" (Sección 2)
- [ ] Agregar al dropdown en templates de Header (Secciones 4.1 y 7)
- [ ] Agregar al footer en template (Sección 4.9)

### Ejemplo de Flujo Completo

```
1. Crear nueva página: [nombre-servicio].html
2. Actualizar dropdown en: index, servicios, vigilancia, control-accesos, camaras-monitoreo, respuesta-emergencias, patrullaje-vehicular, reportes-analytics
3. Actualizar footer en: index, servicios, vigilancia, control-accesos, camaras-monitoreo, respuesta-emergencias, patrullaje-vehicular, reportes-analytics
4. Actualizar card en: index.html, servicios.html
5. Actualizar DOCUMENTO-PAGINAS.md
```

---

## 10. ERRORES COMUNES A EVITAR

### 10.1 Errores de Estructura HTML

| Error | Incorrecto | Correcto |
|-------|------------|----------|
| Atributo lang | `lang="es-MX"` | `lang="es"` |
| Meta tags extras | Open Graph, Twitter Card, Schema.org | Solo: charset, viewport, description, keywords |
| Título muy largo | "Control de Accesos Biométrico CDMX \| Sistemas LPR..." | "Control de Accesos para Condominios \| SeguridadPrivadaMX" |

### 10.2 Errores de Estilos Inline

**PROHIBIDO usar estilos inline excepto los permitidos.**

```html
<!-- INCORRECTO - No usar estilos inline en elementos -->
<div class="trust-badge" style="display: flex; align-items: center; gap: var(--spacing-xs); padding: var(--spacing-sm);">

<!-- INCORRECTO - No crear secciones custom con estilos -->
<section class="access-control-features" style="background-color: #f8f9fa; padding: var(--spacing-3xl) 0;">

<!-- INCORRECTO - No agregar estilos a listas -->
<ul style="list-style: none; padding: 0; margin: var(--spacing-md) 0;">
    <li style="padding: var(--spacing-sm) 0; display: flex;">
```

**Estilos inline PERMITIDOS (únicamente estos):**

```html
<!-- PERMITIDO - Fondo de sección services -->
<section class="services" style="background-color: #ffffff;">

<!-- PERMITIDO - Fondo degradado en FAQ -->
<section class="services" style="background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);">

<!-- PERMITIDO - Contenedor FAQ -->
<div class="faq-container" style="max-width: 900px; margin: 0 auto;">

<!-- PERMITIDO - Gradientes en service-image -->
<div class="service-image" style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);">
```

### 10.3 Errores de Componentes

| Componente | Error Común | Solución Correcta |
|------------|-------------|-------------------|
| Hero | Agregar trust badges, CTAs extra, listas con iconos | Usar solo `hero-grid` con `hero-content` y `description-card` |
| Características | Crear secciones custom como `access-control-features` | Usar `services-grid` con `service-card` estándar |
| Cards de servicio | Crear divs custom con estilos inline | Usar estructura `service-card` > `service-image` + `service-content` |
| Beneficios | Agregar divs extra dentro de `benefit-card` | Usar solo: `benefit-icon` + `benefit-title` + `benefit-description` |
| CTA | Agregar texto extra después de botones | Solo: `h2` + `p` + `cta-buttons` |

### 10.4 Errores de Meta Tags

**NO incluir estos meta tags:**

```html
<!-- INCORRECTO - No usar Open Graph -->
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">

<!-- INCORRECTO - No usar Twitter Card -->
<meta name="twitter:card" content="...">
<meta name="twitter:title" content="...">

<!-- INCORRECTO - No usar Schema.org JSON-LD -->
<script type="application/ld+json">...</script>

<!-- INCORRECTO - No usar canonical -->
<link rel="canonical" href="...">

<!-- INCORRECTO - No usar http-equiv extra -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

**SOLO usar estos meta tags:**

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="[150-160 caracteres]">
<meta name="keywords" content="[palabras clave]">
<title>[Título] | SeguridadPrivadaMX</title>
<link rel="stylesheet" href="css/style.css">
```

### 10.5 Errores de Contenido

| Error | Descripción | Solución |
|-------|-------------|----------|
| Títulos muy largos | H1 con más de 60 caracteres | Mantener títulos concisos y claros |
| Keywords en título | "Biométrico CDMX \| Sistemas LPR y App Móvil" | Formato simple: "[Servicio] para Condominios" |
| Atributos itemscope | `itemscope itemtype="https://schema.org/..."` | No usar Schema.org en HTML |
| Clases itemprop | `itemprop="name"`, `itemprop="description"` | No usar atributos itemprop |

---

## 11. REGLAS DE CÓDIGO ESTRICTAS

### 11.1 Reglas de HEAD

```
✓ OBLIGATORIO:
  - lang="es" (NO es-MX)
  - charset UTF-8
  - viewport con width=device-width, initial-scale=1.0
  - description (150-160 caracteres)
  - keywords
  - title con formato "[Servicio] | SeguridadPrivadaMX"
  - link a css/style.css

✗ PROHIBIDO:
  - Open Graph meta tags
  - Twitter Card meta tags
  - Schema.org JSON-LD
  - Canonical URLs
  - http-equiv X-UA-Compatible
  - Cualquier script en HEAD
```

### 11.2 Reglas de Estructura

```
✓ ORDEN OBLIGATORIO DE SECCIONES:
  1. Header (navbar)
  2. Breadcrumb
  3. Hero Section
  4. Características (services-grid)
  5. Proceso de Implementación (implementation-process)
  6. Beneficios (benefits-section)
  7. FAQ
  8. CTA Section
  9. Footer
  10. WhatsApp Float Button
  11. Script js/app.js

✗ PROHIBIDO:
  - Agregar secciones intermedias
  - Cambiar el orden de secciones
  - Omitir secciones obligatorias
  - Crear clases CSS custom
```

### 11.3 Reglas de Componentes

#### Hero Section
```html
<!-- ESTRUCTURA EXACTA - No modificar -->
<section class="hero">
    <div class="container">
        <div class="hero-grid">
            <div class="hero-content">
                <h1 class="hero-title">...</h1>
                <p class="hero-subtitle">...</p>
                <!-- NO agregar nada más aquí -->
            </div>
            <div class="hero-description">
                <div class="description-card">
                    <h2 class="description-title">...</h2>
                    <p class="description-text">...</p>
                    <p class="description-text">...</p>
                    <!-- NO agregar listas, iconos ni elementos extra -->
                </div>
            </div>
        </div>
    </div>
</section>
```

#### Service Card
```html
<!-- ESTRUCTURA EXACTA - No modificar -->
<div class="service-card">
    <div class="service-image" style="background: linear-gradient(...);">
        <span class="service-image-text">...</span>
    </div>
    <div class="service-content">
        <h3 class="service-title">...</h3>
        <p class="service-description">...</p>
        <ul class="service-features">
            <li>...</li>
            <li>...</li>
            <li>...</li>
            <li>...</li>
        </ul>
    </div>
</div>
```

#### Benefit Card
```html
<!-- ESTRUCTURA EXACTA - No modificar -->
<div class="benefit-card">
    <div class="benefit-icon">
        <svg>...</svg>
    </div>
    <h3 class="benefit-title">...</h3>
    <p class="benefit-description">...</p>
    <!-- NO agregar divs extra, badges ni elementos adicionales -->
</div>
```

#### Process Card
```html
<!-- ESTRUCTURA EXACTA - No modificar -->
<div class="process-card">
    <div class="process-card-header">
        <span class="process-number">01</span>
        <h3 class="process-title">...</h3>
    </div>
    <div class="process-card-body">
        <p class="process-description">...</p>
        <ul class="process-list">
            <li>...</li>
            <li>...</li>
            <li>...</li>
            <li>...</li>
        </ul>
    </div>
</div>
```

#### CTA Section
```html
<!-- ESTRUCTURA EXACTA - No modificar -->
<section class="cta-section">
    <div class="container">
        <div class="cta-content">
            <h2>...</h2>
            <p>...</p>
            <div class="cta-buttons">
                <a href="index.html#cotizacion" class="btn-primary-large">Solicitar Cotización Gratis</a>
                <a href="servicios.html" class="btn-secondary-large">Ver Todos los Servicios</a>
            </div>
            <!-- NO agregar párrafos extra, badges ni elementos adicionales -->
        </div>
    </div>
</section>
```

### 11.4 Reglas de Cantidad

| Elemento | Mínimo | Máximo | Obligatorio |
|----------|--------|--------|-------------|
| Service Cards | 6 | 8 | Sí |
| Process Steps | 5 | 5 | Sí |
| Benefit Cards | 6 | 8 | Sí |
| FAQ Items | 6 | 10 | Sí |
| Items por service-features | 4 | 4 | Sí |
| Items por process-list | 4 | 4 | Sí |

### 11.5 Reglas de Colores (Solo estos gradientes)

```css
/* ÚNICOS gradientes permitidos para service-image */
Azul:     linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)
Verde:    linear-gradient(135deg, #059669 0%, #10b981 100%)
Morado:   linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)
Rojo:     linear-gradient(135deg, #dc2626 0%, #ef4444 100%)
Amarillo: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)
Cyan:     linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)
```

### 11.6 Validación Pre-Publicación

Antes de considerar una página lista, verificar:

```
□ lang="es" (no es-MX)
□ Solo 4 meta tags + title + link CSS
□ Sin Open Graph / Twitter Card / Schema.org
□ Hero sin elementos extra (sin trust badges, sin CTAs inline)
□ Características usando services-grid con service-card
□ Exactamente 5 pasos en proceso
□ Beneficios sin divs extra dentro
□ CTA sin elementos después de cta-buttons
□ Sin estilos inline (excepto los 4 permitidos)
□ Sin clases CSS custom
□ Sin atributos itemscope/itemprop
□ Máximo ~650 líneas de código
```

---

## HISTORIAL DE CAMBIOS

| Versión | Fecha | Cambios |
|---------|-------|---------|
| 1.0 | Nov 2025 | Documento inicial |
| 1.1 | Nov 2025 | Agregadas secciones 10 y 11: Errores comunes y Reglas estrictas |
| 1.2 | Nov 2025 | Agregada sección "Proceso Post-Creación de Página" con checklist para actualizar menús, footer y cards en todas las páginas |
| 1.3 | Nov 2025 | Agregada página respuesta-emergencias.html y actualizado checklist de archivos |

---

**Documento generado para SeguridadPrivadaMX**
**Última actualización:** Noviembre 2025
