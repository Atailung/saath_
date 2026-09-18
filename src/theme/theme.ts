import { TextStyle, ViewStyle } from 'react-native';

/**
 * Saathi design system - "Warm Minimal Romance".
 * 8px spacing grid, Plus Jakarta Sans, warm neutrals with a restrained coral accent.
 */

export const colors = {
  primary: '#E85D75',
  primaryDark: '#C83F5A',
  primarySoft: '#FDEEF1',
  primarySofter: '#FEF5F7',

  background: '#FFF9F7',
  surface: '#FFFFFF',
  surfaceWarm: '#FBF4F1',

  text: '#171717',
  textSecondary: '#737373',
  textTertiary: '#A3A0A0',
  textInverse: '#FFFFFF',

  border: '#EAE6E5',
  borderStrong: '#DED7D4',

  success: '#22C55E',
  successSoft: '#EAF9F0',
  error: '#E5484D',
  errorSoft: '#FDEDED',

  chip: '#F4EFED',
  chipActive: '#FDEEF1',
  skeleton: '#F0EAE7',
  mapLand: '#F2EBE7',
  mapBlock: '#E9DFD9',
  mapRoad: '#FFFFFF',
  mapWater: '#DCE9EC',
  mapPark: '#E3ECE2',

  overlay: 'rgba(23,23,23,0.42)',
  hairline: 'rgba(23,23,23,0.06)',
  photoScrim: 'rgba(18,12,10,0.55)',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  huge: 40,
  screen: 20,
};

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  pill: 999,
};

export const font = {
  regular: 'PlusJakartaSans_400Regular',
  medium: 'PlusJakartaSans_500Medium',
  semiBold: 'PlusJakartaSans_600SemiBold',
  bold: 'PlusJakartaSans_700Bold',
  extraBold: 'PlusJakartaSans_800ExtraBold',
};

export const type: Record<string, TextStyle> = {
  display: { fontFamily: font.bold, fontSize: 31, lineHeight: 38, letterSpacing: -0.7, color: colors.text },
  h1: { fontFamily: font.bold, fontSize: 24, lineHeight: 31, letterSpacing: -0.4, color: colors.text },
  h2: { fontFamily: font.semiBold, fontSize: 20, lineHeight: 27, letterSpacing: -0.2, color: colors.text },
  section: { fontFamily: font.semiBold, fontSize: 17, lineHeight: 24, letterSpacing: -0.1, color: colors.text },
  bodyLg: { fontFamily: font.regular, fontSize: 16, lineHeight: 25, color: colors.text },
  body: { fontFamily: font.regular, fontSize: 15, lineHeight: 23, color: colors.text },
  bodyMedium: { fontFamily: font.medium, fontSize: 15, lineHeight: 23, color: colors.text },
  bodySemibold: { fontFamily: font.semiBold, fontSize: 15, lineHeight: 23, color: colors.text },
  caption: { fontFamily: font.regular, fontSize: 13, lineHeight: 19, color: colors.textSecondary },
  captionMedium: { fontFamily: font.medium, fontSize: 13, lineHeight: 19, color: colors.textSecondary },
  captionSemibold: { fontFamily: font.semiBold, fontSize: 13, lineHeight: 19, color: colors.text },
  tiny: { fontFamily: font.regular, fontSize: 11.5, lineHeight: 16, color: colors.textTertiary },
  button: { fontFamily: font.semiBold, fontSize: 15, letterSpacing: -0.1 },
  overline: { fontFamily: font.semiBold, fontSize: 11, lineHeight: 16, letterSpacing: 1.1, color: colors.textTertiary },
};

export const shadow: Record<string, ViewStyle> = {
  card: {
    shadowColor: '#5B3A32',
    shadowOpacity: 0.07,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  raised: {
    shadowColor: '#5B3A32',
    shadowOpacity: 0.12,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
    elevation: 5,
  },
  soft: {
    shadowColor: '#5B3A32',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 1,
  },
  sheet: {
    shadowColor: '#3A211B',
    shadowOpacity: 0.16,
    shadowRadius: 32,
    shadowOffset: { width: 0, height: -8 },
    elevation: 24,
  },
};

export const img = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const SCREEN_PADDING = spacing.screen;
