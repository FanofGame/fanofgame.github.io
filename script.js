// Page content data
const pages = {
  home: {
    title: "Sleek.",
    text: "Your sleek, modern site powered by GitHub Pages. Explore. Create. Game on.",
    buttonText: "Visit My GitHub",
    buttonLink: "https://github.com/FanofGame"
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
    buttonText: "Download ShowFPS",
    buttonLink: "https://edge.forgecdn.net/files/6548/369/showfps-1.01.jar"
  }
};

const mainTitle = document.querySelector('main h1');
const mainText = document.querySelector('main p');
const mainButton = document.querySelector('main a.button');

const homeLogo = document.getElementById('home-logo');
const aboutLink = document.getElementById('about-link');

function switchPage(pageKey) {
  const page = pages[pageKey];
  if (!page) return;

  mainTitle.textContent = page.title;
  mainText.textContent = page.text;
  mainButton.textContent = page.buttonText;
  mainButton.href = page.buttonLink;
}

// Click handlers
homeLogo.addEventListener('click', () => {
  switchPage('home');
});
aboutLink.addEventListener('click', e => {
  e.preventDefault();
  switchPage('about');
});

// Initialize to home page on load
switchPage('home');
