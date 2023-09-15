import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';
import {usePalette} from '../utils/colors';

interface ScreenViewProps extends SafeAreaViewProps {
  customStyles?: ViewStyle;
}

const ScreenView: React.FC<ScreenViewProps> = ({customStyles, ...props}) => {
  const {colors} = usePalette();
  return (
    <SafeAreaView
      style={[{backgroundColor: colors.background}, styles.view, customStyles]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default ScreenView;
