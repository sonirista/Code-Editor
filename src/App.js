import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [html,setHtml] = useState('<div>Hello</div>')
  const [css,setCss] = useState('div {color:blue;}')
  const [javascript,setJavascript] = useState('')


  const handleHtml = (event) =>{
    setHtml(event.target.value)
  }
  const handleCss = (event) =>{
    setCss(event.target.value)
  }
  const handleJavascript = (event) =>{
    setJavascript(event.target.value)
  }

  const generate =() =>{
    return `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
      ${html}
      <script>${javascript}</script>
      </body>
    </html>
    `
  }


  return (
    <div className="App">
      <div className='editor-container'>
         <div className='editor'>
          <h3>HTML</h3>
          <textarea value={html} onChange={handleHtml} rows={5}></textarea>
         </div>
         <div className='editor'>
          <h3>CSS</h3>
          <textarea value={css} onChange={handleCss} rows={5}></textarea>
         </div>
         <div className='editor'>
          <h3>Javascript</h3>
          <textarea value={javascript} onChange={handleJavascript} rows={5}></textarea>
         </div>
         </div>
         <div className='preview'>
          <h2>Preview</h2>
          <iframe
          srcDoc={generate()} 
           title="preview" height="300" width="100%"> 
          </iframe>
          
         </div>

      </div>
    
  );
}

export default App;
