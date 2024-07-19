import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { transactions } from '@/constants/transaction';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from './Themed';



  export default function EditScreenInfo({ path }: { path: string }) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {transactions.map((transaction) => (
          <View key={transaction.id} style={styles.cardContainer}>
            <View style={styles.cardContent}>
              <Text style={styles.brandText}>{transaction.brand}</Text>
              <Text style={styles.amountText}>${transaction.amount}</Text>
            </View>
            <Ionicons name="chevron-forward" style={styles.arrowIcon} />
          </View>
        ))}
      </ScrollView>
    );
  // Remove the extra closing curly brace
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