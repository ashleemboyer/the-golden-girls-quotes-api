const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const QUOTES = [
  '"Let me tell you a story. Picture it, Sicily…" — Sophia',
  '"Go to sleep, sweetheart. Pray for brains." — Dorothy',
  '"Crying is for plain women. Pretty women go shopping." — Blanche',
  '"It’s like we say in St. Olaf — Christmas without fruitcake is like St. Sigmund’s Day without the headless boy." — Rose',
  '"I’m an old white woman. I’m not supposed to have color. You want color? Talk to Lena Horne." — Sophia',
  '"They were all buying T-shirts, you know, the ones that say, ‘Today is the first day of the end of your life.’" — Dorothy',
  '"People waste their time pondering whether a glass is half empty or half full. Me, I just drink whatever’s in the glass." — Sophia',
  '"Nobody ever believes me when I’m telling the truth. I guess it’s the curse of being a devastatingly beautiful woman." — Blanche',
  '"Oh, Sophia. I want to explain about last night. When I was a little girl one summer we had a terrible thunderstorm…" — Rose',
  '"No! No, I will not have a nice day!" — Dorothy',
  '"Excuse me Rose, have I given any indication at all that I care?" — Sophia',
  '"No one in my family has ever seen a psychiatrist…except of course, when they were institutionalized!" — Blanche',
  '"I know I look square, but I’m like my father’s tractor. I take a while to warm up, but once I get going, I can turn your topsoil till the cows come home." — Rose',
  '"Oh, I remember when Stanley told me he was having an affair. It was at least 24 hours before I cut the crotches out of all his slacks." — Dorothy',
  '"After 80, every year without a headstone is a milestone!" — Sophia',
  '"Isn’t it amazing how I can feel so bad, and still look so good?" — Blanche',
  '"Condoms, Rose! Condoms, condoms, condoms!" — Dorothy',
  '"It’s like life is a giant weenie roast, and I’m the biggest weenie!" — Rose',
  '"She’s really a very sweet woman. She just doesn’t like to show it." — Dorothy',
  '"Grandma Hollingsworth always said I was a little flighty… or was it a little floozy?" — Blanche',
  '"Jean is a nice person. She happens to like girls instead of guys. Some people like cats instead of dogs. Frankly, I’d rather live with a lesbian than a cat. Unless a lesbian sheds; that I don’t like." — Sophia',
  '"I eat raw cookie dough. And occasionally, I run through the sprinklers and don’t wear a bathing cap. And at Christmas, I’ve been known to put away more than one eggnog." — Rose',
  '"I could get herpes listening to this story!" — Dorothy',
  '"My mother used to say: the older you get, the better you get. Unless you’re a banana." — Rose',
  '"My son married a welder. Too bad she didn’t weld his zipper shut. They got ten kids they can’t afford." — Sophia',
  '"I’ve been having a good time, and there wasn’t even a man in the room." — Blanche',
  '"Why don’t I just wear a sign, ‘too ugly to live’?" — Dorothy',
  '"Jealousy is an ugly thing, Dorothy. And so are you, in anything backless." — Sophia',
  '"That child over there is trying to steal my daddy away. She ain’t better but a tick on a slow-moving hound dog." — Blanche',
  '"Rose, I know this is a long shot, but did you take much acid during the sixties?" — Dorothy',
  '"As they say in St. Olaf: hergenbargenflergenflurfennerfen." — Rose',
  '"I thought I was gonna die. I swear I have never felt such agony. I saw my entire life flash before my eyes and I thought, ‘What a shame if I die now, I’m too young… and I’m wearing the wrong underwear.’" — Blanche',
  '"You’ll have to excuse my mother. She suffered a slight stroke a few years ago, which rendered her totally annoying." — Dorothy',
  '"Forgive me, Rose, but I haven’t had sex in 15 years and it’s starting to get on my nerves." — Sophia',
  '"Dorothy, was Sophia naked just now, or does her dress really need ironing?" — Rose',
  '"Eat dirt and die, trash." — Blanche',
  '"You know what they say: you can lead a herring to water, but you have to walk really fast or he’ll die." — Rose',
  '"Isn’t it amazing how I can feel so bad and still look so good?" — Blanche',
  '"(To Sophia) You’re a furry little gnome and we feed you too much." — Dorothy',
  '"When I was a child, I used to get overexcited and pet the cat too much." — Rose',
  '"I feel that you have backed me into a corner, and when I am backed into a corner, I come out fightin’ like a wildcat. Unless I’ve had too much to drink, in which case I slide down the wall and make mad passionate love on the carpet." — Blanche',
  '"No matter how bad things get, remember these sage words: You’re old, you sag, get over it." — Sophia',
  '"Stanley, you’re one chromosome away from being a potato." — Dorothy',
  '"I slept with my two brothers until I was seventeen. I was engaged to one for a very short period of time, but that’s a separate story." — Blanche',
  '"If this sauce was a person, I’d get naked and make love to it." — Sophia',
  '"I hate to admit it, but he melts my Haagen-Dazs." — Rose',
  '"Of course you hate communism, Ma, it’s because you were raised a fascist." — Dorothy',
  '"My great-granddaddy always said that there are two things you never sell to a friend — a car and a slave — because if either one of them quits working you’ll never hear the end of it. Of course, they hanged my great-granddaddy. He said a lot of things he shouldn’t have." — Blanche',
  '"Want a glass of water to wash down your foot?" — Sophia',
  '"I can’t believe my mother is out riding around on a smelly old bus. Being pushed around, harassed, possibly even mugged by hostile teenagers with bad haircuts!" — Rose',
  '"Like I’m the only person who ever mixed a margarita in a sailor’s mouth?" — Blanche',
  '"When a 22-year-old girl marries a man who’s 80, chances are she is not after his body." — Dorothy',
  '"Let me tell you girls the three most important things I learned about life: number one, hold fast to your friends; number two, there’s no such thing as security; and number three, don’t go see Ishtar. Woof." — Sophia',
  '"I feel like crawling under the covers and eating a box of Velveeta." — Rose',
  '"When I say jump, you say \'on who?\'" — Blanche',
  '"[to Sophia] Get back here, you deceitful little Sicilian gekko!" — Dorothy',
  '"Silly Rabbi, tricks are for kids." — Sophia',
  '"I’m not one to blow my own vertubenflugen." — Rose',
  '"He is so sophisticated and charming and rich and handsome. He fairly screams Blanche. At least, he will when I’M through with him." — Blanche',
  '"It’s wonderful dating in Miami. Every single man under eighty sells cocaine." — Dorothy',
  '"You know my motto. Today could be the last day of your life." — Sophia',
  '"Please forgive me. It’s not my fault my cousins have been marrying each other for generations." — Rose',
  '"I’m jumpier than a virgin at a prison rodeo." — Blanche',
  '"How come whenever my ship comes in it’s leaking?" — Dorothy',
  '"Please. Pay no attention to him. The man spent 90 days on the high seas drinking grain alcohol from a goat bladder." — Sophia',
  '"Tell me the truth: do these glasses make me look stupid?" — Rose',
  '"If I had that money I could have moved into a swinging condo instead of living with — I better not say anything until I’ve had my coffee (sips coffee) — a slut and a moron!" — Dorothy',
  '"God, I wish I was dead." — Blanche',
  '"Look, you didn’t ask me for my opinion, but I’m old, so I’m giving it anyway." — Sophia',
  '"Miami, you’re cuter than an… intrauterine." — Rose',
  '"Go hug a landmine!" — Dorothy',
  '"It was at that moment I realized my bosoms had the power to make music." — Blanche',
  '"Fasten your seatbelt, slut puppy. This ain’t gonna be no cakewalk!" — Sophia',
  '"Dr. Kagan? Hubba hubba zing zing, baby, he’s got everything." — Rose',
  '"I could vomit just looking at you!" — Dorothy',
  '"There is a fine line between having a good time and being a wanton slut. I know. My toe has been on that line." — Blanche',
  '"Beat it, you 50-year-old mattress!" — Sophia',
  '"It’s like you people don’t pay any attention to me whatsoever." — Rose',
  '"We have Maalox and estrogen. How many junkies have gas and hot flashes?" — Dorothy',
  '"I swear with God as my witness, I will never pick up another man!… in a library… on a Saturday… unless he’s cute… and drives a nice car… Amen." — Blanche',
  '"Why do blessings wear disguises? If I were a blessing, I’d run around naked." — Sophia',
  '"When I was growing up in Minnesota, the doctor made house calls all the time, for us and the livestock. Worked out fine — until the doctor started drinking hog liniment and tried to neuter the Swenson brothers." — Rose',
  '"(On the phone with a contractor) No, I’m sorry, that’s more than I’m willing to pay for a guest room. Yes, I have heard the expression ‘you get what you pay for.’ I’ve also heard the expression ‘there’s a sucker born every minute.’… Yes, I have heard that expression too…" — Dorothy',
  '"I always take a deep breath before I greet a man. It thrusts my breasts forward." — Blanche',
  '"I hate Jell-O. If God wanted peaches suspended in midair, he would have filled them with helium." — Sophia',
  '"I thought you wore too much makeup and were a slut. I was wrong. You don’t wear too much makeup." — Rose',
  '"It is not easy being a mother. If it were easy, fathers would do it." — Dorothy',
  '"Oh please, it’s bad enough hearing all those snickers as you walk down the aisle, but me in white, even I couldn’t keep a straight face." — Blanche',
  '"My God, I’ve left brain cells all over the Eastern Seaboard." — Sophia',
  '"Oh, don’t give up, Dorothy. If the ancient Egyptians could move 20-ton stone blocks to build the pyramids, we can move a toilet." — Rose',
  '"Rose, he left me 38 years later for a stewardess that he met on a business trip to Hawaii. It was her first flight. They said, ‘On arrival, give the passengers a lei.’ She got confused, he got lucky, and they now live on Maui." — Dorothy',
  "\"If I met a man who was over seventy but still looked half-way decent, I’d be on my back faster than you could say, 'I've fallen and I can’t get up!'\" — Sophia",
  '"It\'s time I gave something back to the chicken community. A chicken once saved my life." — Rose',
  '"My first was Billy. Oh, I’ll never forget it! That night under the dogwood tree, the air thick with perfume, and me with Billy. Or Bobby? Yes, that’s right, Bobby! Or was it Ben? Oh who knows, anyway, it started with a B." — Blanche',
  '"Rose, honey… have you been washing the fruit off before you eat it?" — Dorothy',
  '"Dorothy, where I come from you learn never to turn your back on family! NEVER! When your crazy cousin Nunzio started living with his pet goat, did the family turn their back on him? No. And after a couple of nights, neither did the goat." — Sophia',
  '"The doctor says it’s the first time he’s ever been called because a baby was sleeping in the day. And then I think he called me an idiot." — Rose',
  '"(To Sophia) My mistake. I thought since you look like Yoda you were also wise." — Blanche',
  '"The laws in St. Olaf are very stringent. Their motto is \'Use a gun, go apologize.\'" — Rose',
  '"(To Sophia) Oh, sometimes I wish she was my mother… so I could be the one to put her in Shady Pines." — Blanche',
  '"You know, in the right hands and the right bag, this chipped beef is not half bad." — Sophia',
  '"Boy, I remember when I was a little girl, when we’d get depressed Grandma could always cheer us up. She’d take out her dentures, and she’d take a healthy swig from the aquarium, and then she’d put a flashlight under a chin, and we could watch the goldfish swim from cheek to cheek. We could have watched it all day… but visiting hours were only from ten to four." — Rose',
];

app.get('/', (req, res) => {
  const randomIndex = Math.floor(Math.random() * QUOTES.length);
  const quote = QUOTES[randomIndex];
  res.send(quote);
});

app.listen(port, () => console.log('The Golden Girls quotes API is running!'));
