const words = ["Ezikiel P. Tulawan.", "a Web Developer.", "a UI and UX Designer.", "a Freelancer."]

let cursor = gsap.to('.cursor', {opacity:0, ease: "power2.inOut", repeat:-1})
let masterTl = gsap.timeline({repeat: -1}).play(9.2)

words.forEach(word => {
  let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay:1.3})
  tl.to('.text', {duration: 1, text: word})
  masterTl.add(tl)
});

let tl = gsap.timeline({defaults: {ease: "SlowMo.easeOut"}});

tl.to("#intro-txt", {y: '0%', duration:0.7, stagger:0.7});
tl.to(".intro", {opacity:0, duration:1.2, delay:0.7});
tl.fromTo("h3", {opacity:0}, {opacity:1});