
import * as React from 'react';
import { ImageBackground, View } from 'react-native';
import bg from '../assets/bg.png';
import { SpaceStyles } from '../styles/pages';

type PageProps = {
    children?: React.ReactNode
}

function Space(props: PageProps){
  
    return (
    <View style={SpaceStyles.layout}>
        {props.children}
    </View>
  );
}

export { Space };