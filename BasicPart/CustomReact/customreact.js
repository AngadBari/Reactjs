
function customRender(reactElemant,mainContainer){


    // const domElement=document.createElement(reactElemant.type)
    // domElement.innerHTML=reactElemant.Children
    // domElement.setAttribute('href',reactElemant.props.href)
    // domElement.setAttribute('target',reactElemant.props.target)
    // mainContainer.appendChild(domElement)

    
  const domElement= document.createElement(reactElemant.type)
  domElement.innerHTML = reactElemant.Children;
  for (const prop in reactElemant.props) {
    if(prop ==='Children') continue;
    domElement.setAttribute(prop,reactElemant.props[prop])      
  }
    mainContainer.appendChild(domElement) 
}


const reactElemant={
    type:'a',
    props:{
          href:"https://google.com",
          target:"_blank"
    },
    Children:"click me to visit google"
}

const mainContainer=document.getElementById("root")

customRender(reactElemant,mainContainer)


