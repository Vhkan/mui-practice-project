import React from 'react';
import { Card, CardHeader, CardContent, IconButton, Typography, Avatar } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import { styled } from '@mui/system';
import { yellow, green, pink, blue } from '@mui/material/colors';

const getAvatarColor = (category) => {
  switch (category) {
    case 'work':
      return yellow[700];
    case 'money':
      return green[500];
    case 'todos':
      return pink[500];
    default:
      return blue[500];
  }
};

const StyledAvatar = styled(Avatar)(({ theme, category }) => ({
  backgroundColor: getAvatarColor(category),
}));

const NoteCard = ({ note, handleDelete }) => {
  return (
    <Card elevation={1}>
      <CardHeader
        avatar={
          <StyledAvatar category={note.category}>
            {note.category[0].toUpperCase()}
          </StyledAvatar>
        }
        action={
          <IconButton onClick={() => handleDelete(note.id)}>
            <DeleteOutline />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary'>
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
