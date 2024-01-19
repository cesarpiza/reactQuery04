import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import {
    StatusBar,
} from 'react-native';
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';
import Home from './pages/home';

const queryClient = new QueryClient();

export default function App() {

    const { Navigator, Screen } = createNativeStackNavigator();

    useEffect(() => {
        StatusBar.setHidden(true);
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <Navigator screenOptions={{
                    headerShown: false,
                }}>
                    <Screen
                        name='Home'
                        component={Home}
                    />
                </Navigator>
            </NavigationContainer>
        </QueryClientProvider>
    );
}