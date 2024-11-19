<script>
  export let todos 
  export let todo
  export let successTodoCount
  export let todoCount

  let isEdit = false
  let title = ''
	
  const onEdit = () => {
    isEdit = true
    title = todo.title
  }

  const offEdit = () => {
    isEdit = false
  }
  
  const updateTodo = () => {
    todo.title = title
    offEdit()
  }

  const successTodo = () => {
    localStorage.removeItem('success')
    localStorage.setItem('success', `${Number(successTodoCount)+1}`)
    successTodoCount = localStorage.getItem('success')
    deleteTodo()
  }

  const deleteTodo = () => {
    todos = todos.filter((value) => value.id != todo.id)
    console.log(todos)
    todos = todos;
    localStorage.removeItem(`${todo.id}`)
    todoCount -= 1
  }
</script>

{#if isEdit}
  <div class="todo-print">
    <input bind:value={title} 
      on:keydown={(e) => {e.key === 'Enter' && updateTodo()}}
      type="text"
      class="edit-input"
      />
    <div class="todo-control">
    <button on:click={updateTodo}>
      OK
    </button>
    <button on:click={offEdit}>
      Cancel
    </button>
    </div>
  </div>
{:else}
  <div class="todo-print">
    {todo.title}
    <div class="todo-footer">
      {#if todo.time}
        <span class="time">{todo.time}</span>
      {:else}
        <span class="time">{todo.tag}</span>
      {/if}
  
      <div class="todo-control">
        <button on:click={onEdit}>
          수정
        </button>
        <button on:click={successTodo}>
          완료
        </button>
        <button on:click={deleteTodo}>
          삭제
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  .edit-input{
    outline: none;
    background-color: #fff;
    color: rgb(85, 85, 85);
    background-color: white;
    border: none;
    border-radius: 1px;
    font-size: 2rem;
    padding: 1px 0;
  }

  .todo-print{
    display: flex;
    min-width: 260px;
    flex-direction: column;
    justify-content: space-between;
    padding: 6% 8%;
    font-size: 2rem;
    background-color: white;
    border: 1px solid rgb(226, 232, 240);
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
    border-radius: 12px;
  }

  .todo-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .time{
    font-size: 1.6rem;
  }
</style>