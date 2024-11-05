<script>
  export let todoTag
  export let tagPrint
  export let tag

  const tagToggle = () => {
    tag = tagPrint
  }
</script>

<label for={tagPrint} class={tag === tagPrint ? 'tag-selected' : 'tag-unselected'} >
  <input type="radio" name={todoTag} class="radio-button" id={tagPrint} on:click={tagToggle}/>
  {tagPrint}
</label>

<style>
  .tag-unselected{
    padding: 4px 6px; 
    font-size: 2rem;
    background-color: white;
    border-radius: 4px;
  }

  .tag-selected{
    padding: 4px 6px; 
    font-size: 2rem;
    background-color: #6554AF;
    color: white;
    border-radius: 4px;
  }

  .radio-button{
    display: none;
  }

</style>