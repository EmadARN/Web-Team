import Home from "@/components/home/home";
import axios from "axios";
import React from "react";

const index = ({ resumeList }) => {
  return <Home resumeList={resumeList} />;
};

export default index;

export async function getStaticProps() {
  const api_Url = process.env.NEXT_PUBLIC_SERVER_URL;

  const { data } = await axios.get(`${api_Url}/resume/resume-list`);

  return {
    props: {
      resumeList: data.data,
    },
    revalidate: 1,
  };
}
