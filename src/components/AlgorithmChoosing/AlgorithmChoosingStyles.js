import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import {Dimensions} from 'react-native';

const styles = StyleSheet.create({
  dropBoxContainer: {
    width: Dimensions.get('window').width,
  },
});

export default styles;
