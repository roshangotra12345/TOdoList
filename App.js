import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React , {useState} from 'react';
import Layout from './src/Component/Layout';
import TodoItem from './src/Component/TodoItem';

const App = () => {
  const [modalVisible , setModalVisible] = useState(false)
  const todo = [
    { title: 'Strating making', checked: true, id: 1 },
    { title: 'Pay for Rent', checked: true, id: 2 },
    { title: 'Bug a milk', checked: true, id: 3 },
    { title: 'Do not forget to pick up michael from school', checked: true, id: 4 },
    ]






  return (
    <View style={{flex: 1}}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.tasks}>Today</Text>
        <TouchableOpacity  onPress={() => setModalVisible(true)} style={[styles.Wrapper]}>
          <Text style={{fontSize: 60, color: '#006CFF', marginTop: -20}}>
            +
          </Text> 
        </TouchableOpacity>
      </View>
      {todo.map((item , i)=>{
      return <TodoItem item={item} key={i} />
      })}
      <Text>
        <Layout modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  tasksWrapper: {
    flexDirection: 'row',
    // justifyContent:"space-between",
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
    // paddingLeft:15,
    // paddingRight:15,

    // borderWidth:2,
    // borderRadius:30,
    // justifyContent:"center",
    // alignItems:"center",
    // textAlign:"center",
    // borderColor:"blue"

    height: 50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 30,
    // backgroundColor: 'blue',
    color: '#006CFF',
    borderWidth: 2,
    borderColor: '#006CFF',
  },
  line: {
    borderBottomColor: 'black',
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
    border: '#DADADA',
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
