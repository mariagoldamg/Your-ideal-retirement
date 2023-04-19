const buttonOne = document.querySelector(`#One`);
const buttonTwo = document.querySelector(`#Two`);
const img = document.querySelector(`#myImage`);
const text = document.querySelector(`h2`);

buttonOne.addEventListener(`click`, yes);
buttonTwo.addEventListener(`click`, no);

function yes(){
    img.setAttribute("src", "https://images.unsplash.com/photo-1608019527897-238a401a7b7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
    text.innerHTML = "Do you like cooking or baking?"
    buttonOne.innerHTML = "YES";
    buttonTwo.innerHTML = "NO";

    buttonOne.addEventListener(`click`, yesTwo);
    buttonTwo.addEventListener(`click`, noTwo);
}

function yesTwo() {
    img.setAttribute("src", "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80");
    text.innerHTML = "How about opening a little bakery or a restaurant?";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
}

function noTwo() {
    img.setAttribute("src", "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80");
    text.innerHTML = "May be you love hosting people?";
    buttonOne.innerHTML = "YES";
    buttonTwo.innerHTML = "NO";

    buttonOne.addEventListener(`click`, yesThree);
    buttonTwo.addEventListener(`click`, noThree);
}

function yesThree() {
    img.setAttribute("src", "https://images.unsplash.com/photo-1505916349660-8d91a99c3e23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
    text.innerHTML = "Open a little B&B and enjoy meeting new people every day";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
}
function noThree() {
    img.setAttribute("src", "https://images.unsplash.com/photo-1513159446162-54eb8bdaa79b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
    text.innerHTML = "Just enoy yourself and get involved in your community events";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
}

function no(){
    img.setAttribute("src", "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
    text.innerHTML = "Do you want to move somewhere in particular?"
    buttonOne.innerHTML = "YES";
    buttonTwo.innerHTML = "NO";

    buttonOne.addEventListener(`click`, yesFour);
    buttonTwo.addEventListener(`click`, noFour);
}

function yesFour() {
    img.setAttribute("src", "https://images.unsplash.com/photo-1651613543604-195861551d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
    text.innerHTML = "You alredy found your ideal place! Go for it!";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
}

function noFour(){
    img.setAttribute("src", "https://images.unsplash.com/photo-1499591934245-40b55745b905?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80");
    text.innerHTML = "Do you enjoy travelling?"
    buttonOne.innerHTML = "YES";
    buttonTwo.innerHTML = "NO";

    buttonOne.addEventListener(`click`, yesFive);
    buttonTwo.addEventListener(`click`, noFive);
}

function yesFive() {
    img.setAttribute("src", "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=811&q=80");
    text.innerHTML = "Maybe it's time to travel the world and try living in different countries!";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
}

function noFive() {
    img.setAttribute("src", "https://images.unsplash.com/photo-1483546363825-7ebf25fb7513?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
    text.innerHTML = "Don't know what to tell you. Maybe it's time to get to know yourself a little bit better?";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
}