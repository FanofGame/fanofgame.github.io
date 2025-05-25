// Sidebar toggle for mobile
const sidebar = document.getElementById('sidebar');
const toggleBtn = sidebar.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});

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
    buttonText: "Learn More",
    buttonLink: "#"
  }
};

// Sidebar buttons
const buttons = sidebar.querySelectorAll('ul li button');

// Main content elements
const mainTitle = document.querySelector('main h1');
const mainText = document.querySelector('main p');
const mainButton = document.querySelector('main a.button');

function switchPage(pageKey) {
  buttons.forEach(btn => {
    if (btn.dataset.page === pageKey) {
      btn.classList.add('active');
      btn.setAttribute('aria-current', 'page');
    } else {
      btn.classList.remove('active');
      btn.removeAttribute('aria-current');
    }
  });

  const page = pages[pageKey];
  if (!page) return;

  mainTitle.textContent = page.title;
  mainText.textContent = page.text;
  mainButton.textContent = page.buttonText;
  mainButton.href = page.buttonLink;

  // Close sidebar on mobile after selecting page
  if (window.innerWidth <= 768) {
    sidebar.classList.add('collapsed');
  }
}

// Attach event listeners for buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    switchPage(button.dataset.page);
  });
});

// Initialize default page
switchPage('home');
