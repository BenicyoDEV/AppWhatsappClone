import { Image, ScrollView, StyleSheet, Text, View, Button, Pressable, TextInput } from "react-native"

export default function Index(){
    return (
<ScrollView 
    style={styles.body}
>

<TextInput
    style={styles.input}
    placeholder="Pesgunte à Meta AI ou pesquise"
    placeholderTextColor="#808080"
/>

<ScrollView 
    horizontal={true} 
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.sessaocimaContainer} // Estilo interno do conteúdo
    style={styles.sessaocima} // Estilo da caixa do Scroll
>
    <Pressable style={styles.caixapartecimaverde}>
        <Text style={styles.textcaixapartecimaverde}>Todas</Text>
    </Pressable>
    <Pressable style={styles.caixapartecima}>
        <Text style={styles.textcaixapartecima}>Não lidas</Text>
    </Pressable>
    <Pressable style={styles.caixapartecima}>
        <Text style={styles.textcaixapartecima}>Favoritos</Text>
    </Pressable>
    <Pressable style={styles.caixapartecima}>
        <Text style={styles.textcaixapartecima}>Grupos</Text>
    </Pressable>
    <Pressable style={styles.caixapartecima}>
        <Text style={styles.textcaixapartecima}>+</Text>
    </Pressable>
</ScrollView>


<View style={styles.arquivadas}>
    <View style={styles.arqesquerda}>
        <View style={styles.imgarquivadas}>
              <Image 
                    source={require("./imagens/arquivadas.png")}
                    style={styles.imagemarquivada}
        />
        </View>

        <Text style={styles.textarquivadas}>
        Arquivadas
        </Text>
    </View>

        <Text style={styles.numeroarquivadas}>
        1
        </Text>

       
</View>
        
<View style={styles.sessaoconversa}>

<View style={styles.caixaconversa}>
    <View style={styles.contatoesquerda}>
        <View style={styles.fotoperfil}>
           <Image 
                    source={require("./imagens/fotoPerfil.png")}
                    style={styles.fotoperfilimg}
                />
        </View>

        <View style={styles.contatomeio}>
                <View style={styles.nomecontato}>
                <Text style={styles.textnomecontato}>Vinícius</Text>
                </View>

                <View style={styles.ultimamsg}>
                <Text style={styles.textultimamsg}>Vai hj?</Text>
                </View>
        </View>
    </View>
  <View style={styles.contatoultimo}>
                <View style={styles.ultimohorario}>
                    <Text style={styles.ultimohorariotextoverde}>05:32</Text>
                </View>
                
               
                <View style={styles.bolinhaVerdeContainer}>
                    <Text style={styles.circuloverdetexto}>1</Text>
                </View>
            </View>

</View>

<View style={styles.caixaconversa}>
    <View style={styles.contatoesquerda}>
        <View style={styles.fotoperfil}>
           <Image 
                    source={require("./imagens/fotoPerfil.png")}
                    style={styles.fotoperfilimg}
                />
        </View>

        <View style={styles.contatomeio}>
                <View style={styles.nomecontato}>
                <Text style={styles.textnomecontato}>Arthur</Text>
                </View>

                <View style={styles.ultimamsg}>

                        <View style={styles.visto}>
                 <Image 
                    source={require("./imagens/visto.png")}
                    style={styles.vistoimg}
                />
                 </View>

                <Text style={styles.textultimamsg}>Obg</Text>
              

                </View>
        </View>
    </View>
  <View style={styles.contatoultimo}>
                <View style={styles.ultimohorario}>
                    <Text style={styles.ultimohorariotexto}>Ontem</Text>
                </View>
                
            </View>

</View>

<View style={styles.caixaconversa}>
    <View style={styles.contatoesquerda}>
        <View style={styles.fotoperfil}>
           <Image 
                    source={require("./imagens/fotoPerfil.png")}
                    style={styles.fotoperfilimg}
                />
        </View>

        <View style={styles.contatomeio}>
                <View style={styles.nomecontato}>
                <Text style={styles.textnomecontato}>Porto</Text>
                </View>

                <View style={styles.ultimamsg}>

                <Text style={styles.textultimamsg}>brawlhalla amanha ent</Text>
              

                </View>
        </View>
    </View>
  <View style={styles.contatoultimo}>
                <View style={styles.ultimohorario}>
                    <Text style={styles.ultimohorariotexto}>Ontem</Text>
                </View>
                
            </View>

</View>




</View>
         <View style={styles.rodape}>
        <Text style={styles.rodapetext1}>
        Suas mensagens pessoais são protegidas com a <Text style={styles.rodapetext2}>criptografia de ponta a ponta</Text>
        </Text>
        </View>

</ScrollView>


    )
}

