var items = ["Given the choice of anyone in the world, whom would you want as a dinner guest?", "Would you like to be famous? In what way?", "Before making a phone call, do you ever rehearse what you’re going to say? Why?", "What would constitute a perfect day for you?", "When did you last sing to yourself? To someone else?","If you were able to live to the age of 90 and retain either the mind or body of a 30-year old for the last 60 years of your life, which would you choose?","Do you have a secret hunch about how you will die?","Do you have a secret hunch about how you will die?",
"Name three things you and your partner appear to have in common.",
"For what in your life do you feel most grateful?",
"If you could change anything about the way you were raised, what would it be?",
"Take four minutes and tell you partner your life story in as much detail as possible.",
"If you could wake up tomorrow having gained one quality or ability, what would it be?",
"If a crystal ball could tell you the truth about yourself, your life, the future, or anything else, what would you want to know?",
"Is there something that you’ve dreamed of doing for a long time? Why haven’t you done it?",
"What is the greatest accomplishment of your life?",
"What do you value most in a friendship?",
"What is your most treasured memory?",
"What is your most terrible memory?",
"If you knew that in one year you would die suddenly, would you change anything about the way you are living now? Why?",
"What does friendship mean to you?",
"What roles do love and affection play in your life?",
"Alternate sharing something you consider a positive characteristic of your partner. Share a total of five items.",
"How close and warm is your family? Do you feel your childhood was happier than most other people’s?",
"How do you feel about your relationship with your mother?",
"Make three true we statements each. For instance, we are both in this room feeling…",
"Complete this sentence: I wish I had someone with whom I could share…",
"If you were going to become a close friend with your partner, please share what would be important for him or her to know.",
"Tell your partner what you like about them: Be honest this time, saying things that you might not say to someone you’ve just met.",
"Share with your partner an embarrassing moment in your life.",
"When did you last cry in front of another person? By yourself?",
"Tell your partner something that you like about them already.",
"What, if anything, is too serious to be joked about?",
"If you were to die this evening with no opportunity to communicate with anyone, what would you most regret not having told someone? Why haven’t you told them yet?",
"Your house, containing everything you own, catches fire. After saving your loved ones and pets, you have time to safely make a final dash to save any one item. What would it be? Why?",
"Of all the people in your family, whose death would you find most disturbing? Why?",
"Share a personal problem and ask your partner’s advice on how he or she might handle it. Also, ask your partner to reflect back to you how you seem to be feeling about the problem you have chosen."
];
var filtered = new Array();

var test = ["A one","A two","A skiddly diddly doo"];
var player_1 = document.getElementById("player-1");
var player_2 = document.getElementById("player-2");
var n = 0;
var button = document.getElementById("btn-next");
var ans = document.getElementById("answ");
var reset = document.getElementById("btn-restart");

window.onload = function(){
    button.onclick = function() {
      n += 1;
      var l = Math.floor(Math.random()*items.length);
      player_next(n);
      console.log(items[l]);
      answer(items,l); 
      filtered.push(items[l]);
      console.log(filtered);
      items.splice(l,1);
      console.log(items.length);

    };
    reset.onclick = function(){
      items = filtered;
      console.log(items);
  
    };
  
  
  };



function random_item(item,n)
{
return item[n];

}

function filter_array(arr, l){
  return arr[l]
}

function player_next(n){
    
    if(n%2 == 0){
    player_1.style.display = "none";
    player_2.style.display = "block";
   
  }

  else {
     player_1.style.display = "block";
    player_2.style.display = "none";
   
       }
  
}

function answer(arr,n){
  x= arr.length;
  if(x == 0){
    ans.innerHTML = "<p> GAME OVER! </p>";
  }else{
  ans.innerHTML = "<p>"+ random_item(arr,n) + "</p>";
  }
  
}
