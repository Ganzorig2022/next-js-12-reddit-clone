import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: '60px',
    fontSize: '10pt',
    fontWeight: 700,
    _focus: {
      boxShadow: 'none',
    },
  },
  sizes: {
    sm: {
      fontSize: '8pt',
    },
    md: {
      fontSize: '10pt',
      // height: "28px",
    },
  },
  variants: {
    solid: {
      color: 'white',
      bg: 'blue.500',
      _hover: {
        bg: 'blue.400',
      },
    },
    outline: {
      color: 'blue.500',
      border: '1px solid',
      borderColor: 'blue.500',
    },
    oauth: {
      height: '34px',
      border: '1px solid',
      borderColor: 'gray.300',
      _hover: {
        bg: 'gray.50',
      },
    },
  },
};

//https://www.codiga.io/blog/component-library-chakra-ui-react/
// Example structure for custom theme to Chakra UI components.

// import { ComponentStyleConfig } from "@chakra-ui/rect";

// const ComponentStyle: ComponentStyleConfig = {
//   // style object for base or default style
//   baseStyle: {},
//   // styles for different sizes ("sm", "md", "lg")
//   sizes: {},
//   // styles for different visual variants ("outline", "solid")
//   variants: {},
//   // default values for `size` and `variant`
//   defaultProps: {
//     size: '',
//     variant: '',
//   },
// }
// export default ComponentStyle;
