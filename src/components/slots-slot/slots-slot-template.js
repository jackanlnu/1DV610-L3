const template = document.createElement('template')
template.innerHTML = `
  <style>
    #slot{
      background-color: gray;
      display: flex;
      width: 1em;
      height: 1em;
      font-size: 10vw;
      align-items: center;
      justify-content: center;
      border-radius: 0.5em;
    }
  </style>
  <div id="slot"></div>
`

export {template}