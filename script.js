function showInput() {
    var input = document.getElementById('help-input');
    var label = document.getElementById('help-label');
    input.style.display = 'block';
    input.focus();
    label.style.display = 'none';
    document.querySelector('.help').style.paddingLeft = '20px';
}

function hideInput() {
    var input = document.getElementById('help-input');
    var label = document.getElementById('help-label');
    if (input.value === '') {
        input.style.display = 'none';
        label.style.display = 'block';
        document.querySelector('.help').style.paddingLeft = '70px';
    }
}

function selectMethod(selectedId, method) {
    const options = document.querySelectorAll('.payment-option');
    options.forEach(option => {
        option.classList.remove('selected');
    });

    const selectedOption = document.getElementById(selectedId);
    selectedOption.classList.add('selected');

    document.getElementById('selected-method').textContent = `${method}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const selectBtn = document.querySelector('.select-btn');
    const listItems = document.querySelector('.listItems');
    const items = document.querySelectorAll('.listItems .item');

    selectBtn.addEventListener('click', () => {
        selectBtn.classList.toggle('open');
        listItems.classList.toggle('open');
    });

    items.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('checked');
        });
    });
});

function goToHome(){
    window.location.href = "index.html";
}

function goToProfile(){
    window.location.href = "../ProfilePage/ProfilePage.html";
}

function goToProfile2(){
    window.location.href = "../../ProfilePage/ProfilePage.html";
}

function goToNextPage(){
    window.location.href = "../Payment 2/Payment2.html";
}

function goToTutor(){
    window.location.href = "../TutorDetail/TutorDetail.html"
}

function goToReview(){
    window.location.href = "../Review/Review.html"
}

function goToSearch(event){
    if(event.key === "Enter" || event.keyCode === 13){
        window.location.href = "../SearchTutor/SearchTutor.html";
    }
}

document.getElementById('search-bar').addEventListener('keydown', goToSearch);

function goToSearch2(){
    window.location.href = "../SearchTutor/SearchTutor.html";
}
