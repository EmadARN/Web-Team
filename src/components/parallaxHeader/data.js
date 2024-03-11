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
    "(min-width: 200px) and (max-width: 500px)"
  );
  const isMediumScreen = useMediaQuery(
    "(min-width: 501px) and (max-width: 600px)"
  );
  const islargeScreen = useMediaQuery(
    "(min-width: 601px) and (max-width:700px)"
  );
  const isXlargeScreen = useMediaQuery(
    "(min-width: 701px) and (max-width:950px)"
  );
  const isXXlargeScreen = useMediaQuery(
    "(min-width: 951px) and (max-width:1100px)"
  );
  const isXXXlargeScreen = useMediaQuery("(min-width: 1250px) ");
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
      style: ballonStyle(
        isSmallScreen,
        isMediumScreen,
        islargeScreen,
        isXlargeScreen,
        isXXlargeScreen,
        isXXXlargeScreen
      ),
      class: "",
    },
    {
      id: 3,
      img: "moon.png",
      imgLight: "sun.png",
      ref: moon,
      style: moonStyle(
        isSmallScreen,
        isMediumScreen,
        islargeScreen,
        isXlargeScreen,
        isXXlargeScreen,
        isXXXlargeScreen
      ),
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
      style: boatStyle(
        isSmallScreen,
        isMediumScreen,
        islargeScreen,
        isXlargeScreen,
        isXXlargeScreen,
        isXXXlargeScreen
      ),
      class: "",
    },
  ];
  return imgData1;
};
