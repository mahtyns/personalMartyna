
export const aboutOptions = 
[{

    detectRetina:false,
 
    fullScreen: {
      enable: false
    },
 
    interactivity: {
      detectsOn: 'canvas',
      
    },
  
    particles: {
      color: {
        value: ['#672c95', '#cfaeea', '#2afee8']
      },
      number: {
      density: {
        enable: false,
        area: 3000

      },
        limit: 0,
        value: 300 
      },
      opacity: {
        random: false,
        value: 1
    },
      size: {
        value: { min: 1, max: 4},
        random: true
    },
      animation: {
        enabled: true,
        speed: 20,
        sync: true
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: "bounce"
      },
      lineLinked: {
        enable: true,
        distance: 30
      }
    },
  }
 

]