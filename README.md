# Yulistore

Catálogo visual de ropa deportiva para mujer. Sin carrito ni checkout: los clientes
navegan y compran por WhatsApp o Instagram. UI editorial en blanco y negro, en español.

**Stack:** [Astro](https://astro.build) (sitio estático) · [Sveltia CMS](https://github.com/sveltia/sveltia-cms) (edición) · GitHub (almacenamiento) · Cloudflare Pages (hosting). Todo gratis.

## Desarrollo local

Requiere **Node 18.14+** (probado con Node 24).

```bash
npm install
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera el sitio estático en dist/
npm run preview  # sirve dist/ localmente
```

## Estructura

```
src/
  content/
    products/        # un .md por producto (frontmatter editado por el CMS)
    settings/        # site.json (WhatsApp, Instagram, moneda, anuncio)
    config.ts        # esquema Zod que valida los productos al compilar
  components/        # ProductCard, ColorSwatches, PriceTiers, ContactButtons, Header, Footer
  layouts/Base.astro # <head>, fuentes, Open Graph, lang="es"
  pages/
    index.astro              # hero + grid + filtro por categoría
    producto/[slug].astro    # detalle: galería, colores, tallas, precios, contacto
  styles/global.css  # tema blanco y negro minimalista
public/
  admin/             # Sveltia CMS (index.html + config.yml)
  images/products/   # fotos de productos (subidas por el CMS)
  logo.jpg, favicon*
```

## Despliegue (resumen)

Ver pasos completos abajo. En corto:

1. Sube este repo a GitHub.
2. Conecta el repo a **Cloudflare Pages** — build `npm run build`, salida `dist`.
3. Crea una **GitHub OAuth App** y despliega el Worker **sveltia-cms-auth**.
4. Apunta `public/admin/config.yml` (`repo` y `base_url`) a tu repo y tu Worker.
5. Comparte `yulistore.pages.dev/admin` con la dueña. Guía: [`GUIA-PRODUCTOS.md`](./GUIA-PRODUCTOS.md).

Detalle completo en [`DESPLIEGUE.md`](./DESPLIEGUE.md).
