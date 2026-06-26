import { Image, ScrollView, StyleSheet, Text, View, Button, Pressable } from "react-native"

export default function Comunidades(){
    return (
<ScrollView 
    style={styles.body}
>


<View>
<View style={styles.fotocomunidades}>
           <Image 
                    source={require("./imagens/comunidades.png")}
                    style={styles.imgcomunidades}
        />
</View>
</View>



    <View style={styles.principal}>
        <Text style={styles.textprincipal}>
        Conecte-se com outras pessoas com as comunidades
        </Text>
    </View>

       <View style={styles.subprincipal}>
        <Text style={styles.textsubprincipal}>
        As comunidades permitem reunir pessoas em grupos de assuntos específicos
        e receber avisos de admins com facilidade. As comunidades dos quais você participa serão
        exibidas nesta tela.
        </Text>
    </View>

        <View style={styles.criarcomunidade}>
<Text style={styles.textcriarcomunidade}>
    Criar comunidade
</Text>
</View>

       <View style={styles.rodape}>
        <Text style={styles.textrodape}>
        Toque no ícone

        na aba Conversas para criar uma comunidade.
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

fotocomunidades:{
marginTop: 50,
justifyContent: "center",
flexDirection: 'row',
},

imgcomunidades: {
width: 180,
height: 180,
},

criarcomunidade:{
    backgroundColor: "#1a9248",
    borderWidth: 1,
borderColor: "#1a9248",
borderRadius: 25,
width: "94%",
justifyContent: "center",
alignItems:"center",
flexDirection: 'row',
paddingVertical: 7,
alignItems: "center",
height: 37,
alignSelf: 'center',
marginHorizontal: 40,
marginTop: 30,
},

textcriarcomunidade: {
fontSize: 18,
color: "black",
},

principal: {
paddingHorizontal: 10,
},

textprincipal: {
    marginTop: 10,
    color: "white",
fontSize: 23,
fontWeight: "bold",
    textAlign: 'center',
alignSelf: "center",
},

subprincipal: {
    marginTop: 8,
 paddingHorizontal: 10,
},

textsubprincipal: {
   color: "white",
fontSize: 17,
    textAlign: 'center',
alignSelf: "center",
},

rodape: {
marginTop: 30,
paddingHorizontal: 10,
},

textrodape: {
fontSize: 16,
textAlign: 'center',
alignSelf: "center",
color: "#808080",
},



})
