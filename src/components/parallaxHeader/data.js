import { useMediaQuery } from "@mui/material";
import {
  imgStyle1,
  ballon,
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
  boat
) => {
  const isSmallScreen = useMediaQuery(
    "(min-width: 200px) and (max-width: 698px)"
  );
  const isMediumScreen = useMediaQuery(
    "(min-width: 699px) and (max-width: 1024px)"
  );
  const islargeScreen = useMediaQuery("(min-width: 1250px) ");
  const imgData1 = [
    {
      id: 1,
      img: "night-sea.png",
      ref: night_sea,
      style: imgStyle1,
      class: "",
    },
    {
      id: 2,
      img: "balloon.png",
      ref: balloon,
      style: ballonStyle(isSmallScreen, isMediumScreen, islargeScreen),
      class: "",
    },
    {
      id: 3,
      img: "moon.png",
      ref: moon,
      style: moonStyle(isSmallScreen, isMediumScreen, islargeScreen),
      class: "",
    },
    {
      id: 4,
      img: "above-moon.png",
      ref: abovemoon,
      style: abovemoonStyle,
      class: "",
    },
    {
      id: 5,
      img: "under-moon.png",
      ref: undermoon,
      style: undermoonStyle,
      class: "",
    },
    {
      id: 6,
      img: "boat.png",
      ref: boat,
      style: boatStyle(isSmallScreen, isMediumScreen, islargeScreen),
      class: "",
    },
  ];
  return imgData1;
};
