import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ListContent from "./widgets/initialContent";
import { ThemeContext } from "@/context/ThemeContext";
import ListContentLang from "@/components/menubar/widgets/initialContentLang";

export default function MenuBar() {
  const { theme, switchDark, switchLight } = React.useContext(ThemeContext);
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {["⚙️"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            sx={{ fontSize: "18px" }}
            onClick={toggleDrawer(anchor, true)}
          >
            {anchor}
          </Button>
          <Drawer
            PaperProps={{
              sx: {
                bgcolor: theme == "dark" ? "#1b1b1b" : "#f0fffd",
              },
            }}
            sx={{ zIndex: 999 }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <ListContent
              anchor={anchor}
              toggleDrawer={toggleDrawer}
              theme={theme}
              switchLight={switchLight}
              switchDark={switchDark}
            />
            <ListContentLang
              theme={theme}
              toggleDrawer={toggleDrawer}
              anchor={anchor}
            />
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
