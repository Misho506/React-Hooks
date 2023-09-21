import './App.css';
import { UseCallBackComponent, UseEffectComponent, UseRefComponent, UseStateComponent, UseMemoComponent, UseContextComponent, UseReducerComponent } from './components';

function App() {
  return (
    <div className="App">
      <UseRefComponent />
      <UseEffectComponent />
      <UseStateComponent />
      <UseCallBackComponent />
      <UseMemoComponent />
      <UseContextComponent />
      <UseReducerComponent />
    </div>
  );
}


export default App;