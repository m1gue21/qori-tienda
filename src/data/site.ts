// Datos de la marca tomados del perfil @qori_joyeria_oficial.
// Para recibir pedidos por WhatsApp, coloca el número (formato 5939XXXXXXXX) en `whatsapp`.
export const site = {
  name: 'Qori Joyería',
  tagline: 'Joyería con alma ecuatoriana',
  description:
    'Qori significa oro en quechua. Joyas en oro laminado 18K inspiradas en el arte y la cultura del Ecuador. Envíos a todo el país, ventas al por mayor y detal.',
  instagramUser: 'qori_joyeria_oficial',
  instagram: 'https://www.instagram.com/qori_joyeria_oficial/',
  instagramDM: 'https://ig.me/m/qori_joyeria_oficial',
  whatsapp: '' as string,
  hashtag: '#BrillaConQori',
  promesas: [
    'Oro laminado 18K de alta calidad',
    'Envíos a todo el Ecuador',
    'Compra 100% segura',
    'Ventas al por mayor y detal',
  ],
};

/** Enlace de pedido: WhatsApp si hay número, si no, mensaje directo de Instagram. */
export function orderLink(mensaje?: string) {
  if (site.whatsapp) {
    const text = mensaje ? `?text=${encodeURIComponent(mensaje)}` : '';
    return `https://wa.me/${site.whatsapp}${text}`;
  }
  return site.instagramDM;
}

export const orderChannel = () => (site.whatsapp ? 'WhatsApp' : 'Instagram');
