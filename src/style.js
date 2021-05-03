const App = () => {
    return (
      <Template>
        <h1>Main content</h1>
      </Template>
    );
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
/*const Temperature = (props) => {
    console.log('props: ', props);
    return <h1>The current temperature is {props.degree} degree {props.unit}</h1>;
  };
  const element = <Temperature degree={25} unit="celsius" />;
  ReactDOM.render(
    element,
    document.getElementById('root')
); 
  
ReactDOM.render(
  element,
  document.getElementById('root')
); */