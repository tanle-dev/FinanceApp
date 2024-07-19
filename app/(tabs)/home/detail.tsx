
import DetailCard from '@/components/DetailCard';
import { View } from '@/components/Themed';
import { useNavigation } from '@react-navigation/native';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Button } from 'react-native';

interface DetailProps {
    transaction: any;
}

const BackButton = () => {
    const navigation = useNavigation(); // Adjust based on expo-router's navigation hook/context
    return (
      <Button title="Back" onPress={() => navigation.goBack()} /> // Adjust based on how expo-router handles going back
    );
  };

const Detail: React.FC<DetailProps> = (t) => {
    var { amount, brand, address, date }= useLocalSearchParams();

    return (
        <View style={{
            height: '100%',
        }}>
            <DetailCard amount={amount} brandName={brand} address={address} date={date}/>
            <BackButton />
        </View>
    );
};

export default Detail;