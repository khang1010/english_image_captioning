import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    width: 200,
    alignItems: 'center',
    position: 'absolute',
  },
  title: {
    color: COLORS.AZURE_RADIANCE,
    fontSize: 15,
  },
  boxContainer: {
    marginTop: 7,
    width: 200,
    height: 115,
    borderWidth: 1,
    borderColor: COLORS.BLACK,
    borderRadius: 15,
    backgroundColor: COLORS.WHITE,
    elevation: 10,
  },
  box: {
    padding: 13,
    alignItems: 'center',
  },
  item: {
    width: '100%',
  },
  itemText: {
    textAlign: 'center',
    paddingVertical: 6,
    color: COLORS.GRAY,
    fontFamily: FONT_FAMILY.POPPINS['Poppins-Medium'],
  },
});

export default styles;
