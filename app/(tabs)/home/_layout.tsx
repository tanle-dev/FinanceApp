
import { Stack } from 'expo-router/stack'

export default function StackLayout() {
    Stack.defaultProps = {
        initialRouteName: 'index',
        screenOptions: {
            headerShown: false,
        },
    }

    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{ headerShown: false, title: 'Transaction' }}
            />
            <Stack.Screen
                name="detail"
                options={{
                    headerShown: false,
                    title: 'Transaction Detail',
                    headerStyle: { backgroundColor: '#323232' },
                    headerTintColor: 'white',
                }}
            />
        </Stack>
    )
}
