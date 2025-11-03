const template = document.createElement('template')
template.innerHTML = `
  <style>
    h1{
      width: fit-content;
      font-size: 8vw;
      margin: 0;
    }
    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5%;
      padding: 1em 0;
      border: solid 2px black;
      width: 100%;
      height: 100%;
      background-color: aquamarine;
      border-radius: 0.5em;
    }
    main{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 5vw;
      width: 90%;
      height: 70%;
      border: solid 2px black;
      border-radius: 2em;
      background-color: azure;
    }
    button{
      width: 15%;
      height: 20%;
      border-radius: 50%;
      font-size: 3vw;
      background-color: red;
    }
  </style>
  <div class="container">
    <h1>Slot Game</h1>
    <main></main>
    <button>Spin</button>
  </div>
`

export {template}