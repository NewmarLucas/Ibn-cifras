import AsyncStorage from '@react-native-async-storage/async-storage'

const removeMobileLinkSplited = (splitedLink) => {
  if (splitedLink?.includes('m.cifraclub.com.br')) {
    return splitedLink[splitedLink.indexOf('m.cifraclub.com.br')] = 'cifraclub.com.br'
  }

  return splitedLink
}

const removeMobileLinkString = (link) => {
  if (link?.includes('m.cifraclub.com.br')) {
    return link?.replace('m.cifraclub.com.br', 'cifraclub.com.br')
  }

  return link
}

export const parseLink = (link) => {
  const splitedLink = link?.split('/')
  const lastIndex = splitedLink.pop()

  if (lastIndex.includes('.html')) {
    const newSplitedLink = removeMobileLinkSplited(splitedLink)
    const newLink = [
      ...newSplitedLink,
      lastIndex.split('.')[0],
      'imprimir.html',
    ]
    return newLink.join('/')
  } else {
    const newLink = removeMobileLinkString(link)
    const lastCharacter = newLink.split('').pop()
    return lastCharacter === '/'
      ? newLink + 'imprimir.html'
      : newLink + '/imprimir.html'
  }
}

export const getAuthToken = async () => {
  const token = await AsyncStorage.getItem('authToken')
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }
  return config
}