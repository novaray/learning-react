import './App.css';
import ColorList from './components/color/ColorList';
import AddColorForm from './components/color/AddColorForm';
import Checkbox from './components/checkbox/Checkbox';
import WordCount from './components/word/WordCount';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useAnyKeyToRender } from './hooks/useAnyKeyToRender';
import useMousePosition from './hooks/useMousePosition';
import useWindowSize from './hooks/useWindowSize';
import PureCat from './components/animal/Cat';
import GitHubUser from './components/github/GitHubUser';
import { faker } from '@faker-js/faker'
import { FixedSizeList } from 'react-window';
import UserRepositories from './components/repo/UserRepositories';
import RepositoryReadme from './components/github/RepositoryReadme';
import SiteLayout from './components/suspense/SiteLayout';

function List({ data = [], renderItem, renderEmpty }) {
  return !data.length ? (renderEmpty) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

const bigList = [...Array(5000)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar()
}));

function App() {
  return (
    <SiteLayout menu={<p>Menu</p>}>
      <>
        <h1>Contents</h1>
        <p>This is the main part of the example layout</p>
      </>
    </SiteLayout>
  )
}

/*function App() {
  const [login, setLogin] = useState('moonhighway');
  const [repo, setRepo] = useState('learning-react');

  return (
    <>
      {login && <GitHubUser login={login} />}
      {login && <UserRepositories login={login} selectedRepo={repo} onSelect={setRepo} />}
      {login && repo && <RepositoryReadme login={login} repo={repo}/>}
    </>
  );
}*/

/*function App() {
  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{ display: 'flex' } }}>
      <img
        src={bigList[index].avatar}
        alt={bigList[index].name}
        width={50}
      />
      <p>
        {bigList[index].name} - {bigList[index].email}
      </p>
    </div>
  );

  return (
    <FixedSizeLis
      height={window.innerHeight}
      width={window.innerWidth - 20}
      itemCount={bigList.length}
      itemSize={50}
    >
      {renderRow}
    </FixedSizeLis>
  );
}*/

/*function App() {
  // 리스트로 5000개를 그리는 건 무거운 작업
  const renderItem = item => (
    <div style={{display: 'flex'}}>
      <img src={item.avatar} alt={item.name} width={50} />
      <p>
        {item.name} - {item.email}
      </p>
    </div>
  );

  return <List data={bigList} renderItem={renderItem} />;
}*/

/*function App() {
  const [cats, setCats] = useState(['Biscuit', 'Jungle', 'Outlaw']);

  return (
    <>
      {cats.map((name, i) =>
        <PureCat key={i} name={name} meow={name => console.log(`${name} has meowed`)} />
      )}
      <button onClick={() => setCats([...cats, prompt('Name a cat')])}>
        Add a Cat
      </button>
    </>
  )
}*/

/*function App() {
  useEffect(() => console.log('useEffect'));
  useLayoutEffect(() => console.log('useLayoutEffect'));
  useWindowSize();
  useMousePosition();

  return (
    <div className='App'>
      <WordCount>You are not going to believe this but...</WordCount>
    </div>
  );
}*/

/*function App() {
  return (
    <div className="App">
      <AddColorForm />
      <ColorList />
    </div>
  );
}*/

export default App;
