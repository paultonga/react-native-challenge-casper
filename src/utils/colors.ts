import {useColorScheme} from 'react-native';

const ColorPalette = {
  dark: {
    text: '#FFFFFF',
    background: '#1F2937',
  },
  light: {
    text: '#111827',
    background: '#FFFFFF',
  },
};

export const usePalette = () => {
  const theme = useColorScheme();
  const colors = theme ? ColorPalette[theme] : ColorPalette.light;

  return {
    colors,
    theme,
  };
};
