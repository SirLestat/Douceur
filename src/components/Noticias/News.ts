export interface News {
  id: number;
  title: string;
  image: string;
  imgdescription: string;
}

export const newslist: News[] = [
  {
    id: 1,
    title: "El Poder del Aloe Vera para tu Piel",
    image: "src/assets/assets/aloe.jpg",
    imgdescription: "Gel de aloe vera en un recipiente de vidrio",
  },
  {
    id: 2,
    title:
      "¡El Coco Está Ocultando un Poder de Belleza Tan Fuerte que Nadie Se Atrevería a Contarlo!",
    image: "src/assets/assets/coco.jpg",
    imgdescription: "asdasddsaddqwe",
  },
  {
    id: 3,
    title: "Errores que Dañan tu Piel",
    image: "src/assets/assets/tip1.jpg",
    imgdescription:
      "Mujer rodeada de productos potencialmente dañinos par ala piel",
  },
];
