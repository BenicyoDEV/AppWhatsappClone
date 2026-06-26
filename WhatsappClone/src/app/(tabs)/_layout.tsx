import { Tabs } from "expo-router"
import { Image } from "react-native"

export default function Layout() {
    return (
          <Tabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: "black", // topo
                },
                headerTintColor: "#fff", // cor do texto do topo

                tabBarStyle: {
                    backgroundColor: "black", // fundo da barra de baixo
                },
                tabBarActiveTintColor: "#0A332C", // aba ativa
                tabBarInactiveTintColor: "#888", // abas inativas
            }}
        >
                  <Tabs.Screen 
                name="index" 
                options={{
                     title: "WhattsApp",
                    tabBarIcon: () => (
                        <Image
                            source={require("./imagens/mensagem.png")}
                            style={{ width: 24, height: 24 }}
                        />
                    )
                }} 
            />

              <Tabs.Screen 
                name="atualizacoes" 
                options={{
                     title: "Atualizações",
                    tabBarIcon: () => (
                       <Image
                            source={require("./imagens/status.png")}
                            style={{ width: 24, height: 24 }}
                        />
                    )
                }} 
            />

              <Tabs.Screen 
                name="comunidades" 
                options={{
                     title: "Comunidades",
                   tabBarIcon: () => (
                        <Image
                            source={require("./imagens/comunidade.png")}
                          style={{ width: 24, height: 24 }}
                       />
                   )
                }} 
            />

              <Tabs.Screen 
                name="ligacoes" 
                options={{
                     title: "Ligações",
                   tabBarIcon: () => (
                        <Image
                           source={require("./imagens/telefone.png")}
                           style={{ width: 24, height: 24 }}
                       />
                  )
                }} 
            />
            

            
        </Tabs>
    )
}
