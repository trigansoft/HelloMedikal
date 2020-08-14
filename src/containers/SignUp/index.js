import React, { useState } from 'react';
import SegmentedControlTab from "react-native-segmented-control-tab";
import { View, Text, TextInput, TouchableOpacity, Image, Modal, ScrollView } from 'react-native';
import {
  TextField,
} from '@ubaids/react-native-material-textfield';
import styles from './styles';
import { Strings, Images } from '@constants'
import { Logo } from "@components"
import SignUpWithEmail from "./SignUpWithEmail"
import SignUpWithPhone from "./SignUpWithPhone"

export default function SignUp(props) {
  const { navigation } = props;
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const handleIndexChange = index => {
    // console.log(index, "-----")
    setSelectedIndex(index)
  };
  function getValue(value) {
    if (selectedIndex === 0) {
      setEmail(value)
    } else {
      setPhone(value)
    }
    // console.log(value, "====value====")
  }
  function onSubmit() {
    if (selectedIndex === 0 && !email) {
      alert("Please enter email")
    } else if (selectedIndex === 1 && !phone) {
      alert("Please enter phone number")
    } else {
      navigation.push("Otp", { value: selectedIndex ? phone : email, selectedIndex })
      // if (selectedIndex === 0 && !email) {
      //   alert("Please enter email")
      // } else if (selectedIndex === 1 && !phone) {
      //   alert("Please enter phone number")
      // }
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <SegmentedControlTab
          values={["E-mail", "Phone"]}
          selectedIndex={selectedIndex}
          onTabPress={handleIndexChange}
          borderRadius={30}
          tabsContainerStyle={styles.tabsContainerStyle}
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          tabTextStyle={styles.tabTextStyle}
          activeTabTextStyle={styles.activeTabTextStyle}
        />
      </View>
      <View style={styles.logoView}>
        <Logo />
      </View>
      <View style={styles.inputView}>
        {selectedIndex === 0 ? (
          <SignUpWithEmail getEmail={getValue} />
        ) : (
            <SignUpWithPhone getNumber={getValue} />
          )}
      </View>

      <View style={styles.emptyView} />
      <View style={styles.buttonView} >
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.emptyView} />
      <View style={styles.bottomView} >
        <View style={styles.iconView}>
          <Image source={Images.lock} style={styles.lock} />
        </View>
        <View style={styles.bottomTextView}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.bottomText}>
              Your personal data will be used to support your {"\n"}
            experience throughout this website, to manage access {"\n"}
            to your account, and for other purposes described in {"\n"}
            our privacy policy.</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
      // onRequestClose={() => {
      //   Alert.alert("Modal has been closed.");
      // }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView showsVerticalScrollIndicator={false}>

              <TouchableOpacity
                style={{ marginTop: 20 }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Image source={Images.close} style={styles.icon} />
              </TouchableOpacity>
              <Text style={styles.headerModal}>
                Privacy Policy
              </Text>
              <Text style={styles.modalSubText}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
              <Text style={styles.modalText}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book</Text>
              <Text style={styles.modalText}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book</Text>
              <Text style={styles.modalText}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book</Text>
              <Text style={styles.modalText}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book</Text>
              <Text style={styles.modalText}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book</Text>
              <Text style={[styles.modalText, { marginBottom: 30 }]}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book</Text>
            </ScrollView>
          </View>
        </View>
      </Modal>

    </View >
  );
}


