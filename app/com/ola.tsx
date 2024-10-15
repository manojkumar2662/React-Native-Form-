import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const CareForm = () => {
  const [selectedOption, setSelectedOption] = useState({
    caringFor: '',
    urgentAttention: null,
    symptoms: null,
    symptomDuration: 1,
    willConsultGP: null,
    understood: null,
  });

  const handleOptionChange = (key, value) => {
    setSelectedOption({ ...selectedOption, [key]: value });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.question}>Are you needing to care for someone today?</Text>
      <View style={styles.optionContainer}>
        <TouchableOpacity 
          style={[styles.optionButton, selectedOption.urgentAttention === true ? styles.selected : null]}
          onPress={() => handleOptionChange('urgentAttention', true)}>
          <Text>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.optionButton, selectedOption.urgentAttention === false ? styles.selected : null]}
          onPress={() => handleOptionChange('urgentAttention', false)}>
          <Text>No</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.question}>Who are you caring for?</Text>
      <View style={styles.optionContainer}>
        <TouchableOpacity 
          style={[styles.optionButton, selectedOption.caringFor === 'Child' ? styles.selected : null]}
          onPress={() => handleOptionChange('caringFor', 'Child')}>
          <Text>Child</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.optionButton, selectedOption.caringFor === 'Parent' ? styles.selected : null]}
          onPress={() => handleOptionChange('caringFor', 'Parent')}>
          <Text>Parent</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.optionButton, selectedOption.caringFor === 'Household' ? styles.selected : null]}
          onPress={() => handleOptionChange('caringFor', 'Household')}>
          <Text>Household Member</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.question}>Do their symptoms require urgent medical attention?</Text>
      <View style={styles.optionContainer}>
        <TouchableOpacity 
          style={[styles.optionButton, selectedOption.urgentAttention === true ? styles.selected : null]}
          onPress={() => handleOptionChange('urgentAttention', true)}>
          <Text>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.optionButton, selectedOption.urgentAttention === false ? styles.selected : null]}
          onPress={() => handleOptionChange('urgentAttention', false)}>
          <Text>No</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.question}>Are they experiencing any of these symptoms?</Text>
      <Text style={styles.infoText}>
        Difficulty in breathing, fever over 39°C, extreme pain, visual disturbances, excessive vomiting
      </Text>
      <View style={styles.optionContainer}>
        <TouchableOpacity 
          style={[styles.optionButton, selectedOption.symptoms === true ? styles.selected : null]}
          onPress={() => handleOptionChange('symptoms', true)}>
          <Text>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.optionButton, selectedOption.symptoms === false ? styles.selected : null]}
          onPress={() => handleOptionChange('symptoms', false)}>
          <Text>No</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.question}>How long have you had these symptoms?</Text>
      <View style={styles.optionContainer}>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <TouchableOpacity 
            key={num}
            style={[styles.optionButton, selectedOption.symptomDuration === num ? styles.selected : null]}
            onPress={() => handleOptionChange('symptomDuration', num)}>
            <Text>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.question}>
        If their symptoms don't improve, will you arrange for them to have a GP consult?
      </Text>
      <View style={styles.optionContainer}>
        <TouchableOpacity 
          style={[styles.optionButton, selectedOption.willConsultGP === true ? styles.selected : null]}
          onPress={() => handleOptionChange('willConsultGP', true)}>
          <Text>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.optionButton, selectedOption.willConsultGP === false ? styles.selected : null]}
          onPress={() => handleOptionChange('willConsultGP', false)}>
          <Text>No</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.question}>Have you understood and answered these questions accurately?</Text>
      <View style={styles.optionContainer}>
        <TouchableOpacity 
          style={[styles.optionButton, selectedOption.understood === true ? styles.selected : null]}
          onPress={() => handleOptionChange('understood', true)}>
          <Text>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.optionButton, selectedOption.understood === false ? styles.selected : null]}
          onPress={() => handleOptionChange('understood', false)}>
          <Text>No</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  infoText: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  optionButton: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#d3e0ea',
  },
  submitButton: {
    backgroundColor: '#006f78',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 20,
  },
  submitText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CareForm;
