document.addEventListener("DOMContentLoaded", () => {
    const originalText = document.getElementById("originalText");
    const redactWords = document.getElementById("redactWords");
    const replacementChar = document.getElementById("replacementChar");
    const redactButton = document.getElementById("redactButton");
    const redactedText = document.getElementById("redactedText");
    const stats = document.getElementById("stats");

    let startTime;

    redactButton.addEventListener("click", () => {
        startTime = new Date();

        const textToRedact = originalText.value;
        const wordsToRedact = redactWords.value.split(" ");
        const replacement = replacementChar.value;
        
        // Regular expression pattern to match specified words
        const redactPattern = new RegExp(wordsToRedact.map(word => `\\b${word}\\b`).join("|"), "gi");
        
        // Redact the specified words with replacement characters
        const redacted = textToRedact.replace(redactPattern, match => replacement.repeat(match.length));
        
        redactedText.value = redacted;

       // Calculate the number of characters redacted
       const charactersRedacted = redactWords.value.length;

       
       // Record the end time
       const endTime = new Date();

        // calculate the time taken in milliseconds
       const timeTakenInSeconds = endTime - startTime;

       // Display the statistics
       stats.innerHTML = `Characters Redacted: ${charactersRedacted}<br>Time Taken (seconds): ${timeTakenInSeconds.toFixed(2)}`; 
    });
});