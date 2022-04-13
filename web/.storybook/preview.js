import theme from '../src/mui_config/theme';

import { ThemeProvider } from '@mui/material/styles';
import '../src/styles/globals.css';
import CssBaseline from '@mui/material/CssBaseline';
import * as nextImage from 'next/image';
import NextImageMock from '../__mocks__/next/image';

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    );
  },
];

// 下記を追記
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <NextImageMock {...props} />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
