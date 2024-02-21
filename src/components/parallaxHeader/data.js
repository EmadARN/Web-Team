import {
  imgStyle1,
  ballon,
  moonStyle,
  abovemoonStyle,
  undermoonStyle,
} from "./style";
export const imgData = (
  night_sea,
  balloon,
  moon,
  abovemoon,
  undermoon,
  boat
) => {
  const imgData1 = [
    {
      id: 1,
      img: "night-sea.png",
      ref: night_sea,
      style: imgStyle1,
      class: "imges",
    },
    {
      id: 2,
      img: "balloon.png",
      ref: balloon,
      style: ballon,
      class: "imges ballon",
    },
    {
      id: 3,
      img: "moon.png",
      ref: moon,
      style: moonStyle,
      class: "imges moon",
    },
    {
      id: 4,
      img: "above-moon.png",
      ref: abovemoon,
      style: abovemoonStyle,
      class: "imges",
    },
    {
      id: 5,
      img: "under-moon.png",
      ref: undermoon,
      style: undermoonStyle,
      class: "imges",
    },
    {
      id: 6,
      img: "boat.png",
      ref: boat,
      style: null,
      class: "imges boat",
    },
  ];
  return imgData1;
};
