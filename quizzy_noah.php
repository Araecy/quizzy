<!DOCTYPE html>
<html lang="en-US">

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./css/style_noah.css">
    <link rel="stylesheet" href="./css/nav_styles.css">
    <script src="./js/script_noah.js" defer></script>
    <title>Flash Card App</title>
</head>

<body>
    <?php include 'nav.php' ?>
    <div id="quiz"></div>
    <button id="submit">Get Results</button>
    <div id="results"></div>
    
    <!-- <div id="app">
        <h1 v-text="deckName"></h1>

        <div class="user-input">
            Type something <input type="text" v-model="userInput">
        </div>

        <div @click="flipped = !flipped" class="card">
            <h2 v-html="userInput == 'flip' || flipped ? '' : cards[index].front"></h2>
            <div v-html="userInput == 'flip' || flipped ? cards[index].back : ''"></div>
        </div>

        <div class="navigation">
            <button @click="move(-1)" type="button">&#8592;</button>
            <button @click="move(1)" type="button">&#8594;</button>
        </div>

        <a :href="readMoreUrl">read more</a>
    </div>

    <script src="./js/data.js"></script>
    <script src="https://unpkg.com/vue@3.0.7/dist/vue.global.js"></script>
    <script>
        const FlashCardApp = {
            data() {
                return {
                    deckName: 'quizzy',
                    cards,
                    index: 0,
                    flipped: false,
                    readMoreUrl: 'https://osu.ppy.sh/home',
                    userInput: 'default'
                };
            },
            methods: {
                move(change) {
                    if (this.cards[this.index + change] && correctAnswer == true) {
                        this.index += change;
                        this.flipped = false;
                    }
                }
            }
        };

        const app = Vue.createApp(FlashCardApp).mount('#app');
    </script> -->
</body>

</html>