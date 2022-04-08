import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
    marginTop: 18,
    borderRadius: 10,
    padding: 5,
    marginRight: 23,
  },
});
