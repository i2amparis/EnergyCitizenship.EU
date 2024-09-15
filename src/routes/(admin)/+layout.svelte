
<script>
    import '../../app.postcss';
</script>

<div class="text-sm breadcrumbs absolute start-20 mt-10 lg:mt-20 text-zinc-200">
    <ul>
      <li><a href="/">Home</a></li> 
      <li><a href="/admin">admin panel</a></li> 
      <li>Data Operations</li>
    </ul>
  </div>


<div class="bg-gray-800 text-white flex flex-col justify-center items-center h-screen overflow-hidden gap-5">
    <div class="bg-primary pointer-events-none absolute aspect-square w-full h-full rounded-full opacity-5 blur-3xl [transform:translate3d(0,0,0)]"></div>
    <!-- <div class="bg-primary pointer-events-none absolute aspect-square w-1/4 rounded-full opacity-10 blur-2xl [transform:translate3d(0,0,0)]"></div> -->

   

    <slot></slot>
</div>