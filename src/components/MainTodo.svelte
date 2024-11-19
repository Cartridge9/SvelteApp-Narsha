<script>
  import Tag from "./Tag.svelte"
  import Todo from "./Todo.svelte";

  export let todos;
  export let todoCount;

  let title = "";
  let id = localStorage.length;
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

    if(!tag && !time) tag = '매일';

    todos.push({
      id:id,
      title:title,
      tag:tag,
      time:time,
    });

    localStorage.setItem(`${id}`, JSON.stringify({
      id:id,
      title:title,
      tag:tag,
      time:time,
    }))

    todoCount += 1

    todos = todos;
    title = "";
    tag = "";
    time = "";
    id += 1;
    console.log(todos)
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
    /* border: 2px solid #dadada; */
    border: 1px solid rgb(226, 232, 240);
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
    border-radius: 20px;
    color: black;
    outline: none;
    padding: 1.6% 2%;
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
    /* border: 2px solid #dadada; */
    border: 1px solid rgb(226, 232, 240);
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
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
    color: white;
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