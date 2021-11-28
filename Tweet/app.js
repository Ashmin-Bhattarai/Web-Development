const tweetForm = document.querySelector('#tweetForm');
const ul = document.querySelector('#tweet');

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const userNameInput = tweetForm.elements.username
    const userTweetsInput = tweetForm.elements.tweets
    if (userTweetsInput.value !== '' && userNameInput.value !== '') {

        addTweets(userNameInput.value, userTweetsInput.value);
        userNameInput.value = '';
        userTweetsInput.value = '';
    } else {
        alert('Please fill in the form');
    }

});

function addTweets(username, tweets) {
    const li = document.createElement('li');
    const bold = document.createElement('b');
    bold.append(username);
    li.append(bold);
    li.append(`- ${tweets}`);
    ul.append(li);
}