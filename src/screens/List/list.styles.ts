import {StyleSheet} from 'react-native';
import {hp, wp} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: hp(2),
    borderColor: 'gray',
    borderWidth: 1,
    padding: 11,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentContainer: {
    paddingHorizontal: wp(5),
  },
  caret: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
  },
  filderContainer: {
    alignSelf: 'flex-end',
    width: wp(100),
    height: hp(28),
    paddingHorizontal: wp(5),
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: wp(5),
    marginBottom: hp(3),
    marginTop: hp(1),
    padding: 10,
    borderRadius: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
    fontSize: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingTop: hp(2),
  },
  button: {
    backgroundColor: 'blue',
    height: hp(4),
    width: wp(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'white',
  },
  errorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(45),
  },
});
