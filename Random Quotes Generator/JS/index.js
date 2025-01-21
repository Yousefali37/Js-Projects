function generate() {
    var quotes = {
        "- Peraltago" : '"Always be Coconutting"',
        "- Hitchcock" : '"No My Wife Just Died No More Alimony Baby"',
        "- Terry Jefords" : '"Terry Hates Tests"',
        "- Jake Peralta" : '"Cool, cool, cool, cool, cool. No doubt, no doubt, no doubt."',
        "- Gina Linetti" : '"If I die, turn my tweets into a book."',
        "- Norm Scully" : '"Hello, unsolved case. Do you bring me joy? No, because you’re boring and you’re too hard. See ya."',
        "- Gina Linetti" : '"You should make me your campaign manager. I was born for politics. I have great hair and I love lying."',
        "- Gina Linetti" : '"The only thing I’m not good at is modesty, because I’m great at it."',
        "- Jake Peralta" : '"But my point is this: I don’t care what time it is. I’m always happy to be here. Nine-Nine! Nine-Niiine! A-Noine-Noine! I’m gonna keep doing it until you guys chime in. A-Noine-Noine!"'
    }
    
    // To Get the keys of the Object
    var authors = Object.keys(quotes);

    // Get the Author Name
    var author = authors[Math.floor(Math.random() * authors.length)];

    // Get the Author Quote 
    var quote = quotes[author];

    // Write The Quote in the html
    document.getElementById("quote").innerHTML = quote;

    // Write the Author Name in html 
    document.getElementById("author").innerHTML = author;

}