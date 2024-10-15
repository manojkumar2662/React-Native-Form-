import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';

const certificates = [
  {
    id: 1,
    icon: 'briefcase-outline',
    type: 'Single-same day certificate for work',
    description: 'Feel unwell and cannot attend work?',
    price: '$15.90',
  },
  {
    id: 2,
    icon: 'school-outline',
    type: 'Single-same day certificate for School/University',
    description: 'Feel unwell and cannot attend school or university?',
    price: '$15.90',
  },
  {
    id: 3,
    icon: 'people-outline',
    type: 'Single-same day certificate for carer’s leave',
    description: 'Need to take a day off to care for an immediate family or household member?',
    price: '$15.90',
  },
  {
    id: 4,
    icon: 'calendar-outline',
    type: 'Multi-day certificate',
    description: 'Consultation required for a certificate that covers multiple days.',
    price: '$15.90',
    consultation: true,
  },
];

const CertificatesScreen = () => {

  const renderCertificate = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.iconContainer}>
        <Icon name={item.icon} type='ionicon' size={28} color='#1d9bf1' />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.type}</Text>
        <Text style={styles.description}>{item.description}</Text>
        {item.consultation && <Text style={styles.consultation}>Consultation Required</Text>}
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.note}>Note: We cannot backdate certificates</Text>
      <FlatList
        data={certificates}
        renderItem={renderCertificate}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  note: {
    color: '#f95d6a',
    fontSize: 16,
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  iconContainer: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#7a7a7a',
  },
  consultation: {
    color: '#f95d6a',
    fontSize: 12,
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
});

export default CertificatesScreen;
