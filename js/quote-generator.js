/**
 * Created by John Foley on 11/2/14.
 * thisfoley.ninja
 */

jQuery(function ($) {

  var quotes = [];

  quotes.push("There rang a sultry kind of whisper in her head.");
  quotes.push("He did not listen well for detail, but grasped the general matters " +
  "at hand with little effort. This ability to be ignorant, but only slightly so, made him " +
  "invaluable in the business world.");
  quotes.push("He loved being near the water, as he was in Dammam, but more importantly he could " +
  "buy banned books––that is to say, the Jordanian and Egyptian governments banned different books " +
  "than the Saudi King did.");
  quotes.push("It must be stated that she had known this for some time, years in fact.");
  quotes.push("Whirlwinds never did work for Ann.");
  quotes.push("After Ann had spent so much time creating an alternate version of their relationship, " +
  "a proxy that Robert would never hear, she could end it all so simply, with likely less than five sentences.");
  quotes.push("What lessons could I plan to expose those people who hinder progression? Would that " +
  "not be dismissive or exclusionary?");
  quotes.push("Doubt.");
  quotes.push("She planned on no more than 10 days in the area. That time would allow her the " +
  "48 hours she sought to counteract jet lag, the furious initial research, which would amount to " +
  "36-48 hours depending on diet and attitude, a 24 hour recovery period, another 72 dedicated research " +
  "and planning hours and time left over in case her schedule need to be bent or flexed in small ways.");
  quotes.push("Personally, she also hated the symbolism of caves, of emerging into the sun. Her idea of " +
  "what she was to see had been completely wrong.");
  quotes.push("This was one of the first times that they sat across from one another in silence.");
  quotes.push("The readings and writings: The conversations with students: Where I go: What I eat: H" +
  "ow I think: all of it floats by me on this small amount of Earth that I inhabit.");
  quotes.push("James had reduced where he was headed to only an idea.");
  quotes.push("It would be a small comfort to him how cheap the cigarettes were in Saudi. In the wake of the Arab " +
  "Spring, the King had subsidized many things in order to keep his people in line.");
  quotes.push("This fondness came from an intense paranoia as a child. His grandparents, who instilled in him a fear " +
  "of perdition that he could not hide, took him to church more often than his parents.");
  quotes.push("He could not tell his stories or have any kind of nostalgia about his year because of its location. " +
  "He learned with time that he was mistaken, that most people did not harbor such ardently negative thoughts as " +
  "he imagined, but still he resented many of the people around him.");
  quotes.push("New Years with all of those expats I had never met. You were able to draw me away " +
  "from what my mind dwelt on.");
  quotes.push("A spirituality came into his breast, not a playful loving of God, but a recognition of the life " +
  "that he had learned so much from: how he had resented and feared the world, which then informed his detached " +
  "point of view, which subsequently drove him to recognize his own fallibility and ignorance.");
  quotes.push("Old Man: Amreekee. . .");
  quotes.push("They left the nastiness of such brutalities to others, those who had been trained to maim and " +
  "torture. Simple employment begets simple employees.");
  quotes.push("You have no idea what the late nights have been like, studying and scrambling to do well. I " +
  "wish you did. I'll be moving to the States in the Fall. Use your money elsewhere.");
  quotes.push("Women and girls were not allowed inside of that particular restaurant, it was for men only. And so " +
  "there was a masculine, even misogynistic harshness to the clatter and klang.");
  quotes.push("He had been immersed in a place he knew so little about that he only observed and listened. He did " +
  "not want to make unwholesome judgments of what surrounded him, and so in that first week he spoke very " +
  "little outside of teaching.");
  quotes.push("She had nothing of me and would not until I started thinking about all kinds of different " +
  "things: community, non violence, literacy, voting. . . It was devastating to think that I would have to " +
  "study to make her happy.");
  quotes.push("The Earth moved upon it axis without delay. The Sun provided invaluable energy to the planet and " +
  "its beings. All around animals lived and ate without regard to James and his thoughts.");
  quotes.push("Do you want to see your view, sir?");
  quotes.push("Under the glow of the carport, Patrick noticed that the doormen and bellboys all looked frantic, " +
  "and one could say, even slightly hungry as they collected his single bag and walked him through the " +
  "sliding glass inside.");
  quotes.push("The words of the drinkers vibrated through the dark woods of the place and it was as if Patrick " +
  "could almost feel their socializing being articulated on his goose-pimpled skin. ");
  quotes.push("But some kind of contradiction met them at all of the positives. Some deeply embedded " +
  "hesitation moved them. They spoke no Arabic.");
  quotes.push("He often knew that his mind would be clouded as he recited. This built into his personal style " +
  "a kind of tension that attracted to him some younger Qatari followers. It was that they could sense the more " +
  "modern anxieties in his voice that drew them to him.");
  quotes.push("There’s progress. Father, Son and the Holy Market Capital.");
  quotes.push("What happened then was that they tried to remove my force from my mouth and they did, albeit " +
  "temporarily. But in stopping short of ripping out my tongue, they allowed me to maintain my voice.");
  quotes.push("Some things troubled the building, however. Some people did not want to be within it. " +
  "These people hoped to never return to that building: to forget it.");
  quotes.push("Thematic and motif did not allude him, but they frustrated him in their indefiniteness. And so, " +
  "he enjoyed visiting an occasional museum to engage in the frustrated catharsis of someone who takes pleasure " +
  "in being dismissive in front of large groups of people.");
  quotes.push("The Maghrib would not be for another hour and one half. Patrick had no knowledge of this, but " +
  "had noticed the gap in the afternoon previous. The scattered nature his thoughts had assumed that afternoon " +
  "was beginning to tire him. ");
  quotes.push("With all of this, the city grew, increased itself, used the humans to gather its own strength––cities " +
  "do not care who dies when a building is constructed or when a road is paved on a too hot day.");
  quotes.push("Did Americans invent gentrification? Seems like a thing they'd cook up and gladly hand out to the " +
  "rest of the world––it's cherry flavored!");
  quotes.push("Whatever truth or Truth Malcolm presented to him, he would have no chance of verifying its basis " +
  "in reality. Patrick was no inventor, but he could alter subtly the facets of his life he chose to.");

  function generateQuote() {

    var randomIndex = 1 + Math.floor(Math.random() * quotes.length);
    console.log(randomIndex);
    $(".quotes").html(quotes[randomIndex]);
  }

  document.getElementById("anotherQuote").addEventListener("click", generateQuote, false);

  $( document ).ready(function() {

    generateQuote();
  });
});
