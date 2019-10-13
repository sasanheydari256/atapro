import React,{Component} from 'react'
import {Text,View,Alert} from "react-native";
import {connect} from 'react-redux'
import Axios from  'axios';
class TarikhteKhadamat extends Component{
    state = {
      data:{"userid":"9"}
    };
    getUserData(){
        fetch('http://www.tebpasand.ir/api/Listuserservice',{
            method:'POST',
            body:JSON.stringify(this.state.data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'},
        }).then((res) => res.json())
                .then((resJson)=>{
                console.log(resJson);

        })
                .catch((error) => {
                console.log(JSON.stringify(error));

        });
    };

    componentDidMount() {
        /*const _call=async ({baseURL="api/Listuserservice"})=> {
            const data = await Axios.post({
                baseURl: baseURL,
                header: "/userid",
            }).catch({
                response:{_call},
                }
            ).catch(err=>{
                throw err
            })
            return data
        }*/


       const data= fetch('http://www.tebpasand.ir/api/Listuserservice', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userid: 14,
            })
        })
return data
        }
    render(){
        return(
           <View>

           </View>
        )
    }
}
export default connect()(TarikhteKhadamat)