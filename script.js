const realistic = [
    { title: "Nervous About Starting 8th Grade", challenge: "Feeling anxious about fitting in and keeping up with schoolwork." },
    { title: "Overwhelmed with Responsibilities", challenge: "Feeling overwhelmed with too many responsibilities." },
    { title: "Fight with Best Friend", challenge: "Navigating conflict with a close friend." },
    { title: "Doubts About Joining a Sports Team", challenge: "Lacking confidence in physical abilities." },
    { title: "Test Anxiety", challenge: "Test anxiety and poor study habits." },
    { title: "Public Speaking Fear", challenge: "Overcoming fear of public speaking." }
];

const fictional = [
    { title: "Cultivating Farming Land on Mars", challenge: "How can you grow food in a harsh environment with limited resources?" },
    { title: "Dragon Race Dilemma", challenge: "The dragon is acting stubborn, and the race is tomorrow." },
    { title: "Bored Crew on Submarine", challenge: "Morale is low, and you need to lift their spirits." },
    { title: "Haunted Amusement Park", challenge: "How do you manage both the business and the supernatural?", image: "images\Haunted Amusement.png" }, // Update with correct image path
    { title: "Dying Town Tree", challenge: "The town’s survival depends on this tree." }
];

const responseCards = [
    { title: "Clarification Card", situation: "I don’t fully understand what you just said. Can you explain it differently?" },
    { title: "Emotional Reaction Card", situation: "I feel really frustrated/upset about this issue." },
    { title: "Pushback Card", situation: "I don’t think that advice will work for me." },
    { title: "Overwhelmed Card", situation: "This is too much for me to handle right now." },
    { title: "Distraction Card", situation: "The advisee suddenly changes the topic or focuses on an unrelated issue." },
    { title: "Time Constraint Card", situation: "I only have a few minutes to figure this out—can you give me quick advice?" },
    { title: "\"But My Friend Said...\" Card", situation: "My friend told me something completely different from what you’re saying." },
    { title: "\"I’ve Tried That Already\" Card", situation: "I’ve already tried what you’re suggesting, and it didn’t work." },
    { title: "Request for Resources Card", situation: "Is there anything I can read, watch, or use to help me with this?" },
    { title: "Unsure of Next Steps Card", situation: "I’m not sure what to do next—what would you recommend?" },
    { title: "Uncooperative Card", situation: "I don’t care about fixing this. It’s not a big deal." }
];

// Event listeners for the scenario decks
document.getElementById("realistic-deck").addEventListener("click", function() {
    showScenario(realistic);
});

document.getElementById("fictional-deck").addEventListener("click", function() {
    showScenario(fictional);
});

// Event listener for the response card selection
document.getElementById("response-cards").addEventListener("click", function() {
    showResponses();
});

// Function to display a random scenario
function showScenario(scenarios) {
    const scenarioContainer = document.getElementById("scenario-container");
    scenarioContainer.innerHTML = ''; // Clear previous scenarios
    const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    
    const scenarioBox = document.createElement("div");
    scenarioBox.classList.add("scenario-box");
    scenarioBox.innerHTML = `<strong>${randomScenario.title}</strong><br>${randomScenario.challenge}`;
    
    // Show image if it exists
    if (randomScenario.image) {
           // Ensure the path to the image is correct
        scenarioBox.innerHTML += `<br><img src="${randomScenario.image}" alt="Scenario Image" style="width: 100%; border-radius: 10px;">`;
    }
    
    scenarioContainer.appendChild(scenarioBox);
    scenarioContainer.classList.remove('hidden'); // Show the scenario container
}

// Function to display four random response cards
function showResponses() {
    const responseContainer = document.getElementById("response-container");
    responseContainer.innerHTML = ''; // Clear previous responses
    
    const selectedResponses = [];
    while (selectedResponses.length < 4) {
        const randomIndex = Math.floor(Math.random() * responseCards.length);
        if (!selectedResponses.includes(responseCards[randomIndex])) {
            selectedResponses.push(responseCards[randomIndex]);
        }
    }
    
    selectedResponses.forEach(response => {
        const responseBox = document.createElement("div");
        responseBox.classList.add("scenario-box");
        responseBox.innerHTML = `<strong>${response.title}</strong><br>${response.situation}`;
        responseContainer.appendChild(responseBox);
    });
    
    responseContainer.classList.remove('hidden'); // Show the response container
}