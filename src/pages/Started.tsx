
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity,Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamsList } from '../route/ParamsList';
import one from '../assets/step/one.png';
import {  pageStyles } from '../styles/pages';
import { HorizontalLayout } from '../components/HorizontalLayout';
import { Page } from '../components/Page';
import { colors } from '../config/color';
import { Space } from '../components/Space';

type navigationProps = NativeStackNavigationProp<ParamsList, 'Identify'>;

function Started() {
    const navigation = useNavigation<navigationProps>();

  return (
    <Page>
      <HorizontalLayout>
        <Text style={pageStyles.headerText}>Welcome To</Text>
        <Text style={pageStyles.textBold}>PlantApp</Text>
      </HorizontalLayout>
      <Text>Identify more than 3000+ plants and 88% accuracy.</Text>
      <Image source={one} resizeMode="contain" style={{width: "100%", marginVertical: 12}}></Image>
       <TouchableOpacity
            style={pageStyles.button}
            onPress={() => navigation.navigate('Identify')}
        >
          <Text style={{color: colors.w, fontWeight: "700"}}> Get Started </Text>
        </TouchableOpacity>
        <Space>
          <HorizontalLayout center>
          <Text style={{textAlign: "center"}}>
            By tapping next, you are agreeing to PlantID
            Terms of Use & Privacy Policy.
          </Text>
          </HorizontalLayout>
        </Space>
    </Page>
  );
}

export { Started };