import Home from "@/components/home/home";
import axios from "axios";
import React from "react";

const index = ({ resumeList }) => {
  return <Home resumeList={resumeList} />;
};

export default index;

export async function getStaticProps() {
  const { data } = await axios.get(
    `https://backend-adlikara.ir/resume/resume-list/`
  );

  return {
    props: {
      resumeList: data.data,
    },
    revalidate: 1,
  };
}
