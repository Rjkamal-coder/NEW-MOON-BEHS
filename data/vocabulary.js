/* VOCABULARY - typed text, by grade (1 to 12) and subject. Each word is ['word','meaning'].
   Example:  5:[ {subject:'English', words:[ ['brave','not afraid'], ['ancient','very old'] ]} ],
   Spell the subject as in data/subjects.js.
   If a meaning contains an apostrophe, put it inside "double quotes". */
const VOCAB={
1:[
 {subject:"Burmese",words:[["ရေ", "water"], ["အိမ်", "house"], ["ခွေး", "dog"], ["ကြောင်", "cat"]]},
 {subject:"English",words:[["cat", "a small pet that says meow"], ["red", "the colour of a ripe tomato"], ["big", "large"], ["run", "to move fast on your feet"]]},
 {subject:"Mathematics",words:[["add", "put together"], ["number", "a word or sign for how many"], ["circle", "a round shape"], ["more", "a bigger amount"]]},
 {subject:"Science",words:[["plant", "a living thing that grows in soil"], ["animal", "a living thing that can move and eat"], ["water", "what we drink"], ["sun", "gives us light and heat"]]},
 {subject:"Social Studies",words:[["family", "people related to you"], ["home", "where you live"], ["school", "where we learn"], ["friend", "someone you like and trust"]]},
 {subject:"Life Skills",words:[["clean", "not dirty"], ["share", "let others use or have some"], ["polite", "having good manners"], ["safe", "away from danger"]]}
],
2:[
 {subject:"Burmese",words:[["စာအုပ်", "book"], ["ခဲတံ", "pencil"], ["ကျောင်း", "school"], ["ဆရာ", "teacher (man)"]]},
 {subject:"English",words:[["happy", "feeling glad"], ["under", "below something"], ["jump", "to push yourself up"], ["kind", "friendly and helpful"]]},
 {subject:"Mathematics",words:[["subtract", "take away"], ["even", "can be split into two equal groups"], ["half", "one of two equal parts"], ["total", "the whole amount"]]},
 {subject:"Science",words:[["root", "part of a plant under the soil"], ["leaf", "flat green part of a plant"], ["insect", "a small animal with six legs"], ["weather", "what the sky and air are like"]]},
 {subject:"Social Studies",words:[["neighbour", "someone who lives near you"], ["rule", "something we should or should not do"], ["market", "a place to buy and sell"], ["helper", "someone who helps others"]]},
 {subject:"Life Skills",words:[["healthy", "well and strong"], ["honest", "telling the truth"], ["listen", "pay attention to sounds or words"], ["tidy", "neat and in order"]]}
],
3:[
 {subject:"Burmese",words:[["မိခင်", "mother"], ["ဖခင်", "father"], ["သူငယ်ချင်း", "friend"], ["ထမင်း", "cooked rice"]]},
 {subject:"English",words:[["quickly", "in a fast way"], ["noun", "a naming word"], ["brave", "not afraid"], ["borrow", "take and give back later"]]},
 {subject:"Mathematics",words:[["multiply", "add the same number many times"], ["divide", "share equally"], ["product", "the answer when you multiply"], ["perimeter", "distance around a shape"]]},
 {subject:"Science",words:[["solid", "keeps its own shape"], ["liquid", "flows and takes the shape of its container"], ["gas", "spreads to fill a space"], ["skeleton", "the bones of the body"]]},
 {subject:"Social Studies",words:[["map", "a drawing of a place from above"], ["village", "a small group of homes"], ["transport", "ways of travelling"], ["culture", "the way a group of people live"]]},
 {subject:"Life Skills",words:[["hygiene", "keeping clean to stay healthy"], ["respect", "treating others well"], ["patient", "able to wait calmly"], ["teamwork", "working together"]]}
],
4:[
 {subject:"Burmese",words:[["နေ", "sun"], ["လ", "moon"], ["ကြယ်", "star"], ["မိုး", "rain"]]},
 {subject:"English",words:[["adjective", "a describing word"], ["ancient", "very old"], ["improve", "become better"], ["journey", "travel from one place to another"]]},
 {subject:"Mathematics",words:[["fraction", "a part of a whole"], ["factor", "a number that divides another exactly"], ["area", "space inside a flat shape"], ["remainder", "what is left after dividing"]]},
 {subject:"Science",words:[["habitat", "the natural home of a living thing"], ["evaporation", "liquid changing into gas"], ["energy", "the ability to do work"], ["digestion", "breaking down food"]]},
 {subject:"Social Studies",words:[["country", "land with its own government"], ["river", "a large natural stream of water"], ["resource", "something useful from nature"], ["community", "people living in one area"]]},
 {subject:"Life Skills",words:[["goal", "something you want to achieve"], ["emergency", "a sudden dangerous event"], ["responsible", "can be trusted to do duties"], ["nutrition", "food the body needs"]]}
],
5:[
 {subject:"Burmese",words:[["သစ်ပင်", "tree"], ["ပန်း", "flower"], ["ငါး", "fish"], ["မြစ်", "river"]]},
 {subject:"English",words:[["verb", "an action or being word"], ["generous", "willing to give"], ["describe", "say what something is like"], ["opinion", "what someone thinks"]]},
 {subject:"Mathematics",words:[["decimal", "a number with a point"], ["percentage", "parts out of one hundred"], ["average", "total divided by how many"], ["angle", "the turn between two lines"]]},
 {subject:"Science",words:[["photosynthesis", "how green plants make food"], ["gravity", "the pull towards the Earth"], ["organ", "a body part with a special job"], ["pollution", "harmful things in air, water or land"]]},
 {subject:"Social Studies",words:[["climate", "the usual weather over many years"], ["government", "people who run a country"], ["trade", "buying and selling"], ["history", "the study of the past"]]},
 {subject:"Life Skills",words:[["confidence", "belief in yourself"], ["cooperate", "work with others"], ["disaster", "an event causing great damage"], ["save", "keep for later use"]]}
],
6:[
 {subject:"Burmese",words:[["စားပွဲ", "table"], ["ကုလားထိုင်", "chair"], ["တံခါး", "door"], ["ဆရာမ", "teacher (woman)"]]},
 {subject:"English",words:[["pronoun", "a word used instead of a noun"], ["curious", "wanting to know"], ["predict", "say what may happen"], ["summary", "a short form of the main points"]]},
 {subject:"Mathematics",words:[["ratio", "comparison of two amounts"], ["integer", "a whole number, positive, negative or zero"], ["prime", "a number with exactly two factors"], ["variable", "a letter standing for a number"]]},
 {subject:"Science",words:[["cell", "the basic unit of life"], ["mixture", "substances combined but not chemically joined"], ["force", "a push or pull"], ["vertebrate", "an animal with a backbone"]]},
 {subject:"Geography",words:[["continent", "a very large area of land"], ["ocean", "a very large area of salt water"], ["equator", "imaginary line around the middle of the Earth"], ["delta", "land formed where a river meets the sea"]]},
 {subject:"History",words:[["century", "one hundred years"], ["source", "something that tells us about the past"], ["civilisation", "an organised society"], ["archaeologist", "a person who studies old remains"]]}
],
7:[
 {subject:"Burmese",words:[["ရွာ", "village"], ["မြို့", "town"], ["ဈေး", "market"], ["ဆေးရုံ", "hospital"]]},
 {subject:"English",words:[["adverb", "a word describing a verb"], ["essential", "very necessary"], ["persuade", "cause someone to agree"], ["evidence", "facts that show something is true"]]},
 {subject:"Mathematics",words:[["equation", "a statement that two things are equal"], ["parallel", "lines that never meet"], ["probability", "how likely something is"], ["exponent", "how many times a number is multiplied by itself"]]},
 {subject:"Science",words:[["atom", "a very small particle of matter"], ["respiration", "releasing energy from food"], ["acid", "a substance with pH below 7"], ["friction", "a force that resists motion"]]},
 {subject:"Geography",words:[["latitude", "distance north or south of the equator"], ["monsoon", "a seasonal wind bringing rain"], ["erosion", "wearing away of land"], ["population", "number of people in a place"]]},
 {subject:"History",words:[["empire", "many lands under one ruler"], ["dynasty", "rulers from the same family"], ["trade route", "a path used by traders"], ["monument", "a structure built to remember"]]}
],
8:[
 {subject:"Burmese",words:[["တောင်", "mountain"], ["ပင်လယ်", "sea"], ["လေ", "wind"], ["ပတ်ဝန်းကျင်", "environment"]]},
 {subject:"English",words:[["preposition", "a word showing position or time"], ["significant", "important"], ["analyse", "study in detail"], ["consequence", "a result"]]},
 {subject:"Mathematics",words:[["linear", "forming a straight line"], ["hypotenuse", "longest side of a right triangle"], ["mean", "the average"], ["volume", "space inside a solid"]]},
 {subject:"Science",words:[["element", "a substance of only one kind of atom"], ["compound", "elements chemically joined"], ["velocity", "speed in a given direction"], ["ecosystem", "living things and their surroundings"]]},
 {subject:"Geography",words:[["plate", "a large moving piece of the Earth's crust"], ["urbanisation", "growth of towns and cities"], ["irrigation", "supplying water to crops"], ["renewable", "able to be replaced naturally"]]},
 {subject:"History",words:[["colony", "a land ruled by another country"], ["revolution", "a great and sudden change"], ["independence", "freedom from outside rule"], ["treaty", "a formal agreement between states"]]}
],
9:[
 {subject:"Burmese",words:[["စာကြည့်တိုက်", "library"], ["ဖတ်", "to read"], ["ရေး", "to write"], ["ကူညီ", "to help"]]},
 {subject:"English",words:[["clause", "a group of words with a subject and verb"], ["perspective", "a point of view"], ["emphasise", "give special importance"], ["contrast", "show differences"]]},
 {subject:"Mathematics",words:[["quadratic", "an expression with a squared term"], ["gradient", "steepness of a line"], ["factorise", "write as a product"], ["congruent", "same shape and size"]]},
 {subject:"Science",words:[["isotope", "same element with different neutron number"], ["acceleration", "rate of change of velocity"], ["osmosis", "movement of water through a membrane"], ["catalyst", "speeds a reaction without being used up"]]},
 {subject:"Geography",words:[["migration", "moving from one place to live in another"], ["sustainable", "meeting needs without harming the future"], ["globalisation", "growing links between countries"], ["atmosphere", "the layer of gases around the Earth"]]},
 {subject:"History",words:[["nationalism", "strong loyalty to one's nation"], ["alliance", "countries agreeing to support each other"], ["refugee", "a person forced to flee their country"], ["human rights", "rights belonging to every person"]]}
],
10:[
 {subject:"Burmese",words:[["ပညာ", "knowledge"], ["ကျန်းမာရေး", "health"], ["ကြိုးစား", "to try hard"], ["မျှော်လင့်ချက်", "hope"]]},
 {subject:"English",words:[["inference", "a conclusion from clues"], ["coherent", "clear and well connected"], ["advocate", "speak in support of"], ["metaphor", "describing one thing as another"]]},
 {subject:"Mathematics",words:[["function", "a rule giving one output for each input"], ["sine", "opposite divided by hypotenuse"], ["sequence", "numbers in order following a rule"], ["logarithm", "the power a base is raised to"]]},
 {subject:"Chemistry",words:[["mole", "amount containing 6.02 x 10²³ particles"], ["valency", "combining power of an atom"], ["ion", "a charged atom or group"], ["period", "a row of the periodic table"]]},
 {subject:"Physics",words:[["inertia", "resistance to change in motion"], ["momentum", "mass times velocity"], ["work", "force times distance moved"], ["scalar", "a quantity with size only"]]},
 {subject:"Biology",words:[["mitosis", "cell division making two identical cells"], ["enzyme", "a protein that speeds reactions"], ["diffusion", "movement from high to low concentration"], ["chromosome", "a structure carrying genes"]]}
],
11:[
 {subject:"Burmese",words:[["သိပ္ပံ", "science"], ["သင်္ချာ", "mathematics"], ["သမိုင်း", "history"], ["ပညာ", "education"]]},
 {subject:"English",words:[["rhetoric", "the art of persuasive language"], ["ambiguous", "having more than one meaning"], ["synthesis", "combining ideas"], ["irony", "meaning the opposite of what is said"]]},
 {subject:"Mathematics",words:[["derivative", "rate of change of a function"], ["matrix", "a rectangular array of numbers"], ["permutation", "an arrangement where order matters"], ["radian", "a unit of angle"]]},
 {subject:"Chemistry",words:[["oxidation", "loss of electrons"], ["reduction", "gain of electrons"], ["equilibrium", "forward and backward rates are equal"], ["isomer", "same formula, different structure"]]},
 {subject:"Physics",words:[["frequency", "number of waves per second"], ["resistance", "opposition to electric current"], ["refraction", "bending of light between materials"], ["density", "mass per unit volume"]]},
 {subject:"Biology",words:[["homeostasis", "keeping internal conditions steady"], ["meiosis", "cell division making sex cells"], ["antibody", "a protein that fights germs"], ["transpiration", "water loss from plant leaves"]]}
],
12:[
 {subject:"Burmese",words:[["ငြိမ်းချမ်းရေး", "peace"], ["လွတ်လပ်ရေး", "independence"], ["မျှော်လင့်ချက်", "hope"], ["ပတ်ဝန်းကျင်", "environment"]]},
 {subject:"English",words:[["thesis", "the main claim of an essay"], ["paradox", "a statement that seems to contradict itself"], ["critique", "a detailed judgement"], ["nuance", "a small difference in meaning"]]},
 {subject:"Mathematics",words:[["integral", "the reverse of a derivative"], ["vector", "a quantity with size and direction"], ["limit", "value a function approaches"], ["complex number", "a number with real and imaginary parts"]]},
 {subject:"Chemistry",words:[["enthalpy", "heat content of a system"], ["polymer", "a large molecule of repeating units"], ["buffer", "a solution that resists pH change"], ["electrolysis", "splitting a compound using electricity"]]},
 {subject:"Physics",words:[["induction", "producing voltage by changing magnetism"], ["photon", "a packet of light energy"], ["half-life", "time for half the nuclei to decay"], ["capacitance", "charge stored per volt"]]},
 {subject:"Biology",words:[["transcription", "copying DNA into RNA"], ["translation", "making a protein from RNA"], ["allele", "a form of a gene"], ["natural selection", "better suited organisms survive and breed"]]}
]
};
