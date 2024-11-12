<script>
  import Todo from "./Todo.svelte";
  export let todos
  export let successTodoCount
  export let todoCount
</script>

	<div class="yet-task">
		{#each todos as todo}
			<Todo bind:todos={todos} {todo} bind:successTodoCount={successTodoCount} bind:todoCount={todoCount} />
		{/each}
	</div>

<style>
  .yet-task{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, auto));
    grid-auto-rows: minmax(240px, auto);
    gap: 12px;
  }
</style>