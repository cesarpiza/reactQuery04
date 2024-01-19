import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    characterContainer: {
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 20,
        flexDirection: 'row',
        columnGap: 10,
        padding: 10,
    },
    imageContainer: {
        width: 160,
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    dataContainer: {
        flex: 1,
    },
    name: {
        fontWeight: 'bold',
        width: '100%',
    },
    text: {
        fontSize: 16,
        textTransform: 'capitalize',
    },
});