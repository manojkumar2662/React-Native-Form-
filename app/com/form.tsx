import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For back arrow icon

function Form() {
  const symptoms = ['Chest Pain', 'Abdominal Pain', 'Nausea', 'Bloating', 'Difficulty swallowing', 'Non'];
  const [selectedSymptom, setSelectedSymptom] = useState(null);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Back Button */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Log Your Symptoms</Text>
        </View>

        {/* Symptom List */}
        <View style={styles.listContainer}>
          {symptoms.map((symptom, index) => (
            <TouchableOpacity
              key={index}
              style={styles.symptomButton}
              onPress={() => setSelectedSymptom(symptom)}
            >
              <Text style={styles.symptomText}>{symptom}</Text>
              {/* Radio Button */}
              <View style={styles.radioButton}>
                {selectedSymptom === symptom ? (
                  <View style={styles.radioSelected} />
                ) : (
                  <View style={styles.radioUnselected} />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 40,
    marginBottom: 10,
  },
  titleContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  listContainer: {
    marginTop: 20,
  },
  symptomButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  symptomText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  radioButton: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#a80808', // Red color for radio button border
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelected: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: '#a80808', // Red color for selected radio button
  },
  radioUnselected: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: '#fff', // Empty inner circle for unselected button
  },
  submitButton: {
    backgroundColor: '#a80808',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 150,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10,
  },
});

export default Form;
