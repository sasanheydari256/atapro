import React,{Component} from 'react'
import {connect} from 'react-redux'
import {View} from 'react-native'
import { CText as Text,CButton as Button } from "./../customComponents";
import Container from "./../container";
import { lang } from "./../../lang";
class Contact extends Component{

  constructor(props){
      super(props);
      this.state = {

          strings:{},


      }
  }

  async componentDidMount(){
      try {
          const langs = await lang()
          const strings = {
              ...langs.contact,
              ...langs.globals
          };
          this.setState({ strings })
      } catch (error) {

      }

  }
    render(){
      const { TITLE } = this.state.strings

        return(
          <Container showMenu style={{ flex:1,justifyContent:"center" }} title={TITLE}>
          <View>
            <Text>صحفه  تماس با ما</Text>
          </View>
              </Container>
        )
    }
}
export default connect()(Contact)
