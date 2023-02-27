
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button, Image, TouchableOpacity, Dimensions } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamsList } from '../route/ParamsList';
import { Page } from '../components/Page';
import { HorizontalLayout } from '../components/HorizontalLayout';
import { pageStyles } from '../styles/pages';
import two from '../assets/step/two.png';
import line from '../assets/line.png';

import { colors } from '../config/color';

type navigationProps = NativeStackNavigationProp<ParamsList, 'Guides'>;

function Identify() {
    const navigation = useNavigation<navigationProps>();

  return (
    <Page>
      <HorizontalLayout>
        <Text style={pageStyles.headerText}>Take a photo to</Text>
        <Text style={pageStyles.textBold}>identify</Text>
        <Image source={line} resizeMode="contain" style={pageStyles.line}></Image>
      </HorizontalLayout>
      <Text style={pageStyles.headerText}>the plant!</Text>
      <Image source={two} resizeMode="contain" style={pageStyles.stepImage}></Image>
        <TouchableOpacity
            style={pageStyles.button}
            onPress={() => navigation.navigate('Guides')}
        >
          <Text style={{color: colors.w, fontWeight: "700"}}> Continue </Text>
        </TouchableOpacity>
    </Page>

  );
}

export { Identify } ;