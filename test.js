import niceQuotes from './nice-quotes.js';

let failures = 0;

document.querySelectorAll('tbody tr').forEach(row => {
    const [input, output, expected, passed] = row.querySelectorAll('td');
    const result = niceQuotes(input.textContent);
    output.textContent = result;
    if (expected.textContent === result) {
        passed.textContent = '✔️';
    } else {
        passed.textContent = '❌';
        failures++;
    }
});

const results = document.querySelector('#results');
if (failures === 0) {
    results.textContent = 'All tests passed';
} else {
    results.textContent = `${failures} test${failures === 1 ? '' : 's'} failed`;
}