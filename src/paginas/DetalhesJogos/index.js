import react from "react";
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native'



export default function DetalheJogos({route}) {
    return (
        <View Style = {estilo.container}>
            <View style = {estilo.cabecalhoContainer}>
            <Image style = {estilo.icone}  source = {require(`../../imagens/${route.params?.imagem}`)}/>
            <Text style ={estilo.titulo}>{route.params?.titulo}</Text>
            
         
            </View>

            <TouchableOpacity style={estilo.botao}>


            
            <Text style={estilo.textoBotao}>Instalar </Text>
    

            </TouchableOpacity>

            

           
        </View>


    );
}

const estilo = StyleSheet.create({

container:{
flex:1,
},
cabecalhoContainer:{
flexDirection:'row',
marginHorizontal:20
},
icone:{
height:60,
width:60,
borderRadius:10,
marginRight:30
},
titulo:{
    margin:10,
    fontSize:20,
    fontWeight:'bold'
},
botao:{
    padding:5,
    backgroundColor:'green',
    width:"80%",
    marginHorizontal:20,
    justifyContent:'center' ,
    alignItems:'center',
    marginTop:30
},
textoBotao:{
    fontSize:12,
    color:'white',
}




})