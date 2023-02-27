
import * as React from 'react';
import { ImageBackground } from 'react-native';
import bg from '../assets/bg.png';
import { Space } from './Space';

type PageProps = {
    children?: React.ReactNode
}

function Page(props: PageProps){
    
  return (
    <ImageBackground source={bg} style={{display: "flex", flex: 1}} resizeMode="cover">
      <Space>
        { props.children}
      </Space>
    </ImageBackground>
  );

    
}

export { Page };