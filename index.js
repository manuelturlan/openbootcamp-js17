const myName = 'Manuel';
const mySurName = 'Turlan';

const me = {
    myName,
    mySurName,
}

sessionStorage.setItem('Yo', JSON.stringify(me))
localStorage.setItem('Yo', JSON.stringify(me))

document.cookie = JSON.stringify(me) + "nombre= Persona; expires=" + new Date(2022, 7, 1).toUTCString();