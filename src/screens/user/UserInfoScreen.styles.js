import { StatusBar, StyleSheet } from 'react-native'
import { COLORS } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.text,
    marginTop: StatusBar.currentHeight
  },
  section:{
    height: '50%',
    alignContent: 'center',
  },
  header: {
    backgroundColor: '#F0F0F0',
    flexDirection: 'row',
    padding: 20,
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 1
  },
  profileInfo: {
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    backgroundColor: COLORS.white,
    color: COLORS.primary,
    padding: 10,
    borderRadius: 10,
    width: '90%',
    textAlign:'center'
    
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: COLORS.white,
    color: COLORS.primary,
    padding: 10,
    borderRadius: 10,
    width: '90%',
    textAlign: 'center'
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: '20%',
    color: COLORS.primary
  },
  button: {
    backgroundColor: COLORS.secondaty,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: '40%',
    marginHorizontal:30,
    alignItems: 'center'
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold'
  }
})