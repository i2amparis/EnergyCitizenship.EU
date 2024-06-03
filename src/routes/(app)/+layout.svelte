<script>
	import '../../app.postcss';
	import Footer from '$lib/components/Footer3.svelte';
	import Logo from '$lib/assets/logo_2.png'
	import DarkMode from '$lib/components/DarkMode.svelte';

	let show_close = false;
	let disabledScroll = false;
</script>



<div class="drawer drawer-end {disabledScroll ? " overflow-hidden overscroll-none touch-none" : ""}">
	<input id="my-drawer-4" type="checkbox" class="drawer-toggle" on:click={() => disabledScroll = !disabledScroll} bind:checked={show_close}/> 

	<div class="drawer-content flex flex-col">

		<div class="w-full navbar sticky shadow-md">
		<div class="flex-none lg:hidden">
		  <label for="my-drawer-4" class="btn btn-circle swap swap-rotate {show_close ? "swap-active" : ""}">
			<svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
			<svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
		  </label>
		  
		</div> 
		<div class="flex-1 px-2 mx-5">

			<a class="btn btn-ghost normal-case lg:text-xl text-sm" href="/">
				<div class="w-12">
					<img src={Logo} alt="download icon"/>
				</div>
				EnergyCitizenship.eu
			</a>
		</div>
		<div class="flex-none hidden lg:block mr-5">
		  <ul class="menu menu-horizontal">
			
			<ul class="menu menu-horizontal px-1 font-sans font-semibold text-lg">
				<li class="ml-5"><a href="/interactive_map">Map</a></li>
				<li class="ml-5"><a href="/about">About</a></li>
				<li class="ml-5"><a href="https://encludeproject.eu/form/enclude-platform-survey">Provide feedback</a></li>
				<li class="ml-5"><DarkMode></DarkMode></li>
			</ul>

		  </ul>
		</div>
	  </div>
	  <div class=" mt-1">
		<slot></slot>
	  </div>
	</div> 


	<div class="drawer-side top-16 sm:top-0 overflow-hidden">
	  <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label> 
	  <ul class="menu gap-2 p-4 w-full sm:w-80 min-h-full bg-base-300 text-base-content">
		<a on:click={() => {show_close = false}} class="btn mt-5" href="/interactive_map">Map</a>
		<a on:click={() => {show_close = false}} class="btn" href="/about">About</a>
		<a on:click={() => {show_close = false}} class="btn" href="https://encludeproject.eu/form/enclude-platform-survey">Provide feedback</a>
	  </ul>
	</div>

</div>

<Footer/>
