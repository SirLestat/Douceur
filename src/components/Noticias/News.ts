export interface News {
  id: number;
  title: string;
  image: string;
  imgdescription: string;
  path: string;
}

export const newslist: News[] = [
  {
    id: 1,
    title: "Errores que Dañan tu Piel 🚫",
    image: "/tips/tip1.webp",

    imgdescription:
      "Mujer rodeada de productos potencialmente dañinos par ala piel",
    path: "/blog/1",
  },
  {
    id: 2,
    title: "El Poder del Aloe Vera 🌿",
    image: "/tips/aloe.webp",

    imgdescription: "Gel de aloe vera en un recipiente de vidrio",
    path: "/blog/2",
  },
  {
    id: 3,
    title: "Tu piel merece coco 🥥",
    image: "/tips/coco.webp",

    imgdescription: "asdasddsaddqwe",
    path: "/blog/3",
  },
];
