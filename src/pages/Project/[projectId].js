import React from "react";
import PrjTopSectionMain from "@/components/ProjectTopSection/Main";
import PreviewMain from "@/components/WebsitePreview/Main";
import { Grid } from "@mui/material";

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
  const api_Url = process.env.NEXT_PUBLIC_SERVER_URL;
  const response = await fetch(`${api_Url}/resume/resume-list`);
  const data = await response.json();
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
  const api_Url = process.env.NEXT_PUBLIC_SERVER_URL;
  const response = await fetch(
    `${api_Url}/resume/resume/id=${params.projectId}
  `
  );
  const data = await response.json();
  return {
    props: {
      resumeList: data.data,
    },
    revalidate: 1,
  };
}
