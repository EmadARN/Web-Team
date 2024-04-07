import PrjTopSectionMain from '@/components/ProjectTopSection/Main';
import MobilePreviewMain from '@/components/WebsitePreview/Main';
import {Grid} from '@mui/material'
const Project_Main_Page = () => {
    return ( 
        <>
      <Grid>
        <PrjTopSectionMain/>
      </Grid>

      <Grid>
        <MobilePreviewMain/>
      </Grid>
      </>
     );
}
 
export default Project_Main_Page;