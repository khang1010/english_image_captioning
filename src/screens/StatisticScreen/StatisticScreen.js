import React, {useEffect, useRef} from 'react';
import { ScrollView, View, Dimensions, Image,Text, TouchableOpacity } from 'react-native';
import styles from './StatisticStyles';
import { IC_INFO, IMG_LOGO, IMG_STATISTICS,IC_STATISTICS, XML_SCROLL, SVG_SCROLL, IC_SCROLL } from '../../assets/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import AnimationStatistics from '../../components/AnimationStatistics/AnimationStatistics';
import { useNavigation } from '@react-navigation/core';
const StatisticsScreen = ({navigation}) => {
  navigation = useNavigation();
  const scrollViewRef = useRef();
  const handleScrollToEnd = () => {   
    scrollViewRef.current.scrollToEnd({animated: true});
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} ref={scrollViewRef} >
        <View style={styles.headerContainer}>
                <View style={styles.iconScreenContainer}>
                    <Image source={IC_STATISTICS} style ={styles.iconScreenContainer}/>
                </View>
                <View style={styles.nameScreenContainer}>
                    <Text style={styles.TextHeader}>Statistics</Text>
                </View>
        </View>
        <View style={[styles.retangleContainer1,{marginTop: Dimensions.get('window').height * 0.2,}]}>
          <Text style={styles.bigText}>90.8%</Text>
          <Text style={styles.smallText}>{'Overall rate'}</Text>
        </View>
        <View style={[styles.retangleContainer1,{marginTop: Dimensions.get('window').height * 0.45,}]}>
        <Text style={styles.bigText}>10</Text>
          <Text style={styles.smallText}>{'Images have been\n\t\tcontributes'}</Text>
        </View>
        <View style={[styles.retangleContainer2,{marginTop: Dimensions.get('window').height * 0.02,}]}>
        <Text style={styles.bigText}>60,000</Text>
          <Text style={styles.smallText}>{'\t Images have\nbeen used to train'}</Text>
        </View>
        <View style={[styles.retangleContainer2,{marginTop: Dimensions.get('window').height * 0.05,}]}>
        <Text style={styles.bigText}>32</Text>
          <Text style={styles.smallText}>{' Images have\nbeen scanned'}</Text>
        </View>
        <View style={[styles.retangleContainer2,{marginTop: Dimensions.get('window').height * 0.05,}]}>
        <Text style={styles.bigText}>5</Text>
          <Text style={styles.smallText}>{'Algorihms'}</Text>
        </View>
        <TouchableOpacity onPress={handleScrollToEnd}>
          <Image style ={styles.ScrollToEndContainer} source={IC_SCROLL} />
        </TouchableOpacity>
        <View style ={styles.pageHeaderContainer}>
          <Text style={styles.pageHeaderText}>{'Algorithm comparision'}</Text>
        </View>
        <View style ={styles.pageDesContainer}>
          <Text style={styles.pageDesText}>{'Speed'}</Text>
        </View>
        <View style ={styles.AlgorihmTitleContainer}>
          <Text style={styles.AlgorihmTitleText}>{'Typical algorithms'}</Text>
        </View>
        <View style ={styles.AnimationContainer}>
          <View style ={styles.AlgorihmLableContainer}>
            <Text style={styles.AlgorihmLableText}>{'KNN'}</Text>
          </View>
          <AnimationStatistics MarginTop={Dimensions.get('window').height * 0.00} Width={0.71}/>
          <View style ={[styles.AlgorihmLableContainer,{marginTop:Dimensions.get('window').height * 0.04}]}>
            <Text style={styles.AlgorihmLableText}>{'Raw SVM'}</Text>
          </View>
          <AnimationStatistics MarginTop={Dimensions.get('window').height * 0.00} Width={0.6}/>
          <View style ={[styles.AlgorihmLableContainer,{marginTop:Dimensions.get('window').height * 0.04}]}>
            <Text style={styles.AlgorihmLableText}>{'Hist SVM'}</Text>
          </View>
          <AnimationStatistics MarginTop={Dimensions.get('window').height * 0.00} Width={0.75}/>
          <View style ={[styles.AlgorihmLableContainer,{marginTop:Dimensions.get('window').height * 0.04}]}>
            <Text style={styles.AlgorihmLableText}>{'Harris SVM'}</Text>
          </View>
          <AnimationStatistics MarginTop={Dimensions.get('window').height * 0.00} Width={0.7}/>
        </View>
        <View style ={[styles.ConclusionContainer,{marginTop:Dimensions.get('window').height * 0.1}]}>
          <Text style={styles.ConclusionText}>{'The application is a project of two\nstudents in University of Infomation\n\t\t\t\t\t\t\t\tTechnology (UIT)'}</Text>
        </View>
      </ScrollView>
    </View>

  );
};


export default StatisticsScreen;
