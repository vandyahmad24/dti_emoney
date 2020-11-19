import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Jarak} from '../../components/atom';
import {StatusHistory} from '../../components/molecul';
import {colors} from '../../utils';

const TransactionHistory = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Jarak height={16} />
        <StatusHistory />
        <Jarak height={16} />
        <StatusHistory />
        <Jarak height={16} />
        <StatusHistory />
        <Jarak height={16} />
        <StatusHistory />
        <Jarak height={16} />
        <StatusHistory />
        <Jarak height={16} />
        <StatusHistory />
        <Jarak height={16} />
        <StatusHistory />
        <Jarak height={16} />
      </ScrollView>
    </View>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    backgroundColor: colors.gray,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
