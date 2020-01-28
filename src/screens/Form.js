import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { useDispatch } from "react-redux";
import { add } from "../redux/actions/product";
import uuid from "uuid";

const Form = (props) => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const dispatch = useDispatch()

    const addProduct = () => {        
        var product = {
            id: uuid(),
            name,
            price
        }
        dispatch(add(product))
        props.navigation.navigate('Inicio')
    }

    const handleInputNameChange = (newName) => {
        setName(newName)
    }

    const handleInputPriceChange = (newPrice) => {
        setPrice(newPrice)
    }

    return (
        <View style={styles.container}>
            <Input
                containerStyle={styles.containerInput}
                label="Nome"
                labelStyle={styles.labelInput}
                placeholder='DIGITE AQUI O NOME'
                leftIcon={
                    <Icon
                        name='user'
                        size={24}
                        color='black'
                    />
                }
                leftIconContainerStyle={styles.iconInput}
                onChangeText={handleInputNameChange}
            />

            <Input
                containerStyle={styles.containerInput}
                label="Preço"
                labelStyle={styles.labelInput}
                placeholder='DIGITE AQUI O PREÇO'
                leftIcon={
                    <Icon
                        name='dollar'
                        size={24}
                        color='black'
                    />
                }
                keyboardType={'number-pad'}
                leftIconContainerStyle={styles.iconInput}
                onChangeText={handleInputPriceChange}
            />
            <Button
                icon={
                    <Icon
                        name="save"
                        size={15}
                        color="white"
                    />
                }
                title="Salvar"
                titleStyle={styles.titleButton}
                buttonStyle={styles.containerButton}
                onPress={addProduct}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    iconInput: {
        marginLeft: 0,
        marginRight: 10
    },
    labelInput: {
        color: 'black'
    },
    containerInput: {
        padding: 10
    },
    titleButton: {
        paddingLeft: 10
    },
    containerButton: {
        backgroundColor: 'grey'
    }
});

export default Form
