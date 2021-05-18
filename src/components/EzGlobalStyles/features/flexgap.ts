// based on https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css/flexgap.js

export default [
  'flexgap',
  () => {
    // create flex container with row-gap set
    const flex = document.createElement('div');
    flex.style.display = 'flex';
    flex.style.flexDirection = 'column';
    flex.style.rowGap = '1px';

    // create two elements inside it
    flex.appendChild(document.createElement('div'));
    flex.appendChild(document.createElement('div'));

    // append to the DOM (needed to obtain scrollHeight)
    document.documentElement.appendChild(flex);
    const isSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
    flex.parentNode.removeChild(flex);

    return isSupported;
  },
] as [string, () => boolean];
