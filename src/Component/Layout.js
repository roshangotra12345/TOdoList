import React, {useState} from 'react';
import {styles} from '../../LayoutStyle';
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

export default Layout;
