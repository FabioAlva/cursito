
const Header = (props)=>{
return (
<>
 <h1> {props.name}</h1>
</>
)
}

const Part = (props) => {
return(
<>
<h2>{props.part} </h2> 
<h3> {props.ejercicios}    </h3>
</>
)
}

const Content = (props) => {
  return (
    <>
      <Part part={props.parte1} ejercicios={props.exercises1} >  </Part>
      <Part part={props.parte2} ejercicios={props.exercises2} >   </Part>
      <Part part={props.parte3} ejercicios={props.exercises3} > </Part>
    </>
  )
}

const Total = (props) => {
 const suma =props.exercises1 +props.exercises2+props.exercises3
 return(
  <>
  <p>total </p>
  <p> {suma}</p>
  </>
 )
}

const App = () =>{
  const cursos =[
  {nombre :'Half Stack application development' , part1: 'Fundamentals of React' , exercises1 : 10 
    , part2  :'Using props ,to pass data',    exercises2 :  7,
     part3 : 'State of a component', exercises3 : 14 }

  ] 

  return (
    <div>
     <Header name={cursos[0].nombre} > </Header>
     <Content parte1= {cursos[0].part1} parte2= {cursos[0].part2} parte3= {cursos[0].part3}  
      exercises1= {cursos[0].exercises1} exercises2= {cursos[0].exercises2} exercises3= {cursos[0].exercises3}     
     >                         </Content>
     <Total  exercises1= {cursos[0].exercises1} exercises2= {cursos[0].exercises2} exercises3= {cursos[0].exercises3}> </Total>
         </div>

  )
}

export default App