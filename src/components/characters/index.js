import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';

export default function Characters(props) {

    const [imageProgress, setImageProgress] = useState(true);

    const {
        name,
        species,
        gender,
        image,
    } = props

    return (
        <View
            style={styles.characterContainer}
        >
            <View
                style={styles.imageContainer}
            >
                <Text
                    style={{
                        textTransform: 'capitalize',
                        fontSize: 16,
                        position: 'absolute',
                        opacity: imageProgress ? 1 : 0,
                    }}
                >
                    loading...
                </Text>
                <Image
                    style={styles.image}
                    source={{ uri: image }}
                    onLoadEnd={() => {
                        setImageProgress(false);
                    }}
                />
            </View>
            <View
                style={styles.dataContainer}
            >
                <Text
                    style={[styles.text, styles.name]}
                    numberOfLines={1}
                >
                    nome: {name}
                </Text>
                <Text
                    style={styles.text}
                >
                    espécie: {species}
                </Text>
                <Text
                    style={styles.text}
                >
                    sexo: {gender}
                </Text>
            </View>
        </View>
    );
}