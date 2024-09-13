
const MainContent = () => {
  return(
      <div>
        <Food />
        <h3> Call Food Function</h3>
      </div>
  
  ) 
}

const Food = () => {
  return(
      
      <div className="Food">
        <h2> Food </h2>
        <ul >
            <li>Pizza</li>
            <li>Pasta</li>
            <li>Lasagna</li>
        </ul> </div>
  
  ) 
}



export default MainContent;