import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from '../../TudoItemStyle';
const TodoItem = ({item, handleCheck}) => {
  const [check, setCheck] = useState(false);

  const clickHandler = () => {
    handleCheck(item.id);
  };

  useEffect(() => {
    setCheck(item.checked);
  }, [item.checked]);

  return (
    <View>
      <View style={styles.items}>
        <Text style={styles.line}>{item.title}</Text>

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
