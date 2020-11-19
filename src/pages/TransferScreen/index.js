import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ITransfer } from '../../assets'
import { CButton, Header, InputText, Jarak } from '../../components'
import { colors, fonts } from '../../utils'

const TransferScreen = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header text="Transfer" onPress={() => navigation.goBack()} />
            <View style={styles.container}>
                <Image source={ITransfer} style={styles.gambar} />
                <Jarak height={21} />
                <InputText placeholder="Nominal Transfer" />
                <Jarak height={17} />
                <InputText placeholder="Nomer Handphone Penerima" />
                <Jarak height={21} />
                <Text style={styles.penerima}>Penerima</Text>
                <Jarak height={21} />
                <Text style={styles.nama}>Vandy Ahmad</Text>
                <Jarak height={21} />
                <CButton tulisan="PERIKSA NOMOR" onPress={() => navigation.navigate('TransferSuccess')}/>
            </View>

        </View>
    )
}

export default TransferScreen

const styles = StyleSheet.create({
    page:{
        display:'flex',
        flex:1,
        backgroundColor:colors.white
    },
    container:{
       alignItems:'center'
    },
    gambar:{
        marginTop:21
    },
    penerima:{
        fontFamily:fonts.primary[400],
        fontSize:16
    },
    nama:{
        fontFamily:fonts.primary[200],
        fontSize:16
    }
})
