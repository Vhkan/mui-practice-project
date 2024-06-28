import React, { useState } from 'react';
import { Button, Drawer, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar } from '@mui/material';
import { AddCircleOutline, AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';


// Define styled components using Emotion
const PageContainer = styled('div')(({ theme }) => ({
  background: '#f9f9f9',
  width: '100%',
  padding: theme.spacing(3),
}));
const RootContainer = styled('div')({
  display: 'flex',
});
const DrawerComponent = styled(Drawer)(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 240,
    boxSizing: 'border-box',
  },
}));
const Title = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2),
}));
const AppBarStyled = styled(AppBar) (({ theme }) => ({
  width: `calc(100% - 240px)`,
  marginLeft: 240,
}));
const DateTypography = styled(Typography) ({
  flexGrow: 1,
});
const ToolBarSpacer = styled('div')(({ theme }) => theme.mixins.toolbar)


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
  const location = useLocation();
  return (
    <RootContainer>
      {/* app bar */}
      <AppBarStyled position="fixed" elevation={0} color="primary">
        <Toolbar>
          <DateTypography>
            Today is {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            {Date().toString}
          </DateTypography>
        </Toolbar>
      </AppBarStyled>

      {/* side drawer */}
      <DrawerComponent variant='permanent' anchor='left'>
        {/* <DrawerPaper> */}
          <div>
            <Typography variant='h5' align='center' sx={{ padding: 2 }}>
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
                  backgroundColor: location.pathname === item.path ? '#f4f4f4' : 'transparent',
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

        {/* </DrawerPaper> */}
      </DrawerComponent>

      {/* main content */}
      <PageContainer>
        <ToolBarSpacer/>
        {children}
      </PageContainer>
    </RootContainer>
  );
}
