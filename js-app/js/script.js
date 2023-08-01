fetch('http://localhost:3004/users')
    .then(r => r.json())
    .then(data => {
        displayPeople(data)
    })

function displayPeople(people) {
    const container = document.getElementById('main')

    people.forEach((person, index) => {
        const name = document.createElement('p')
        name.textContent = `${index + 1}. ${person.firstName} ${person.lastName} (${person.age} years old)`
        container.appendChild(name)
    });
}