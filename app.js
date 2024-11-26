const zodiacSigns = ["Áries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem"];
const predictions = [
  "terá sorte",
  "vai encontrar um amigo",
  "precisará de paciência",
];
const timeFrames = ["amanhã", "esta semana", "no trabalho"];

const selectRandomElement = (arr) => {
  return arr[Math.floor(Math.random()* arr.length)]
};

const generateMessage = () => {
  const zodiacSign = selectRandomElement(zodiacSigns)
  const prediction = selectRandomElement(predictions)
  const timeFrame = selectRandomElement(timeFrames)
  return `O signo ${zodiacSign} ${prediction} ${timeFrame}.`;
};

console.log(generateMessage());

document.getElementById('generateMessage').addEventListener('click',()=>{
    const message = generateMessage()
    document.getElementById('message').textContent = message
})
