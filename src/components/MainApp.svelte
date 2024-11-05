<svelte:options
  customElement={{
    tag: "my-component",
  }}
/>

<script>
  import MainTodo from './MainTodo.svelte';
</script>

<header></header>
<main>
	<aside>
		<div class="sidebar">
			<button class="nav">프로필</button>
			<button class="nav">과제 등록하기</button>
			<button class="nav">미완료 과제</button>
			<button class="nav">리워드</button>
		</div>
	</aside>
	<div class="contents">
		<div class="content">
			<div class="content-header">프로필</div>
			<div class="profile">
				박재민 님 <br>
				<div class="profile-task-info">
					<div style="display: flex;">
						<div class="profile-task-head">미완료 과제 :</div>
						<div class="profile-task-count">100개</div>
					</div>
					<div style="display: flex;">
						<div class="profile-task-head">완료 과제 :</div>
						<div class="profile-task-count">50개</div>
					</div>
				</div>
			</div>
		</div>
		<div class="content">
			<div class="content-header">과제 등록하기</div>
			<MainTodo/>
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
		padding: 3% 2%;
		color: #121212;
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
		padding: 1% 2.2%;
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
    border-right: 1.6px solid #DADADA;
	  width: 20%;
	  height: 100%;
	  padding: 1%;
	  background-color: #ffffff;
	}

	.nav{
	  display: flex;
	  justify-content: start;
	  margin-bottom: 12px;
	  padding: 8% 4%;
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
	  padding: 8% 4%;
	  border: none;
	  border-radius: 8px;
    background-color: #ffffff;
    color: #121212;
    transition: 0.2s linear;
    font-size: 2rem;
	  box-shadow: 0 1.8px 2.8px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0,0.22);
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
    border: 2px solid #DADADA;
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