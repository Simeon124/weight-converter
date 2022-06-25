var ibsInput = document.getElementById('ibs-input')

document.getElementById('output').style.visibility = 'hidden';

ibsInput.addEventListener('input', function(e) {
  document.getElementById('output').style.visibility = 'visible';

  var lbs = e.target.value;

  var gramOutput = document.querySelector('.grams-output');

  gramOutput.innerHTML = lbs / 0.0022046;

  var kgOutput = document.querySelector('.kg-output');

  kgOutput.innerHTML = lbs / 2.2046;

  var ozOutput = document.querySelector('.oz-output');

  ozOutput.innerHTML = lbs * 16;


})
