import { useNavigation } from '@react-navigation/native'
import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

const Home = () => {
    const navigation = useNavigation()

    return (
        <View>
            <Text> textInComponent </Text>
            <Button onPress={() => navigation.navigate('Chat')} title="ok"/>
        </View>
    )
}

export default Home
