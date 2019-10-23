import {View,Text,StyleSheet,Image} from 'react-native'
import React,{Component} from 'react'
export default class Ata extends Component{
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('splash')
        },2000)
    }
    render(){
        return(

                <View style={styles.Container}>
                <Image
                  style={{flex:1, height: 200, width: 200}}
                    source={require('./../../assets/images/ata-02.png')}
                      resizeMode="contain"
                      />
                      <Text>اپلیکیشن اطا</Text>
                </View>

        )
    }
}
const styles=StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    Text:{
        fontSize:20,
        color:"black"
    }
})
