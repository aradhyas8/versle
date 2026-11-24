# Versle

Head-to-head five-letter word race for two players.

- Open the page and send your friend the invite link it gives you.
- Both press **Ready**. After a 3-2-1 countdown you both get the same secret word.
- You see your friend's colored tiles live, never their letters. First to solve wins.

Single static `index.html`. Players connect browser-to-browser with [PeerJS](https://peerjs.com/) (its free public signaling server); no backend or accounts. Word lists come from the `wordle-words` npm package via jsDelivr.
