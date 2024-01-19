import React, { useEffect, useState } from 'react';
import {
    FlatList,
    SafeAreaView,
} from 'react-native';
import { styles } from './styles';
import { useQuery, useQueryClient } from 'react-query';
import api from '../../hooks/useFetchApi';
import Buttons from '../../components/buttons';
import Characters from '../../components/characters';
import IsLoading from '../../components/isLoading';
import IsError from '../../components/isError';

export default function Home() {

    const [page, setPage] = useState(1);

    const { data, isLoading, isError, error } = useQuery(['character', page], () => api.useFetchApi(page), {
        // Quando keepPreviousData é configurado como true, os dados anteriores da consulta são mantidos enquanto a nova consulta está em andamento. Isso permite que a interface do usuário continue a exibir os dados antigos até que os novos dados estejam disponíveis.
        //keepPreviousData: true,
        // Só será "permitido" a revalidação/requisição em segundo plano, após 30 segundos.
        staleTime: 30 * 1000,
    });

    const nextPage = data?.info?.next;

    const queryClient = useQueryClient();

    // Para fazer a pre-requisição: requisição da próxima página mesmo antes de acessá-la atráves do botão next. Isso melhora a experiencia do usuário já que antes mesmo do usuário "chegar" na próxima página ela já está em cache, ou seja, ao "chegar" na mesma, ela é "lida" de forma rápido. 
    useEffect(() => {
        if (nextPage) {
            const nextRequest = page + 1
            queryClient.prefetchQuery(['character', nextRequest], () => api.useFetchApi(nextRequest));
        }
    }, [page, nextPage]);

    return (
        <SafeAreaView style={styles.container}>
            <Buttons page={page} setPage={setPage} nextPage={nextPage} />
            {isLoading ?
                <IsLoading />
                :
                (isError ?
                    <IsError error={error} />
                    :
                    <FlatList
                        contentContainerStyle={styles.contentContainerStyle}
                        data={data?.results}
                        keyExtractor={item => String(item.id)}
                        renderItem={({ item, index }) => (
                            <Characters {...item} />
                        )}
                    />
                )
            }
        </SafeAreaView >
    );
}