
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Button, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamsList } from '../route/ParamsList';
import { Page } from '../components/Page';
import { HorizontalLayout } from '../components/HorizontalLayout';
import { pageStyles } from '../styles/pages';
import { colors } from '../config/color';
import line from '../assets/line.png';
import tree from '../assets/step/tree.png';

type navigationProps = NativeStackNavigationProp<ParamsList, 'AccountChoose'>;

function Guides() {
    const navigation = useNavigation<navigationProps>();
  return (
    <Page>
      <HorizontalLayout>
        <Text style={pageStyles.headerText}>Take a photo to</Text>
        <Text style={pageStyles.textBold}>identify</Text>
        <Image source={line} resizeMode="contain" style={{position: "absolute", right: 50, top: 30}}></Image>
      </HorizontalLayout>
      <Text style={pageStyles.headerText}>the plant!</Text>
      <Image source={tree} resizeMode="cover" style={{width: "100%", height: Dimensions.get("window").height / 1.5}}></Image>
        <TouchableOpacity
            style={pageStyles.button}
            onPress={() => navigation.navigate('AccountChoose')}
        >
          <Text style={{color: colors.w, fontWeight: "700"}}> Continue </Text>
        </TouchableOpacity>
    </Page>
  );
}

export { Guides };