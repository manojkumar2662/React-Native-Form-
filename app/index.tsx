import React from "react";
import { ScrollView, View } from "react-native";
import Form from "./com/form";
import Header from "./com/Header";
import CareForm from "./com/ola";
import ProfileScreen from "./com/Profile";
import CertificatesScreen from "./com/medical";
import OrderScreen from "./com/Order";


export default function Index() {
  return (
    <ScrollView>
      <View>
        {/* You can uncomment the Form component if you want to include it */}
        <Form/>
        
        {/* <Header/>
        <ProfileScreen/>

        <OrderScreen/> */}
        {/* <CertificatesScreen/> */}
        <CareForm/>
      </View>
    </ScrollView>
  );
}
