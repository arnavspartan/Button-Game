document.addEventListener("DOMContentLoaded", () => {
    const playerHealthElement = document.getElementById("playerHealth");
    const enemyHealthElement = document.getElementById("enemyHealth");
    const messageElement = document.getElementById("message");

    let playerHealth = 100;
    let enemyHealth = 100;

    document.getElementById("attackButton").addEventListener("click", () => {
        const playerAttack = Math.floor(Math.random() * 10) + 5;
        const enemyAttack = Math.floor(Math.random() * 10) + 5;
        
        enemyHealth -= playerAttack;
        playerHealth -= enemyAttack;

        updateHealth();
        messageElement.textContent = `You dealt ${playerAttack} damage. The enemy dealt ${enemyAttack} damage.`;

        checkGameOver();
    });

    document.getElementById("healButton").addEventListener("click", () => {
        const healAmount = Math.floor(Math.random() * 10) + 5;
        playerHealth += healAmount;

        // Ensure health does not exceed 100
        if (playerHealth > 100) playerHealth = 100;

        updateHealth();
        messageElement.textContent = `You healed for ${healAmount} health.`;

        checkGameOver();
    });

    function updateHealth() {
        playerHealthElement.textContent = `Player Health: ${playerHealth}`;
        enemyHealthElement.textContent = `Enemy Health: ${enemyHealth}`;
    }

    function checkGameOver() {
        if (playerHealth <= 0) {
            messageElement.textContent = "You have been defeated!";
            disableButtons();
        } else if (enemyHealth <= 0) {
            messageElement.textContent = "You have defeated the enemy!";
            disableButtons();
        }
    }

    function disableButtons() {
        document.getElementById("attackButton").disabled = true;
        document.getElementById("healButton").disabled = true;
    }
});
