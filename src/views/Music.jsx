import React from 'react'
import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { WebView } from 'react-native-webview'

const Music = ({ route }) => {
  // const { musicLink } = route.params

  return (
    <View style={styles.container}>
      <View style={styles.pdf}>
        <WebView
          scalesPageToFit={false}
          injectedJavaScript={`
            function injectRules(){
              const menu = document.getElementById("side-menu")
              menu.parentNode.removeChild(menu)
            }
            injectRules()
            `}
          userAgent='Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36'
          style={styles.webViewContainertainer}
          source={{
            uri: 'https://www.cifraclub.com.br/ministerio-morada/so-tu-s-santo/imprimir.html',
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#383838',
  },
  webViewContainer: {
    width: '100%',
    height: '100%',
  },
  pdf: {
    marginTop: Constants.statusBarHeight,
    width: '98%',
    height: '100%',
    backgroundColor: '#fff',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
})

export default Music
