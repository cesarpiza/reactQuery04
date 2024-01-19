import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 20,
        alignItems: 'center',
        marginVertical: 20,
    },
    page: {
        textTransform: 'capitalize',
        width: 80,
        textAlign: 'center',
    },
    button: {
        width: 80,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkorange',
    },
    buttonText: {
        textTransform: 'capitalize',
        fontSize: 16,
    }
});