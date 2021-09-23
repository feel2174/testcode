import { DefaultTheme } from 'styled-components';

const size = {
  smallMobile: 350,
  mobile: 750,
  tab: 990,
  pc: 1200,
};

const gradientsColor = {
  light: {
    PRIMARY: '#B3D432',
    PRIMARY_SUB: '#1A69F9',
    POINT_1: '#313A31',
    POINT_2: '#90B768',
  },
  dark: {
    PRIMARY: '#B3D432',
    PRIMARY_SUB: '#1A69F9',
    POINT_1: '#313A31',
    POINT_2: '#90B768',
  },
};

export const theme: DefaultTheme = {
  background: {
    PRIMARY: '#FFFFFF',
    SECONDARY: '#FAFAFA',
    TERTIARY: '#F0F0F0',
  },
  color: {
    PRIMARY: '#B3D432',
    PRIMARY_SUB: '#1A69F9',
    SECONDARY: ' #D2EA73',
    TERTIARY: '#0C1F6F',
    POINT: '#313A31',
    BLACK: '#1A1A1A',
    GRAY5: '#444444',
    GRAY4: '#808080',
    GRAY3: '#BEBEBE',
    GRAY2: '#F0F0F0',
    GRAY1: '#F7F7F7',
    GRAY0: '#FAFAFA',
    WHITE: '#FFFFFF',
    WARNING: '#FF6060',
    SUCCESS: '#B3D432',
    GRADIENT0: `linear-gradient(to right, ${gradientsColor.light.PRIMARY}, ${gradientsColor.light.PRIMARY_SUB})`,
    GRADIENT1: `linear-gradient(to right, ${gradientsColor.light.POINT_1}, ${gradientsColor.light.PRIMARY})`,
    GRADIENT2: `linear-gradient(to bottom, ${gradientsColor.light.PRIMARY}, ${gradientsColor.light.POINT_2})`,
  },
  radius: 4,
  window: {
    smallMobile: `@media screen and (max-width: ${size.smallMobile}px)`,
    mobile: `@media screen and (max-width: ${size.mobile}px)`,
    tab: `@media screen and (max-width: ${size.tab}px)`,
    pc: `@media screen and (max-width: ${size.pc}px)`,
  },
};

// export const dark: DefaultTheme = {
//   background: {
//     PRIMARY: '#363636',
//     SECONDARY: '#2B2B2B',
//     TERTIARY: '#1A1A1A',
//   },
//   color: {
//     PRIMARY: '#B3D432',
//     SECONDARY: ' #D2EA73',
//     TERTIARY: '#0C1F6F',
//     POINT: '#313A31',
//     BLACK: '#1A1A1A',
//     GRAY5: '#444444',
//     GRAY4: '#808080',
//     GRAY3: '#BEBEBE',
//     GRAY2: '#F0F0F0',
//     GRAY1: '#F7F7F7',
//     GRAY0: '#FAFAFA',
//     WHITE: '#FFFFFF',
//     WARNING: '#FF6060',
//     SUCCESS: '#B3D432',
//     ICON: '#4575F5',
//     ICONSUB: '#C3DCFF',
//     BUTTON: '#FFFFFF',
//     EVENT: '#36b243',
//   },
//   radius: 4,
//   window: {
//     smallMobile: `@media screen and (max-width: ${size.smallMobile}px)`,
//     mobile: `@media screen and (max-width: ${size.mobile}px)`,
//     tab: `@media screen and (max-width: ${size.tab}px)`,
//     pc: `@media screen and (max-width: ${size.pc}px)`,
//   },
// };
