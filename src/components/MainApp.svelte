<svelte:options
  customElement={{
    tag: "my-component",
  }}
/>

<script>
  import MainTodo from './MainTodo.svelte';
  import YetTask from './YetTask.svelte';

	const scrollTo = (item) => {
		console.log('scroll')
		let loc = document.querySelector(`#${item}`).offsetTop;
		window.scrollTo({top: loc-50, behavior: 'smooth'});
	}

	let todos = []

	let localLen = localStorage.length
	
	let todoCount = 0

	let successTodoCount = ''

	if(localLen == 0){
		localStorage.setItem('success', '0')
		successTodoCount = localStorage.getItem('success')
		localLen = localStorage.length
		todoCount = localLen - 1
	}else{
		successTodoCount = localStorage.getItem('success')
		localLen = localStorage.length
		todoCount = localLen - 1
	}

	for(let i = 0; i < localLen; i++){
		if(!['success', 'todoCount'].includes(localStorage.key(i))){
			todos.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
		}
	}

</script>

	<header></header>
	<main>
		<aside>
			<div class="sidebar">
				<button class="nav" on:click={()=>scrollTo('#profile')}>프로필</button>
				<button class="nav" on:click={()=>scrollTo('#taskInput')}>과제 등록하기</button>
				<button class="nav" on:click={()=>scrollTo('#yetTask')}>미완료 과제</button>
			</div>
		</aside>
		<div class="contents">
	
			<div class="content" id="profile">
				<div class="content-header">프로필</div>
				<div class="profile">
					반가워요! 👋 <br>
					<div class="profile-task-info">
						<div style="display: flex;">
							<div class="profile-task-head">미완료 과제 :</div>
							<div class="profile-task-count">{todoCount}개</div>
						</div>
						<div style="display: flex;">
							<div class="profile-task-head">완료 과제 :</div>
							<div class="profile-task-count">
								{successTodoCount}개
							</div>
						</div>
					</div>
				</div>
			</div>
	
			<div class="content" id="taskInput">
				<div class="content-header">과제 등록하기</div>
				<MainTodo bind:todos={todos} bind:todoCount={todoCount}/>
			</div>
	
			<div class="content" id="yetTask">
				<div class="content-header">미완료 과제</div>
				<YetTask bind:todos={todos} bind:successTodoCount={successTodoCount} bind:todoCount={todoCount}/>
			</div>
	
		</div>
	</main>

<style>
	header{
		width: 100vw;
		display: flex;
		position: fixed;
		z-index: 1;
		height: 80px;
		background-color: black;
	}

	main{
		display: flex;
		width: 100vw;
		height: fit-content;
		background-color: none;
		top: 80px;
	}

	.contents{
		width: 80%;
		height: fit-content;
		justify-content: stretch;
		position: relative;
		top: 80px;
		padding: 3% 2% 0 2%;
		color: #121212;
		background-color: rgb(248, 250, 252);
	}

	.content{
		display: flex;
		flex-direction: column;
		margin-bottom: 10%;
		border-radius: 12px;
	}

	.content-header{
		width: fit-content;
		display: flex;
		font-size: 3rem;
		margin-bottom: 12px;
		padding: 1% 1%;
	}

	aside{
	  display: flex;
	  flex-direction: column;
	  width: 20%;
	}

	.sidebar{
	  position: fixed;
    top: 80px;
	  display: flex;
	  flex-direction: column;
	  width: 20%;
	  height: 100%;
	  padding: 1%;
	  background-color: #ffffff;
	}

	.nav{
	  display: flex;
	  justify-content: start;
	  margin-bottom: 12px;
	  padding: 8% 5%;
	  border: none;
	  border-radius: 8px;
    background-color: #ffffff;
    color: #121212;
    transition: 0.2s linear;
    font-size: 2rem;
	}
	
	.nav:hover{
    cursor: pointer;
    display: flex;

	  justify-content: start;
	  margin-bottom: 12px;
	  padding: 8% 5%;
	  border: none;
	  border-radius: 8px;
    background-color: #ffffff;
    color: #121212;
    transition: 0.2s linear;
    font-size: 2rem;
	  box-shadow: 0 0 3.2px rgba(129, 28, 201, 0.25), 0 0 10px rgba(129, 28, 201, 0.22);
	}

	*{
    box-sizing: border-box;
  }

  .profile{
    display: flex;
    padding: 3% 4%;
    /* margin: 0 4%; */
    flex-direction: column;
    font-size: 3rem;
    background-color: #ffffff;
		border: 1px solid rgb(226, 232, 240);
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
    border-radius: 20px;
    font-weight: 600;
  }

  .profile-task-info{
    width: fit-content;
    display: flex;
    flex-direction: column;
    padding: 0 12px;
  }

  .profile-task-head{
    font-size: 2rem;
    margin-top: 0.5%;
    font-weight: 400;
  }

  .profile-task-count{
    font-size: 2rem;
    margin-top: 0.5%;
    margin: 0 12px;
    font-weight: 400;
  }

</style>