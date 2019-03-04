import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';



export default class App extends React.Component {

 constructor(props) {
      super(props);
      this.state = {
        kodeBarang: '',
        jumlahBeli: 0,
        harga: 0,
        totalBelanja: 0,
        uangBayar: 0,
        kembalian: 0
      };
    }


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.top}>
          <Text style={styles.text}>Program Kasir</Text>
        </View>


        <View style={styles.center}>


                <View style={styles.centerInner}>
                  <Text>Kode Barang</Text>
                  <TextInput style={styles.border}
                      placeholder="Kode Barang"
                      onChangeText={(kodeBarang) => this.setState({ kodeBarang })}
                      value={this.state.kodeBarang}
                  />
                </View>

                <View style={styles.centerInner}>
                  <Text>Jumlah Beli</Text>
                  <TextInput style={styles.border}
                      placeholder="Jumlah Beli"
                      onChangeText={(jumlahBeli) => this.setState({ jumlahBeli })}
                      value={this.state.jumlahBeli}
                  />
                </View>

                <View style={styles.centerInner}>
                  <Text>Harga</Text>
                  <TextInput style={styles.border}
                      placeholder="Harga"
                      onChangeText={(harga) => this.setState({ harga })}
                      value={this.state.harga}
                  />
                </View>


            <Button
              title="Hitung"
              onPress={() => this.setState({
              totalBelanja: (this.state.jumlahBeli * this.state.harga)
            })}
            />



                 <View style={styles.centerInner}>
                  <Text>Total Belanja : {this.state.totalBelanja}</Text>
                 </View>


                <View style={styles.centerInner}>
                  <Text>Uang Bayar</Text>
                  <TextInput style={styles.border}
                      placeholder="Uang Bayar"
                      onChangeText={(uangBayar) => this.setState({ uangBayar })}
                      value={this.state.uangBayar}
                  />
                </View>


                <Button
                    title="Hitung"
                    onPress={() => this.setState({
                    kembalian: (this.state.uangBayar - this.state.totalBelanja)
                  })}


                <View style={styles.centerInner}>
                  <Text>Kembalian : {this.state.kembalian}</Text>
                </View>

        </View>


      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top:{
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  text:{
    color: '#ffffff'
  },
  center: {
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  centerInner: {
    flexDirection: 'row',
  },
  border: {
    borderColor: 'black',
    borderWidth: 1
  }
})