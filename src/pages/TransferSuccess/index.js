import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ITransfer } from '../../assets'
import { CButton, Jarak, NotifTransaksi } from '../../components'
import { colors, fonts } from '../../utils'

const TransferSuccess = () => {
    return (
        <View style={styles.page}>
            <Jarak height={62} />
            <Image source={ITransfer} />
            <Jarak height={43} />
            <Text style={styles.text}>Transfer Berhasil!</Text>
            <Jarak height={23} />
            <Text style={styles.text}>Rp. 100,000</Text>
            <NotifTransaksi 
                text1="20 Agustus 2020"
                text2="Penerima : Dendy Aditya"
                text3="082240206xxx"
            />
            <CButton tulisan="SELESAI" />
        </View>
    )
}

export default TransferSuccess

const styles = StyleSheet.create({
    page:{
        display:'flex',
        backgroundColor:colors.white,
        flex:1,
        alignItems:'center'
    },
    text:{
        fontFamily:fonts.primary[400],
        fontSize:24
    }
})
