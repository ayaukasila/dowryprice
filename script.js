function calculateEducation() {
    return parseFloat(document.getElementById("education").value);
}
function calculateFamilyWorth() {
    return parseFloat(document.getElementById("familyWorth").value);
}
function calculateCaste() {
    return parseInt(document.getElementById("caste").value);
}
function calculateSkills() {
    let skillsTotal = 0;
    skillsTotal += document.getElementById("musical").checked ? parseInt(document.getElementById("musical").value) : 0;
    skillsTotal += document.getElementById("cook").checked ? parseInt(document.getElementById("cook").value) : 0;
    skillsTotal += document.getElementById("easygoing").checked ? parseInt(document.getElementById("easygoing").value) : 0;
    skillsTotal += document.getElementById("sing").checked ? parseInt(document.getElementById("sing").value) : 0;
    return skillsTotal;
}
function calculateAge() {
    return parseFloat(document.querySelector('input[name="age"]:checked').value);
}
function calculateReputation() {
    let reputationMultiplier = 1;
    if (document.getElementById("gossipParents").checked) {
        reputationMultiplier = 0.85;
    } 
    if (document.getElementById("gossipCharacter").checked) {
        reputationMultiplier = 0.9;
    }

    let reputationDeduction = 0;
    if (document.getElementById("generalGossip").checked) {
        reputationDeduction = -20;
    }
    return { multiplier: reputationMultiplier, deduction: reputationDeduction };
}
function calculateDowry() {
    const basePrice = 100;
    const education = calculateEducation();
    const familyWorth = calculateFamilyWorth();
    const caste = calculateCaste();
    const skills = calculateSkills();
    const age = calculateAge();
    const reputation = calculateReputation();
    let totalPrice = basePrice * education * familyWorth * age * reputation.multiplier + caste + skills + reputation.deduction;

    document.getElementById("resultText").innerHTML = `The calculated dowry price is: $${totalPrice.toFixed(2)}`;
    let resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
    resultModal.show();
}
