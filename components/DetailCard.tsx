

import { Text, View } from 'react-native';

interface DetailCardProps {
    amount: number;
    brandName: string;
    address: string;
    date: string;
}

const DetailCard: React.FC<DetailCardProps> = ({ amount, brandName, address, date }) => {
    return (
        <View style={styles.above}>

            <View style={styles.detailCard}>
                <Text style={styles.amount}>${amount}</Text>
                <Text style={styles.brandName}>{brandName}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
            
            <View style={
                {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    backgroundColor: '#FFFFFF',
                    shadowColor: '#000000',
                    
                }
            }>
                <Text style={styles.date}>Date of Purchase</Text>
                <Text style={styles.date}>{date.slice(0, 15)}</Text>
            </View>
            
        </View>
    );
};

const styles = {
    detailCard: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginVertical: 8,
        width: '100%',
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
    },
    amount: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    brandName: {
        fontSize: 18,
        margin: 4
    },
    address: {
        fontSize: 18,
        margin: 2
    },
    date: {
        fontSize: 16,
        margin: 20
    },
    above: {
        marginBottom: 10,
        
    },
};

export default DetailCard;