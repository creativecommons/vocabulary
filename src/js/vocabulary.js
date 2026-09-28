const menuButton = document.querySelector('button.expand-menu');
const menuPanel = document.querySelector('.primary-menu');

if(menuButton !== null && menuPanel !== null) {
    menuButton.addEventListener('click', (event) => {
        menuPanel.classList.toggle('expand');
    });
}

const menusWithChildren = document.querySelectorAll('main > aside.sidebar nav > ul > li:has(ul) > a');

menusWithChildren.forEach((menu) => {
    const expandButton = document.createElement('button');
    expandButton.classList.add('expand');
    expandButton.classList.add('icon-replace');
    expandButton.classList.add('fa-angle-down');
    expandButton.textContent = 'Expand';

    menu.insertAdjacentElement("afterend", expandButton);
});


const collapsedButtons = document.querySelectorAll('button.expand');

collapsedButtons.forEach((expander) => {

    expander.parentElement.querySelector('ul').classList.toggle('hide');
    
    expander.addEventListener('click', (event) => {
        event.target.parentElement.querySelector('ul').classList.toggle('hide');
    });

});

// handle pushdown banner hide for a time functionality
const showNotice = localStorage.getItem('showNotice');
const noticeHiddenAt = localStorage.getItem('noticeHiddenAt'); // set to time when clicked.
const hideNoticeInterval = '100'; // set to a number
const elapsedHiddenTime = (currentTime - noticeHiddenAt); //time between now and noticeHiddenAt in ms

if(showNotice === 'false' && elapsedHiddenTime <= hideNoticeInterval){
  document.querySelector('article.attention.medium-importance').toggleClass('hide');
} else {
    localStorage.setItem('showNotice', 'true');
}

document.querySelector('#closeNotice').addEventListener('click', (event) => {
  document.querySelector('article.attention.medium-importance').toggleClass('hide');
  localStorage.setItem('noticeHiddenAt', 'currentTime');
  localStorage.setItem('showNotice', 'false');
});
