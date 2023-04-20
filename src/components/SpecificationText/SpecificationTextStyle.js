import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'black',
    alignSelf: 'flex-start',
    paddingHorizontal: 35,
    paddingTop: 19,
    paddingBottom: 15,
    alignItems: 'center',
  },
  number: {
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.POPPINS['Poppins-Medium'],
    fontSize: 24,
  },
  description: {
    color: COLORS.GRAY,
    fontSize: 12,
  },
});

export default styles;
