# Node-Norris

## Descrizione

Esercizio: sfruttando l'API [Chuck Norris Jokes](https://api.chucknorris.io/jokes/random), creare un'applicazione che scarica una battuta random, la aggiunge ad un file JSON (`norrisDb.json`) e la mostra all'utente. Il file JSON quindi dovrà contenere la lista di tutte le battute scaricate nell'arco del tempo.

Per evitare che nodemon riavvii il server ogni volta che questo file viene modificato, aggiungere la seguente configurazione nel file `package.json`:

```json
"nodemonConfig": {
	"ignore": ["norrisDb.json"]
}
```

E ricordate, con Chuck Norris le API non hanno il coraggio di ritornare un errore, per paura che Chuck le punisca.

## BONUS:

Quando viene scaricata una battuta, controllare che questa non sia già presente nel file JSON locale. Se lo è, caricare un'altra battuta.

## Buon lavoro!