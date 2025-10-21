# Testrapport 

Dessa tester var genomförda manuellt. 
De genomfördes i Visual Studio Code, använde sig av node och Live Server extension.

**Förberedelse:**
Starta sidan med hjälp av Live Server

### TP 1.1 Spela slots

Scenario: Användaren ska kunna komma åt och spela slotsgame.

Precondition: Användaren befinner sig på startsidan

#### Test steps

* Tryck på knappen där det står slots game
* Tryck på den röda knappen där det står spin

#### Expected

* Användaren kommer åt slots game
* De 3 olika "Slots" kommer att visa ett nummer var, det kan antingen vara olika eller samma nummer som visas.

#### Results

Det fungerade som det skulle.

### TP 1.2 Vinna

Scenario: Användaren ska kunna vinna och få "Coins".

Precondition: Användaren har kommit åt slots.

#### Test steps

* Tryck på knappen tills det blir samma nummer på alla "Slots"

#### Expected

* Användarens antal "coins" ökar.

#### Results

Det fungerade som det skulle.