<!-- import 'shepherd.js/dist/css/shepherd.css'; -->

<script>
    import { onMount } from 'svelte';
    
  
    let tour;
    let Shepherd;

    onMount(async () => {

        const module = await import('shepherd.js');
        Shepherd = module.default;

      tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
          cancelIcon: {
            enabled: true
          },
          classes: 'shadow-md bg-purple-dark',
          scrollTo: { behavior: 'smooth', block: 'center' }
        }
      });
  
      tour.addStep({
        title: 'Welcome to Our App!',
        text: 'Click a highlighted country to see its communities',
        attachTo: {
          element: '.intro-step',
          
        },
        buttons: [
          {
            action: tour.cancel,
            classes: 'shepherd-button-secondary',
            text: 'Exit'
          },
          {
            action: tour.next,
            text: 'Next'
          }
        ]
      });
      

      // tour.addStep({
      //   id: 'map-showcase',
      //   title: 'Communities Sidebar',
      //   text: 'Here you will find every energy community of the country... etc',
      //   attachTo: {
      //     element: '.sidebar-step',
      //     on: 'center'
      //   },
      //   buttons: [
      //     {
      //       action: tour.back,
      //       classes: 'shepherd-button-secondary',
      //       text: 'Back'
      //     },
      //     {
      //       action: tour.next,
      //       text: 'Next'
      //     }
      //   ],
      //   when: {
      //     show: () => {
      //       console.log('sidebar step shown');
      //     }
      //   }
      // });


  
      tour.start();
    });
  </script>