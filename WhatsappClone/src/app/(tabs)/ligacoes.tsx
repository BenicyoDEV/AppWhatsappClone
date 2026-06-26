import { Image, ScrollView, StyleSheet, Text, View, Button, Pressable } from "react-native"

export default function Ligacoes(){
    return (
<ScrollView 
    style={styles.body}
>


<View style={styles.header}>
<View style={styles.botaoheader}>
           <Image 
                    source={require("./imagens/telefone.png")}
                    style={styles.imgbotaoheader}
        />

         <Text style={styles.textheader}>
        Ligar
        </Text>
</View>

<View style={styles.botaoheader}>
           <Image 
                    source={require("./imagens/calendario.png")}
                    style={styles.imgbotaoheader}
        />
         <Text style={styles.textheader}>
        Programar
        </Text>
</View>

<View style={styles.botaoheader}>
           <Image 
                    source={require("./imagens/teclado.png")}
                    style={styles.imgbotaoheader}
        />
         <Text style={styles.textheader}>
        Teclado
        </Text>
</View>

<View style={styles.botaoheader}>
           <Image 
                    source={require("./imagens/coracao.png")}
                    style={styles.imgbotaoheader}
        />
         <Text style={styles.textheader}>
        Favoritos
        </Text>
</View>
</View>

    <Text style={styles.texttitulo}>
        Recentes
        </Text>


<View style={styles.sessaoligacoes}>

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

                <Text style={styles.textultimamsg}>23 de junho 07:59</Text>
              
                </View>
        </View>
    </View>
  <View style={styles.contatoultimo}>

 <View style={styles.telefone}>
                <Image 
                    source={require("./imagens/telefone.png")}
                    style={styles.imgtelefone}
                />
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
                <Text style={styles.textnomecontato}>Vinícius</Text>
                </View>

                <View style={styles.ultimamsg}>

                <Text style={styles.textultimamsg}>21 de junho 03:33</Text>
              
                </View>
        </View>
    </View>
  <View style={styles.contatoultimo}>

 <View style={styles.telefone}>
                <Image 
                    source={require("./imagens/telefone.png")}
                    style={styles.imgtelefone}
                />
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
                <Text style={styles.textnomecontato}>Arthur</Text>
                </View>

                <View style={styles.ultimamsg}>

                <Text style={styles.textultimamsg}>12 de junho 12:02</Text>
              
                </View>
        </View>
    </View>
  <View style={styles.contatoultimo}>

 <View style={styles.telefone}>
                <Image 
                    source={require("./imagens/telefone.png")}
                    style={styles.imgtelefone}
                />
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
                <Text style={styles.textnomecontato}>Porto</Text>
                </View>

                <View style={styles.ultimamsg}>

                <Text style={styles.textultimamsg}>28 de maio 18:05</Text>
              
                </View>
        </View>
    </View>
  <View style={styles.contatoultimo}>

 <View style={styles.telefone}>
                <Image 
                    source={require("./imagens/telefone.png")}
                    style={styles.imgtelefone}
                />
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

                <Text style={styles.textultimamsg}>17 de maio 08:00</Text>
              
                </View>
        </View>
    </View>
  <View style={styles.contatoultimo}>

 <View style={styles.telefone}>
                <Image 
                    source={require("./imagens/telefone.png")}
                    style={styles.imgtelefone}
                />
 </View>
               
  </View>

</View>



</View>

</ScrollView>
    )
}

const styles = StyleSheet.create({

  body: {
    backgroundColor: "black",
    flex: 1,
},

texttitulo: {
    marginTop: 10,
    color: "white",
fontSize: 23,
fontWeight: "bold",
marginLeft: 10,
},

textheader: {
    marginTop: 10,
fontSize: 14,
color: "#808080",
alignItems: 'center',
},

botaoheader: {
alignItems: 'center',

},

imgbotaoheader: {
width: 40,
height: 34,

},


header: {
    marginTop: 25,
flexDirection: 'row',
width: "100%",
    height: 100,
    justifyContent: 'space-between',
    paddingHorizontal: 25,
},

imgheader:
{

},

sessaoligacoes:{

},

  caixaconversa:{
width: "100%",
height: 87,
justifyContent: 'space-between',
flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
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

imgtelefone:
{
width: 30,
height: 30,
},

ultimohorario:{
marginBottom: 8,
},

imagemfotoperfil:{
height: 50,
width: 50,
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

})
