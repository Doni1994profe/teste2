import react,{useState,useEffect} from "react";
import {View,Text,FlatList,Image,StyleSheet,TouchableOpacity} from 'react-native'
import JOGOS from '../../../dados/index';
import BREVE from '../../../dados/breve';
import FILME from '../../../dados/filmes';
import Jogo from '../../components/jogos';


export default function Categoria({route}) {
   const [dado,setDados] = useState( BREVE);
   const  info = route.params?.nome;

  useEffect(()=>{

    function verificaDados(){
      if(info == 'JOGOS'){
        setDados(JOGOS)
      }
      else if (info == 'FILMES'){
        setDados(FILME)
      }
      else
        setDados(BREVE)

    }

    verificaDados();
  },[]);


    return (
        <View style = {estilo.containerJogos} >
        
        <Text style = {{fontSize:20,fontWeight:'bold'}}> {info}</Text>
        
         <FlatList
          horizontal={false}
          numColumns={3}
          showsHorizontalScrollIndicator={false}
          data={dado}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            
            
            <Jogo
          
            imagem={item.imagem}
            titulo={item.nome}
            valor = {item.preço}
          />
          
            
          )}
        /> 
      </View>
    );
}

const estilo = StyleSheet.create({

    containerJogos:{
        
        borderRadius:8,
        marginTop:12,
        marginBottom:20,
        marginHorizontal:20,
        alignItems:'center',
        flex:1
        
       

      
        

    }
}

)