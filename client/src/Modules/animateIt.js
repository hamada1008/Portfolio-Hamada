const animateIt = (e) => {
  e.target.className = "animated-band animation-on";
  setTimeout(() => {
    e.target.className = "animated-band";
  }, 1001);
};
export default animateIt;
