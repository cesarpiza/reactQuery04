import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const Buttons = ({ page, setPage, nextPage }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                disabled={page === 1}
                onPress={() => {
                    // O maior valor permanece. ex: prev é igual a 1 no começo, então 1 - 1 = 0. 0 é menor do que 1 de (prev - 1, 1 daqui). Como 1 é o maior no calculo, ele fica no "final das contas": setPage(1). Sendo assim page nunca será menor do que 1. Se o usuário estiver na page 4, por exemplo, e apertar para voltar, o calculo será o seguinte: 4 - 1 = 3; como 3 é maior que 1, 3 permanece. Consequentimente page é 3: setPage(3).
                    setPage(prev => Math.max(prev - 1, 1));
                }}
            >
                <Text
                    style={styles.buttonText}
                >
                    prev
                </Text>
            </TouchableOpacity>
            <Text
                style={styles.page}
            >
                página: {page}
            </Text>
            <TouchableOpacity
                style={styles.button}
                // Quando nextPage der null, siginifica que não existe próxima página. Aqui em baixo eu faço com que null vire true usando o sinal de negação: false vira true, null vira true, undefined vira true. Dando true em disabled o botão é bloqueado.
                disabled={!nextPage}
                onPress={() => {
                    // Se der null, vira true (sinal de negação). Dando true permanece o valor atual: prev. Caso contrário, prev + 1.
                    setPage(prev => !nextPage ? prev : prev + 1);
                }}
            >
                <Text
                    style={styles.buttonText}
                >
                    next
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default memo(Buttons);