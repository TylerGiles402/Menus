function app(){
  nav();
  initRoot();
  displayNote1Page();
  displayNote2Page();
  displayNote3Page();
  displayNote4Page();
  displayNote5Page();
}

function nav(){
  var navEle = document.createElement("nav");
  var DisplayNoteButton = document.createElement("button");
  DisplayNoteButton.innerHTML="Display Note #1";
  DisplayNoteButton.addEventListener("click", function(){
    displayNote1Page();
  })
  var DisplayNoteButton2 = document.createElement("button");
  DisplayNoteButton2.innerHTML="Display Note #2";
  DisplayNoteButton2.addEventListener("click", function(){
    displayNote2Page();
  })
  var DisplayNoteButton3 = document.createElement("button");
  DisplayNoteButton3.innerHTML="Display Note #3";
  DisplayNoteButton3.addEventListener("click", function(){
    displayNote3Page();
  })
  var DisplayNoteButton4 = document.createElement("button");
  DisplayNoteButton4.innerHTML="Display Note #4";
  DisplayNoteButton4.addEventListener("click", function(){
    displayNote4Page();
  })
  var DisplayNoteButton5 = document.createElement("button");
  DisplayNoteButton5.innerHTML="Display Note #5";
  DisplayNoteButton5.addEventListener("click", function(){
    displayNote5Page();
  })
  var DisplayNoteButton6 = document.createElement("button");
  DisplayNoteButton6.innerHTML="Display Note #6";
  DisplayNoteButton6.addEventListener("click", function(){
    displayNote6Page();
  })
  var addNotesButton = document.createElement("button");
  addNotesButton.innerHTML="Add Notes";
  addNotesButton.addEventListener("click", function(){
    addNotesPage();
  })
  navEle.appendChild(DisplayNoteButton);
  navEle.appendChild(DisplayNoteButton2);
  navEle.appendChild(DisplayNoteButton3);
  navEle.appendChild(DisplayNoteButton4);
  navEle.appendChild(DisplayNoteButton5);
  navEle.appendChild(DisplayNoteButton6);
  navEle.appendChild(addNotesButton);
  document.body.appendChild(navEle);
}

function initRoot(){
  var root = document.createElement("div")
  root.classList.add("root");
  root.innerHTML="Stuff"
  document.body.appendChild(root);
}

function displayNote1Page(){
  document.body.querySelector(".root").innerHTML="1. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini."
}

function displayNote2Page(){
  document.body.querySelector(".root").innerHTML="2. Rub against owner because nose is wet. Sit and stare loved it, hated it, loved it, hated it attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to do that now i shall wash myself intently purr when being pet the cat was chasing the mouse. While happily ignoring when being called lick butt and make a weird face yet stares at human while pushing stuff off a table fall asleep on the washing machine kitty scratches couch bad kitty. Cats woo please stop looking at your phone and pet me really likes hummus, for scream for no reason at 4 am so show belly, fish i must find my red catnip fishy fish or a nice warm laptop for me to sit on. I am the best all of a sudden cat goes crazy eat plants, meow, and throw up because i ate plants yet push your water glass on the floor. Stares at human while pushing stuff off a table let me in let me out let me in let me out let me in let me out who broke this door anyway for curl up and sleep on the freshly laundered towels but leave dead animals as gifts. Flex claws on the human's belly and purr like a lawnmower."
}

function displayNote3Page(){
  document.body.querySelector(".root").innerHTML="3. Bacon ipsum dolor amet shankle sausage cow chuck leberkas pancetta strip steak short loin ham brisket turkey jowl prosciutto. Hamburger pastrami pork chop, boudin pancetta kevin bresaola beef pig t-bone cow frankfurter tail. Shankle beef burgdoggen, tenderloin pork belly turkey swine kevin leberkas spare ribs bresaola ham hock corned beef pancetta meatloaf. Short ribs sausage pork belly cow. Filet mignon turducken cow spare ribs sausage pancetta salami landjaeger."
}

function displayNote4Page(){
  document.body.querySelector(".root").innerHTML="4. heckin good boys I am bekom fat aqua doggo. Dat tungg tho snoot length boy wow such tempt snoot dat tungg tho, noodle horse adorable doggo wow very biscit doggo. Thicc you are doing me a frighten mlem yapper floofs fat boi, I am bekom fat doing me a frighten much ruin diet pats long water shoob, sub woofer h*ck borkdrive mlem. Boofers such treat wow such tempt fluffer, boof. I am bekom fat shoob fluffer borking doggo thicc boof, pats wrinkler wow very biscit."
}

function displayNote5Page(){
  document.body.querySelector(".root").innerHTML="5. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. I am Groot."
}

function displayNote6Page(){
  document.body.querySelector(".root").innerHTML="6. Lorem ipsum dolor sit amet, sea ne affert consul regione, ut liber eripuit quo. Augue ancillae nam ea, ius an invidunt democritum. Duis officiis mei eu, nisl ridens at sed, te duo omnis iuvaret. Eam deseruisse expetendis eu, has ex vocibus ullamcorper disputationi. Nonumy everti laboramus ne cum, ex nam reque porro"
}

function addNotesPage(){
  document.body.querySelector(".root").innerHTML="Add Notes Here"
}

app();