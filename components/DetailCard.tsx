

import { Text, View } from 'react-native';

interface DetailCardProps {
    amount: number;
    brandName: string;
    address: string;
}

const DetailCard: React.FC<DetailCardProps> = ({ amount, brandName, address }) => {
    return (
        <View style={styles.detailCard}>
            <Text style={styles.amount}>Amount: {amount}</Text>
            <Text style={styles.brandName}>Brand Name: {brandName}</Text>
            <Text style={styles.address}>Address: {address}</Text>
        </View>
    );
};

const styles = {
    detailCard: {
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
    amount: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    brandName: {
        fontSize: 16,
    },
    address: {
        fontSize: 16,
    },
};

export default DetailCard;