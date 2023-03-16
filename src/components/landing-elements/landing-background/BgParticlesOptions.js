const options = {
    fullScreen:{
        enable: false
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 500 
      }
    },
    color: {
      //The color for every node, not the connecting lines.
      value: ["#672c95", "#1275da", "#2afee8", '#f87459']
    },
    shape: {
      type: "circle", // Can show circle, edge (a square), triangle, polygon, star, img, or an array of multiple.
      stroke: {
        //The border
        width: 2,
        color: "#cfaeea"
      },
      polygon: {
        //if the shape is a polygon
        nb_sides: 5
      },
      image: {
        //If the shape is an image
        src: "",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.7,
      random: true
    },
    size: {
      value: 10,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 200, //The radius before a line is added, the lower the number the more lines.
      color: "#cfaeea",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none", //Move them off the canvas, either "none", "top", "right", "bottom", "left", "top-right", "bottom-right" et cetera...
      random: true,
      straight: false, //Whether they'll shift left and right while moving.
      out_mode: "bounce", 
      bounce: true,
      attract: {
        //Make them start to clump together while moving.
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  //Negate the default interactivity
  interactivity: {
    detect_on: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "bubble"
      },
      onClick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 800,
        line_linked: {
          opacity: 1
        }
      },
      firefly: {
        enable: true
      },
      bubble: {
        distance: 450,
        size: 45,
        duration: 3,
        opacity: .7,
        speed: 5
      },
      repulse: {
        distance: 500,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: false
  }



export default options