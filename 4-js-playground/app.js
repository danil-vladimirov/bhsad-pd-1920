let joseph = document.querySelector('.text');
let blueBox = document.querySelector('.colored');

function changeJoseph() {
joseph.textContent = 'This is a better text 🤖';
}

function changeColor() {
    joseph.style.setProperty( 'background-color','red' );
    joseph.style.setProperty( 'font-family','Times' );
}

function bodySkew() {
    document.body.classList.add('skew');
};

blueBox.addEventListener('mouseover', function() {
    document.body.classList.add('skew');
});

blueBox.addEventListener('mouseout', function() {
    document.body.classList.remove('skew');
});

