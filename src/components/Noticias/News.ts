export interface News {
  id: number;
  title: string;
  image: string;
  imgdescription: string;
}

export const newslist: News[] = [
  {
    id: 1,
    title: "Errores que Dañan tu Piel",
    image: "public/tips/tip1.webp",
    imgdescription:
      "Mujer rodeada de productos potencialmente dañinos par ala piel",
  },
  {
    id: 2,
    title: "El Poder del Aloe Vera para tu Piel",
    image: "public/tips/aloe.webp",
    imgdescription: "Gel de aloe vera en un recipiente de vidrio",
  },
  {
    id: 3,
    title:
      "¡El Coco Está Ocultando un Poder de Belleza Tan Fuerte que Nadie Se Atrevería a Contarlo!",
    image: "public/tips/coco.webp",
    imgdescription: "asdasddsaddqwe",
  },
];
