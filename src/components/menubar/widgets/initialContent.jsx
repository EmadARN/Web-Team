import {Box, Button, Divider, List, Typography, useMediaQuery} from "@mui/material";
import {BtnOne, BtnThree, BtnTwo, TypoSx, drawerSx} from "../style";
import * as React from "react";
import {useEffect, useState} from "react";

const ListContent = ({
                         anchor,
                         toggleDrawer,
                         theme1,
                         switchLight,
                         switchDark,
                     }) => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = () => {
        if (mediaQuery === "dark") {
            switchDark();
        } else {
            switchLight();
        }
    };
        return (
            <Box
                sx={drawerSx}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <List>
                    <Typography sx={TypoSx(theme1)}>حالت </Typography>
                    <Divider/>
                    <Box mt={2}>
                        <Button sx={BtnOne(theme1)} onClick={() => switchLight()}>
                            💡روشن
                        </Button>
                        <Button sx={BtnTwo(theme1)} onClick={() => handleSystemThemeChange}>💻سیستم</Button>
                        <Button sx={BtnThree(theme1)} onClick={() => switchDark()}>
                            🌙تاریک
                        </Button>
                    </Box>
                </List>
            </Box>
        );
    }
;

export default ListContent;
