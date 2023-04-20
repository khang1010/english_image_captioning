import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  algorithmBox: {
    alignItems: 'center',
    position: 'absolute',
    width: Dimensions.get('window').width,
    top: 40,
  },
  algorithmButton: {
    color: COLORS.WHITE,
  },
  cameraContainer: {
    backgroundColor: COLORS.BLACK,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'relative',
  },
  camera: {
    flex: 1,
  },
  mask: {
    // backgroundColor: COLORS.BLACK,
    opacity: 0.7,
    position: 'absolute',
  },
  maskTop: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').height - 350) / 2 - 80,
    top: 0,
  },
  maskBottom: {
    backgroundColor: COLORS.BLACK,
    opacity: 0.7,
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').height - 350) / 2 - 40,
    bottom: 0,
  },
  maskLeft: {
    width: (Dimensions.get('window').width - 350) / 2,
    height: 350,
    top: (Dimensions.get('window').height - 350) / 2 - 80,
    left: 0,
  },
  maskRight: {
    width: (Dimensions.get('window').width - 350) / 2,
    height: 350,
    top: (Dimensions.get('window').height - 350) / 2 - 80,
    right: 0,
  },
  instructionText: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    textAlign: 'center',
    top: (Dimensions.get('window').height - 350) / 2 + 420,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.POPPINS['Poppins-Medium'],
    fontSize: 13,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    width: Dimensions.get('window').width,
    bottom: 60,
  },
  scanButton: {
    backgroundColor: COLORS.WHITE,
    color: COLORS.BLACK,
  },
  scanIcon: {
    color: COLORS.BLACK,
  },
});

export default styles;
