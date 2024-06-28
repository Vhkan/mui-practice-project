import React, { useState } from 'react';
import { Button, Drawer, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { AddCircleOutline, AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

// Define styled components using Emotion
const PageContainer = styled('div')({
  background: '#f9f9f9',
  width: '100%',
});
const RootContainer = styled('div')({
  display: 'flex',
});
const DrawerComponent = styled(Drawer)(({ theme }) => ({
  width: 240,
}));
const DrawerPaper = styled('div')(({ theme }) => ({
  width: 240,
}));

const menuItems = [
  {
    text: 'My Notes',
    icon: <SubjectOutlined color='secondary' />,
    path: '/'
  },
  {
    text: 'Create Notes',
    icon: <AddCircleOutlineOutlined color='secondary' />,
    path: '/create'
  }
];


export default function Layout({ children }) {

  const history = useHistory();
  // const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  return (
    <RootContainer>
      {/* app bar */}

      {/* side drawer */}
      <DrawerComponent variant='permanent' anchor='left'>
        <DrawerPaper>
          <div>
            <Typography variant='h5' textAlign={'center'}>
              My Notes App
            </Typography>
          </div>
          {/* list links */}

          <List>
            {menuItems.map(item => (
              <ListItem
                button key={item.text}
                onClick={() => history.push(item.path)}
                sx={{
                  backgroundColor: location.pathname === item.path? '#f4f4f4' : 'transparent',
                  '&:hover': {
                    backgroundColor: '#f4f4f4',
                  },
                }}
                >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>

        </DrawerPaper>
      </DrawerComponent>

      {/* main content */}
      <PageContainer>
        {children}
      </PageContainer>
    </RootContainer>
  );
}
