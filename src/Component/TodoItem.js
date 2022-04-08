import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import React, {useState, useEffect} from 'react';

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

const styles = StyleSheet.create({
  tasksWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tasks: {
    flex: 1,
    fontSize: 40,
    marginLeft: 15,
    fontWeight: '800',
    margin: 2,
  },
  Wrapper: {
    marginLeft: 40,
    marginRight: 20,
    marginTop: 10,
    height: 50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 30,
    color: '#006CFF',
    borderWidth: 2,
    borderColor: '#006CFF',
  },
  line: {
    borderBottomColor: '#DADADA',
    borderBottomWidth: 1,
    paddingLeft: 4,
    padding: 30,
    marginLeft: 55,
  },
  circle: {
    borderWidth: 2,
    height: 30,
    width: 30,
    borderRadius: 23,
    marginLeft: 15,
    position: 'absolute',
    top: 28,
    backgroundColor: '#fff',
    borderColor:"#DADADA"
    
  },
  circleTrue: {
    borderWidth: 2,
    height: 30,
    width: 30,
    borderRadius: 23,
    marginLeft: 15,
    position: 'absolute',
    top: 28,
    backgroundColor: '#006CFF',
  },
});
