<template>
<h1>Todo List</h1>
<body>
    <button class="addTask" @click="addTodo">Ajouter une tache</button>
    <div v-for="(todo, n) in todos" :key="todo.name">
        <button class="selectTask" @click="currentTodo = todo">{{ todo.title }}</button>
        <button class="removeTask" @click="removeTodo(n); currentTodo = null">X</button>
    </div>
    <div class="modifyTask" v-if="currentTodo">
      <input v-model="currentTodo.title">
      <textarea v-model="currentTodo.contents"></textarea>
      <button @click="currentTodo = null; saveTodos()">OK</button>
    </div>
</body>
</template>

<script>
export default {
    data () {
        return {
            todos: [],
            currentTodo: null,
            newTodo: null
        }
    }, mounted() {
        if (localStorage.getItem('todos')) {
            try {
                this.todos = JSON.parse(localStorage.getItem('todos'));
            } catch(e) {
                localStorage.removeItem('todos');
            }
        }
    }, methods: {
        addTodo() {
            this.newTodo = {title: "...", contents:""};
            this.todos.push(this.newTodo);
            this.currentTodo = this.newTodo;
            this.saveTodos();
        }, removeTodo(x) {
            this.todos.splice(x, 1);
            this.saveTodos();
        }, saveTodos() {
            const parsed = JSON.stringify(this.todos);
            localStorage.setItem('todos', parsed);
        }
    }
}
</script>

<style scoped>
body{
    float:left;
}
.addTask{
    height: 38px;
    width: 150px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: none;
    background-color: #81b29a;
    color: white;
    font-size: 15px;
    font-weight: bold;
    transition: background-color 0.5s ease;
}
.addTask:hover{
    cursor: pointer;
    background-color: #3d405b;
}
.modifyTask{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 174px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}
.modifyTask input{
    width: 300px;
    height: 20px;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #81b29a;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 15px;
    font-weight: bold;
}
.modifyTask textarea{
    width: 300px;
    height: 100px;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #81b29a;
    border: none;
    border-radius: 5px;
    color: white;
    resize: none;
}
.modifyTask button{
    width: 320px;
    height: 35px;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #3d405b;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 15px;
    font-weight: bold;
    transition: background-color 0.5s ease;
}
.modifyTask button:hover{
    background-color: #81b29a;
    cursor: pointer;
}
.selectTask{
    margin-bottom: 10px;
    height: 30px;
    border: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #3d405b;
    color: white;
    font-size: 15px;
    font-weight: bold;
}
.selectTask:hover{
    cursor: pointer;
}
.removeTask{
    border: 2px solid #81b29a;
    height: 30px;
    background-color: white;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: #3d405b;
    font-size: 15px;
    font-weight: bold;
}
.removeTask:hover{
    border: 2px solid #3d405b;
    cursor: pointer;
}
</style>