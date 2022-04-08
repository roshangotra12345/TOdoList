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
  const [text, setChangeText] = React.useState('');

  const handleModal = () => setModalVisible(!modalVisible);

  const handlechange = () => {
    let temp = todo;

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
            <Text style={styles.title}>Add Todo</Text>
            <TextInput
              style={styles.input}
              onChangeText={setChangeText}
              value={text}
              placeholder=""
            />
            <View style={styles.pop}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={handleModal}>
                <Text style={styles.textStyle1}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={handlechange}>
                <Text style={styles.textStyle2}>Done</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable></Pressable>
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

export default Layout;
