const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// h1
document.querySelector('h1').innerHTML = "DOM <br> IS <br> AWESOME"

// Images
const images = document.querySelectorAll('img')

images[1].src = 'img/header-img.png'

images[2].src = 'img/mid-page-accent.jpg'

// New nav links

const newLink1 = document.createElement('a')
const newLink2 = document.createElement('a')

const nav = document.querySelector('nav')
nav.prepend(newLink2)
nav.appendChild(newLink1)

// Nav
const navLinks = document.querySelectorAll('a')

navLinks[0].textContent = 'Hello'
navLinks[1].textContent = 'Services'
navLinks[2].textContent = 'Products'
navLinks[3].textContent = 'Vision'
navLinks[4].textContent = 'Features'
navLinks[5].textContent = 'About'
navLinks[6].textContent = 'Contact'
navLinks[7].textContent = 'Hi'
navLinks.forEach(link => {
  link.style.color = 'green'
})

// Button
document.querySelector('button').textContent = "Get Started"

// Headings
const h4s = document.querySelectorAll('h4')

h4s[0].textContent = 'FEATURES'
h4s[1].textContent = 'ABOUT'
h4s[2].textContent = 'SERVICES'
h4s[3].textContent = 'PRODUCT'
h4s[4].textContent = 'VISION'
h4s[5].textContent = 'CONTACT'

// Paragraphs

const paras = document.querySelectorAll('p')

paras[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
paras[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
paras[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
paras[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
paras[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
paras[5].innerHTML = '123 Way 456 Street <br> Somewhere, USA'
paras[6].textContent = '1 (888) 888-8888'
paras[7].textContent = 'sales@greatidea.io'
paras[8].textContent = 'Copyright Great Idea! 2018'

// Stretch Styling
const header = document.querySelector('header')
header.style.background = 'gold'
header.style.padding = '2%'
document.querySelector('body').style.background = 'royalBlue'