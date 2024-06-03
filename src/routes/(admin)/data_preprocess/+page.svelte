
<script>

  import { fade } from 'svelte/transition';

  import Logo from "$lib/assets/logo_2.png";
  import icon_parse from "$lib/assets/DataOperations/data_search.svg";
  import icon_clean from "$lib/assets/DataOperations/data_clean.svg";
  import icon_geo from "$lib/assets/DataOperations/data_geo.svg";

  import icon_polygon from "$lib/assets/DataOperations/polygon.svg";
  import icon_point from "$lib/assets/DataOperations/cluster.svg";

  import { read_json, xlsx_to_json } from '$lib/data_preprocess/data-parsing';
  

  let cleanOperations = ["Normalize Field Names", "Standardize Date Formats", "Handle Boolean Fields", "Clean Text Fields", "Categorize and Group Fields"]
  let cleanChecked = cleanOperations;
  let checkAll = true;

  $:{
    if (checkAll){
      cleanChecked = cleanOperations;
    }
    else{
      cleanChecked = [];
    }
  }



  let selected = "1";
  let file;
  let jsonSheet;
  let jsonPreview;

  $: console.log(jsonPreview)


  const onFileSelected =(e)=>{

    if(e.target.files[0]){

      file = e.target.files[0];
      
      if( file.type == "application/json"){

        //console.log(read_json(file))
        read_json(file)
          .then(jsonSheet => {
              console.log(jsonSheet);
              jsonPreview = jsonSheet[0];
          })
          .catch(error => {
              console.error(error);
          });
        
      }
      else if( file.type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"){

        xlsx_to_json(file)
          .then(jsonSheet => {
              //console.log(jsonSheet);
              jsonPreview = jsonSheet[0];
          })
          .catch(error => {
              console.error(error);
          });
      }
      else{
        file.name = "";
      }

      
    }
  }

  function onChange(event) {
		selected = event.currentTarget.value;
	}

</script>


<div class="flex flex-col sm:flex-row gap-5 ">


  <div class="w-24 mr-5 mt-20">
    {#if selected == "1" }
      <img src="{icon_parse}" alt="logo" />
    {/if}
    {#if selected == "2" }
      <img src="{icon_clean}" alt="logo" />
    {/if}
    {#if selected == "3" }
      <img src="{icon_geo}" alt="logo" />
    {/if}
  </div>

  <div role="tablist" class="tabs tabs-bordered ">

    <input type="radio" name="tabs_data_operations" role="tab" class="tab text-white" aria-label="Import" on:change={onChange} value="1" checked/>
    <div role="tabpanel" class="tab-content w-full rounded-xl shadow-2xl p-20">

      <label class="form-control w-full max-w-xs">
        
        <input accept=".xlsx, .json" on:change={(e)=>onFileSelected(e)} bind:this={file} name="file_import" id="file_import" type="file" class="file-input file-input-bordered text-black w-full max-w-xs" />
        <div class="label">
          <span class="label-text-alt text-white">.json / .xlsx</span>
        </div>
      </label>

      {#if file && file.name !='file_import'}
        <div transition:fade={{ delay: 150, duration: 200 }} class="label">
          <button class="btn btn-outline bg-slate-400" onclick="json_modal.showModal()">{file.name}</button>
        </div>
      {/if}

    </div>
  
    <input type="radio" name="tabs_data_operations" role="tab" class="tab text-white" aria-label="Data Cleanup" on:change={onChange} value="2" />
    <div role="tabpanel" class="tab-content w-full rounded-xl shadow-2xl p-20">


      {#if file && file.name !='file_import'}
        <div transition:fade={{ delay: 150, duration: 200 }} class="label">
          <button class="btn btn-outline bg-slate-400" onclick="json_modal.showModal()">{file.name}</button>
        </div>
      {/if}

      <div class="form-control w-96">
        
        <label class="label cursor-pointer ">
          <span class="label-text text-white"></span> 
          <input type="checkbox" bind:checked={checkAll} class="checkbox " />
        </label>

        {#each cleanOperations as operation}
        <label class="label cursor-pointer">
          <span class="label-text text-white">{operation}</span> 
          <input type="checkbox" bind:group={cleanChecked} value={operation} checked="checked" class="checkbox checkbox-primary" />
        </label>
        {/each}
        

        <button class="btn btn-primary mt-5 {!jsonPreview ? "btn-disabled" : ""}"> Cleanup</button>
      </div>

    </div>
  
    <input type="radio" name="tabs_data_operations" role="tab" class="tab text-white" aria-label="Generate GeoJSON" on:change={onChange} value="3" />
    <div role="tabpanel" class="tab-content w-full rounded-xl shadow-2xl p-20">

      {#if jsonPreview}
      <div transition:fade={{ delay: 150, duration: 200 }} class="label">
        <button class="btn btn-outline bg-slate-400" onclick="json_modal.showModal()">{file.name}</button>
      </div>

      <div class="flex flex-row mt-10">

        <img class="w-20 " src="{icon_point}" alt="logo" />

        <img class="w-24" src="{icon_polygon}" alt="logo" />

      </div>
      {/if}


    </div>
  </div>


  <dialog id="json_modal" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box bg-primary">
    
      {#if jsonPreview}
        <pre class="whitespace-pre-wrap">{JSON.stringify(jsonPreview,null, 3)}</pre>
      {/if}
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
    
  </dialog>
</div> 

