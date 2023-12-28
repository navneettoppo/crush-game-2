var itemsUrl = 'https://docs.google.com/spreadsheets/d/1e1K0k_pKKrO801hqFrTPRVq26eSSm0UtABQqaprm3ig/gviz/tq?tqx=out:json';
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
            var json = JSON.parse(data.substring(47).slice(0, -2));
            json.table.rows.forEach(row => {
                items.push(row.c[0].v);
            });
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
