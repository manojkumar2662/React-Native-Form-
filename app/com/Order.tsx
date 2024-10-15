import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const StatusDot = ({ status }) => {
  const dotColor = status === 'Active order' ? '#4CAF50' : 
                   status === 'Order complete' ? '#2196F3' : 
                   status === 'Order cancelled' ? '#F44336' : '#757575';
  return <View style={[styles.statusDot, { backgroundColor: dotColor }]} />;
};

const OrderItem = ({ order }) => (
  <View style={styles.orderItem}>
    <View style={styles.orderHeader}>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{order.date}</Text>
        <Text style={styles.month}>{order.month}</Text>
      </View>
      <View style={styles.orderInfo}>
        <View style={styles.statusContainer}>
          <Text style={[
            styles.orderStatus, 
            order.status === 'Order cancelled' && styles.cancelledText
          ]}>
            {order.status}
          </Text>
          <StatusDot status={order.status} />
        </View>
        <Text style={styles.pharmacy}>{order.pharmacy}</Text>
        <Text style={styles.address}>{order.address}</Text>
      </View>
      <Text style={styles.price}>${order.price}</Text>
    </View>
    {order.status === 'Active order' && (
      <>
        <View style={styles.statusBar}>
          <View style={[styles.statusStep, styles.completed]}>
            <Text style={styles.statusText}>Placed</Text>
          </View>
          <View style={[styles.statusStep, styles.completed]}>
            <Text style={styles.statusText}>Confirmed</Text>
          </View>
          <View style={styles.statusStep}>
            <Text style={styles.statusText}>Out for delivery</Text>
          </View>
          <View style={styles.statusStep}>
            <Text style={styles.statusText}>Delivered</Text>
          </View>
        </View>
        <View style={styles.orderDetails}>
          <Text style={styles.detailItem}>1 x Ondansetron Tablet Disintegrating 8mg 4</Text>
          <Text style={styles.detailItem}>1 x Alprazolam Tablet 0.5mg</Text>
          <Text style={styles.detailItem}>1 x Promethazine cough syrup 120ml</Text>
          <Text style={styles.detailItem}>1 x Ondansetron Tablet Disintegrating 8mg 4</Text>
          <Text style={styles.detailItem}>1 x Alprazolam Tablet Mix 40mg</Text>
          <Text style={styles.detailItem}>+ 2 More</Text>
        </View>
      </>
    )}
    <View style={styles.orderFooter}>
      <Text style={styles.orderId}>#{order.id}</Text>
      <TouchableOpacity style={styles.showDetailButton}>
        <Text style={styles.showDetailText}>Show Detail</Text>
        <Feather name="chevron-right" size={16} color="#007AFF" />
      </TouchableOpacity>
    </View>
  </View>
);

const OrdersScreen = () => {
  const orders = [
    {
      id: '0103077292',
      date: '01',
      month: 'NOV',
      status: 'Active order',
      pharmacy: 'Amcal Pharmacy',
      address: '75 St Georges Terrace, Perth WA...',
      price: '62.20',
    },
    {
      id: '0103077292',
      date: '28',
      month: 'OCT',
      status: 'Order complete',
      pharmacy: 'Amcal Pharmacy',
      address: '75 St Georges Terrace, Perth WA...',
      price: '62.20',
    },
    {
      id: '0103077292',
      date: '24',
      month: 'OCT',
      status: 'Order complete',
      pharmacy: 'Amcal Pharmacy',
      address: '75 St Georges Terrace, Perth WA...',
      price: '62.20',
    },
    {
      id: '0103077292',
      date: '24',
      month: 'OCT',
      status: 'Order cancelled',
      pharmacy: 'Amcal Pharmacy',
      address: '75 St Georges Terrace, Perth WA...',
      price: '62.20',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Feather name="chevron-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Orders</Text>
      </View>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderItem order={item} />}
        keyExtractor={(item, index) => `${item.id}-${index}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 44,
    backgroundColor: 'white',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  orderItem: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  orderHeader: {
    flexDirection: 'row',
  },
  dateContainer: {
    alignItems: 'center',
    marginRight: 16,
  },
  date: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  month: {
    fontSize: 12,
    textTransform: 'uppercase',
  },
  orderInfo: {
    flex: 1,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 4,
  },
  cancelledText: {
    color: '#F44336',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  pharmacy: {
    fontSize: 14,
    marginTop: 4,
  },
  address: {
    fontSize: 12,
    color: 'gray',
    marginTop: 2,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 'auto',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 8,
  },
  statusStep: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
  },
  completed: {
    backgroundColor: '#E3F2FD',
    borderRadius: 4,
  },
  statusText: {
    fontSize: 10,
    textAlign: 'center',
    color: '#2196F3',
  },
  orderDetails: {
    marginTop: 8,
  },
  detailItem: {
    fontSize: 12,
    marginBottom: 4,
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  orderId: {
    fontSize: 12,
    color: 'gray',
  },
  showDetailButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showDetailText: {
    color: '#007AFF',
    marginRight: 4,
  },
});

export default OrdersScreen;