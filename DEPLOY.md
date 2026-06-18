# Despliegue — SeguridadPrivadaMX

Sitio estático alojado en **GitHub Pages**. Cada `push` a la rama `main` publica automáticamente en **https://seguridadprivadamx.com**.

- Repositorio: `https://github.com/Origenlab/SEGURIDADPRIVADAMX`
- Rama de publicación: `main`
- Dominio: `seguridadprivadamx.com` (configurado en `CNAME`)

## Subir cambios (commit + push)

Desde la carpeta del proyecto, en Terminal:

```bash
cd ~/Documents/Claude/Projects/SEGURIDADPRIVADAMX
git add -A
git commit -m "Describe aquí el cambio"
git push origin main
```

GitHub Pages tarda ~1–2 minutos en desplegar. Refresca el sitio para ver los cambios.

> Alternativa sin Terminal: **GitHub Desktop** → abre el repo → **Commit to main** → **Push origin**.

## Si el commit no avanza (locks colgados)

Si `git commit` parece no hacer nada o marca un error de `.git/index.lock`, quita los locks y reintenta:

```bash
rm -f .git/index.lock .git/HEAD.lock
git add -A
git commit -m "Describe aquí el cambio"
git push origin main
```

## Verificar antes de subir

```bash
git status        # qué archivos cambiaron
git diff          # ver los cambios en detalle
git log --oneline -5   # últimos commits
```

## Al agregar artículos al blog

1. Crear el `.html` en `/blog/`.
2. Agregar su tarjeta (`service-card`) en `blog.html`.
3. Agregar su URL en `sitemap.xml`.
4. Commit + push (pasos de arriba).
5. (Opcional, SEO) Reenviar `sitemap.xml` en Google Search Console para acelerar la indexación.

## Notas

- `node_modules/` está en `.gitignore`; no se sube.
- Teléfono/WhatsApp del sitio son **placeholders** (`55 1234 5678`, `wa.me/525512345678`): actualízalos antes de difundir.
