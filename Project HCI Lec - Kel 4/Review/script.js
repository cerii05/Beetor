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

function displayReview(text) {
    document.getElementById('reviewText').value = text;
}

function addCustomReview() {
    var customReview = prompt("Enter your custom feedback:");
    if (customReview !== null && customReview !== "") {
        document.getElementById('reviewText').value = customReview;
    }
}

function submitReview() {
    var review = document.getElementById("review-comment").value;
    console.log("Review submitted: " + review);
    alert("Review submitted!");
}

document.addEventListener('DOMContentLoaded', function() {
    var stars = document.querySelectorAll('.rating span');

    function resetStars() {
        stars.forEach(function(star) {
            star.style.color = '#ddd';
        });
    }

    stars.forEach(function(star) {
        star.addEventListener('click', function() {
            var value = parseInt(star.getAttribute('data-value'));
            resetStars();
            for (var i = 0; i < value; i++) {
                stars[i].style.color = 'gold';
            }
        });
    });
});

// function goToSearch2(){
//     window.location.href = "../SearchTutor/SearchTutor.html";
// }