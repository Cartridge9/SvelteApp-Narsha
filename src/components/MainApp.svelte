<svelte:options
  customElement={{
    tag: "my-component",
  }}
/>

<script>
  import MainTodo from './MainTodo.svelte';
  import YetTask from './YetTask.svelte';

	let profileRef
	let taskRef
	let yetTaskRef
	const scrollTo = (item) => {
		let height = item.offsetTop
		window.scrollTo({top: height-50, behavior: 'smooth'});
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

	<header>
		<span class="header-project-name">PlanA</span>
		<span class="header-project-introduce">To Prevent PlanB</span>
	</header>
	<main>
		<aside>
			<div class="sidebar">
				<button class="nav" on:click={() => scrollTo(profileRef)}>프로필</button>
				<button class="nav" on:click={() => scrollTo(taskRef)}>과제 등록하기</button>
				<button class="nav" on:click={() => scrollTo(yetTaskRef)}>미완료 과제</button>
			</div>
		</aside>
		<div class="contents">
	
			<div class="content" id="profile" bind:this={profileRef}>
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
	
			<div class="content" id="taskInput" bind:this={taskRef}>
				<div class="content-header">과제 등록하기</div>
				<MainTodo bind:todos={todos} bind:todoCount={todoCount}/>
			</div>
	
			<div class="content" id="yetTask" bind:this={yetTaskRef}>
				<div class="content-header">미완료 과제</div>
				<YetTask bind:todos={todos} bind:successTodoCount={successTodoCount} bind:todoCount={todoCount}/>
			</div>
	
		</div>
	</main>

<style>
	header{
		width: 100vw;
		display: flex;
		align-items: center;
		position: fixed;
		z-index: 1;
		height: 80px;
		background-color: black;
		color: white;
	}

	.header-project-name{
		display: flex;
		align-items: center;
		margin: 0 0 0 5%;
		padding-top: 4px;
		font-size: 4rem;
		font-weight: 600;
	}
	
	.header-project-introduce{
		margin-left: 2%;
		font-size: 2rem;
		margin-bottom: 1%;
		align-self: flex-end;
		font-weight: 400;
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
    font-size: 2rem;
    transition: 0.2s linear;
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
		font-weight: 400;
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