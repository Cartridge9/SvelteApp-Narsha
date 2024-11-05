<script>
  export let todos 
  export let todo

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
  const deleteTodo = () => {
    todos = todos.filter((value) => value.id != todo.id)
    console.log(todos)
    todos = todos;
  }
</script>

{#if isEdit}
  <div>
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
    <div class="todo-control">
      <button on:click={onEdit}>
        Edit
      </button>
      <button on:click={deleteTodo}>
        Delete
      </button>
    </div>
  </div>
{/if}

<style>
  .edit-input{
    outline: none;
    background-color: #fff;
    color: black;
    background-color: white;
    border: 2px solid #dadada;
    border-radius: 1px;
  }

  .todo-print{
    display: flex;
    width: fit-content;
    min-width: 100px;
    flex-direction: column;
    background-color: white;
    border: 2px solid #dadada;
  }
</style>