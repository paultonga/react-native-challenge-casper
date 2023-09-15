import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Container from './Container';
import TextView from './TextView';
import {wp} from '../utils/dimensions';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  headerTitle: string;
  hasBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({headerTitle, hasBack}) => {
  const navigation = useNavigation();

  return (
    <Container style={styles.container}>
      <Container style={styles.leftIcon}>
        {hasBack && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <TextView customStyle={styles.backLabel}>back</TextView>
          </TouchableOpacity>
        )}
      </Container>

      <Container style={styles.headerTitle}>
        <TextView>{headerTitle}</TextView>
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 55,
    paddingHorizontal: wp(5),
  },
  leftIcon: {
    width: wp(10),
    alignItems: 'center',
  },
  headerTitle: {
    width: wp(50),
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 22,
    marginRight: wp(20),
  },
  backLabel: {
    fontWeight: 'bold',
  },
});

export default Header;
