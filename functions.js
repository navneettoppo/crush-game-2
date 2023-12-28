// The URL of your published Google Sheet CSV.
var itemsUrl = 'https://drive.google.com/file/d/1B0hX_lK3fowD2vWcdocq38kiu04aCV3L/view';

var filtered = [];
var n = 0;

window.onload = function() {
    var player_1 = document.getElementById("player-1");
    var player_2 = document.getElementById("player-2");
    var button = document.getElementById("btn-next");
    var ans = document.getElementById("answ");
    var reset = document.getElementById("btn-restart");

    var items = [];

    // Fetch the CSV data.
    fetch(itemsUrl)
        .then(response => response.text())
        .then(data => {
            // Parse the CSV data into an array.
            items = data.split('\n');
            console.log(items);
        })
        .catch(error => console.error('Error:', error));

    button.onclick = function() {
        n += 1;
        var l = Math.floor(Math.random() * items.length);
        player_next(n, player_1, player_2);
        console.log(items[l]);
        answer(items, l, ans);
        filtered.push(items[l]);
        console.log(filtered);
        items.splice(l, 1);
        console.log(items.length);
    };

    reset.onclick = function() {
        items = [...filtered];
        console.log(items);
    };
};

function player_next(n, player_1, player_2) {
    if (n % 2 == 0) {
        player_1.style.display = "none";
        player_2.style.display = "block";
    } else {
        player_1.style.display = "block";
        player_2.style.display = "none";
    }
}

function answer(arr, n, ans) {
    if (arr.length == 0) {
        ans.innerHTML = "<p> GAME OVER! </p>";
    } else {
        ans.innerHTML = "<p>" + arr[n] + "</p>";
    }
}
