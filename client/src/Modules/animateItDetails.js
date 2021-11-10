const animateItDetails = (e) => {
  e.target.className = "animated-bounce animation-bounce-on";
  setTimeout(() => {
    e.target.className = "animated-bounce";
  }, 1001);
};
export default animateItDetails;
