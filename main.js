// ========================
// 🔹 BURGER MENU TOGGLE
// ========================
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
}

// ========================
// 🔹 FORM LOADER DELAY
// ========================
const form = document.getElementById('searchForm');
const loader = document.getElementById('loader');

if (form && loader) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    loader.style.display = 'flex';
    setTimeout(() => {
      form.submit();
    }, 3000);
  });
}

// ========================
// 🔹 SEARCH FUNCTION (Fuse.js)
// ========================
const pages = [
  { title: "Daino minoma ft Benito Mc- Akili ya ndocc", url: "daino.html", content: "" },
  { title: "Fammi Africa-Umejaa", url: "fammi.html", content: "" },
  { title: "EP I Fanu Benks - Afro centric", url: "fanu.html", content: "" },
  { title: "ctg harmanto- Enjo", url: "juma.html", content: "" },
  { title: "kim voice-waambie", url: "kim.html", content: "" },
  { title: "Fessy Melody", url: "melody.html", content: "" },
   { title: "Fessy Melody-Vimba", url: "melody.html", content: "" },
    { title: "Fanu Benks - achana nao", url: "fanu.html", content: "" },
];

const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

if (searchInput && resultsDiv) {
  const fuse = new Fuse(pages, {
    keys: ["title", "content"],
    threshold: 0.3,
  });

  function highlight(text, term) {
    const regex = new RegExp(`(${term})`, "gi");
    return text.replace(regex, "<span class='highlight'>$1</span>");
  }

  searchInput.addEventListener("input", () => {
    const term = searchInput.value.trim();
    resultsDiv.innerHTML = "";

    if (term === "") return;

    const results = fuse.search(term);

    if (results.length === 0) {
      resultsDiv.innerHTML = "<p>Hakuna matokeo yaliyopatikana</p>";
      return;
    }

    results.forEach((r) => {
      const item = r.item;
      const html = `
        <div class="result">
          <a href="${item.url}">${highlight(item.title, term)}</a>
          <p>${highlight(item.content, term)}</p>
        </div>
      `;
      resultsDiv.innerHTML += html;
    });
  });
}
