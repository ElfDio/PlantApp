
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Button, Image, Text, TouchableOpacity, Dimensions, ImageBackground, FlatList } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamsList } from '../route/ParamsList';
import { Page } from '../components/Page';
import { HorizontalLayout } from '../components/HorizontalLayout';
import { pageStyles } from '../styles/pages';
import { colors } from '../config/color';
import close from '../assets/close.png';
import bg from '../assets/background/1.png';
import bgCard from '../assets/Background.png';

import { Space } from '../components/Space';
import { dummy } from '../dummy';

type navigationProps = NativeStackNavigationProp<ParamsList, 'Drawer'>;

function AccountChoose() {
    const navigation = useNavigation<navigationProps>();

  return (
    <View style={{backgroundColor: "#101E17", zIndex: 0}} >
      <View style={{width: "100%", height: Dimensions.get("screen").height / 2.9, zIndex:1}}>
        <Image source={bg} resizeMode="cover" style={{width: "100%", height: "100%"}} />
        <TouchableOpacity  style={{position: "absolute", top: 20, right: 20}}  onPress={() => navigation.navigate('Drawer')}>
              <Image source={close} />
        </TouchableOpacity>
      </View>
      <View style={{ position: "absolute", top: "25%", zIndex: 5, left: 20}}>
        <HorizontalLayout >
            <Text style={pageStyles.textBoldW}>PlantApp</Text>
            <Text style={pageStyles.headerTextW}>Premium</Text>
          </HorizontalLayout>
          <Text style={pageStyles.textSmallW}>Access All Features</Text>
      </View>
      <FlatList
            data={dummy.chooseAccount}
            horizontal
            contentContainerStyle={{paddingHorizontal: 20}}
            renderItem={({ item }) => (
              <View key={item.id}  style={{backgroundColor: "#1c2923",width: 156, height:130, padding: 10, margin: 5, borderRadius: 20}}>
                <Image source={item.icon} resizeMode="contain" style={{width: "40%", height: "40%"}} />
                <Text style={{marginVertical: 10, color: colors.w}}>{item.title}</Text>
                <Text style={{color: colors.w, fontSize: 10}}>{item.desc}</Text>
              </View>
            )}
          />
          <View style={{padding: 10, margin: 20, backgroundColor: "#1c2923", width: "90%", borderRadius: 14, borderWidth: 1, borderColor: "#354b4196"}} >
            <HorizontalLayout>
            <View style={{backgroundColor: "#2e3a34", width: 25, height: 25, borderRadius: 100}}></View>
            <View style={{ marginLeft: 20}}>
              <Text style={{color: colors.w, fontWeight: "700"}}>1 Month</Text>
              <Text style={{color: colors.w, fontSize: 10}}>$2.99/month, auto renewable</Text>
            </View>
            </HorizontalLayout>
          </View>
          <View style={{ padding: 10, marginHorizontal: 20, marginVertical: 10, backgroundColor: "#1c2923", width: "90%", borderRadius: 14, borderWidth: 1, borderColor: colors.main}} >
            <View style={{ position: "absolute", backgroundColor: colors.main, right: 0, borderBottomLeftRadius: 20, borderTopRightRadius: 10, padding: 5}}>
              <Text style={{color: colors.w, fontSize: 10}}>Save 50 %</Text>
            </View>
            <HorizontalLayout>
            <View style={{display: "flex", justifyContent: "center", alignItems: "center" , backgroundColor: colors.main, width: 25, height: 25, borderRadius: 100}}><View style={{width: 10, height: 10, backgroundColor: colors.w, borderRadius: 10}}></View></View>
            <View style={{ marginLeft: 20}}>
              <Text style={{color: colors.w, fontWeight: "700"}}>1 Year</Text>
              <Text style={{color: colors.w, fontSize: 10}}>First 3 days free, then $529,99/year</Text>
            </View>
            </HorizontalLayout>
          </View>

          <View style={{ padding: 10, marginHorizontal: 20, width: "90%"}}>
            <TouchableOpacity

                style={pageStyles.button}
                onPress={() => navigation.navigate('Drawer')}
            >
              <Text style={{color: colors.w, fontWeight: "700"}}> Continue </Text>
            </TouchableOpacity>
          </View>
          <Space>
            <Text style={pageStyles.textSmallW}>After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable</Text>
          </Space>
    </View>
  );
}

export { AccountChoose };