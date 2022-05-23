module.exports = {
    failedResponse: "I'm sorry, I couldn't understand.",
    responses: [
        "It is certain",
        "Reply hazy, try again",
        "Don’t count on it",
        "It is decidedly so",
        "Ask again later",
        "My reply is no",
        "Without a doubt",
        "Better not tell you now",
        "My sources say no",
        "Yes definitely",
        "Cannot predict now",
        "Outlook not so good",
        "You may rely on it",
        "Concentrate and ask again",
        "Very doubtful",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes"
    ],
    acceptedQuestionWords: [
        "AM",
        "IS",
        "ARE",
        "HAVE",
        "HAS",
        "DO",
        "DOES",
        "CAN",
        "COULD",
        "WILL",
        "WOULD",
        "MAY",
        "MIGHT",
        "SHALL",
        "MUST",
        "WAS"
    ],
    ask(question) {
        let q = question.toUpperCase()
        if (this.acceptedQuestionWords.includes(q.split(" ")[0])) {
            let randIndex = Math.floor(Math.random() * this.responses.length)
            return this.responses[randIndex]
        } else {
            return this.failedResponse
        }
    }
}