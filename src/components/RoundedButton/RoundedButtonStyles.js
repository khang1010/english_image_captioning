import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    width: 86,
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: COLORS.BLACK,
    borderRadius: 20,
    padding: 24,
    backgroundColor: COLORS.SUPERNOVA,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {},
  text: {
    marginTop: 16,
    fontSize: 15,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.POPPINS['Poppins-Medium'],
  },
});

export default styles;
