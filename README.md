# Qori Joyería

Sitio web de [@qori_joyeria_oficial](https://www.instagram.com/qori_joyeria_oficial/), hecho con Astro y Tailwind CSS v4.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera ./dist (sitio estático)
```

## Dónde editar

- `src/data/site.ts`: datos de la marca, Instagram y número de WhatsApp para pedidos (si `whatsapp` está vacío, los botones abren el chat de Instagram).
- `src/data/products.ts`: catálogo. Cada joya genera su página en `/joya/<slug>`.
- `src/assets/joyas/`: fotos (tomadas del Instagram; Astro las optimiza a WebP).
- `src/styles/global.css`: paleta, tipografías y estilos de botones.
