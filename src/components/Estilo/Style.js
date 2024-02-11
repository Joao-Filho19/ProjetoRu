import { StyleSheet } from "react-native"

export default StyleSheet.create({
    progressBarContainer: {
        backgroundColor: '#e0e0e0', // Cor base da barra de progresso
        marginTop: 5,
    },
    progressBar: {
        height: '100%', 
        backgroundColor: '#37A433', // Cor da barra de progresso
        borderRadius: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor: '#ffffff',
        paddingHorizontal: 18,
        paddingHorizontal:30,
    },
    title:{
        fontSize:34,
        marginTop:40,
        marginBottom: 30,
        color:'#121212',
        fontWeight: 'bold'
    },
    subtitle:{
        fontSize:14,
        marginTop:30,
        marginBottom: 30,
        color:'#827F7F',
    },
    label:{
        fontFamily: "Inter",
        fontSize:19,
        fontWeight: 'bold',
    },
    input:{
        width: '100%',
        height:55,
        backgroundColor: '#ffffff',
        paddingHorizontal: 8,
        marginTop: 9,
        marginBottom: 18,
        borderRadius: 8,
        color: '#121212',
        elevation: 2,

    },
    button:{
        alignSelf: 'center',
        width: '50%',
        height: 50,
        backgroundColor: '#37A433',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        marginBottom:-90,
    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    labelError:{
        alignSelf: 'flex-start',
        color: '#ff375b',
        marginBottom: 8,
    }
})