import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"


export const JournalPage = () => {
  return (
    <JournalLayout>
{/*     <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque optio, veniam vel rem dicta alias quibusdam cupiditate mollitia ducimus voluptatem dignissimos delectus vitae sequi, quo animi beatae saepe ullam cum.</Typography>
 */}    

    {/* NothingSelected */}
    {/* <NothingSelectedView /> */}
    {/*  Noteview */}
    <NoteView /> 

    </JournalLayout>
  )
}
