import React,{Fragment} from 'react';
import {View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native';
import { Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Botao({logo,texto,cor,logo2,texto2,cor2}){
 const navigation = useNavigation();


return(
<View style={estilo.containerBotoes1}>
<TouchableOpacity style={[estilo.botoes ,{backgroundColor:cor}]} onPress ={()=>navigation.navigate('Categoria',{nome:texto})}>
<Ionicons name= {logo} size={20} color="white" 

style= {{marginRight:10}}/>
 <Text style ={estilo.textoBotao} > {texto} </Text>
  
  </TouchableOpacity>


  <TouchableOpacity style={[estilo.botoes ,{backgroundColor:cor2}] } onPress ={()=>navigation.navigate('Categoria',{nome:texto2})}>
<Ionicons name= {logo2} size={20} color="white" 

style= {{marginRight:10}}/>
 <Text style ={estilo.textoBotao} > {texto2} </Text>
  
  </TouchableOpacity>

  </View>
);


}

const estilo = StyleSheet.create({

    containerBotoes1:{
        flexDirection:'row',
        marginBottom:10,
        justifyContent:"center"
        
        
    
      },
      textoBotao:{
        color:'white',
        fontWeight:'bold'
      },
      botoes:{
        padding:5,
        marginHorizontal:10,
        width:'45%',
        alignItems:'center',
        justifyContent:'flex-start',
        
        fontSize:12,
        color:'white',
        flexDirection:'row',
        
      }

})