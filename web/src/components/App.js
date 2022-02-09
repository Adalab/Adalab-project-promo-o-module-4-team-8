import '../style/App.scss';
import { useState, useEffect } from 'react';
import CallToApi from '../services/CallToApi';
import ls from '../services/localStorage';
import Header from './Header';
import Preview from './Preview';
import Footer from './Footer';
import WhiteSection from './3WhiteSection';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';

function App() {
  const [dataCard, setDataCard] = useState('');

  const handleInput = (name, value) => {
    const inputChange = name;
    setData({
      ...data,
      [inputChange]: value,
    });
  };

  const [data, setData] = useState(
    ls.get('lsData', {
      palette: 'palette1',
      name: '',
      job: '',
      photo: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    })
  );

  useEffect(() => {
    ls.set('lsData', data);
  }, [data]);

  // Componente imagen
  const updateAvatar = (avatar) => {
    setData({
      ...data,
      photo: avatar,
    });
  };

  // Reset button
  const handleResetBtn = () => {
    setData({
      palette: 'palette1',
      name: '',
      job: '',
      email: '',
      photo: '',
      phone: '',
      linkedin: '',
      github: '',
    });
  };

  // Fetch y Botón de compartir
  const handleSharebtn = (ev) => {
    ev.preventDefault();
    CallToApi(data).then((dataCard) => {
      setDataCard(dataCard.cardURL);
    });
  };

  return (
    <div className="page">
      <Switch>
        <Route path="/" exact>
          <main>
            <Landing />
          </main>
        </Route>
        <Route path="/card" exact>
          <Header />
          <main>
            <form className="maincontainer" action="#" method="post">
              <Preview data={data} handleResetBtn={handleResetBtn} />
              <WhiteSection
                data={data}
                handleInput={handleInput}
                handleSharebtn={handleSharebtn}
                dataCard={dataCard}
                updateAvatar={updateAvatar}
              />
            </form>
          </main>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
