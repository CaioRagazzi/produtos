import React, { useEffect } from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import { FloatingAction } from "react-native-floating-action";
import { useSelector, useDispatch } from "react-redux";
import { ListItem } from 'react-native-elements'
import { listUsers } from "../redux/actions/users";

const HomeScreen = (props) => {

    const { navigation } = props;
    const dispatch = useDispatch()
    const products = useSelector(state => state.user.users)
    const isLoading = useSelector(state => state.user.loading)
    const error = useSelector(state => state.user.error)
    
    useEffect(() => {
        dispatch(listUsers())
    }, [])

    const listaUsuarios = () => {
        dispatch(listUsers())
    }

    return (
        <View style={styles.container}>
            {
                error ? <Text>ERRO AO CONSULTAR API</Text> : isLoading ? <Text>LOADING</Text> : <FlatList
                    data={products}
                    renderItem={({ item }) => <ListItem
                        key={item.id}
                        title={item.name}
                        bottomDivider
                    />}
                    keyExtractor={item => item.id.toString()}
                />
            }
            <FloatingAction
                onPressMain={() => listaUsuarios() /*navigation.navigate('Formulario')*/}
                animated={false}
                showBackground={false}
                color={"#373737"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default HomeScreen
