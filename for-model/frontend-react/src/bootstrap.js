import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import {BrowserRouter, createBrowserRouter, HashRouter} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
const axios = require("axios").default;
// backend host url
// axios.backend = "http://localhost:8088";
axios.backend = null; 

// axios.backendUrl = new URL(axios.backend);
axios.fixUrl = function(original) {

  if(!axios.backend && original.indexOf("/")===0) return original;
  let url = null;
  try {
    url = new URL(original);
  }catch(e){
    url = new URL(axios.backend + original);
  }

  if(!axios.backend) return url.pathname;

  url.hostname = axios.backendUrl.hostname;
  url.port = axios.backendUrl.port;

  return url.href;
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<BrowserRouter>
      <App />
    </BrowserRouter>*/}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import { render, unmountComponentAtNode } from 'react-dom';
// import htmlToReact from 'html-to-react';
// import { ExampleComponent } from './components/ExampleComponent.js';

// class ReactElement extends HTMLElement {
  
//   constructor() {
//     super();
//     this.observer = new MutationObserver(() => this.update());
//     this.observer.observe(this, { attributes: true });
//   }

//   connectedCallback() {
//     this._innerHTML = this.innerHTML;
//     this.mount();
//   }

//   disconnectedCallback() {
//     this.unmount();
//     this.observer.disconnect();
//   }

//   update() {
//     this.unmount();
//     this.mount();
//   }

//   mount() {
//     const propTypes = ExampleComponent.propTypes ? ExampleComponent.propTypes : {};
//     const events = ExampleComponent.propTypes ? ExampleComponent.propTypes : {};
//     const props = {
//       ...this.getProps(this.attributes, propTypes),
//       ...this.getEvents(events),
//       children: this.parseHtmlToReact(this.innerHTML)
//     };
//     render(<ExampleComponent {...props} />, this);
//     // render(<React.StrictMode>
//     //         <HashRouter>
//     //           <App />
//     //         </HashRouter>
//     //       </React.StrictMode>, this);
//   }

//   unmount() {
//     unmountComponentAtNode(this);
//   }

//   parseHtmlToReact(html) {
//     return html && new htmlToReact.Parser().parse(html);
//   }

//   getProps(attributes, propTypes) {
//     propTypes = propTypes|| {};
//     return [ ...attributes ]         
//       .filter(attr => attr.name !== 'style')         
//       .map(attr => this.convert(propTypes, attr.name, attr.value))
//       .reduce((props, prop) => 
//         ({ ...props, [prop.name]: prop.value }), {});
//   }

//   getEvents(propTypes) {
//     return Object.keys(propTypes)
//       .filter(key => /on([A-Z].*)/.exec(key))
//       .reduce((events, ev) => ({
//         ...events,
//         [ev]: args => 
//         this.dispatchEvent(new CustomEvent(ev, { ...args }))
//       }), {});
//   }

//   convert(propTypes, attrName, attrValue) {
//     const propName = Object.keys(propTypes)
//       .find(key => key.toLowerCase() == attrName);
//     let value = attrValue;
//     if (attrValue === 'true' || attrValue === 'false') 
//       value = attrValue == 'true';      
//     else if (!isNaN(attrValue) && attrValue !== '') 
//       value = +attrValue;      
//     else if (/^{.*}/.exec(attrValue)) 
//       value = JSON.parse(attrValue);
//     return {         
//       name: propName ? propName : attrName,         
//       value: value      
//     };
//   }

// }

// customElements.define('shopping-product', ReactElement);
