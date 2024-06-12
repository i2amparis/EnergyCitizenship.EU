<script>
    // import eu_flag from '$lib/assets/europe_flag.jpg';
    import eu_flag from '$lib/assets/eu_flag.svg';
    import logo from '$lib/assets/Enclude-logo.png';
    import StayInTouch from '$lib/components/SIT.svelte'
    import Logo from '$lib/assets/logo_2.png'

    import transformer_logo from '$lib/assets/Footer/transformer_logo.png';
    import dialogues_logo from '$lib/assets/Footer/dialogues_logo.png';
    import ec_logo from '$lib/assets/Footer/ec_logo.png';
    import enclude_logo from '$lib/assets/Footer/enclude_logo.png';
    import energy_logo from '$lib/assets/Footer/energy_logo.png';
    import greta_logo from '$lib/assets/Footer/greta_logo.png';


    let currentYear = (new Date().getFullYear())
</script>

<div class=" max-w-full sm:bg-base-200 border-t">
<div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
    <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
      <div class="sm:col-span-2">
        <a href="/" aria-label="Go home" title="Company" class="inline-flex items-center">
            <div class="w-12">
                <img src={Logo} alt="download icon"/>
            </div>
            <span class="ml-2 normal-case text-xl tracking-wide text-inherit-800">EnergyCitizenship.eu</span>
            
        </a>
        <div class="mt-6 lg:max-w-lg">

          <div class="flex">
            <img class="w-24" src="{eu_flag}" alt="Logo" />
            <p class="ml-5 text-xs text-inherit-800">
                The ENCLUDE, DIALOGUES, EC2, and ENERGY PROSPECTS projects have received funding from the European Union’s Horizon 2020 Research and Innovation Programme under grant agreements No 101022791, 101022585, 101022565, and 101022492, respectively.
            </p>
          </div>
        </div>
      </div>


      <div class="space-y-2">

        <div class="grid grid-cols-2  gap-6 mb-6 text-sm justify-items-center place-content-center">

            <a href="https://encludeproject.eu"><img class="w-36" src="{enclude_logo}" alt="Logo" /></a>
            <a href="https://www.dialoguesproject.eu"><img class="w-40" src="{dialogues_logo}" alt="Logo" /></a>
            <a href="https://ec2project.eu"><img class="w-16" src="{ec_logo}" alt="Logo" /></a>
            <a href="https://www.energyprospects.eu"><img class="w-32" src="{energy_logo}" alt="Logo" style="max-height:4rem;"/></a>
            <!-- <img class="w-36" src="{greta_logo}" alt="Logo" /> -->
            <!-- <img class="w-30" src="{transformer_logo}" alt="Logo" style="max-height:4rem;"/> -->
      
        </div>
    
      </div>


      <div class=" m-auto">
        <span class="text-base font-bold tracking-wide text-inherit-900">Stay in touch</span>
        <div class="flex items-center mt-6 space-x-6 ">
          <a href="https://twitter.com/encludeproject">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
          </a>

          <a href="https://www.linkedin.com/company/encludeproject/">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
          </a>

          <a href="mailto:info@encludeproject.eu">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 45 45">
              <path class="st0" d="M31 .1H12C5.4.1 0 5.5 0 12.1v19c0 6.6 5.4 12 12 12h19c6.6 0 12-5.4 12-12v-19c0-6.6-5.4-12-12-12zm6.3 30.7-.3.9c-.5 1-1.3 1.5-2.4 1.5h-26c-1.4 0-2.5-.8-2.8-2.1-.1-.3-.1-.5-.1-.8V13.8c0-1.7 1.2-2.9 2.9-2.9h25.9c1.5 0 2.5.9 2.8 2.3 0 0 0 .1.1.1-.1 5.8-.1 11.7-.1 17.5z"></path><path class="st0" d="M25.8 23.6c-.8.8-1.5 1.6-2.3 2.3-1.2 1.2-3 1.2-4.2 0l-1.4-1.4-1.1-1.1c-2.7 2.6-5.3 5.2-8 7.9H34c-2.7-2.7-5.3-5.3-8-7.9l-.2.2z"></path><path class="st0" d="M20.5 24.5c.5.6 1.3.5 1.8 0 3.8-3.8 7.6-7.7 11.4-11.5l.2-.2H8.8c.1.1.2.2.3.2 3.8 3.8 7.6 7.7 11.4 11.5zM15.4 22c-2.6-2.6-5.3-5.2-7.9-7.8v15.7c2.6-2.6 5.3-5.2 7.9-7.9zM27.5 22.1c2.6 2.6 5.2 5.2 7.9 7.8V14.2c-2.6 2.6-5.3 5.2-7.9 7.9z"></path>
      
              </svg>
          </a>
        </div>
      </div>
      
      
    </div>
    <div><p class="mt-2 mb-2 text-xs max-w-4xl text-inherit-800">
        The content of this page is for information purposes only. The relevant legal instruments and the text of the call shall take precedence over the information contained in this page. The European Commission or CINEA does not accept responsibility for any use made of the information contained therein.
      </p></div>
    <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
      <p class="text-sm text-inherit-600">
        Copyright © {currentYear} ENCLUDE
      </p>
      <!-- 
      <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
        <li>
          <a href="https://encludeproject.eu/privacy-cookies-policy" class="text-sm text-inherit-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy & Cookies Policy</a>
        </li>
        <li>
          <a href="/" class="text-sm text-inherit-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Terms &amp; Conditions</a>
        </li>
      </ul>
      -->
    </div>
  </div>
</div>