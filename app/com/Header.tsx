import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function SignupForm() {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Finish signing up</Text>

        {/* Name Input */}
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        {/* Contact Number Input */}
        <Text style={styles.label}>Contact Number</Text>
        <TextInput
          style={styles.input}
          placeholder="+1 0000000"
          keyboardType="phone-pad"
          value={contactNumber}
          onChangeText={setContactNumber}
        />

        {/* Age Picker */}
        <Text style={styles.label}>Age</Text>
        <View style={styles.input}>
          <Picker
            selectedValue={age}
            onValueChange={(itemValue) => setAge(itemValue)}
          >
            <Picker.Item label="Select age" value="" />
            <Picker.Item label="25" value="25" />
            <Picker.Item label="26" value="26" />
            <Picker.Item label="27" value="27" />
          </Picker>
        </View>

        {/* Gender Picker */}
        <Text style={styles.label}>Gender</Text>
        <View style={styles.input}>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
          >
            <Picker.Item label="Select gender" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Other" value="other" />
          </Picker>
        </View>

        {/* Height & Weight */}
        <Text style={styles.label}>Height & Weight</Text>
        <View style={styles.heightWeightContainer}>
          <TextInput
            style={[styles.input, styles.inputSmall]}
            placeholder="Height (cm)"
            keyboardType="numeric"
            value={height}
            onChangeText={setHeight}
          />
          <TextInput
            style={[styles.input, styles.inputSmall]}
            placeholder="Weight (lbs)"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />
        </View>

        {/* Continue Button */}
        <View style={styles.buttonContainer}>
          <Button title="Continue" color="rgb(163, 17, 17)" onPress={() => {}} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center', // Centers the content vertically
  },
  container: {
    padding: 20,
    marginTop: 150,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  inputSmall: {
    width: '48%',
  },
  heightWeightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  buttonContainer: {
    borderRadius: 30, // Curved corners for the button
    overflow: 'hidden',
  },
});

export default SignupForm;
