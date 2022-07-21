import AsyncStorage from '@react-native-async-storage/async-storage'

export const parseLink = (link) => {
  const splitedLink = link?.split('/')
  const lastIndex = splitedLink.pop()

  if (lastIndex.includes('.html')) {
    const newLink = [
      ...splitedLink,
      lastIndex.split('.')[0],
      'imprimir.html',
    ]
    return newLink.join('/')
  } else {
    const lastCharacter = link.split('').pop()
    return lastCharacter === '/'
      ? link + 'imprimir.html'
      : link + '/imprimir.html'
  }
}

export const getAuthToken = async () => {
  const token = await AsyncStorage.getItem('authToken')
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }
  return config
}