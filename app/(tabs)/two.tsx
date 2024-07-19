import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { transactions } from '@/constants/transaction';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Transactions</Text>
        <Text style={styles.title}>{transactions.length}</Text>
      </View>
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.card}>
        <Text style={styles.title}>Balance</Text>
        <Text style={styles.title}>${transactions.reduce((acc, transaction) => acc + transaction.amount, 0).toFixed(2)}</Text>
      </View>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Text style={styles.subtitle}>High Spending: </Text>
      <View style={styles.card}>
        <Text style={styles.title}>{transactions.find(transaction => transaction.amount === Math.max(...transactions.map(transaction => transaction.amount)))?.brand}</Text>
        <Text style={styles.title}>${Math.max(...transactions.map(transaction => transaction.amount)).toFixed(2)}</Text>
      </View>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Text style={styles.subtitle}>Low Spending:</Text>
      <View style={styles.card}>
        <Text style={styles.title}>{transactions.find(transaction => transaction.amount === Math.min(...transactions.map(transaction => transaction.amount)))?.brand}</Text>
        <Text style={styles.title}>${Math.min(...transactions.map(transaction => transaction.amount)).toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    width: '95%',
    fontWeight: 'bold',
    marginTop: 20,
    paddingStart: 20,
    color: 'blue',
  },
  separator: {
    height: 1,
    width: '90%',
  },
  card: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: 20,
  }
});
