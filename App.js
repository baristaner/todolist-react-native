import React,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,ScrollView} from 'react-native';
import Task from './components/task';

export default function App() {
  const [task,setTask] = useState();
  const [taskItems,setTaskItems] = useState([]);

  const handleAddTask = () => {
    console.log("Added New Task :",task) /*Debug In Console*/
    Keyboard.dismiss();
    setTaskItems([...taskItems,task])
    setTask(null);
  }

  const completeTask = (index) => {
    console.log("Task Deleted") /*Debug In Console*/
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }


  return (
    <View style={styles.container}>
      {/*Bugunun Yapilicaklari*/}
      <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Yapılıcaklar Listesi</Text>
      </View>

      <ScrollView style={styles.items}>
      {
        taskItems.map((item,index) =>{
          return (
            <TouchableOpacity style={styles.itemscolor} key={index} onPress={() => completeTask(index)}>
              <Task key={index} text={item} />
            </TouchableOpacity>
          )
        })
      }
      </ScrollView>

    {/*Yapilicaklari yaz*/}
    
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.writeTaskWrapper}>
      <TextInput style={styles.input} placeholder={'Yapılıcak Bir Şey Gir'} value={task} onChangeText={text => setTask(text)}/>
      <TouchableOpacity onPress={() => handleAddTask()}>
      <View style={styles.addWrapper}>
      <Text style={styles.AddText}>+</Text>

      </View>
    </TouchableOpacity>
    </KeyboardAvoidingView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop:-30,
  },
  tasksWrapper : {
    paddingTop: 80,
    alignItems:'center',
    backgroundColor: '#E8E8E8',

  },
  sectionTitle : {
    color: "black",
    fontSize:20,
    fontWeight:'bold',
    
  },
  items : {
    marginTop: 30,
    marginBottom:120,
    paddingHorizontal: 20,
    
    
  },
  writeTaskWrapper : {
    position: 'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    
  },
  input : {
    marginBottom:-30,
    paddingVertical : 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFFF',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    width:250,
  },
  addWrapper : {
    marginBottom:-30,
    width:60,
    height:60,
    backgroundColor:'#FFFF',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
    
  },
  AddText : {},
});
