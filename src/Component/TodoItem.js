import {Text, View, TouchableHighlight, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from '../../TudoItemStyle';
const TodoItem = ({item, handleCheck, handleModal, editModal}) => {
  const [check, setCheck] = useState(false);

  const clickHandler = () => {
    handleCheck(item.id);
  };

  const handleEdit = () => {
    editModal(item);
  };
  
  
  useEffect(() => {
    setCheck(item.checked);
  }, [item.checked]);

  return (
    <View>
      <View style={styles.items}>
        <Pressable onPress={handleEdit}>
          <Text style={styles.line}>{item.title}</Text>
        </Pressable>

        <TouchableHighlight
          onPress={clickHandler}
          style={check ? styles.circleTrue : styles.circle}>
          <Text></Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default TodoItem;
