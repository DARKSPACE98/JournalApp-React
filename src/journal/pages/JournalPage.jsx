import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined, Opacity } from "@mui/icons-material"


export const JournalPage = () => {
  return (
    <JournalLayout>
{/*     <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque optio, veniam vel rem dicta alias quibusdam cupiditate mollitia ducimus voluptatem dignissimos delectus vitae sequi, quo animi beatae saepe ullam cum.</Typography>
 */}    

    {/* NothingSelected */}
    {/* <NothingSelectedView /> */}
    {/*  Noteview */}
    <NoteView />

    <IconButton
      size='large'
      sx={{
        color: 'white',
        backgroundColor: 'error.main',
        ':hover': { backgroundColor: 'error.main', opacity: 0.9},
        position: 'fixed',
        right: 50,
        bottom: 50
      }}
    >
      <AddOutlined sx={{fontSize: 30}} />
    
    </IconButton> 
    </JournalLayout>
  )
}
