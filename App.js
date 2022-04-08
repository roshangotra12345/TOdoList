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
import {styles} from './Appstyle';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [edit, setedit] = useState({});
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

  const editModal = Item => {
    setedit(Item);
    handleModal()
  };

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
          return (
            <TodoItem
              item={item}
              key={i}
              handleCheck={handleCheck}
              todo={todo}
              editModal={editModal}
              handleModal={handleModal}
              />
              );
            })}
      </ScrollView>

      <Text>
        <Layout
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setTodo={setTodo}
          todo={todo}
          edit={edit}
        />
      </Text>
    </View>
  );
};

export default App;
