
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button, ImageBackground, Image } from 'react-native';
import { Horizontal } from '../styles/pages';

type LayoutProps = {
    center? : boolean, 
    adjust? : boolean, 
    spread? : boolean, 
    end? : boolean,
    top? : boolean,
    children?: React.ReactNode
}

function HorizontalLayout(props: LayoutProps){
const get_styles = () => {
    let { center = false , adjust = false , spread = false , end = false ,top = false} = props;
    let horizontal = new Array();
    horizontal.push(Horizontal.layout);
    let style = horizontal;

    if(top)
        style.push(Horizontal.top);
    if (center)
        style.push(Horizontal.center);
    if (adjust)
        style.push(Horizontal.adjust);
    if (spread)
        style.push(Horizontal.spread);
    if (end)
        style.push(Horizontal.end);
    return style;
}
 let styles = get_styles();

  return (
    <View style={[styles]}>
        {props.children}
    </View>
  );

    
}

export { HorizontalLayout };