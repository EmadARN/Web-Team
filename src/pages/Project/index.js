import { Box } from "@mui/material";
import axios from "axios";
import Link from "next/link";

const Project_Main_Page = ({ resumeList }) => {
  console.log(resumeList);
  return (
    <Box>
      {resumeList.map((resume) => {
        return (
          <div key={resume.id}>
            <Link href={`/Project/${resume.id}`}>
              <li>
                Title: {resume.title} - Description:{resume.description}
              </li>
            </Link>
          </div>
        );
      })}
    </Box>
  );
};

export default Project_Main_Page;
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

