import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import {usePalette} from '../utils/colors';

interface TextViewProps extends TextProps {
  customStyle?: TextStyle;
}

const TextView: React.FC<TextViewProps> = ({customStyle, mode, ...props}) => {
  const {colors} = usePalette();

  return <Text style={[{color: colors.text}, customStyle]} {...props} />;
};

export default TextView;
