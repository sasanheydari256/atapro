import React,{Component} from 'react'
import {connect} from 'react-redux'
import Axios from  'axios';
import {PureComponent} from 'react';
import { View,TouchableOpacity,FlatList,Image as CImage } from "react-native";
import { request,BASE_URL } from "./../../service";
import { CText as Text,CButton as Button } from "./../customComponents";
import { EnToFa,ToPrice } from "./../../mixin";
import Container from "./../container";
import EStyleSheet from "react-native-extended-stylesheet";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { lang } from "./../../lang";
const _ = require("lodash");

class Item extends PureComponent{
    render() {
        // const { CategoryId,Name,Image,price,onPress,selectedItem } = this.props
        const {   CatRequest,Rate,ServiceMan,DateTime,Image,ServicemanPhone,Address } = this.props


        return (
            <TouchableOpacity activeOpacity={.8}  style={[styles.itemContainer,styles.shadow]}>
                <CImage source={{ uri: BASE_URL + `/Images/Category/Img/${Image}`}} style={styles.itemImage}/>

                <View style={{ flex:1,flexDirection:"column",alignItems:"flex-start",padding:10 }}>
                    <Text style={styles.itemName} numberOfLines={1}>{EnToFa(CatRequest)}</Text>
                    <Text style={styles.itemName}> {EnToFa(ServiceMan)}</Text>
                    <Text style={styles.itemName}> {EnToFa(DateTime)}</Text>
                      <Text style={styles.itemName}>آدرس: {EnToFa(Address)}</Text>

                </View>
            </TouchableOpacity>
        );
    }
}

class TarikhteKhadamat extends Component{
  constructor(props){
      super(props);
      this.state = {
          loading:false,
          list:[],
          selectedItem:null,
          strings:{},
          data:{"userid":"9"},
          results:"not fill"

      }
  }



    _getList = () =>{
        fetch(BASE_URL+'/api/Listuserservice',{
            method:'POST',
            body:JSON.stringify(this.state.data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'},
        }).then((res) => res.json())
                .then((list)=>{
                // console.log(list);
                this.setState({
                  list: list
                });

        })
                .catch((error) => {
                console.log(JSON.stringify(error));

        });
    };

        async componentDidMount(){
            try {
                const langs = await lang()
                const strings = {
                    ...langs.tarikhtheKhadamat,
                    ...langs.globals
                };
                this.setState({ strings })
            } catch (error) {

            }

            this._getList();
        }

    render(){
      const { TITLE } = this.state.strings
      const { list } = this.state

        return(

              <Container showMenu style={{ flex:1,justifyContent:"center" }} title={TITLE}>
                  <FlatList
                      data={list}

                      renderItem={({item})=> <Item DateTime={item.DateTime} CatRequest={item.CatRequest} ServiceMan={item.ServiceMan} Image={item.Image} Address={item.Address} />}

                      keyExtractor={(item, index) => index.toString()}
                      style={{ height: "100%" }}
                      contentContainerStyle={{ justifyContent:"flex-start",alignItems:"stretch",paddingBottom: 10 }}
                      onRefresh={this._getList}
                      refreshing={false}
                      horizontal={false}
                      alwaysBounceVertical={true}
                  />
                  </Container>

        )
    }
}
const styles = EStyleSheet.create({
    shadow:{
        elevation:8,
        shadowColor:"$lightBlueColor",
        shadowOffset:{width: 0,height: 0},
        shadowOpacity:.5,
        shadowRadius:5,
    },
    itemContainer:{ flex:1,flexDirection:"row",backgroundColor:"white",margin:wp("2.5%"),borderRadius:"10rem",overflow:"hidden" },
    itemName:{ color:"gray", },
    itemImage:{ width:wp("25%"),height:wp("25%") },

    selectBtnOuter:{ width:"20rem",height:"20rem",backgroundColor:"white",borderRadius:"10rem",borderColor:"$lightBlueColor",
                     borderWidth:"2rem",justifyContent:"center",alignItems:"center",margin:10,position:"absolute",top:0,right:0,zIndex:100
    },
    selectBtnInner:{ width:"10rem",height:"10rem",backgroundColor:"$lightBlueColor",borderRadius:"5rem", }
})
export default connect()(TarikhteKhadamat)
