
import * as React from 'react';
import { View, ImageBackground, Text, Image, TextInput, FlatList } from 'react-native';
import { pageStyles } from '../styles/pages';
import search from "../assets/search.png";
import bg from "../assets/bg.png";
import message from "../assets/message.png";
import arrow from "../assets/arrow.png";
import { colors } from '../config/color';
import { Space } from '../components/Space';
import { HorizontalLayout } from '../components/HorizontalLayout';
import { useReduxSelector } from '../store';

function Home() {
  const categories = useReduxSelector(state => state.categories)
  const questions = useReduxSelector(state => state.questions)
  return (
    <Space>
      <ImageBackground source={bg}>
        <Text>Hi, plant lover !</Text>
        <Text style={pageStyles.headerText}>Good Afternoon! ⛅</Text>

        <View style={pageStyles.homeSearch}>
          <Image source={search} />
          <TextInput  placeholder='Search for plants' />
        </View>
      </ImageBackground>
      <View style={pageStyles.content}>
       <HorizontalLayout spread>
          <HorizontalLayout>
            <Image source={message} style={{width: 35, height: 35}} />
            <View style={{ marginLeft: 10}}>
              <Text style={{color: "#E5C990"}}>FREE Premium Avaible</Text>
              <Text style={{color: "#E5C990", fontSize: 12}}>Top to upgrade your account</Text>
            </View>
          </HorizontalLayout>
          <Image source={arrow} style={{width: 25, height: 25}} />
       </HorizontalLayout>
      </View>
      <Text style={pageStyles.breadTitle}>Get Started</Text>
      <FlatList
          data={questions}
          horizontal
          contentContainerStyle={{marginVertical: 10}}
          renderItem={({ item }) => (
            <ImageBackground source={{ uri : item.image_uri }} style={pageStyles.categories}>
              <Text style={{marginVertical: 10, color: colors.w, bottom: 20}}>{item.title}</Text>
            </ImageBackground>
          )}
        />

        <FlatList
          data={categories}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={pageStyles.categoriesContainer}>
              <Text style={pageStyles.categoriesTitle}>{item.title}</Text>
              <Image source={{uri: item.image.url}} resizeMode="contain" style={pageStyles.categoriesImage}/>
            </View>
          )}
        />
    </Space>
  );
}

export { Home };