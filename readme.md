Esercizio di oggi: Lista della spesa con ciclo while
nome repo: js-lista-spesa
Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while


SCOMPOSIZIONE

Sul DOM aggiungiamo un <ul>
Creaiamo un array "lista" che contiene la lista della spesa
Creiamo una variabile come contatore per il ciclo while
usiamo il ciclo "while" che gira finchè stampa tutti i contenuti della lista nel DOM
    ogni volta che il ciclo gira deve:
        Creare un elemento "li"
        aggiungere un contenuto della lista nel "li"
        aggiungere il "li" con la funzione "appendChild" nell' "ul"