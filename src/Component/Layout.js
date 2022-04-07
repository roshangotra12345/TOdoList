import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from 'react-native';

const Layout = ({modalVisible, setModalVisible, setTodo, todo}) => {
  // const [number, onChangeNumber] = React.useState(null);
  const [text, setChangeText] = React.useState('');

  const handleModal = () => setModalVisible(!modalVisible);

  const handlechange = () => {
    let temp = todo;

    // modify temp to add new todo
    if (text) {
      let newTodo = {
        id: todo[todo.length - 1].id + 1,
        checked: false,
        title: text,
      };
      temp.push(newTodo);
      setTodo(temp);
      setChangeText('');
    
    }

    handleModal();
  };

  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}></Text>
            <TextInput
              style={styles.input}
              onChangeText={setChangeText}
              value={text}
              placeholder="Enter Your Text"

            
            />
            <View style={styles.pop}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={handleModal}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={handlechange}>
                <Text style={styles.textStyle}>Done</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
      // style={[styles.button, styles.buttonOpen]}
      // onPress={() => setModalVisible(true)}
      >
        {/* <Text style={styles.textStyle}>Add Note</Text> */}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
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
  button: {
    borderRadius: 20,
    // padding: 10,
    elevation: 2,
    margin: 40,
  },
  buttonOpen: {
    // backgroundColor: "#F194FF",
  },
  buttonClose: {
    // backgroundColor: "#2196F3",
  },
  textStyle: {
    color: '#2196F3',
    fontWeight: 'bold',
    textAlign: 'center',
    // margin:14
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 250,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  pop: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Layout;
