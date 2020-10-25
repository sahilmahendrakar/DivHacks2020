import { Platform } from 'react-native';

export default {
    primaryColor: 'darkslategray', // or 73db8d
    secondaryColor: '#fb5b5a',
    applicationName: 'l e a v e s',

    ...Platform.select({
        ios: {
          mainFont: 'Avenir'
        },
        android: {
          mainFont: 'serif'
        },
        default: {
          // other platforms, web for example
          mainFont: 'serif'
        }
      })
}