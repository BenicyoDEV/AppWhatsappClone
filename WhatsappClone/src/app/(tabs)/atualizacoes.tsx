import { Image, ScrollView, StyleSheet, Text, View, Pressable } from "react-native"

export default function Atualizacoes(){
    return (
<ScrollView
    style={styles.body}
    contentContainerStyle={{ paddingBottom: 300 }}
>

        
        <View style={styles.titulo}>
            <Text style={styles.titulotexto}>Status</Text>
        </View>


        <ScrollView 
    horizontal={true} 
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.sessaostatusContainer} // Estilo interno do conteúdo
    style={styles.sessaostatus} // Estilo da caixa do Scroll
>
              <View style={styles.meuquadradostatus}>
                  <View style={styles.containerFotoStatus}>
    <Image
        source={require("./imagens/fotoPerfil.png")}
        style={styles.meuimagemfotoperfil}
    />

    <View style={styles.bolinhaAdicionar}>
        <Text style={styles.textoMais}>+</Text>
    </View>
</View>
                <Text style={styles.meunomecontatoquadradostatus}>Adicionar status</Text>
            </View>

            <View style={styles.quadradostatus1}>
                   <Image 
                            source={require("./imagens/fotoPerfil.png")}
                            style={styles.imagemfotoperfilstatus}
                        />
                <Text style={styles.nomecontatoquadradostatus}>Vinícius</Text>
            </View>

                <View style={styles.quadradostatus2}>
                   <Image 
                            source={require("./imagens/fotoPerfil.png")}
                            style={styles.imagemfotoperfil}
                        />
                <Text style={styles.nomecontatoquadradostatus}>Arthur</Text>
            </View>

                <View style={styles.quadradostatus3}>
                   <Image 
                            source={require("./imagens/fotoPerfil.png")}
                            style={styles.imagemfotoperfil}
                        />
                <Text style={styles.nomecontatoquadradostatus}>Porto</Text>
            </View>

                <View style={styles.quadradostatus4}>
                   <Image 
                            source={require("./imagens/fotoPerfil.png")}
                            style={styles.imagemfotoperfil}
                        />
                <Text style={styles.nomecontatoquadradostatus}>Victor</Text>
            </View>


        </ScrollView>


<View style={styles.sessaocandes}>
            <View style={styles.titulo}>
                      <Text style={styles.titulotexto}>Canais</Text>
            </View>


 
            <Pressable style={styles.botaodescobrir}>
            <Text style={styles.titulotexto2}>Descobrir</Text>
            </Pressable>
 </View>

<View style={styles.sessaoconversa}>

<View style={styles.caixaconversa}>
    <View style={styles.contatoesquerda}>
        <View style={styles.fotoperfil}>
           <Image 
                    source={require("./imagens/fotoPerfil.png")}
                    style={styles.imagemfotoperfil}
                />
        </View>

        <View style={styles.contatomeio}>
                <View style={styles.nomecontato}>
                <Text style={styles.textnomecontato}>South América Memes</Text>
                </View>

                <View style={styles.ultimamsg}>
                <Text style={styles.textultimamsg}>Olha esse cara</Text>
                </View>
        </View>
    </View>
  <View style={styles.contatoultimo}>
                <View style={styles.ultimohorario}>
                    <Text style={styles.ultimohorariotextoverde}>02:41</Text>
                </View>
                
               
                <View style={styles.bolinhaVerdeContainer}>
                    <Text style={styles.circuloverdetexto}>39</Text>
                </View>
            </View>

</View>




</View>
      
<View style={styles.titulo}>
<Text style={styles.subtitulotexto}>Encontrar canais para seguir</Text>
</View>

<View style={styles.sessaoconversa}>

<View style={styles.caixaconversa}>
    <View style={styles.contatoesquerda}>
        <View style={styles.fotoperfil}>
           <Image 
                    source={require("./imagens/fotoPerfil.png")}
                    style={styles.imagemfotoperfil}
                />
        </View>

        <View style={styles.contatomeio}>
                <View style={styles.nomecontato}>
                <Text style={styles.textnomecontato}>STICKER</Text>
                </View>

                <View style={styles.ultimamsg}>

                <Text style={styles.textultimamsg}>36 mil seguidores</Text>
              

                </View>
        </View>
    </View>
  <View style={styles.contatoultimo2}>

 <Pressable style={styles.botaoseguir}>
            <Text style={styles.textoseguir}>Seguir</Text>
 </Pressable>

                <View style={styles.xis}>
                    <Text style={styles.textoxis}>×</Text>
                </View>
                
            </View>

</View>

<View style={styles.caixaconversa}>
    <View style={styles.contatoesquerda}>
        <View style={styles.fotoperfil}>
           <Image 
                    source={require("./imagens/fotoPerfil.png")}
                    style={styles.imagemfotoperfil}
                />
        </View>

        <View style={styles.contatomeio}>
                <View style={styles.nomecontato}>
                <Text style={styles.textnomecontato}>ESPN Brasil</Text>
                </View>

                <View style={styles.ultimamsg}>

                <Text style={styles.textultimamsg}>2,4 M seguidores</Text>
              

                </View>
        </View>
    </View>
  <View style={styles.contatoultimo2}>

 <Pressable style={styles.botaoseguir}>
            <Text style={styles.textoseguir}>Seguir</Text>
 </Pressable>

                <View style={styles.xis}>
                    <Text style={styles.textoxis}>×</Text>
                </View>
                
            </View>

</View>

<View style={styles.caixaconversa}>
    <View style={styles.contatoesquerda}>
        <View style={styles.fotoperfil}>
           <Image 
                    source={require("./imagens/fotoPerfil.png")}
                    style={styles.imagemfotoperfil}
                />
        </View>

        <View style={styles.contatomeio}>
                <View style={styles.nomecontato}>
                <Text style={styles.textnomecontato}>Atacadão SA</Text>
                </View>

                <View style={styles.ultimamsg}>

                <Text style={styles.textultimamsg}>947 mil seguidores</Text>
              

                </View>
        </View>
    </View>
  <View style={styles.contatoultimo2}>

 <Pressable style={styles.botaoseguir}>
            <Text style={styles.textoseguir}>Seguir</Text>
 </Pressable>

                <View style={styles.xis}>
                    <Text style={styles.textoxis}>×</Text>
                </View>
                
            </View>

</View>




</View>

<View style={styles.mais}>
<Image 
source={require("./imagens/mais.png")}
style={styles.maisimg}
/>
<Text style={styles.textmais}>Mais</Text>
</View>

<View style={styles.criarcanal}>
<Text style={styles.textcriarcanal}>
    <Text style={styles.txtultimo}>
    + </Text> Criar Canal
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

titulo: {
marginLeft: 10,
marginTop: 13,
},

titulotexto:{
color: "white",
fontWeight: "bold",
fontSize: 23,
},

sessaostatus:{
    marginTop: 4,
flexDirection: 'row',

marginHorizontal: 7,
height: 190,
},

   sessaostatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 11,
    gap: 8, // Cria o espaçamento automático perfeito entre os botões
  },

