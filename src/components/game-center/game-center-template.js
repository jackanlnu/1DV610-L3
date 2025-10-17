const template = document.createElement('template')
template.innerHTML = `
  <style>
    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2vw;
      margin: 0;
      width: 70vw;
      height: 50vw;
      border: solid 1px black;
      padding: 1em;
      background-color: #ffffff;
    }
    header{
      display: flex;
      flex-direction: row;
      gap: 2vw;
    }
    #returnHomeButton{
      background-color: #00dd0b;
      color: white;
      border: none;
      border-radius: 1em;
      box-shadow: 2px 2px 4px 0px #000000;
    }
    main{
      width: 80%;
      height: 70%;
    }
  </style>
  <div class="container">
    <header>
      <button hidden id="returnHomeButton">Return</button>
      <p class="userNameDisplay">Test</p>
      <p class="coinsDisplay"></p>
    </header>
    <main></main>
  </div>
`

export {template}