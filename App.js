import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Layout from './src/Component/Layout';
import TodoItem from './src/Component/TodoItem';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [todo, setTodo] = useState([
    {title: 'Strating making', checked: false, id: 1},
    {title: 'Pay for Rent', checked: false, id: 2},
    {title: 'Bug a milk', checked: false, id: 3},
    {
      title: 'Do not forget to pick up michael from school',
      checked: false,
      id: 4,
    },
  ]);

  const handleDelete = () => {
    let numtodo = todo.filter(item => !item.checked);

    setTodo(numtodo);
  };

  const handleCheck = id => {
    let tempTo = [];
    todo.forEach(item => {
      if (id === item.id) {
        tempTo.push({
          title: item.title,
          checked: !item.checked,
          id: item.id,
        });
      } else {
        tempTo.push(item);
      }
    });
    setTodo(tempTo);
  };

  const handleModal = () => setModalVisible(!modalVisible);

  useEffect(() => {
    const deleteCheck = () => {
      let canBeDeleted = false;
      todo.forEach(item => {
        if (item.checked) {
          canBeDeleted = true;
        }
      });
      setIsDelete(canBeDeleted);
    };
    deleteCheck();
  }, [todo]);

  return (
    <View style={{flex: 1}}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.tasks}>Today</Text>
        {isDelete && (
          <TouchableOpacity onPress={handleDelete}>
            <Text style={styles.delete}>Delete</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={handleModal}>
          <Image style={styles.image} source={require('./Assests/Group.png')} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {todo?.map((item, i) => {
          return <TodoItem item={item} key={i} handleCheck={handleCheck} />;
        })}
      </ScrollView>

      <Text>
        <Layout
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setTodo={setTodo}
          todo={todo}
        />
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  tasksWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tasks: {
    flex: 1,
    fontSize: 35,
    marginLeft: 15,
    fontWeight: '800',
    margin: 2,
    color: '#252A31',
  },
  image: {
    marginTop: 18,
    marginRight: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 30,
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
  delete: {
    backgroundColor: '#006CFF',
    color: '#fff',
    marginTop: 16,
    borderRadius: 23,
    padding: 12,
    marginRight: -34,
  },
});
