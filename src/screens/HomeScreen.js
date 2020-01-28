import React from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import { FloatingAction } from "react-native-floating-action";
import { useSelector } from "react-redux";
import { ListItem } from 'react-native-elements'

const HomeScreen = (props) => {

    const { navigation } = props;

    const products = useSelector(state => state.product.products)

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({ item }) => <ListItem
                    key={item.id}
                    title={item.name}
                    subtitle={item.price.toString()}
                    bottomDivider
                />}
                keyExtractor={item => item.id}
            />
            <FloatingAction
                onPressMain={() => navigation.navigate('Formulario')}
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
