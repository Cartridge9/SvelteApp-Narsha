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
    <button on:click={updateTodo} class="todo-control-button">
      수정 완료
    </button>
    <button on:click={offEdit} class="todo-control-button">
      취소
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
        <button on:click={onEdit} class="todo-control-button">
          수정
        </button>
        <button on:click={successTodo} class="todo-control-button">
          완료
        </button>
        <button on:click={deleteTodo} class="todo-control-button">
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

  .todo-control-button{
    padding: 2px 10px;
    background-color: white;
    color: black;
    border: none;
    border-radius: 2px;
    font-size: 14px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
    white-space: nowrap;
  }
  .todo-control-button:hover{
    box-shadow: 0 0 3.2px rgba(129, 28, 201, 0.25), 0 0 10px rgba(129, 28, 201, 0.22);
    transition: 0.2s linear;
    white-space: nowrap;
  }
</style>