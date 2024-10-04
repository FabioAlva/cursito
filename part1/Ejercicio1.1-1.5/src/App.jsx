const Header = ({ name }) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

const Part = ({ part, ejercicios }) => {
  return (
    <>
      <h2>{part}</h2>
      <h3>{ejercicios}</h3>
    </>
  );
};

const Content = ({ parts }) => {


  //LOS COMPONENTES DE REACT OBTIENEN EL OBJETO PROPS Y PARA ACCEDER A UNA PROPIEDAD ESPECIFICA 
  //Y EVITAR EL PROPS SE DEBE USAR {} PARA DESESTRUCTURAR ESA PARTE DEL OBJETO  

  // EL COMPONENTE PROPS DEL ARREGLO ES :  parts: [
  //  { name: 'Fundamentals of React', exercises: 10 },
  //  { name: 'Using props to pass data', exercises: 7 },
  //  { name: 'State of a component', exercises: 14 }
  // ]

  const [parte1, exercises1] = [parts[0].name, parts[0].exercises];
  const [parte2, exercises2] = [parts[1].name, parts[1].exercises];
  const [parte3, exercises3] = [parts[2].name, parts[2].exercises];

  return (
    <>
      <Part part={parte1} ejercicios={exercises1} />
      <Part part={parte2} ejercicios={exercises2} />
      <Part part={parte3} ejercicios={exercises3} />


    </>
    //AQUI TENDRIA UN OBJETO PROPS = PART : []  , EJERCICIOS :[ ] POR USO DE PART 
    //OSEA PRIMERO SERIA PROPS = PART : PART1 , EJERCICIO:EXERCISES1 


);
};

const Total = ({ parts }) => {
  // Calcular la suma de los ejercicios
  const suma = parts[0].exercises + parts[1].exercises + parts[2].exercises;

  return (
    <>
      <p>Total de ejercicios: {suma}</p>
    </>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header name={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
