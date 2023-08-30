import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: COLORS.WHITE,
  },
  mainInfoContainer: {
    flex: 2.5,
    justifyContent: 'space-between',
    marginEnd: 20,
    marginStart: 20,
    marginTop: 10,
    borderRadius: 30,
    borderColor: COLORS.BLACK,
    borderWidth: 1.5,
    backgroundColor: COLORS.MALIBU,
  },
  anotherInfoContainer: {
    flex: 7,
    justifyContent: 'space-between',
  },
  headerContainer: {
    flex: 0.5,
    left: Dimensions.get('window').width * 0.025,
    justifyContent: 'space-between',
  },
  iconScreenContainer: {
    position: 'absolute',
    width: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').height * 0.05,
  },
  nameScreenContainer: {
    position: 'absolute',
    left: Dimensions.get('window').width * 0.1,
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').height * 0.05,
  },
  appIconContainer: {
    position: 'absolute',
    top: Dimensions.get('window').height * 0.03,
    left: Dimensions.get('window').width * 0.5,
    width: Dimensions.get('window').width * 0.40,
    height: Dimensions.get('window').height * 0.2,
  },
  InfoContainer: {
    position: 'absolute',
    left: Dimensions.get('window').width * 0.05,
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').height * 0.05,
  },
  InfoContainerCollumn2: {
    position: 'absolute',
    left: Dimensions.get('window').width * 0.35,
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').height * 0.05,
  },
  InfoCollumn1Container: {
    position: 'absolute',
    left: Dimensions.get('window').width * 0.05,
    width: Dimensions.get('window').width * 0.40,
    height: Dimensions.get('window').height * 0.05,
  },
  InfoCollumn2Container: {
    position: 'absolute',
    left: Dimensions.get('window').width * 0.45,
    width: Dimensions.get('window').width * 0.53,
    height: Dimensions.get('window').height * 0.07,
  },
  TextHeader: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: 23,
    alignSelf: 'flex-end',
    fontWeight: '700',
    marginTop: 5,
    color: COLORS.BLACK,
  },
  TextInfoCollumn2: {
    fontFamily: FONT_FAMILY.POPPINS.REGULAR,
    fontSize: 17,
    fontWeight: '700',
    alignSelf: 'flex-start',
    marginTop: 5,
    color: COLORS.BLACK,
  },
  TextInfo: {
    fontFamily: FONT_FAMILY.POPPINS.REGULAR,
    fontSize: 15,
    fontWeight: '400',
    alignSelf: 'flex-start',
    marginTop: 5,
    color: COLORS.BLACK,
  },
  LogoStyle:{
    alignSelf:"center",
    top: Dimensions.get('window').height * 0.01
  },
  ConclusionContainer:{
    position: 'absolute',
    alignSelf: 'center',
    alignItems:'center',
    top: Dimensions.get('window').height *0.6,
    width: Dimensions.get('window').width * 0.70,
    height: Dimensions.get('window').height * 0.15,
  },
  ConclusionText:{
    fontFamily: FONT_FAMILY.POPPINS.REGULAR,
    fontSize: 15,
    fontWeight: '600',
    alignItems:'center',
    marginTop: 5,
    color: COLORS.GRAY,
  },
  statisticsContainer:{
    position: 'absolute',
    alignSelf: 'center',
    alignItems:'center',
    top: Dimensions.get('window').height *0.49,
    width: Dimensions.get('window').width * 0.70,
    height: Dimensions.get('window').height * 0.1,
    borderRadius: 30,
    backgroundColor: COLORS.MALIBU,
    borderColor: COLORS.BLACK,
    borderWidth: 1,
  },
  statisticsText:{
    fontFamily: FONT_FAMILY.POPPINS.REGULAR,
    fontSize: 20,
    fontWeight: '700',
    alignSelf:'flex-start',
    marginTop: 5,
    color: COLORS.BLACK,
  },
  statisticsTextContainer:{
    position: 'absolute',
    alignSelf: 'flex-end',
    top: Dimensions.get('window').height *0.027,
    width: Dimensions.get('window').width * 0.5,
    left: Dimensions.get('window').width * 0.28,
    height: Dimensions.get('window').height * 0.05,

  },
  statisticslogo:{
    alignSelf:"flex-start",
    top: Dimensions.get('window').height * 0.025,
    left: Dimensions.get('window').width * 0.17,
  },
});

export default styles;
