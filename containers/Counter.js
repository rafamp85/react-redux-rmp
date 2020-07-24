import { connect } from 'react-redux';
import { Counter } from '../components/Counter';

// indica que queremos recuperar del estado
// para que se pase como props al componente 
// con el que conectemos
// la key es la prop: counter
// valor de la prop: state.counter
const mapStateToProps = state => {
  return { counter: state.counter }
}

// Para hacer envio de las acciones que queramos
// cada una de las keys llegara como prop a nuestro componente
// el prop al ejecutarse hara un dispatch a cada una de las
// acciones
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  }
}

const createConnection = connect(
  mapStateToProps,
  mapDispatchToProps
);

const ComponentWithConnectionToRedux = createConnection(Counter);

export default ComponentWithConnectionToRedux;

