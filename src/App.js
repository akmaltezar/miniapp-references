import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import santri from './data';

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        {santri.map((data, nomor) => {
          return (
            <View
              key={nomor}
              style={{
                backgroundColor: 'blue',
                margin: 10,
              }}>
              <Text
                style={{
                  color: 'yellow',
                  fontSize: 25,
                }}>
                {data.nama}
              </Text>
              <Text
                style={{
                  color: 'yellow',
                  fontSize: 25,
                }}>
                {data.usia}
              </Text>
              {data.divisi === 'mobile' ? (
                <Text
                  style={{
                    color: 'green',
                    fontSize: 35,
                  }}>
                  {data.divisi}
                </Text>
              ) : (
                <Text
                  style={{
                    color: 'yellow',
                    fontSize: 25,
                  }}>
                  {data.divisi}
                </Text>
              )}
            </View>
          );
        })}

        <Text>Hallo</Text>
      </ScrollView>
    );
  }
}