meuquadradostatus:{
    borderWidth: 1,
borderColor: "#808080",
height: 180,
width: 90,
borderRadius: 15,
marginHorizontal: 3,
justifyContent: "space-between",
padding: 7,
alignItems: 'center',
paddingTop: 28,
},

meuimagemfotoperfil:{
height: 50,
width: 50,
},

meunomecontatoquadradostatus:{
    color: "white",
fontSize: 15,
fontWeight: "bold",
    textAlign: 'center',
alignSelf: "center",
},

imagemfotoperfilstatus:{
height: 50,
width: 50,
},

quadradostatus1:{
height: 180,
width: 90,
backgroundColor: "#7D5FFF",
borderRadius: 15,
marginHorizontal: 2,
justifyContent: "space-between",
padding: 7,
},

quadradostatus2:{
height: 180,
width: 90,
backgroundColor: "#FF8A3D",
borderRadius: 15,
marginHorizontal: 2,
justifyContent: "space-between",
padding: 7,
},

quadradostatus3:{
height: 180,
width: 90,
backgroundColor: "#2EC4B6",
borderRadius: 15,
marginHorizontal: 2,
justifyContent: "space-between",
padding: 7,
},

quadradostatus4:{
height: 180,
width: 90,
backgroundColor: "#E71D36",
borderRadius: 15,
marginHorizontal: 2,
justifyContent: "space-between",
padding: 7,
},

