// Button ID genera event
const genera = document.getElementById('genera')

// Button ID annulla event
const annulla = document.getElementById('annulla')
// Button genera action event
genera.addEventListener('click', function () {
    const nameSurname = document.getElementById('nameSurname').value
    const km = document.getElementById('km').value
    const ageSelect = document.getElementById('age-select').value
    const fullPrice = km * 0.21
    let discount = 0;
    if (ageSelect === 'minorenne') {
        discount = 20;
    } else if (ageSelect === 'over65') {
        discount = 40;
    }
    const discountPrice = fullPrice - (fullPrice * discount / 100);
    document.getElementById('prezzoBiglietto').innerHTML = discountPrice.toFixed(2) + ' ' + '&euro;'
    document.getElementById('nomeUtente').innerHTML = nameSurname
})


