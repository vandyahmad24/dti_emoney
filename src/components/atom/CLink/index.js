import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors, fonts } from '../../../utils'

const CLink = ({title, size, align, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text(size, align)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CLink

const styles = StyleSheet.create({
    text:(size, align) =>({
        color: colors.black,
        fontSize: size,
        fontFamily: fonts.primary[300],
        textAlign: align,
    })
})
