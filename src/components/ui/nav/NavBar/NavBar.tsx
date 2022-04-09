import React from 'react';
import clsx from 'clsx';
import styles from './NavBar.module.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import Image from 'next/image';
import { Avatar, IconButton, Stack, Tooltip } from '@mui/material';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

type NavBarProps = {
  children: React.ReactNode;
  className?: string;
  avatar_url?: string;
};

export const NavBar: React.VFC<NavBarProps> = ({ children, className, avatar_url }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <CssBaseline />
      <HideOnScroll>
        <AppBar sx={{ height: '4rem', justifyContent: 'center', flexGrow: 1 }} color='secondary'>
          <Toolbar sx={{ gap: '0.4rem' }}>
            <Box sx={{ aspectRatio: '1', position: 'relative', height: '97%' }}>
              <Image src='/server_icon.png' layout='fill' className={styles.icon} />
            </Box>
            <Typography
              variant='h1'
              component='div'
              sx={{ lineHeight: 1, color: 'white', flexGrow: 1 }}
            >
              メンバー検索
            </Typography>
            <Tooltip title='ユーザー設定'>
              <IconButton>
                <Avatar src={avatar_url} />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar sx={{ height: '4rem' }} />
      <Box sx={{ my: 4 }}>{children}</Box>
    </div>
  );
};
