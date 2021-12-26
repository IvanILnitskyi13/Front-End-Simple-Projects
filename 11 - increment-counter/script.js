const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  // + before string parse value to number
  const target = +counter.getAttribute("data-target");

  const updateCounter = () => {
    const c = parseInt(counter.innerText);

    const increment = Math.trunc(target / 200);

    if (c < target) {
      counter.innerText = `${c + increment}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
