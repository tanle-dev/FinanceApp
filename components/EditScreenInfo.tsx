import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { transactions } from '@/constants/transaction';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, View } from './Themed';



  export default function EditScreenInfo() {
    const navigation = useNavigation();

    const handleCardPress = (transaction: any) => {
      router.push({ pathname: 'home/detail', params: { amount: transaction.amount, brand: transaction.brand, date: transaction.date, address: transaction.address } });
    };

    return (
      <ScrollView contentContainerStyle={styles.container}>
      {transactions.map((transaction) => (
        <TouchableOpacity
        key={transaction.id}
        style={styles.cardContainer}
        onPress={() => handleCardPress(transaction)}
        >
        <View style={styles.cardContent}>
          <Text style={styles.brandText}>{transaction.brand}</Text>
          <Text style={styles.amountText}>${transaction.amount}</Text>
        </View>
        <Ionicons name="chevron-forward" style={styles.arrowIcon} />
        </TouchableOpacity>
      ))}
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginVertical: 8,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    flexDirection: 'column',
  },
  brandText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  amountText: {
    marginTop: 5,
    fontSize: 18,
    color: '#666666',
  },
  arrowText: {
    fontSize: 24,
    color: '#666666',
  },
  arrowIcon: {
    fontSize: 24,
    color: '#666666',
  },
});