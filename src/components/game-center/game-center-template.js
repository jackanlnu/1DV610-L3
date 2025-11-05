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
    .coinsDisplay{
      margin: 0;
      font-size: 3vw;
    }
    main{
      width: 80%;
      height: 70%;
    }
  </style>
  <div class="container">
    <header>
      <p class="coinsDisplay"></p>
    </header>
    <main></main>
  </div>
`

export {template}