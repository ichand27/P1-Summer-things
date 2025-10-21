const activities = [
    { wish: "Go hiking in the mountains", category: "Adventure" },
    { wish: "Read 3 new books", category: "Learning" },
    { wish: "Have a beach picnic", category: "Relaxation" },
    { wish: "Learn to skateboard", category: "Adventure" },
    { wish: "Take an online course", category: "Learning" }
];

function goToPage2() {
    const name = document.getElementById('username').value.trim();
    if (name === "") return alert("Please enter your name!");
    
    document.getElementById('displayName').textContent = name;
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
    displayWishes("All");
}

function addWish() {
    const input = document.getElementById('wishInput');
    const category = document.getElementById('categorySelect').value;
    const wishText = input.value.trim();

    if (wishText === "") return;

    activities.push({ wish: wishText, category });
    input.value = "";
    displayWishes(document.getElementById('categorySelect').value);
}

function displayWishes(filter) {
    const container = document.getElementById('wishContainer');
    container.innerHTML = "";

    const filtered = activities.filter(act => filter === "All" || act.category === filter);

    filtered.forEach((activity) => {
        const card = document.createElement('div');
        card.className = "card";
        card.innerText = activity.wish;
        container.appendChild(card);
    });
}

document.getElementById('categorySelect').addEventListener('change', (e) => {
    displayWishes(e.target.value);
});

document.getElementById('year').textContent = new Date().getFullYear();


