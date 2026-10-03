import type { ImageMetadata } from 'astro';

import anilloCorazones from '../assets/joyas/anillo-corazones.jpg';
import areteCloverMedallon from '../assets/joyas/arete-clover-medallon.jpg';
import areteCloverRedondo from '../assets/joyas/arete-clover-redondo.jpg';
import areteClover from '../assets/joyas/arete-clover.jpg';
import cadenaTejidoChino from '../assets/joyas/cadena-tejido-chino.jpg';
import collarDijeClover from '../assets/joyas/collar-dije-clover.jpg';
import modeloCadenaCaracol from '../assets/joyas/modelo-cadena-caracol.jpg';
import modeloDijeClover from '../assets/joyas/modelo-dije-clover.jpg';
import pulseraCloverCalada from '../assets/joyas/pulsera-clover-calada.jpg';
import pulseraHerrajeClover from '../assets/joyas/pulsera-herraje-clover.jpg';
import toposCirconiaRoja from '../assets/joyas/topos-circonia-roja.jpg';

export type Categoria = 'aretes' | 'collares' | 'pulseras' | 'anillos' | 'cadenas';

export const categorias: { id: Categoria; nombre: string; descripcion: string }[] = [
  { id: 'aretes', nombre: 'Aretes', descripcion: 'Topos y clovers que iluminan el rostro.' },
  { id: 'collares', nombre: 'Collares y dijes', descripcion: 'Dijes con significado, cerca del corazón.' },
  { id: 'pulseras', nombre: 'Pulseras', descripcion: 'Herrajes y tejidos para la muñeca.' },
  { id: 'anillos', nombre: 'Anillos', descripcion: 'Diseños ajustables, para todos los días.' },
  { id: 'cadenas', nombre: 'Cadenas', descripcion: 'Clásicos reinventados en oro laminado.' },
];

export type Producto = {
  slug: string;
  nombre: string;
  categoria: Categoria;
  coleccion?: 'Clover' | 'Romance' | 'Esenciales';
  resumen: string;
  descripcion: string;
  detalles: string[];
  imagen: ImageMetadata;
  galeria?: ImageMetadata[];
  destacado?: boolean;
};

