

// Part 1: Getting Started
// Explore the provided code to familiarize yourself with important aspects
// such as current DOM structure, element IDs, and available CSS classes.

// Take five minutes to familiarize yourself with CSS Custom Properties 
// (variables) - they are an amazing addition to CSS. 
// If you are familiar with using variables with SASS/LESS pre-processors, 
// CSS Custom Properties are similar but far more powerful because they are dynamic 
// (their values can be changed during runtime) - and they are built into the CSS language!

// Start the project by building a main content element using the following steps:

// Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector('main');

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = 'var(--main-bg)';

// Set the content of mainEl to <h1>DOM Manipulation</h1>.
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add('flex-ctr');


// Part 2: Creating a Menu Bar
// Next, create a blank menu bar that we can use to later add some interactivity to the page:

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.querySelector('#top-menu');

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = '100%';

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');


// Part 3: Adding Menu Buttons
// Copy the following data structure to the top of your index.js file; you will use it to create your menu buttons.
// If this data was provided by an external source, it would allow that source to control how our menu is built. 
// We would simply implement the logic, and allow the data to decide what displays. 
// This is not typically done with menus, but it can be done with any DOM element.


// Menu data structure
// let menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
// ];

"var menuLinks = [
{ text: 'about', href: '/about' },
{
    text: 'catalog', href: '#', subLinks: [
        { text: 'all', href: '/catalog/all' },
        { text: 'top selling', href: '/catalog/top' },
        { text: 'search', href: '/catalog/search' },
    ]
},
{
    text: 'orders', href: '#', subLinks: [
        { text: 'new', href: '/orders/new' },
        { text: 'pending', href: '/orders/pending' },
        { text: 'history', href: '/orders/history' },
    ]
},
{
    text: 'account', href: '#', subLinks: [
        { text: 'profile', href: '/account/profile' },
        { text: 'sign out', href: '/account/signout' },
    ]
},
]; "

// Select the topMenuEl element
document.querySelector('#top-menu');

// Iterate over the menuLinks array
menuLinks.forEach(link => {

    // Create an <a> element
    const menuLink = document.createElement('a');

    // Set the href attribute
    menuLink.setAttribute('href', link.href);

    // Set the content/text of the <a> element
    menuLink.textContent = link.text;

    // Append the <a> element to topMenuEl
    topMenuEl.appendChild(menuLink);
});

// Dom Manipulation Part 2 starts here

// Part 3: Creating the Submenu
// A submenu serves as an additional menu for users to select from, 
// and offers more specific context to the top-level menu's options. 
// We will start by using some DOM manipulation techniques to format the submenu 
// before adding interaction to each menu component.
// All future steps should be completed within the index.js file.

// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl
const subMenuEl = document.querySelector('#sub-menu');

// Set the height subMenuEl element to be "100%".
subMenuEl.style.height = '100%';

// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around');

// Now, change the position of the submenu to temporarily hide it. 
// Later, we will make the submenu appear dynamically based on user interaction:

// Set the CSS position property of subMenuEl to the value of absolute
subMenuEl.style.position = 'absolute';

// Set the CSS top property of subMenuEl to the value of 0
subMenuEl.style.top = '0';

// Part 4: Adding Menu Interaction
// In order to add submenu links, we will need to restructure the menuLinks array within index.js.
// Update the menuLinks array to the following:

// "var menuLinks = [
//   {text: 'about', href: '/about'},
//   {text: 'catalog', href: '#', subLinks: [
//     {text: 'all', href: '/catalog/all'},
//     {text: 'top selling', href: '/catalog/top'},
//     {text: 'search', href: '/catalog/search'},
//   ]},
//   {text: 'orders', href: '#' , subLinks: [
//     {text: 'new', href: '/orders/new'},
//     {text: 'pending', href: '/orders/pending'},
//     {text: 'history', href: '/orders/history'},
//   ]},
//   {text: 'account', href: '#', subLinks: [
//     {text: 'profile', href: '/account/profile'},
//     {text: 'sign out', href: '/account/signout'},
//   ]},
// ];"

// In order to add interaction:

// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll('a');

// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', function (event) {

    // The first line of code of the event listener function should call the event object's preventDefault() method.
    event.preventDefault();

    // The second line of code of the function should immediately return if the element clicked was not an <a> element.
    if (!event.target.matches('a')) return;

    // Log the content of the <a> to verify the handler is working.
    console.log(event.target.textContent.toLowerCase());

    // Now that we have references to each of these links, and a registered event listener, 
    // we will want to add a toggled "active" state to each menu item, 
    // showing whether or not it is currently selected:

    // The event listener should add the active class to the <a> element that was clicked, 
    // unless it was already active, in which case it should remove it.
    // The event listener should remove the active class from each other <a> element in topMenuLinks - 
    // whether the active class exists or not.
    // Hint: Removing a non-existent class from an element does not cause an error!
    topMenuLinks.forEach(link => {
        if (link !== event.target) {
            link.classList.remove('active');
        }
    });
    event.target.classList.toggle('active');
});

// Part 5: Adding Submenu Interaction

// Within the same event listener, we want to toggle the submenu between active and non-active states. 
// First, we will set the submenu to show or hide itself depending on the menu state:

// Cache the subMenuEl at the beginning
const subMenuEl = document.querySelector('#sub-menu');

// Within the event listener, if the clicked <a> element does not yet have a class 
// of "active" (it was inactive when clicked):

topMenuEl.addEventListener('click', function (event) {
    event.preventDefault();

    const clickedLink = event.target;

    // If the clicked <a> element's "link" object within menuLinks has a subLinks property
    // (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
    // Otherwise, set the CSS top property of subMenuEl to 0.
    // Hint: Caching the "link" object will come in handy for passing its subLinks array later.
    if (!clickedLink.matches('a')) return;

    console.log(clickedLink.textContent.toLowerCase());

    topMenuLinks.forEach(link => {
        if (link !== clickedLink) {
            link.classList.remove('active');
        }
    });

    clickedLink.classList.toggle('active');

    // Get the corresponding link object from menuLinks
    const matchLink = menuLinks.find(link => link.text.toLowerCase() === clickedLink.textContent.toLowerCase());

    if (matchLink && matchLink.subLinks) {
        subMenuEl.style.top = clickedLink.classList.contains('active') ? '100%' : '0';

        // Calling buildSubmenu and passing the array of sub-links as an argument.
        buildSubmenu(correspondingLink.subLinks);
    } else {
        subMenuEl.style.top = '0';
    }
});




// The submenu needs to be dynamic based on the clicked link.

// To facilitate that, we will create a helper function called buildSubmenu that does the following:
function buildSubmenu(subLinks) {

    // Clear the current contents of subMenuEl.
    subMenuEl.innerHTML = '';

    // Iterate over the subLinks array, passed as an argument, and for each "link" object:
    subLinks.forEach(subLink => {

        // Create an <a> element
        const submenuLink = document.createElement('a');

        // Add an href attribute to the <a>, with the value set by the href property of the "link" object.
        submenuLink.setAttribute('href', subLink.href);

        // Set the element's content to the value of the text property of the "link" object.
        submenuLink.textContent = subLink.text;

        // Append the new element to the subMenuEl.
        subMenuEl.appendChild(submenuLink);
    });
}

// Once you have created your helper function, include it in the event listener within
// the same logic that shows the submenu, remembering to pass the array of sub-links as an argument.

// The menu is almost complete! Now, we need to add interactions to the submenu items themselves:

// Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener('click', function (event) {

    // The first line of code of the event listener function should call the event object's preventDefault() method.
    event.preventDefault();

    // The second line of code within the function should immediately return if the element clicked was not an <a> element.
    const clickedSubMenuItem = event.target;
    if (!clickedSubMenuItem.matches('a')) return;

// Log the content of the <a> to verify the handler is working.
    console.log(clickedSubMenuItem.textContent.toLowerCase());
// Next, the event listener should set the CSS top property of subMenuEl to 0.
    subMenuEl.style.top = '0';
// Remove the active class from each <a> element in topMenuLinks.
    topMenuLinks.forEach(link => {
        link.classList.remove('active');
    });

// moved down to else statement
// Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
//     mainEl.innerHTML = `<h1>${clickedSubMenuItem.textContent}</h1>`;
// });

// If the ABOUT link is clicked, an <h1>About</h1> should be displayed.
if (clickedSubMenuItem.textContent.toLowerCase() === 'about') {
    mainEl.innerHTML = '<h1>About</h1>';
  } else {
    // Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
    mainEl.innerHTML = `<h1>${clickedSubMenuItem.textContent}</h1>`;
  }
});







