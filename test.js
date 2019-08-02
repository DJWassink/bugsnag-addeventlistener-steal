const bugsnag = require('@bugsnag/js');

bugsnag({
    apiKey: 'bla',
    endpoint: 'https://notify.bugsnag.com'
});

const div = document.createElement('div');
div.addEventListener('click', () => alert('hiya'));
div.style.width = '500px';
div.style.height = '500px';
div.style.background = 'pink';

document.body.appendChild(div);
