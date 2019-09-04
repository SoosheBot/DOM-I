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

//NAVIGATION
  // Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src','img/logo.png', siteContent["nav"]["img-src"]);
console.log(logo);

const navBar = document.querySelectorAll('a');
navBar.forEach((item,i) =>{
  item.textContent = Object.values(siteContent['nav'])[i]
});
let navMenu = document.querySelector('nav');
let childNav = document.createElement('a')
childNav.textContent= "More Information";
childNav.style.color = 'red';
navMenu.appendChild(childNav);
let prependNav = document.createElement('a')
prependNav.textContent = "Our Story";
prependNav.style.color = 'red';
navMenu.prepend(prependNav);

console.log(navBar);

//CTA
const ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = siteContent['cta']['h1'];
console.log(ctaH1);

const ctaBtn = document.querySelector('.cta-text button');
ctaBtn.textContent = siteContent['cta']['button']; 
console.log(ctaBtn);

const ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src','img/header-img.png', siteContent['cta']['img-src']);
console.log(ctaImage);

//MAIN TEXT AND IMAGE
const mainH4 = document.querySelectorAll('.text-content h4');
mainH4[0].textContent = (siteContent['main-content']['features-h4']);
mainH4[1].textContent = (siteContent['main-content']['about-h4']);
mainH4[2].textContent = (siteContent['main-content']['services-h4']);
mainH4[3].textContent = (siteContent['main-content']['product-h4']);
mainH4[4].textContent = (siteContent['main-content']['vision-h4']);
console.log(mainH4);

const mainText = document.querySelectorAll('.text-content p');
mainText[0].textContent = (siteContent['main-content']['features-content']);
mainText[1].textContent = (siteContent['main-content']['about-content']);
mainText[2].textContent = (siteContent['main-content']['services-content']);
mainText[3].textContent = (siteContent['main-content']['product-content']);
mainText[4].textContent = (siteContent['main-content']['vision-content']);
console.log(mainText);

const middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', 'img/mid-page-accent.jpg', siteContent['main-content']['middle-img-src']);
console.log(middleImage);

//CONTACT TEXT

const contactText = document.querySelector('.contact h4');
contactText.textContent = (siteContent['contact']['contact-h4']);
console.log(contactText);

const contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = (siteContent['contact']['address']);
contactInfo[1].textContent = (siteContent['contact']['phone']);
contactInfo[2].textContent = (siteContent['contact']['email']);
console.log(contactInfo);

//FOOTER TEXT
const footerText = document.querySelector('footer p');
footerText.textContent = (siteContent['footer']['copyright']);
console.log(footerText);