// Nombres y descripciones adaptados de las publicaciones de Instagram de Qori.
export const productos: Producto[] = [
  {
    slug: 'collar-dije-clover-circonias',
    nombre: 'Collar Dije Clover Circonias',
    categoria: 'collares',
    coleccion: 'Clover',
    resumen: 'Un diseño sofisticado con circonias brillantes.',
    descripcion:
      'Nuestro dije insignia: el trébol de cuatro hojas cubierto de circonias brillantes sobre oro laminado 18K. Elegante, versátil y lleno de significado, es el complemento perfecto para cualquier ocasión.',
    detalles: ['Oro laminado 18K', 'Circonias brillantes', 'Disponible en dos tamaños'],
    imagen: collarDijeClover,
    galeria: [modeloDijeClover],
    destacado: true,
  },
  {
    slug: 'arete-clover-circonia',
    nombre: 'Arete Clover Circonia',
    categoria: 'aretes',
    coleccion: 'Clover',
    resumen: 'Un diseño icónico que refleja distinción y estilo.',
    descripcion:
      'El trébol Clover en versión arete, completamente pavé de circonias. Un accesorio infaltable en tu colección, con brillo para el día y la noche.',
    detalles: ['Oro laminado 18K', 'Pavé de circonias', 'Cierre de presión'],
    imagen: areteClover,
    destacado: true,
  },
  {
    slug: 'arete-clover-redondo-circonias',
    nombre: 'Arete Clover Redondo Circonias',
    categoria: 'aretes',
    coleccion: 'Clover',
    resumen: 'Distinción y encanto en cada uso.',
    descripcion:
      'Un medallón rodeado de circonias con el trébol calado al centro. Su diseño delicado y brillante es ideal para cualquier ocasión.',
    detalles: ['Oro laminado 18K', 'Contorno de circonias', 'Trébol calado'],
    imagen: areteCloverRedondo,
    destacado: true,
  },
  {
    slug: 'arete-clover-medallon',
    nombre: 'Arete Clover Medallón',
    categoria: 'aretes',
    coleccion: 'Clover',
    resumen: 'Un toque de lujo para tu día a día.',
    descripcion:
      'Diseñado para realzar tu look con brillo y sofisticación: un medallón pulido con el trébol en relieve. Porque cada detalle cuenta.',
    detalles: ['Oro laminado 18K', 'Acabado pulido', 'Talla discreta, uso diario'],
    imagen: areteCloverMedallon,
    destacado: true,
  },
  {
    slug: 'pulsera-herraje-clover',
    nombre: 'Pulsera Herraje Clover Circonia',
    categoria: 'pulseras',
    coleccion: 'Clover',
    resumen: 'Elegancia y delicadeza en una joya única.',
    descripcion:
      'Esferas de oro laminado y un herraje Clover de circonias sobre hilo rojo ajustable. Un brillo especial que se adapta a cualquier ocasión y resalta tu esencia.',
    detalles: ['Oro laminado 18K', 'Herraje de circonias', 'Cierre ajustable'],
    imagen: pulseraHerrajeClover,
    destacado: true,
  },
  {
    slug: 'pulsera-clover-calada',
    nombre: 'Pulsera Clover Calada',
    categoria: 'pulseras',
    coleccion: 'Clover',
    resumen: 'Trenzado negro con trébol de circonias.',
    descripcion:
      'Tejido macramé negro con esferas doradas y un trébol calado de circonias. Contraste moderno para combinar con tus otras piezas.',
    detalles: ['Oro laminado 18K', 'Tejido macramé', 'Cierre ajustable'],
    imagen: pulseraCloverCalada,
  },
  {
    slug: 'anillo-corazones-ajustable',
    nombre: 'Anillo Corazones Ajustable',
    categoria: 'anillos',
    coleccion: 'Romance',
    resumen: 'Un toque de magia en cada diseño.',
    descripcion:
      'Dos corazones que se encuentran en un anillo abierto y ajustable. Perfecto para simbolizar amor, conexión y estilo en una sola pieza.',
    detalles: ['Oro laminado 18K', 'Talla ajustable', 'Ideal para regalar'],
    imagen: anilloCorazones,
    destacado: true,
  },
  {
    slug: 'topos-circonia-roja',
    nombre: 'Topos Circonia Roja',
    categoria: 'aretes',
    coleccion: 'Romance',
    resumen: 'Un toque romántico con brillo incomparable.',
    descripcion:
      'Topos con circonia roja en corte corazón o cuadrado. Combínalos con otros aretes para un look impecable y lleno de personalidad.',
    detalles: ['Oro laminado 18K', 'Circonia roja', 'Corte corazón o cuadrado'],
    imagen: toposCirconiaRoja,
    destacado: true,
  },
  {
    slug: 'cadena-tejido-chino-3mm',
    nombre: 'Cadena Tejido Chino 3 mm',
    categoria: 'cadenas',
    coleccion: 'Esenciales',
    resumen: 'Un clásico reinventado, elegante y versátil.',
    descripcion:
      'El tejido chino de 3 mm, un clásico que nunca falla. Ideal para cualquier ocasión, sola o acompañada de tu dije favorito, porque el estilo está en los detalles.',
    detalles: ['Oro laminado 18K', 'Grosor 3 mm', 'Combina con cualquier dije'],
    imagen: cadenaTejidoChino,
    destacado: true,
  },
  {
    slug: 'cadena-caracol-dije-virgen-milagrosa',
    nombre: 'Cadena Caracol + Dije Virgen Milagrosa',
    categoria: 'cadenas',
    coleccion: 'Esenciales',
    resumen: 'Un símbolo de protección y elegancia.',
    descripcion:
      'Cadena caracol gruesa acompañada del dije de la Virgen Milagrosa. Cada pieza cuenta una historia; esta refleja fe, protección y estilo.',
    detalles: ['Oro laminado 18K', 'Tejido caracol grueso', 'Dije Virgen Milagrosa'],
    imagen: modeloCadenaCaracol,
  },
];

export const getCategoria = (id: Categoria) => categorias.find((c) => c.id === id)!;
