export const aboutOptions = 
[
//     {
//         fpsLimit: 60,
//         detectRetina: false,
//            fullScreen:{
//                enable: false
//             },
//         interactivity: {
//             detectsOn: 'canvas',
//             events: {
//                 onClick: {
//                 enable: true,
//                 mode: "push"
//         }
//             },
//             resize: true,
//         },
//         modes: {
//             bubble: {
//                 distance: 40,
//                 duration: 2,
//                 opacity: 8,
//                 size: 6,
//                 speed: 3
//             }
//         },
//         particle: {
//             shape: 'circle',
//             color: {
//                 value: ['#cfaeea', '#672c95']
//             },
//             number: {
//                 density: {
//                     enable: true,
//                     value_area: 800    
//                 },
//                 value: 80,
//             },
//             opacity: {
//                 value: 1,
//                 random: true
//             },
//             move: {
//                 enable: true,
//                 speed: 1,
//                 direction: 'none',
//                 random: true,
//             },
//             size: {
//                 value: {min: 1, max: 2}
//             }
//         },
//         background: {
//             color: "#5d5d5d",
//             image: "",
//             position: "50% 50%",
//             repeat: "no-repeat",
//             size: "cover"
//   }

//     }

    {
        fullScreen: {
               enable: false
            },
             fps_limit: 60,
        interactivity: {
        detect_on: "canvas",
            events: {
                onclick: { enable: true, mode: "push" },
                onhover: {
                enable: true,
                mode: "attract",
                parallax: { enable: false, force: 60, smooth: 10 }
                },
                resize: true
             },
        modes: {
            push: { quantity: 4 },
            attract: { distance: 200, duration: 0.4, factor: 5 }
    }
  },
  particles: {
    color: { value: "#ffffff" },
    line_linked: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: "none",
      enable: true,
      out_mode: "out",
      random: false,
      speed: 2,
      straight: false
    },
    number: { density: { enable: true, value_area: 800 }, value: 80 },
    opacity: {
      anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
      random: false,
      value: 0.5
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400"
      },
   
      stroke: { color: "#000000", width: 0 },
      type: "circle"
    },
    size: {
      anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
      random: true,
      value: 5
    }
  },

            }
]