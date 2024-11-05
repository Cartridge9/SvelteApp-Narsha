<script>
  import Todo from "./Todo.svelte";
  import Tag from "./Tag.svelte"

  let title = "";
  let todos = [];
  let id = 0;
  let tag = '';
  let time = '';

  const tagToTime = (t) => {
    tag = ''
  }
  const timeToTag = (tag) => {
    if (tag=='') {
      tag=''
    }else{
      time = ''
    }
  }

  $: tagToTime(time)
  $: timeToTag(tag)

  const createTodo = () => {
    if (!title.trim()) {
      title = "";
      return;
    }
    todos.push({
      id,
      title,

    });
    todos = todos;
    title = "";
    id += 1;
  }
</script>

<div class="todo-create-container">
  <textarea
    name=""
    id=""
    bind:value={title}
    on:keydown={(e) => {
      if(e.key === "Enter" && e.isComposing == false){
        e.preventDefault();
        createTodo()
      }
    }}
    class="todo-write"
    placeholder="할 일 등록하기"
  ></textarea>
  <div class="todo-info">
    <div class="todo-info-selecter">
      <div class="todo-tag-selecter">
        <Tag todoTag={'todoTag'} tagPrint={'매일'} bind:tag={tag}/>
        <Tag todoTag={'todoTag'} tagPrint={'매주'} bind:tag={tag}/>
        <Tag todoTag={'todoTag'} tagPrint={'매달'} bind:tag={tag}/>
      </div>
      <div class="todo-time-viewer">{time}</div>
      <input type="date" class="todo-date" bind:value={time}>
    </div>
    <button on:click={createTodo} class="todo-create-button">작성 완료하기</button>  
  </div>
</div>

{#each todos as todo}
  <Todo bind:todos={todos} {todo} />
{/each}

<style>
  .todo-create-container{
    display: flex;
    align-items: end;
    gap: 16px;
  }

  .todo-write {
    display: flex;
    justify-content: center;
    width: 50%;
    height: 400px;
    background-color: white;
    border: 2px solid #dadada;
    border-radius: 20px;
    color: black;
    outline: none;
    padding: 1% 1.4%;
    font-size: 2rem;
    resize: none;
  }

  .todo-info{
    width: 50%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .todo-info-selecter{
    position: relative;
  }

  .todo-date{
    margin-top: 12px;
  }

  .todo-time-viewer{
    position: absolute;
    font-size: 2rem;
    top: 58px;
    left: 20px;
    z-index: 0;
    color: #121212;

  }

  input[type="date"] {
    position: relative; 
    width: 100%;
    height: 48px;
    padding: 10px;
    /* background: url(../assets/test.svg)
      no-repeat right 10px center / 25px auto; */
    text-align: left;
    font-size: 100%;
    border: 2px solid #dadada;
    background-color: transparent;
    color: transparent;
    border-radius: 16px;
    z-index: 0;
    user-select: none;
  }
  
  input[type="date"]::-webkit-calendar-picker-indicator {
    position: absolute; 
    left: -80px;
    top: 0;
    width: 100%;
    color: black;
    height: 100%;
    cursor: pointer;
  }

  .todo-tag-selecter{
    display: flex;
    gap: 12px;
  }

  .todo-create-button{
    width: 100%;
    height: 50px;
    font-size: 2rem;
    background-color: #6554AF;
    border-radius: 20px;
    border: none;
    cursor: pointer;
  }

  .todo-create-button:hover{
    background-color: #59499C;
  }

  .todo-create-button:active{
    background-color: #7566B7;
  }
</style>