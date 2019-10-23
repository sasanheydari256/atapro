import React,{Component} from 'react';
import { resetConfigs } from "./../../redux/actions/index";
import {connect} from 'react-redux';
import { View,ActivityIndicator } from "react-native";

class LogOut extends Component{
  componentDidMount() {


                    this.setState({ confirmModalVisible:false,sendConfirmNumberLoading:false,confirmNumber:"",confirmNumberErr:false })

                    this.props.resetConfigs();
                    this.props.navigation.navigate("Login")


  }

    render(){
        return(
          <View>
              <ActivityIndicator color="blue"/>
          </View>
        )
    }
}
export default connect(null,{resetConfigs})(LogOut)