const styles = StyleSheet.create({

  body: {
    backgroundColor: "black",
    flex: 1,
},

input: {
    marginTop: 18,
    width: "95%",
    height: 40,

    backgroundColor: "#202020",
    color: "white",

    borderWidth: 1,
    borderColor: "#404040",
    borderRadius: 25,

    paddingHorizontal: 6,
    fontSize: 16,

    alignSelf: "center",
},

sessaocima:{
    marginTop: 5,
    marginBottom: 5,
    width: "100%",
    height: 50, // Altura total da barra de navegação
  },

   sessaocimaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 11,
    gap: 8, // Cria o espaçamento automático perfeito entre os botões
  },

caixapartecimaverde:{
        paddingLeft: 8,
    paddingRight: 8,
    marginTop: 10,
marginBottom:10,
    alignItems: "center",
    justifyContent: "center",
height: 30,
borderRadius: 15,
borderWidth: 1,
borderColor: "#0A332C",
backgroundColor: "#0A332C",
},

textcaixapartecimaverde:{
color: "#92E292",
fontSize: 17,
},

caixapartecima:{
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 10,
marginBottom:10,
justifyContent: "center",
    alignItems: "center",
height: 30,
borderRadius: 15,
borderWidth: 1,
borderColor: "#808080",
},

textcaixapartecima:{
color: "#808080",
fontSize: 17,
},


    arquivadas: {
        marginRight:10,
        padding: 10,
        height: 42,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },

imgarquivadas: {
marginRight: 20,
},

arqesquerda: {
marginRight: 'auto',
flexDirection: "row",
alignItems: 'center',
},



  textarquivadas: {
flex: 1,
justifyContent: "left",
color: "#808080",
fontSize: 18,
justifyContent: 'center',
},


  numeroarquivadas: {
color: "#808080",
fontSize: 18,
},



 imagemarquivada: {
height: 37,
width: 37,

},


  sessaoconversa: {

},


  caixaconversa:{
width: "100%",
height: 87,
justifyContent: 'space-between',
flexDirection: 'row',
    alignItems: 'center',
},

  fotoperfilimg:{

height: 60,
width: 60,
},

fotoperfil:{
marginLeft: 8
},

contatoesquerda:{
flexDirection: 'row',
},

  contatomeio:{
justifyContent: 'space-between',

marginLeft: 10,
},

  nomecontato:{

},

  textnomecontato:{
  color: "white",
fontWeight: "bold",
fontSize: 18,
},



imagemvisto: {
height: 50,
width: 50,
},

  textultimamsg: {
  fontSize: 18,
  color: "#808080",
  marginLeft: 1,
  marginBottom: 3,
},

  contatoultimo:{
  justifyContent: 'space-between',
marginLeft: 10,
flexDirection: 'column',
alignItems: 'flex-end',
marginRight: 10,
},
 

ultimohorario:{
marginBottom: 8,
},

ultimohorariotexto:{
  fontSize: 18,
  color: "#808080",
  marginBottom: 10,
},


ultimohorariotextoverde:{
     fontSize: 18,
  color: "#1a9248",
},

imagemcirculoverde:{
height: 32,
width: 32,
},

ultimamsg: {
flexDirection: "row",
},

visto: {

},

vistoimg: {
height: 17,
width: 25,
},

 circuloverdetexto: {
    marginTop: 8,
    backgroundColor: "#1a9248",  
    color: "black",               // Cor do número dentro da bolinha
    fontSize: 12,                 
    fontWeight: "bold",
    textAlign: "center",          // Centraliza o número horizontalmente
    textAlignVertical: "center",  // Centraliza o número verticalmente (apenas Android)
    
    // Configurações para desenhar o círculo perfeito:
    width: 22,
    height: 22,
    borderRadius: 11,             // Metade do width/height para arredondar tudo
    lineHeight: 22,               // Ajuda a centralizar o texto verticalmente no iOS
    overflow: "hidden",           // Obriga o iOS a respeitar o borderRadius no Text
  },

rodape: {

marginTop: 7,
margin: 8,
},

rodapetext1: {
    textAlign: 'center',
alignSelf: "center",
  fontSize: 15,
  color: "#808080",
},

rodapetext2: {

 fontSize: 15,
  color: "#1a9248",
  fontWeight: "bold",
},
 


})
