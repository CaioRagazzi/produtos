import React, { useEffect } from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import { FloatingAction } from "react-native-floating-action";
import { useSelector, useDispatch } from "react-redux";
import { ListItem } from 'react-native-elements'
import { fetchProducts } from "../redux/actions/product";

const HomeScreen = (props) => {

    const { navigation } = props;
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.products)
    const isLoading = useSelector(state => state.product.isLoading)
    const errorMessage = useSelector(state => state.product.errorMessage)
    
    useEffect(() => {
        listaProdutos()
    }, [])

    const listaProdutos = () => {
        dispatch(fetchProducts())
    }

    return (
        <View style={styles.container}>
            {
                errorMessage ? <Text>{ errorMessage }</Text> : isLoading ? <Text>LOADING</Text> : <FlatList
                    data={products}
                    renderItem={({ item }) => <ListItem
                        key={item.id}
                        title={item.title}
                        bottomDivider
                    />}
                    keyExtractor={item => item.id.toString()}
                />
            }
            <FloatingAction
                onPressMain={() => listaProdutos() /*navigation.navigate('Formulario')*/}
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
