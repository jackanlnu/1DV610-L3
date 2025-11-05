# Testrapport 

Dessa tester var genomförda manuellt. 
De genomfördes i Visual Studio Code, använde sig av node och Live Server extension.

**Förberedelse:**
Starta sidan med hjälp av Live Server

### TP 1.1 Spela slots

Scenario: Användaren ska kunna spela slotsgame.

Precondition: Användaren befinner sig på sidan.

#### Test steps

* Tryck på den röda knappen där det står spin

#### Expected

* Användaren kan klicka på knappen
* De 3 olika "Slots" kommer att visa ett nummer var, det kan antingen vara olika eller samma nummer som visas.

#### Results

Det fungerade som det skulle.

### TP 1.2 Vinna

Scenario: Användaren ska kunna vinna och få "Coins". Mängden "Coins" beror på vilket nummer det är.

Precondition: Användaren befinner sig på sidan.

#### Test steps

* Tryck på knappen tills det blir samma nummer på alla "Slots"

#### Expected

* Användarens antal "coins" ökar.
* Om det är ettor på alla ska det öka med 100
* Om det är tvåor eller treor på alla ska det öka med 250

#### Results

Det fungerade som det skulle.