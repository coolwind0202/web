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
import { Stack } from '@mui/material';

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
};

export const NavBar: React.VFC<NavBarProps> = ({ children, className }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <CssBaseline />
      <HideOnScroll>
        <AppBar sx={{ height: '4rem', justifyContent: 'center' }} elevation={0}>
          <Toolbar sx={{ gap: '10px' }}>
            <Box sx={{ aspectRatio: '1', position: 'relative', height: '100%' }}>
              <Image src='/server_icon.png' layout='fill' className={styles.icon} />
            </Box>
            <Stack direction='column'>
              <Typography variant='h1' sx={{ lineHeight: 1, fontSize: '0.8rem', opacity: '0.8' }}>
                White-Lucida
              </Typography>
              <Typography variant='h1' component='div' sx={{ lineHeight: 1, fontSize: '1.6rem' }}>
                Members
              </Typography>
            </Stack>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar sx={{ height: '4rem' }} />
      <Container>
        <Box sx={{ my: 2, gap: 2 }} display='flex' flexDirection='column' alignItems='center'>
          {children}
        </Box>
      </Container>
    </div>
  );
};
