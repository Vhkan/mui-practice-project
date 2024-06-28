import React from "react";
import { Card, CardHeader, CardContent, IconButton, Typography } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

const NoteCard = ({ note, handleDelete }) => {
  
  const borderColor = note.category === 'work' ? 'pink' : 'inherit';

  return (
    <div>
      <Card elevation={1} sx={{ border: `${borderColor} 1px solid`}}>
        <CardHeader 
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutline/>
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary' >
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}



export default NoteCard;