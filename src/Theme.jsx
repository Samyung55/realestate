import { extendTheme, theme as base, withDefaultVariant } from "@chakra-ui/react"

const breakpoints = {
  sm: '320px',
  md: '500px',
  lg: '720px',
  xl: '960px',
  '2xl': '1200px',
}

export const theme = extendTheme({
  breakpoints, 
  fonts: {
    heading: `'Roboto Slab', ${base.fonts.heading}`,
    body: `'Montserrat', sans-serif`,
  },
  styles: {
    global: {
        body: {
            bg: '#FFF7EC'
        }
    }
  }, 
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'pink', // default is gray
      }
    },
    Input:{
      defaultProps: {
        focusBorderColor: '#38B4D0'
      }
    },
    Select:{
      baseStyle: {
        _focus: {
          borderColor: 'black'
        }
      }
    },
    Textarea:{
      defaultProps: {
        focusBorderColor: '#38B4D0'
      }
    }
  }
});

