//define query function
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

//define timeline
const tlMasterS0 = new TimelineMax()
const tlMasterS1 = new TimelineMax({ paused: true })
const tlMasterS2 = new TimelineMax({ paused: true })
const tlMasterS3 = new TimelineMax({ paused: true })

//define anime
const anime_origin = { x: -100, opacity: 0 }
const anime_destination = { x: 0, opacity: 1 }
//fullpage.js
new fullpage("#fullpage", {
  autoScrolling: true,
  anchors: ["homePage", "firstPage", "secondPage", "thirdPage"],
  navigation: true,
  scrollingSpeed: 800,
  afterResponsive: function (isResponsive) {
    alert("Is responsive: " + isResponsive)
  },
  animateAnchor: !1,
  onLeave: (origin, destination, direction) => {
    const oriSection = origin.item
    const desSection = destination.item
    //reverse anime of origin section to init

    reverseAnime(origin.index)

    //play
    playAnime(destination.index)
  },
})
// parallax anime

new Parallax($(".js-parallax-moon"))
new Parallax($(".moon_light"))
new Parallax($(".star_img"))

function reverseAnime(index) {
  if (0 == index) tlMasterS0.reverse()
  if (1 == index) tlMasterS1.reverse()
  if (2 == index) tlMasterS2.reverse()
  if (3 == index) tlMasterS3.reverse()
}

function playAnime(index) {
  if (0 == index) tlMasterS0.play()
  if (1 == index) tlMasterS1.play()
  if (2 == index) tlMasterS2.play()
  if (3 == index) tlMasterS3.play()
}

function handleCurtain() {
  const curtain = $(".curtain")
  curtain.classList.add("active")
}

;(function init() {
  setTimeout(() => {
    handleCurtain()
  }, 0000)
  //continuous sectionS0 anime
  eventsSectionS0()
  eventSectionS1()
  eventSectionS2()
  eventSectionS3()
})()

//chain of events Section s0
function eventsSectionS0() {
  const sectionS0 = $(".s0")
  const title_text0 = sectionS0.querySelector(".title_text")
  const title_border0 = sectionS0.querySelector(".title_border")
  const title_content = sectionS0.querySelector(".title_content")
  let moonS0 = sectionS0.querySelector(".moon")

  tlMasterS0
    .fromTo(title_text0, 0.5, anime_origin, anime_destination)
    .fromTo(title_border0, 0.5, anime_origin, anime_destination, "-=0.4")
    .fromTo(title_content, 0.5, anime_origin, anime_destination, "-=0.3")
    .fromTo(moonS0, 0.5, { x: 100, opacity: 0 }, { x: 0, opacity: 1 }, "-=0.2")
}

//chain of events Section s1
function eventSectionS1() {
  const section = $(".s1")
  const title_text = section.querySelector(".title_text")
  const title_border = section.querySelector(".title_border")
  const title_content = section.querySelector(".title_content")
  const btnShowMore = section.querySelector(".btn.show_more")
  const img_background = section.querySelector(".img_background")
  const surface1 = section.querySelector(".surface1")
  const surface2 = section.querySelector(".surface2")
  tlMasterS1
    .fromTo(title_text, 0.5, anime_origin, anime_destination)
    .fromTo(title_border, 0.5, anime_origin, anime_destination, "-=0.4")
    .fromTo(title_content, 0.5, anime_origin, anime_destination, "-=0.3")
    .fromTo(btnShowMore, 0.5, anime_origin, anime_destination, "-=0.2")
    .fromTo(surface2, 0.5, { x: 0 }, { x: "100%" }, "-=0.1")
    .fromTo(surface1, 0.5, { x: 0 }, { x: "100%" }, "-=0.4")
    .fromTo(img_background, 1, { scale: 0.9 }, { scale: 1 }, "-=0.8")
}

//chain of events Section s2
function eventSectionS2() {
  const section = $(".s2")
  const title_text = section.querySelector(".title_text")
  const title_border = section.querySelector(".title_border")
  const title_content = section.querySelector(".title_content")
  const btnShowMore = section.querySelector(".btn.show_more")
  const img_background = section.querySelector(".img_background")
  const surface1 = section.querySelector(".surface1")
  const surface2 = section.querySelector(".surface2")
  tlMasterS2
    .fromTo(title_text, 0.5, anime_origin, anime_destination)
    .fromTo(title_border, 0.5, anime_origin, anime_destination, "-=0.4")
    .fromTo(title_content, 0.5, anime_origin, anime_destination, "-=0.3")
    .fromTo(btnShowMore, 0.5, anime_origin, anime_destination, "-=0.2")
    .fromTo(surface2, 0.5, { x: 0 }, { x: "100%" }, "-=0.1")
    .fromTo(surface1, 0.5, { x: 0 }, { x: "100%" }, "-=0.4")
    .fromTo(img_background, 1, { scale: 0.9 }, { scale: 1 }, "-=0.8")
}

function eventSectionS3() {
  const section = $(".s3")
  const title_text = section.querySelector(".title_text")
  const title_border = section.querySelector(".title_border")
  const title_content = section.querySelector(".title_content")
  const btnShowMore = section.querySelector(".btn.show_more")
  const a_title_border = section.querySelector(".title_border + a")
  const img_background = section.querySelector(".img_background")
  const surface1 = section.querySelector(".surface1")
  const surface2 = section.querySelector(".surface2")

  tlMasterS3
    .fromTo(title_text, 0.5, anime_origin, anime_destination)
    .fromTo(title_border, 0.5, anime_origin, anime_destination, "-=0.4")
    .fromTo(title_content, 0.5, anime_origin, anime_destination, "-=0.3")
    .fromTo(btnShowMore, 0.5, anime_origin, anime_destination, "-=0.2")
    .fromTo(a_title_border, 0.5, anime_origin, anime_destination, "-=0.5")
    .fromTo(surface2, 0.5, { x: 0 }, { x: "100%" }, "-=0.1")
    .fromTo(surface1, 0.5, { x: 0 }, { x: "100%" }, "-=0.4")
    .fromTo(img_background, 1, { scale: 0.9 }, { scale: 1 }, "-=0.8")
}

//update moon css
window.addEventListener("resize", () => {
  const moon = $(".moon")
  //desktop
  if (window.matchMedia("(min-width : 1024px)").matches) {
    moon.style.transform = "translate3d(0,0,0)"
  }
  // //mobile
  // if (window.matchMedia("(max-width : 739px)").matches) {
  //   moon.style.transform = "translate3d(-50%,0,0)"
  // }
  //tablet
  if (window.matchMedia("(min-width: 740px) and (max-width: 1023px)").matches) {
    moon.style.transform = "translate3d(0,0,0)"
  }
})
