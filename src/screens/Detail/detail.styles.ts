import {StyleSheet} from 'react-native';
import {hp, wp} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: wp(5),
  },
  avatar: {
    width: wp(30),
    height: wp(30),
    borderRadius: wp(15),
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
  },
  fullName: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 11,
  },
  text: {
    marginBottom: 6.5,
  },
  button: {
    backgroundColor: 'red',
    width: wp(40),
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
