import React, {useEffect, useRef} from 'react';
import { ScrollView, View, Dimensions, Image,Text, TouchableOpacity } from 'react-native';
import styles from './AboutAppStyles';
import { IC_INFO, IMG_LOGO } from '../../assets/images';
import { useNavigation } from '@react-navigation/native';
import SCREEN_NAMES from '../../constants/screens';

const AboutAppScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
                <View style={styles.iconScreenContainer}>
                    <Image source={IC_INFO} style ={styles.iconScreenContainer}/>
                </View>
                <View style={styles.nameScreenContainer}>
                    <Text style={styles.TextHeader}>About App</Text>
                </View>
        </View>
        <View style={styles.mainInfoContainer}>
            <View style={styles.appIconContainer}>
                <Image source={IMG_LOGO} style={styles.LogoStyle}/>
            </View>
            <View style={[styles.InfoContainer,{top: Dimensions.get('window').height * 0.07}]}>
                <Text style={styles.TextInfo}>App Name</Text>
            </View>
            <View style={[styles.InfoContainerCollumn2,{top: Dimensions.get('window').height * 0.07}]}>
                <Text style={styles.TextInfoCollumn2}>{'EIC'}</Text>
            </View>
            <View style={[styles.InfoContainer,{top: Dimensions.get('window').height * 0.12}]}>
                <Text style={styles.TextInfo}>Version</Text>
            </View>
            <View style={[styles.InfoContainerCollumn2,{top: Dimensions.get('window').height * 0.12}]}>
                <Text style={styles.TextInfoCollumn2}>{'1.0.0'}</Text>
            </View>
        </View>
        <View style={styles.anotherInfoContainer}>
            <View style={[styles.InfoCollumn1Container,{top: Dimensions.get('window').height * 0.00}]}>
                <Text style={styles.TextInfo}>Description</Text>
            </View>
            <View style={[styles.InfoCollumn2Container,{top: Dimensions.get('window').height * 0.00}]}>
                <Text style={styles.TextInfoCollumn2}>{'AI app using model\nimage caption'}</Text>
            </View>
            <View style={[styles.InfoCollumn1Container,{top: Dimensions.get('window').height * 0.07}]}>
                <Text style={styles.TextInfo}>Developer</Text>
            </View>
            <View style={[styles.InfoCollumn2Container,{top: Dimensions.get('window').height * 0.07}]}>
                <Text style={styles.TextInfoCollumn2}>{'Nguyễn Tuấn Khang\nTrần Đông Đông'}</Text>
            </View>
            <View style={[styles.InfoCollumn1Container,{top: Dimensions.get('window').height * 0.14}]}>
                <Text style={styles.TextInfo}>Update</Text>
            </View>
            <View style={[styles.InfoCollumn2Container,{top: Dimensions.get('window').height * 0.14}]}>
                <Text style={styles.TextInfoCollumn2}>{'Homescreen\nPredictScreen'}</Text>
            </View>
            <View style={[styles.InfoCollumn1Container,{top: Dimensions.get('window').height * 0.22}]}>
                <Text style={styles.TextInfo}>Language</Text>
            </View>
            <View style={[styles.InfoCollumn2Container,{top: Dimensions.get('window').height * 0.22}]}>
                <Text style={styles.TextInfoCollumn2}>{'English'}</Text>
            </View>
            <View style={[styles.InfoCollumn1Container,{top: Dimensions.get('window').height * 0.28}]}>
                <Text style={styles.TextInfo}>Customer Support</Text>
            </View>
            <View style={[styles.InfoCollumn2Container,{top: Dimensions.get('window').height * 0.28}]}>
                <Text style={styles.TextInfoCollumn2}>{'ongtrandong2@gmail.com'}</Text>
            </View>
            <View style={[styles.InfoCollumn1Container,{top: Dimensions.get('window').height * 0.35}]}>
                <Text style={styles.TextInfo}>App Rating</Text>
            </View>
            <View style={[styles.InfoCollumn2Container,{top: Dimensions.get('window').height * 0.35}]}>
                <Text style={styles.TextInfoCollumn2}>{'Update later'}</Text>
            </View>
            <View style={[styles.InfoCollumn1Container,{top: Dimensions.get('window').height * 0.41}]}>
                <Text style={styles.TextInfo}>GitHub</Text>
            </View>
            <View style={[styles.InfoCollumn2Container,{top: Dimensions.get('window').height * 0.41}]}>
                <Text style={styles.TextInfoCollumn2}>{'github.com/khang1010\ngithub.com/ongtrandong2'}</Text>
            </View>
            <View style ={styles.ConclusionContainer}>
                <Text style={styles.ConclusionText}>{'The application is a project of two\nstudents in University of Infomation\n\t\t\t\t\t\t\t\tTechnology (UIT)'}</Text>
            </View>
            
            <TouchableOpacity style ={styles.statisticsContainer} onPress={() => navigation.navigate(SCREEN_NAMES.STATISTICS_SCREEN)}>
                <View style={styles.statisticslogo}>
                    <Image source={IC_INFO} style ={styles.iconScreenContainer}/>
                </View>
                <View style={styles.statisticsTextContainer}>
                    <Text style={styles.statisticsText}>Statistics</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default AboutAppScreen;
