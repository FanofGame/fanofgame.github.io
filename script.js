// Sidebar "Sleek." logo click to go home
const homeLogo = document.getElementById('home-logo');
const aboutLink = document.getElementById('about-link');

const pages = {
  home: {
    title: "Sleek.",
    text: `Download ShowFPS for Minecraft Forks.\n\nBy: Me`,
    buttonText: "Download ShowFPS",
    buttonLink: "https://edge.forgecdn.net/files/6548/369/showfps-1.01.jar"
  },
  about: {
    title: "About Me",
    text: `👋 Hi, I’m @FanofGamess
👀 I’m interested in Minecraft Forks
🌱 I’m currently learning how to fork mods to newer versions
💞️ I’m looking to collaborate on nothing
📫 How to reach me nowhere
😄 Pronouns: he/him
⚡ Fun fact: I like minecraft`,
    buttonText: "",
    buttonLink: "#"
  }
};

const mainTitle = document.querySelector('main h1');
const mainText = document.querySelector('main p');
const mainButton = document.querySelector('main a.button');

function switchPage(pageKey) {
  const page = pages[pageKey];
  if (!page) return;

  mainTitle.textContent = page.title;
  mainText.textContent = page.text;
  if (page.buttonText) {
    mainButton.textContent = page.buttonText;
    mainButton.href = page.buttonLink;
    mainButton.style.display = "inline-block";
  } else {
    mainButton.style.display = "none";
  }
}

homeLogo.addEventListener('click', () => switchPage('home'));
aboutLink.addEventListener('click', e => {
  e.preventDefault();
  switchPage('about');
});

window.onload = () => {
  switchPage('home');
};

