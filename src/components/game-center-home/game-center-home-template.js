const template = document.createElement('template')
template.innerHTML = `
  <style>
    .container{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2vw;
      padding: 2vw;
      border: solid 1px black;
      border-radius: 1em;
      background-color: #a8f9ff;
    }
  </style>
  <div class="container">
    <button id="slots-game">Slots game</button>
    <button id="">Coming soon</button>
    <button id="">Coming soon</button>
    <button id="">Coming soon</button>
  </div>
`

export {template}