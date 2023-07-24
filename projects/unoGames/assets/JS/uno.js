//--Div içerisinde bulunan kartlarımızı unoCards dizisine ekliyoruz ve karıştırıyoruz--//
let unoCards = []; // unoCards isimli bir boş dizi oluşturuyoruz.
let unoCardDivs = document.querySelectorAll(".card"); // Elimizde bulunan 40 kartı unoCardsDivs değişkenine atıyoruz.

for (let i = 0; i < unoCardDivs.length; i++) {  // For döngüsü ile tüm uno kartlarımızı dizimize ekliyoruz.
  unoCards.push(unoCardDivs[i]); // Her birini dizinin sonuna ekliyoruz.
}

unoCards.sort(function() { return 0.5 - Math.random() }); // Kartlarımızın rastgele sıralanmasını sağlıyoruz.

let container = document.getElementById("container");
unoCards = Array.from(unoCards); // unoCardsı from fonksiyonu ile tekrar diziye dönüştürüyoruz.
unoCards.sort(function() { return 0.5 - Math.random() });

for (let i = 0; i < unoCards.length; i++) {
  let card = unoCards[i];
  container.insertBefore(card, container.childNodes[Math.floor(Math.random() * container.children.length)]); // insertBefore() fonksiyonunu kullanarak kart öğesini ekliyoruz. Bu, Uno kartlarının sırasını yeniden düzenliyor ve karıştırıyor.
}
//-------------------------------------------------------------------------------------//

//--4 Oyuncuya  karışık bir şekilde kartlarını dağıtıyoruz.--//
for (let i = 0; i < unoCardDivs.length; i++) {
    unoCards.push(unoCardDivs[i]);
  }
  let players = document.querySelectorAll(".player");
  let playerCards = document.querySelectorAll(".cards");

  for (let i = 0; i < players.length; i++) {
    let cards = unoCards.splice(0, 7);
    let playerCardDivs = playerCards[i];

    for (let j = 0; j < cards.length; j++) {
      playerCardDivs.appendChild(cards[j]);
    }
  }
//--------------------------------------------------------------//

//--Oyunun başlangıcında en üstteki kartı belirliyoruz--//
let topCard = unoCards.shift();
let topCardDiv = document.getElementById("top-card");
topCardDiv.appendChild(topCard);
let lastCardPlayed = topCard;
//--------------------------------------------------------------//

// Oyuncuların sırasını belirliyoruz--//
let playerTurn = 0;
let currentPlayer = players[playerTurn];
currentPlayer.classList.add("active");
//--------------------------------------------------------------//


// Oyuncu değiştirme işlemi --//
function changePlayer() {
  currentPlayer.classList.remove("active");
  playerTurn++;
  if (playerTurn >= players.length) {
    playerTurn = 0;
  }
  currentPlayer = players[playerTurn];
  currentPlayer.classList.add("active");
  checkWinner();
}
//--------------------------------------------------------------//

// Oyuncunun doğru hamle yapacak kartı yoksa desteden kart çekmesini sağlıyoruz //
function drawCard() {
  let currentPlayer = document.querySelector(".player.active");
  let card = unoCards.shift();
  currentPlayer.querySelector(".cards").appendChild(card);
  changePlayer();
}
//--------------------------------------------------------------//

//--Kart çekme işlemi--//
let drawPile = document.getElementById("draw-pile");
let discardPile = document.getElementById("discard-pile");
//--------------------------------------------------------------//

//--Kart çıkarma işlemi--//
let cardPiles = document.querySelectorAll(".cards");

cardPiles.forEach(function(cardPile) {
  cardPile.addEventListener("click", function(e) {
    let currentPlayer = document.querySelector(".player.active");
    if (cardPile.parentNode === currentPlayer) {
      let card = e.target.closest(".card");
      let cardColor = card.getAttribute("data-color");
      let cardValue = card.getAttribute("data-value");
      let topCardColor = topCard.getAttribute("data-color");
      let topCardValue = topCard.getAttribute("data-value");

      if (cardColor === topCardColor || cardValue === topCardValue) {
        // kart eşleşirse  yapılan işlemlerimiz//
        discardPile.appendChild(card);
        topCard = card;
        topCardDiv.innerHTML = '';
        topCardDiv.appendChild(topCard);
        changePlayer();
      } else {
        // kart eşleşmezse, sıradaki oyuncuya geç işlemimiz //
        alert("Üzgünüm sıra rakibine geçti :(");
        drawCard();
      }
    }
  });
});

//--Oyuncunun tüm kartlarını kullanması yani oyunu kazanması--//
function checkWinner() {
  for (let i = 0; i < players.length; i++) {
    let playerCards = players[i].querySelectorAll(".card");
    container.innerHTML = '';
    if (playerCards.length === 0) {
      alert("Tebrikler oyunu kazandınız :)");
      location.reload();
    }
  }
}
//--------------------------------------------------------------//