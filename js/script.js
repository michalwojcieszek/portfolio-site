const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector("header");
const linkEl = headerEl.querySelectorAll("a:link");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

linkEl.forEach(function (link) {
  link.addEventListener("click", function (e) {
    headerEl.classList.toggle("nav-open");
  });
});

// ******************************
// FLAGS
// ******************************

// Get all elements with the class 'flag-img'
const flagImages = document.querySelectorAll(".flag-img");

// Function to check if an element is in the viewport
const isInViewportFlag = (elem) => {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Function to handle scroll event
const handleScrollFlag = () => {
  flagImages.forEach((flagImg) => {
    if (isInViewportFlag(flagImg)) {
      flagImg.classList.add("color-language");
    } else {
      flagImg.classList.remove("color-language");
    }
  });
};

// Add scroll event listener to window
window.addEventListener("scroll", handleScrollFlag);

// Initially check elements in viewport
handleScrollFlag();

// ******************************
// TIMELINE
// ******************************

// Get all elements with the class 'timeline-element'
const timelineElements = document.querySelectorAll(".timeline-element");

// Function to check if an element is in the viewport
const isInViewportTimeline = (elem) => {
  const bounding = elem.getBoundingClientRect();
  const threshold = window.innerHeight * 0.1; // 10% of the viewport height

  return (
    bounding.top >= -threshold &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + threshold
  );
};

// Function to handle scroll event
const handleScrollTimeline = () => {
  timelineElements.forEach((timelineEvent) => {
    if (isInViewportTimeline(timelineEvent)) {
      timelineEvent.classList.add("timeline-active");
    } else {
      timelineEvent.classList.remove("timeline-active");
    }
  });
};

// Add scroll event listener to window
window.addEventListener("scroll", handleScrollTimeline);

// Initially check elements in viewport
handleScrollTimeline();

// ******************************
// PROJECT CIRCLE
// ******************************

// Get all elements with the class 'project-img-box'
const projectImgBoxes = document.querySelectorAll(".project-img-box");

// Function to check if an element is in the viewport
const isInViewport = (elem) => {
  const bounding = elem.getBoundingClientRect();
  const threshold = window.innerHeight * 0.4; // 10% of the viewport height

  return (
    bounding.top >= -threshold &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + threshold
  );
};

// Function to handle scroll event
const handleScroll = () => {
  projectImgBoxes.forEach((imgBox) => {
    if (isInViewport(imgBox)) {
      imgBox.classList.add("project-circle-scale");
    } else {
      imgBox.classList.remove("project-circle-scale");
    }
  });
};

// Add scroll event listener to window
window.addEventListener("scroll", handleScroll);

// Initially check elements in viewport
handleScroll();
