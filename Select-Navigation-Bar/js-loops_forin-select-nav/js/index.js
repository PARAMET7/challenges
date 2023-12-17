console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  HE: "Hebrew",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--
for (var i in languages) {
  var opt = document.createElement("option");
  opt.value = i;
  //console.log(i)
  opt.textContent = languages[i];
  select.appendChild(opt);

  //console.log(opt)


}
// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--
for (var i in nav) {
  var li = document.createElement("li");
  var a = document.createElement("a");
  a.href = nav[i];
  a.textContent = nav[i].text;
  li.appendChild(a);
  ul.appendChild(li);

}

// --^-- write/change code here --^--
