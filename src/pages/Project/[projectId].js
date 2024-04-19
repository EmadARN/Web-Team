import React from "react";
import PrjTopSectionMain from "@/components/ProjectTopSection/Main";
import PreviewMain from "@/components/WebsitePreview/Main";
import { Grid } from "@mui/material";
import axios from "axios";
import Loader from "@/components/Loader/Loader";

const projects = ({ resumeList }) => {
  return (
    <>
      <Grid sx={{}}>
        <Grid>
          <PrjTopSectionMain resumeList={resumeList} />
        </Grid>

        <Grid>
          <PreviewMain resumeList={resumeList} />
        </Grid>
      </Grid>
    </>
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
  const { data } = await axios.get(
    `https://backend-adlikara.ir/resume/resume/id=${params.projectId}/`
  );

  return {
    props: {
      resumeList: data.data,
    },
    revalidate: 1,
  };
}
