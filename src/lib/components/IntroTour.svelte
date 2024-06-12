<!-- import 'shepherd.js/dist/css/shepherd.css'; -->

<script>
    import { onMount } from 'svelte';
    
  
    let tour;
    let Shepherd;

    onMount(async () => {

      const tourSeen = localStorage.getItem('tourSeen');
      if (tourSeen) {
          return; 
      }
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
        title: 'Welcome to the Map of Energy Citizenship',
        text: 'Click a highlighted country to see the initiatives related',
        attachTo: {
          element: '.intro-step',
          
        },
        buttons: [
          {
            action: function() {
                tour.cancel();
                localStorage.setItem('tourSeen', 'true');
            },
            classes: 'shepherd-button-secondary',
            text: 'Exit'
          },
          {
            action: function() {
                tour.next();
                if (tour.steps.length === tour.currentStep.index + 1) {
                    localStorage.setItem('tourSeen', 'true'); 
                }
            },
            text: 'Finish'
          }
        ]
      });
      

      // tour.addStep({
      //   id: 'map-showcase',
      //   title: 'Communities Sidebar',
      //   text: 'Here you will find every energy community of the country... etc',
      //   attachTo: {
      //     element: '.second-step',
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