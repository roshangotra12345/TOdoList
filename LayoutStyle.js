import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 18,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  textStyle1: {
    color: '#006CFF',
    fontWeight: 'bold',
    marginRight: 200,

    // margin:14
  },
  textStyle2: {
    color: '#006CFF',
    fontWeight: 'bold',
    marginLeft: 10,

    // margin:14
  },
  modalText: {
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 200,
    width: 300,
    margin: 10,
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    borderColor: '#EBEFF5',
  },
  pop: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    marginRight: 200,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 23,
  },
});
