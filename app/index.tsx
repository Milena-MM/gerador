import{View, Text, StyleSheet, Image} from 'react-native'


export default function App (){
    return (
   <View style={styles.container}>
<Image
source={require('./assets/images/logo.png')}
/>
   </View>
    )
}

const styles= StyleSheet.create({
  container:{ 
    flex: 1,
  backgroundColor:"#F3F3FF",
  justifyContent: 'center',
  alignItems:'center'
}
})