
import { StyleSheet, Text, View, FlatList } from "react-native";
import Botao from "../../components/botoes";
import Cabecalho from "../../components/cabecalho";
import Jogo from "../../components/jogos";
import Lancamento from"../../components/lancamentos";
import Dados from "../../../dados/index";
import DadosLancamento from "../../../dados/breve";

export default function App() {
  return (
    <View style={{backgroundColor:'#D3D3D3', flex:1}}>
      <Cabecalho></Cabecalho>

      <View>
        <Botao
          logo="logo-android"
          cor="black"
          texto="APPS"
          logo2="game-controller"
          cor2="purple"
          texto2="JOGOS"
        />

        <Botao
          logo="videocam-sharp"
          cor="green"
          texto="FILMES"
          logo2="md-musical-notes"
          cor2="orange"
          texto2="MUSICAS"
        />

        <Botao
          logo="book"
          cor="blue"
          texto="teste"
          logo2="newspaper-outline"
          cor2="red"
          texto2="NOTICIAS"
        />

        <Text style={{ fontSize: 20, marginTop: 50 }}> Jogos em destaque </Text>

        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={Dados}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              
              <Jogo
                titulo={item.nome}
                imagem={item.imagem}
                valor={item.preço}
              />
            )}
          />
        </View>
        <Text style={{fontSize:20,marginTop:50}}> Próximos lançamentos  </Text>
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={DadosLancamento}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Lancamento
                titulo={item.nome}
                imagem={item.imagem}
                data={item.data}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}
