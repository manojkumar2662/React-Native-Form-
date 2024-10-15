import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Bharat Apat</Text>
          <Text style={styles.profileNumber}>0480 282 830</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.completionContainer}>
          <Icon name="person-circle" size={60} color="#006f78" />
          <Text style={styles.completionText}>42% Complete</Text>
        </View>
      </View>

      {/* Quick Links Section */}
      <View style={styles.quickLinks}>
        <TouchableOpacity style={styles.quickLinkButton}>
          <Icon name="card" size={24} color="#006f78" />
          <Text style={styles.quickLinkText}>Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickLinkButton}>
          <Icon name="basket" size={24} color="#006f78" />
          <Text style={styles.quickLinkText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickLinkButton}>
          <Icon name="chatbubbles" size={24} color="#006f78" />
          <Text style={styles.quickLinkText}>Consultations</Text>
        </TouchableOpacity>
      </View>

      {/* Other Options */}
      <View style={styles.optionsSection}>
        <TouchableOpacity style={styles.optionRow}>
          <Icon name="document-text" size={24} color="#006f78" />
          <Text style={styles.optionText}>My Scripts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionRow}>
          <Icon name="location" size={24} color="#006f78" />
          <Text style={styles.optionText}>My Addresses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionRow}>
          <Icon name="people" size={24} color="#006f78" />
          <Text style={styles.optionText}>My Family</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <Icon name="pricetags" size={24} color="#006f78" />
          <Text style={styles.optionText}>Offers</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <Icon name="gift" size={24} color="#006f78" />
          <Text style={styles.optionText}>Refer and Earn</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <Icon name="help-circle" size={24} color="#006f78" />
          <Text style={styles.optionText}>FAQs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <Icon name="help-buoy" size={24} color="#006f78" />
          <Text style={styles.optionText}>Help & Support</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <Icon name="lock-closed" size={24} color="#006f78" />
          <Text style={styles.optionText}>Privacy Policy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <Icon name="settings" size={24} color="#006f78" />
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <Icon name="person-remove" size={24} color="#006f78" />
          <Text style={styles.optionText}>Deactivate Account</Text>
        </TouchableOpacity>
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  profileHeader: {
    backgroundColor: '#fff',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  profileNumber: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 5,
  },
  editButton: {
    backgroundColor: '#006f78',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  completionContainer: {
    alignItems: 'center',
  },
  completionText: {
    marginTop: 5,
    color: 'gray',
    fontSize: 14,
  },
  quickLinks: {
    backgroundColor: '#fff',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  quickLinkButton: {
    alignItems: 'center',
  },
  quickLinkText: {
    marginTop: 5,
    color: '#333',
    fontSize: 14,
  },
  optionsSection: {
    backgroundColor: '#fff',
    marginTop: 10,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  logoutText: {
    fontSize: 16,
    color: '#d9534f',
  },
});

export default ProfileScreen;
