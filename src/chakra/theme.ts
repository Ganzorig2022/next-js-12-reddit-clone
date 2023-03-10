import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';
import { Button } from './button';

// 2. Extend the theme to include custom colors, fonts, etc
export const theme = extendTheme({
  colors: {
    brand: {
      100: '#FF3C00',
    },
  },
  //=======FONTS
  //https://chakra-ui.com/community/recipes/using-fonts
  fonts: {
    body: 'Open Sans, sans-serif',
  },

  //========GLOBAL STYLES
  //https://chakra-ui.com/docs/styled-system/global-styles
  styles: {
    global: () => ({
      body: {
        bg: 'gray.200',
      },
    }),
  },
  components: {
    // Button
    Button,
  },
});
