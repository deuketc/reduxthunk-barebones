import './App.css';
import PostList from './PostList';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Async Reducer Example</h1>
      </header>
      <section>
        <PostList />
      </section>
    </div>
  );
}

export default App;
