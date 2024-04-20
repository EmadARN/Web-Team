import React from "react";
import PrjTopSectionMain from "@/components/ProjectTopSection/Main";
import PreviewMain from "@/components/WebsitePreview/Main";
import { Box, Grid } from "@mui/material";
import axios from "axios";
import Loader from "@/components/Loader/Loader";

const projects = ({ resumeList, isLoading }) => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/images/herobg.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: {
          xs: "1340px",
          sm: "1100px",
          md: "1050px",
          lg: "1300px",
          xl: "1501px",
        },
      }}
    >
      {isLoading ? (
        <Loader /> // Display your loading component while data is fetching
      ) : (
        <Grid>
          <Grid>
            <PrjTopSectionMain resumeList={resumeList} />
          </Grid>

          <Grid>
            <PreviewMain resumeList={resumeList} />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default projects;

export async function getStaticPaths() {
  const { data } = await axios.get(
    `https://backend-adlikara.ir/resume/resume-list/`
  );
  const paths = data.data.map((resume) => {
    return {
      params: { projectId: `${resume.id}` },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(ctx) {
  const { params } = ctx;

  // Set initial loading state to true
  let isLoading = true;
  let resumeList = null;

  try {
    const { data } = await axios.get(
      `https://backend-adlikara.ir/resume/resume/id=${params.projectId}/`
    );
    resumeList = data.data;
    isLoading = false;
    // Set loading state to false after successful data fetch
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle errors appropriately, e.g., display an error message
  }

  return {
    props: {
      resumeList,
      isLoading,
    },
    revalidate: 1, // Revalidate data every 1 second
  };
}
