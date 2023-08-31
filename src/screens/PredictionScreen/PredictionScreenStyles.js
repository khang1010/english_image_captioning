import {Dimensions, StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
  },
  imageContainer: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: COLORS.BLACK,
  },
  imageWrapper: {
    position: 'relative',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  imagePreview: {
    width: Dimensions.get('window').width,
    // maxHeight: Dimensions.get('window').height,
    height: Dimensions.get('window').height,
    // paddingBottom: 500,
  },
  box: (top, left, width, height) => ({
    position: 'absolute',
    top,
    left,
    width,
    height,
    borderColor: 'red',
    borderWidth: 3,
  }),
  humanBox: (top, left, width, height) => ({
    position: 'absolute',
    top,
    left,
    width,
    height,
    borderColor: 'blue',
    borderWidth: 3,
  }),
  verbButton: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  verb: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  score: {
    color: 'black',
    fontSize: 18,
  },
  mainBox: {
    // position: 'absolute',
    marginTop: Dimensions.get('window').height,
    // marginTop: 300,
    backgroundColor: COLORS.WHITE,
    height: Dimensions.get('window').height - 150,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: COLORS.BLACK,
    borderRadius: 30,
    flex: 1,
  },
  resultBox: {
    paddingVertical: 20,
    width: 218,
    marginTop: 23,
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  numberBox: {
    marginLeft: 20,
    marginVertical: -20,
  },
  valueBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  primaryValue: {
    fontSize: 48,
    marginRight: 12,
    marginBottom: -20,
  },
  primaryProbability: {
    color: COLORS.SILVER_CHALICE,
    fontSize: 18,
    marginBottom: -20,
  },
  secondaryValue: {
    marginLeft: 5,
    color: COLORS.SILVER_CHALICE,
    fontSize: 20,
    marginRight: 12,
  },
  secondaryProbability: {
    fontSize: 14,
    color: COLORS.SILVER_CHALICE,
  },
  algorithmInfo: {
    width: 243,
    color: COLORS.SILVER_CHALICE,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 42,
  },
  dropBoxContainer: {
    top: (Dimensions.get('window').height * 1.2) / 3,
    alignSelf: 'center',
  },
  feedbackContainer: {
    backgroundColor: COLORS.SUPERNOVA,
    borderWidth: 1,
    borderColor: COLORS.BLACK,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    paddingVertical: 15,
    marginTop: 107,
  },
  feedbackText: {
    color: COLORS.BLACK,
    fontSize: 16,
    fontFamily: FONT_FAMILY.POPPINS['Poppins-Medium'],
  },
  thumbGroup: {
    width: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  messageBox: {
    alignSelf: 'flex-start',
    width: 185,
    borderWidth: 1,
    borderColor: COLORS.BLACK,
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 20,
    height: '100%',
  },
  messageText: {
    fontSize: 15,
  },
  messageLink: {
    position: 'absolute',
    left: 100,
    top: 40,
  },
  messageLinkText: {
    fontSize: 15,
    color: COLORS.AZURE_RADIANCE,
  },
  spec: {},
  divider: {
    marginTop: 32,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 31,
    alignItems: 'center',
  },
  aboutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 51,
    marginBottom: -51,
    alignItems: 'center',
  },
  downloadButton: {
    backgroundColor: COLORS.MALIBU,
  },
  statisticButton: {
    backgroundColor: COLORS.AZURE_RADIANCE,
  },
});

export default styles;
