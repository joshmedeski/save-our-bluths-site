(() => {
  /**
   * Scrolls to the petition portion of the page.
   */
  scrollToPetition = () => document.getElementById('signForm').scrollIntoView({ behavior: 'smooth' });

  /**
   * Submit the signing of the petition.
   */
  submitPetitionSigning = (event) => {
    event.preventDefault();
    const input = document.getElementById('signField')
    let name = document.getElementById('signField').value;
    const errorMsg = document.getElementById('signError');
    if (name === '') return errorMsg.style.display = 'block';
    errorMsg.style.display = 'none';
    let participant = document.createElement('li');
    participant.innerHTML =  `<span class="participants__highlight">${name}</span>`;
    document.getElementById('participants').appendChild(participant);
    input.value = '';
    document.getElementById('signSuccess').style.display = 'block';
  }
})();
