document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("message").textContent =
      "Your message has been sent!";
    this.reset();
  });

  document.addEventListener("DOMContentLoaded", () => {
  // ==== Initialize variables ====
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

   // ==== Function to show a specific slide ====
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  // ==== Change slide based on direction (+1 or -1) ====
  function changeSlide(direction) {
    showSlide(currentSlide + direction);
  }

  // ==== Event listeners for navigation buttons ====
  if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => changeSlide(-1));
    nextButton.addEventListener('click', () => changeSlide(1));
  }

  });

function calc(op) {
  let a = parseFloat(document.getElementById("num1").value);
  let b = parseFloat(document.getElementById("num2").value);
  let res;
  let bool;
  if (isNaN(a) || isNaN(b)) {
    res = "Enter both numbers.";
  } else if (op === "/" && b === 0) {
    res = "Cannot divide by zero.";
  } else {
    res = eval(`${a} ${op} ${b}`);
  }

  if (res % 2 == 0) {
    bool = true;
    console.log(res, "is a even number and the boolean value is", bool);
  } else {
    bool = false;
    console.log(res, "is an odd number and the boolean value is", bool);
  }
  document.getElementById("result").textContent = "Result: " + res;
}

let totalClicks = 0;

document.addEventListener("click", function () {
  totalClicks++;
  document.getElementById("clickCount").textContent = totalClicks;
});

const list = [
  {
    img:
      "https://cdn.shopify.com/s/files/1/0344/6469/files/angry.jpg?v=1560891349"
  },
  {
    img:
      "https://s3.us-east-1.amazonaws.com/petstablished-app-beta/uploads/image/image/4921315/beckett2.jpg"
  },
  {
    img:
      "https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/51/endangered-redpanda.jpg?crop=0.701xw:1.00xh;0.200xw,0&resize=980:*"
  },
  {
    img:
      "https://media.newyorker.com/photos/62c4511e47222e61f46c2daa/master/w_2240,c_limit/shouts-animals-watch-baby-hemingway.jpg"
  }
];

function showRandomImage() {
  const index = Math.floor(Math.random() * list.length);
  const imgElement = document.getElementById("random-image");
  const linkElement = document.getElementById("randomImg-link");

  imgElement.src = list[index].img;
  linkElement.href = list[index].link;
}

showRandomImage();

async function showRandomFact() {
  try {
    const response = await fetch(
      "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en"
    );
    const data = await response.json();
    document.getElementById("fact").textContent = data.text;
  } catch (error) {
    document.getElementById("fact").textContent =
      "Oops! Couldn't fetch a fact.";
    console.error("Fetch error:", error);
  }
}

