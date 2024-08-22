function shuffleCards(topHalf, bottomHalf, deck = []) {
    if (topHalf.length === 0 && bottomHalf.length === 0) return deck;
    if (topHalf.length > 0) {
      deck.push(topHalf[0]);
      topHalf = topHalf.slice(1);
      // topHalf.splice(0, 1);
    }
    if (bottomHalf.length > 0) {
      deck.push(bottomHalf[0]);
      bottomHalf = bottomHalf.slice(1);
      // bottomHalf.splice(0, 1);
    }
    return shuffleCards(topHalf, bottomHalf, deck);
  }
  
  
    // Base case: if topHalf length and bottomHalf length both equal 0, return deck
    // If topHalf length is greater than 0,
        // Push topHalf at index 0 to deck
        // topHalf equals topHalf.slice(1)
    // If bottomHalf length is greater than 0,
        // Push bottomHalf at index 0 to deck
        // bottomHalf equals bottomHalf.slice(1)
    // Return shuffleCards passing topHalf, bottomHalf, deck
  
  
  // UNCOMMENT TO TEST YOUR WORK
  const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
  const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
  console.log(shuffleCards(topHalf, bottomHalf));
    /*-> ['Queen of Diamonds',
          'Jack of Hearts',
          'Five of Hearts',
          'Ten of Spades',
          'Ace of Spades',
          'Eight of Clubs',
        ]
    */