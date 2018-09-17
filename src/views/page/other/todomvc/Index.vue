<template>
  <div class="main">
    <section id="todoapp">
      <header class="header">
        <h1 style="top: -80px">todos</h1>
        <input id="new-todo" placeholder="输入代办适宜" autofocus @keyup.enter="create()" v-model="newTodo">
      </header>
      <section id="main" v-show="todos.length > 0" v-cloak>
        <input id="toggle-all" type="checkbox" v-model="allStatus">
        <ul id="todo-list">
          <li class="todo" v-for="todo in filteredTodos" :class="{completed: todo.completed, editing: todo == editingTodo}" :key="todo.id">
            <div class="view">
              <input class="toggle" type="checkbox" v-model="todo.completed">
              <label @dblclick="edit(todo)">{{todo.title}}</label>
              <button class="destroy" @click="remove(todo.id)"></button>
            </div>
            <input class="edit" type="text" v-model="todo.title" v-todo-focus="todo == editingTodo" @blur="update(todo)" @keyup.enter="update(todo)" @keyup.esc="cancelEdit(todo)">
          </li>
        </ul>
      </section>
      <footer id="footer" v-show="todos.length > 0" v-cloak>
        <span id="todo-count">
            <strong>{{activeItemNum}}</strong> 条未完成
          </span>
          <ul id="filters">
            <li><a href="#/all" :class="{selected: visibility == 'all'}">所有</a></li>
            <li><a href="#/active" :class="{selected: visibility == 'active'}">未完成</a></li>
            <li><a href="#/completed" :class="{selected: visibility == 'completed'}">已完成</a></li>
          </ul>
          <button id="clear-completed" @click="removeAllCompleted" v-show="completedItemNum > 0">清空已完成</button>
      </footer>
    </section>
    <footer id="info">
      <p>双击编辑待办适宜</p>
      <p>作者： <a href="https://github.com/iamjoel/">Joel</a></p>
    </footer>
  </div>
</template>

<script src="./main.js"></script>
<style src="todomvc-app-css/index.css"></style>
<style scoped></style>