imagemfotoperfil:{
height: 50,
width: 50,
},

nomecontatoquadradostatus:{
color: "white",
fontSize: 15,
fontWeight: "bold",
},

botaodescobrir:{
borderRadius: 16,
borderWidth: 1,
borderColor: "#404040",
backgroundColor: "#404040",
paddingVertical: 6, // melhor controle
alignItems: 'center',
justifyContent: 'center',
marginRight: 10,
paddingHorizontal: 8,
paddingVertical:3,
marginTop: 8,
},

botaoseguir:{
borderRadius: 15,
borderWidth: 1,
borderColor: "#0A332C",
backgroundColor: "#0A332C",
paddingHorizontal: 12,
paddingVertical:3,
},

textoseguir:{
color: "#92E292",
fontSize: 17,
},



imagemvisto:{
height: 50,
width: 50,
},

titulotexto2:{
fontSize: 17,
color: "white"
},

sessaocandes: {
    marginTop: 10,
    paddingHorizontal: 5,
flexDirection: "row",
justifyContent: 'space-between',
},


subtitulotexto:{
fontSize: 18,
color: "#808080"
},

 sessaoconversa: {

},


  caixaconversa:{
width: "100%",
height: 87,
justifyContent: 'space-between',
flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
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
alignItems: 'flex-end',
marginRight: 10,
},
 
   contatoultimo2:{
  justifyContent: 'space-between',
marginLeft: 10,
alignItems: 'flex-end',
marginRight: 10,
flexDirection: 'row',
paddingRight: 5,
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

containerFotoStatus: {
    position: "relative",
},

bolinhaAdicionar: {
    position: "absolute",

    // canto inferior direito
    bottom: -2,
    right: -2,

    width: 22,
    height: 22,
    borderRadius: 11,

    backgroundColor: "#1a9248",

    justifyContent: "center",
    alignItems: "center",

    borderWidth: 2,
    borderColor: "black",
    color: "black",
},

textoMais: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 18,
},

xis:{
marginLeft: 9,
},

textoxis:{
  color: "#808080",
  fontSize: 23,
},

xisimg:{
height: 50,
width: 50,
},

seguir:{

},

textseguir:{

},

mais:{
    borderWidth: 1,
borderColor: "#808080",
borderRadius: 25,
width: "94%",
justifyContent: "center",
alignItems:"center",
flexDirection: 'row',
paddingVertical: 7,
gap: 12,
alignItems: "center",
height: 37,
alignSelf: 'center',
},

maisimg:{
height: 23,
width: 23,
},



textmais:{
fontSize: 18,
color: "#1a9248",
fontWeight: "bold",
},

criarcanal:{
    marginTop: 9,
    borderWidth: 1,
borderColor: "#808080",
borderRadius: 25,
width: "94%",
justifyContent: "center",
alignItems:"center",
flexDirection: 'row',
gap: 12,
alignItems: "center",
height: 37,
alignSelf: 'center',
},



textcriarcanal:{
fontSize: 18,
color: "#1a9248",
fontWeight: "bold",
},

txtultimo:{
fontSize: 23,
},







    


})
