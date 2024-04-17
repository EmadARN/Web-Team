import Home from "@/components/home/home";
import React from "react";

const index = ({ resumeList }) => {
  return <Home resumeList={resumeList} />;
};

export default index;

export async function getStaticProps() {
  const api_Url = process.env.NEXT_PUBLIC_SERVER_URL;

  const response = await fetch(`${api_Url}/resume/resume-list`);
  const data = await response.json();

  return {
    props: {
      resumeList: data.data,
    },
    revalidate: 1,
  };
}
