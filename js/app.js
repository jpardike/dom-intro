// -------------------------------------------------- DOM



// ------------------ Selection querySelector

// Select by tag
// const h1El = document.querySelector('h1');
// Select by class
// const bodyEl = document.querySelector('.special');
// Select by pseudo selector
// const secondListItemEl = document.querySelector('li:nth-child(2)');
// const firstListItemEl = document.querySelector('li:first-child');


// -------------------- Selection getElementById

// const ulEl = document.getElementById('products');


// ------------------- Selection querySelectorAll

// const allListItems = document.querySelectorAll('li'); // Returns a NodeList (not the same as an arry)

// allListItems.forEach((item) => {
//     item.style.color = 'yellow';
//     item.style.fontSize = '24px';
//     // item.style.backgroundColor = 'white';
//     // item.remove();
//     if (item.classList.contains('sale')) {
//         item.style.background = 'red';
//     }
// });

// for (let i = 0; i <a allListItems.length; i++) {
//     allListItems[i].style.color = 'yellow';
//     item.style.fontSize = '24px';
// }


// ---------------- For Of Loop (Used on an array)
// for (let item of allListItems) {
//     console.log(item);
//     item.style.color = 'yellow';
//     item.style.fontSize = '24px';
// }

// ------------------------ MODIFICATION

// innerHTML - Set/retrieve content as HTML
// textContent -set/retrieve plain text

// h1El.textContent = 'My Totally Awesome Page';

// Just Select HTML
// console.log(h1El.innerHTML);

// console.log(h1El.textContent);

// ---------------------- ELEMENT ATTRIBUTES

// getAttribute() - returns the selected attribute of an element
// setAttribute() - sets the given attribute of an element
// hasAttribute()

//  const bobaImg = document.querySelector('img');
//  const bobaImgSrc = bobaImg.getAttribute('src');
//  bobaImg.setAttribute('src', 'https://s.yimg.com/ny/api/res/1.2/soTg5zMneth9YIQz0ae_cw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://images.fatherly.com/wp-content/uploads/2018/12/darthvader-header.jpg?q=65&amp;enable=upscale&amp;w=1200');

//  console.log(bobaImgSrc);

const firstPEl = document.getElementById('first-p');
const allLatin = document.querySelectorAll('.post');
console.log(allLatin);

// function translateP() {
    // }
    
    allLatin.textContent = 'Latin is so yesterday';
