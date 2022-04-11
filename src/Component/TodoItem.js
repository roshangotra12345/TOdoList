import {
  Text,
  View,
  TouchableHighlight,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from '../../TudoItemStyle';
const TodoItem = ({item, handleCheck, handleModal, editModal, setSelected}) => {
  const [check, setCheck] = useState(false);

  const clickHandler = () => {
    handleCheck(item.id);
  };

  const handleEdit = () => {
    setSelected(true);
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

        <TouchableOpacity
          onPress={clickHandler}
          style={check ? styles.circleTrue : styles.circle}>
          <Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItem;
