# Reflektion
### Kapitel 2 - Meaningful Names
Detta kapitlet har hjälpt mig mycket när det gäller att göra bättre namn till funktioner, variabler och annat. Skulle säga att jag håller med vad som står i boken och kommer att använda dessa regler i framtiden.

Det bästa namnet i min kod är nog updateCoinsDisplay eftersom den följer det som står i "Clean code".

[![updateCoinsDisplay](imgs/updateCoinsDisplay.png)](imgs/updateCoinsDisplay.png)

Några exempel på regler den följer är...

Use Intention-Revealing Names: Den förklarar bra vad den gör. Den uppdaterar coins displayen.

Make Meaningful Distinctions: Den har ett unikt namn som då inte liknar någon annan funktion och den använder inga "Noise words" som "the" eller "a".

Use Pronounceable Names & Use Searchable Names: Jag tar upp båda de här reglerna eftersom dem går ihop i detta fallet på grund av att funktionen använder sig av ord i namnet och inte bara olika bokstäver/förkortningar vilket gör namnet definitivt "Pronounceable". Och då blir det också extremt lätt att söka upp det för att man skriver riktiga ord istället för någon lång förkortning som bara ser ut som en keyboard mash till någon som inte förstår det.

### Kapitel 3 - Functions
Igen ett väldigt bra kapitel som har hjälpt mig. Jag använt dessa kunskaper genom att förbättra olika funktioner. I detta fallet så visar jag hur jag har förbättrat "spinSlots" i slots-game klassen.

Den gamla koden bryter mot "Do one thing" och "One Level of Abstraction per Function".

[![spinSlots old](imgs/spinSlots_old.png)](imgs/spinSlots_old.png)
---
I den nya har mycket av koden brytits ut till nya funktioner vilket tar bort if satsen som satt i en annan if sats vilket fixar "One Level of Abstraction per Function"

Den följer också nu "Do one thing" eftersom kod som inte har med "spinSlots" att göra har brytits ut.

↓Nya koden↓

[![spinSlots new](imgs/spinSlots_new.png)](imgs/spinSlots_new.png)

↓Kod som har brytits ut↓

[![setDelay](imgs/setDelay.png)](imgs/setDelay.png)
[![getWinAmonut](imgs/getWinAmonut.png)](imgs/getWinAmonut.png)
[![sendWinEvent](imgs/sendWinEvent.png)](imgs/sendWinEvent.png)

### Kapitel 4 - Comments
I L3 har jag försökt att ha beskrivande namn och "Clean code" för att då inte ha några kommentarer men i L2 så har det blivit några kommentarer där jag tycker att det har blivit nödvändigt.

[![checkFrequency](imgs/checkFrequency.png)](imgs/checkFrequency.png)

Jag vet inte hur jag kan göra ett bra nog namn för att man ska förstå vad funktionen gör utan att namnet blir väldigt långt. Så i slutändan känner jag att detta är just nu den bästa lösningen jag kommer på.

### Kapitel 5 - Formatting
Bra kapitel. Känner att den säger ändå ganska självklara saker med att inte ha för långa kodrader och att kod som jobbar tillsammans ska ligga nära varandra. Har alltid försökt följa dessa regler eftersom det känns naturligt att lägga upp koden på ett sådant sätt.

[![gameCenter](imgs/gameCenter.png)](imgs/gameCenter.png)

Ovanför så finns en bild på en del av game-center koden. Där kan man se att jag har använt mig av "Vertical Openness Between Concepts" genom att då göra mellanrum mellan dem olika funktionerna, men jag har valt att inte göra det mellan variablerna eftersom jag anser att dem är nära relaterade och då borde ligga nära varandra.

När det kommer till "Horizontal Formatting" har jag för det mesta följt det. Det är dock vissa rader som kanske är lite för långa som skulle kortas ner.

### Kapitel 6 - Objects and Data Structures --------------------------------- FIXA ---------------------------------
Intressant kapitel som pratar om "encapsulating" och "Law of Demeter" vilket då är om vad för data som ska gömmas och vilka klasser/objekt som ska ha tillgång  till dem. Jag har försökt till det bästa av mina kunskaper att följa dessa koncept och tycker personligen att jag har fått till det på ett relativt bra sätt.

T.ex. bara ``game-center`` har tillgång till ``slotsGame`` och bara ``slotsGame`` har tillgång till ``slots`` för att de jobbar tillsammans mycket.

### Kapitel 7 - Error Handling --------------------------------- FIXA ---------------------------------
Väldigt bra kapitel. Min kod använder sig inte av någon "Error Handling" eller "Try-catch" alls vilket inte är bra men jag är osäker på var jag skulle lägga in det. Troligtvis i en funktion som tar en parameter men allting är ganska hårdkodat så det känns inte så nödvändigt. Men jag skulle ändå ha velat lagt till hantering av error, dock på grund av tidsbrist så hände det inte.

### Kapitel 8 - Boundaries --------------------------------- FIXA ---------------------------------
Bra kapitel på hur man ska hantera "Tredje part" kod/ kod som någon annan håller i. Den enda "Tredje part" kod som jag använder är min egen arrayhelper och jag tycker jag hanterar den bra. I boken så står det om att skapa en klass som då tar hand om en "Tredje part" kod men jag tycker att det inte är nödvändigt när det kommer till arrayhelpern.

### Kapitel 9 - Unit Tests --------------------------------- FIXA ---------------------------------
Kapitlet tar upp många bra saker om testkod och jag känner att den har gett mig mycket kunskap om hur man ska på bra sätt göra automatiska tester. Min kod har dock inte automatiska tester, Dock vet jag inte hur jag skulle införa dessa tester eftersom t.ex "slots-game" har med tur att göra så att kolla att allt går rätt när man vinner känner jag att det är svårt att testa. Men jag skulle ändå ha velat lägga till automatiska tester med t.ex jest.

### Kapitel 10 - Classes
Bra kapitel. Känns som kapitel 3 med liknande regler, Så kapitel 10 och 3 går hand i hand enligt mig. Så när jag gör klasser så tänker jag på många av de reglerna som när jag håller på med funktioner, T.ex "Small!" eller "Do One Thing". Tycker att jag har följt detta kapitlet bra när jag har skrivit min kod och kommer inte på något just nu som jag kan förbättra enligt detta kapitlet.

[![slotsSlot](imgs/slotsSlot.png)](imgs/slotsSlot.png)

↑Bild på slots-slot klassen↑

Klassen som jag tycker följer detta bra är slots-slot. Den är väldigt kort(under 50 rader) och följer då "Classes Should Be Small!" och samtidigt innebär det att den också följer "The Single Responsibility Principle", då den har en klar och tydlig "Responsibility" att vara en "slot" åt "slot.game".

### Kapitel 11 - Systems

I Kapitel 11 var det ganska svårt att förstå de flesta saker som pratas om. Jag tycker det är svårt att införa det som sägs och jag vet inte om det är för att det bara inte passar in i mitt system eller för att boken använder sig av java. Men jag tror i alla fall att jag har infört "Systems Need Domain-Specific Languages" genom att använda samma ord till olika funktioner.


```js
// Båda funktioner använder sig av "get" för att dem returnar något

// slots-slot.js
getValue(){
  return this.#value
}

// slots-game.js
#getWinAmonut(){
  switch(this.#slots[0].getValue()){
    case 1:
      return 100
    case 2:
    case 3:
      return 250
  }
}
```

Dock är detta kanske ett dåligt exempel eftersom man brukar använda "get" när man ska få tillbaka en variabel och då är det inte enligt "Systems Need Domain-Specific Languages".

