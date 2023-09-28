import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: COLORS.WHITE,
    },
    headerContainer: {
        flex: 0.5,
        top: Dimensions.get('window').height * 0.01,
        left: Dimensions.get('window').width * 0.025,
        height: Dimensions.get('window').height * 0.06,
        justifyContent: 'space-between',

      },
    iconScreenContainer: {
        position: 'absolute',
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').height * 0.05,
    },
    nameScreenContainer: {
        left: Dimensions.get('window').width * 0.1,
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').height * 0.05,
    },
    TextHeader: {
        fontFamily: FONT_FAMILY.BOLD,
        fontSize: 23,
        alignSelf: 'flex-end',
        fontWeight: '700',
        marginTop: 5,
        color: COLORS.BLACK,
    },
    retangleContainer1: {
        position: 'absolute',
        left: Dimensions.get('window').width * 0.05,
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').height * 0.2,
        backgroundColor: COLORS.WHITE,
        borderRadius: 10,
        borderWidth: 1.5,
        justifyContent: 'space-between',
    },
    retangleContainer2: {
        marginTop: Dimensions.get('window').height * 0.2,
        left: Dimensions.get('window').width * 0.55,
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').height * 0.2,
        backgroundColor: COLORS.WHITE,
        borderRadius: 10,
        borderWidth: 1.5,
        justifyContent: 'space-between',
    },
    bigText: {
        fontFamily: FONT_FAMILY.BOLD,
        fontSize: 30,
        alignSelf: 'center',
        fontWeight: '700',
        marginTop: Dimensions.get('window').height * 0.05,
        color: COLORS.BLACK,
    },
    smallText: {
        position: 'absolute',
        fontFamily: FONT_FAMILY.BOLD,
        fontSize: 12,
        alignSelf: 'center',
        fontWeight: '700',
        marginTop: Dimensions.get('window').height * 0.1,
        color: COLORS.GRAY,
    },
    ConclusionContainer:{
        alignSelf: 'center',
        alignItems:'center',
        top: Dimensions.get('window').height * 0.05,
        width: Dimensions.get('window').width * 0.70,
        height: Dimensions.get('window').height * 0.15,
        backgroundColor: COLORS.WHITE,
    },
    ConclusionText:{
        fontFamily: FONT_FAMILY.POPPINS.REGULAR,
        fontSize: 15,
        fontWeight: '600',
        alignItems:'center',
        marginTop: 5,
        color: COLORS.GRAY,
    },
    AnimationContainer:{
        marginTop: Dimensions.get('window').height * 0.15,
        justifyContent: 'center',
    },
    pageHeaderContainer: {
        marginTop: Dimensions.get('window').height * 0.2,
        width: Dimensions.get('window').width * 0.70,
        height: Dimensions.get('window').height * 0.05,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems:'center',
    },
    pageHeaderText: {
        fontFamily: FONT_FAMILY.POPPINS.REGULAR,
        fontSize: 20,
        fontWeight: '600',
        marginTop: 5,
        color: COLORS.BLACK,
    },
    pageDesContainer: {
        marginTop: Dimensions.get('window').height * 0.01,
        width: Dimensions.get('window').width * 0.20,
        height: Dimensions.get('window').height * 0.03,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems:'center',

    },
    pageDesText: {
        fontFamily: FONT_FAMILY.POPPINS.REGULAR,
        fontSize: 14,
        fontWeight: '600',
        marginTop: 3,
        color: COLORS.GRAY,
    },
    AlgorihmTitleContainer: {
        marginTop: Dimensions.get('window').height * 0.1,
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').height * 0.03,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems:'center',

    },
    AlgorihmTitleText: {
        fontFamily: FONT_FAMILY.POPPINS.REGULAR,
        fontSize: 14,
        fontWeight: '500',
        marginTop: 3,
        color: COLORS.AZURE_RADIANCE,
    },
    AlgorihmLableContainer: {
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get('window').height * 0.03,
        left: Dimensions.get('window').width * 0.03,
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
    },
    AlgorihmLableText: {
        fontFamily: FONT_FAMILY.POPPINS.REGULAR,
        fontSize: 14,
        fontWeight: '600',
        marginTop: 3,
        color: COLORS.GRAY,
    },
    ScrollToEndContainer: {
        alignSelf: 'center',
        alignItems:'center',
        top: Dimensions.get('window').height * 0.04,
        width: Dimensions.get('window').width * 0.30,
        height: Dimensions.get('window').height * 0.13,
        borderRadius: 45,
        borderWidth: 1,
        borderColor: COLORS.GRAY,
    },
});

export default styles;
