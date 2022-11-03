const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course}/>
      <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
      <Total total_exercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

const Header = ({ course }) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  )
}

const Content = ({ parts, exercises }) => {

  return (
    <>
      {parts.map((part, idx) => (
        <p>
          {part} {exercises[idx]}
        </p>
      ))}
    </>
  )
}

const Total = ({ total_exercises }) => {
  return (
    <>
      <p>Number of exercises {total_exercises}</p>
    </>
  )
}

export default App;
