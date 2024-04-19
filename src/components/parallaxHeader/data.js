import { useMediaQuery } from "@mui/material";
import {
  imgStyle1,
  moonStyle,
  abovemoonStyle,
  undermoonStyle,
  ballonStyle,
  boatStyle,
} from "./style";

export const imgData = (
  night_sea,
  balloon,
  moon,
  abovemoon,
  undermoon,
  boat,
  ExtraSmall,
  Small,
  Medium,
  Large,
  ExtraLarge,
  XXLarge
) => {
  const imgData1 = [
    {
      id: 1,
      img: "night-sea.png",
      imgLight: "sea.png",
      ref: night_sea,
      style: imgStyle1,
      class: "",
    },
    {
      id: 2,
      img: "balloon.png",
      imgLight: "ballonLight.png",
      ref: balloon,
      style: ballonStyle(ExtraSmall, Small, Medium, Large, ExtraLarge, XXLarge),
      class: "",
    },
    {
      id: 3,
      img: "moon.png",
      imgLight: "sun.png",
      ref: moon,
      style: moonStyle(ExtraSmall, Small, Medium, Large, ExtraLarge, XXLarge),
      class: "",
    },
    {
      id: 4,
      img: "above-moon.png",
      imgLight: "above_sun.png",
      ref: abovemoon,
      style: abovemoonStyle,
      class: "",
    },
    {
      id: 5,
      img: "under-moon.png",
      imgLight: "under_sun.png",
      ref: undermoon,
      style: undermoonStyle,
      class: "",
    },
    {
      id: 6,
      img: "boat.png",
      imgLight: "boatLight.png",
      ref: boat,
      style: boatStyle(ExtraSmall, Small, Medium, Large, ExtraLarge, XXLarge),
      class: "",
    },
  ];
  return imgData1;
};
