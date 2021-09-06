import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Icon1 from './components/Icon1';
import Icon2 from './components/Icon2';
import Icon3 from './components/Icon3';
import Icon4 from './components/Icon4';

function App() {
  const [gender, setGender] = useState('women')
  const [weight, setWeight] = useState()
  const [height, setHeight] = useState()
  const [WindowWidth, setWindowWidth] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () =>
      window.removeEventListener("resize", updateDimensions);
  }, [])

  const updateDimensions = () => {
    console.log(window.innerWidth)
    setWindowWidth(window.innerWidth)
  }

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  const pageSelector = () => {


    const bmi = weight / ((height / 100) ** 2)
    if (bmi < 18.5) {
      return ('Underweight')
    }
    else if (bmi < 25) {
      return ('Normal')
    }
    else if (bmi < 30) {
      return ('Overweight')
    }
    else {
      return ('Obese')
    }
  }
  const H0 = styled.p`
   color: black;
   font-weight: 800;
   font-size: 42px;
   margin: 0;
   margin-top: 30px;
  `
  const H1 = styled.p`
   color: black;
   font-weight: 800;
   font-size: 32px;
   margin: 0;
   margin-top: 30px;
  `
  const H2 = styled.p`
   color: #656F77;
   font-weight: 400;
   font-size: 16px;
   width: 343px;
   margin: 15px auto;
   ${props => props.width &&
      css`
    width: ${props.width};
  `}
  `
  const Button = styled.button`
   color: white;
   background-color: black;
   font-weight: 600;
   font-size: 18px;
   width: 343px;
   height: 55px;
   border-radius: 7px;
   border: none;
   margin-top: 15px;
   cursor: pointer;
  `
  const Radio = styled.button`
   color: black;
   background-color: white;
   font-weight: 600;
   font-size: 22px;
   width: 150px;
   height: 55px;
   border-radius: 7px;
   border: 2px solid black;
   margin-top: 15px;
   cursor: pointer;
   margin: 5px;
   ${props => props.active &&
      css`
    color: white;
    background-color: black;
`}
  `

  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
            <section className="App-1" id="app1">
              {
                WindowWidth < 951
                  ? <Icon1 scale={0.7} />
                  : <Icon1 scale={1} />
              }
              <H1>Sprawdź swoje BMI!</H1>
              <H2 width="345px">Dzięki prostemu narzędziu będziesz mógł/mogła sprawdzić jaki jest twój współczynnik masy ciała!</H2>
              <a href="#app2">
                <Button onClick={(e) => e.preventDefault}>Let's go</Button>
              </a>
            </section>
            <section className="App-2" id="app2">
              <div>
                <H1>Kalkulator BMI</H1>
                {
                  WindowWidth < 645
                    ? <H2 width="250px">Kalkulator BMI, czyli indeks masy ciała, został opracowany prawie 200 lat temu przez belgijskiego statystyka Adolfa Queteleta. Do powszechnego użytku wszedł w latach 70-tych XX wieku. Obecnie posługują się nim liczne organizacje i ośrodki zajmujące się zdrowiem.
                    </H2>
                    : <H2 width="645px">Kalkulator BMI, czyli indeks masy ciała, został opracowany prawie 200 lat temu przez belgijskiego statystyka Adolfa Queteleta. Do powszechnego użytku wszedł w latach 70-tych XX wieku. Obecnie posługują się nim liczne organizacje i ośrodki zajmujące się zdrowiem.
                    </H2>
                }
                {
                  WindowWidth < 645
                    ? <H2 width="250px">
                      BMI (z ang. Body Mass Index — wskaźnik masy ciała) to wskaźnik, którego wynik pozwoli ci ocenić, czy twoja waga utrzymuje się w normie, czy nie. Żeby skorzystać z kalkulatora BMI, wystarczy wpisać dwie dane: masę ciała (w kilogramach) i wzrost (w centymetrach), i kliknąć «oblicz». Z tego samego kalkulatora mogą korzystać zarówno kobiety, jak i mężczyźni.
                    </H2>
                    : <H2 width="645px">
                      BMI (z ang. Body Mass Index — wskaźnik masy ciała) to wskaźnik, którego wynik pozwoli ci ocenić, czy twoja waga utrzymuje się w normie, czy nie. Żeby skorzystać z kalkulatora BMI, wystarczy wpisać dwie dane: masę ciała (w kilogramach) i wzrost (w centymetrach), i kliknąć «oblicz». Z tego samego kalkulatora mogą korzystać zarówno kobiety, jak i mężczyźni.
                    </H2>
                }


              </div>
              <div style={{ marginBottom: '300px' }}>
                <div>
                  <Radio active={gender === 'women' ? true : false} onClick={() => setGender('women')}>Kobieta</Radio>
                  <Radio active={gender === 'men' ? true : false} onClick={() => setGender('men')}>Mężczyzna</Radio>
                </div>
                <div style={{ display: 'flex', margin: '15px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ color: 'black' }}>Waga</span>
                    <input type='text' className="input" placeholder="(w kg)" value={weight} onChange={(e) => setWeight(e.target.value)}></input>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ color: 'black' }}>Wzrost</span>
                    <input type='text' className="input" placeholder="(w cm)" value={height} onChange={(e) => setHeight(e.target.value)}></input>
                  </div>
                </div>
                {
                  loading
                    ? <div>Loading...</div>
                    :
                    <Link to={pageSelector}>
                      <Button>Oblicz</Button>
                    </Link>
                }

              </div>
              {
                WindowWidth < 956
                  ? <Icon2 style={{ position: 'absolute', bottom: '0', zIndex: '0' }} scale={0.5} />
                  : <Icon2 style={{ position: 'absolute', bottom: '0', zIndex: '0' }} scale={1} />
              }
            </section>
          </Route>

          <Route path="/Underweight">
            <section className="Under">
              <Icon4 />
              <H1>Twoje BMI wynosi:</H1>
              <H0>{(weight / ((height / 100) ** 2)).toFixed(2)}</H0>
              <H2 width="345px">Masa ciała jest zbyt niska. Skontaktuj się ze swoim lekarzem, który przeprowadzi wywiad medyczny i być może zleci wykonanie badań diagnostycznych i/lub modyfikację diety.</H2>
            </section>
          </Route>
          <Route path="/Normal">
            <section className="Normal">
              <Icon4 />
              <H1>Twoje BMI wynosi:</H1>
              <H0>{(weight / ((height / 100) ** 2)).toFixed(2)}</H0>
              <H2 width="345px">Masa ciała jest prawidłowa. Dbaj o bogatą w warzywa i owoce dietę oraz codzienną dawkę sportu, aby utrzymać dobrą formę.</H2>
            </section>
          </Route>
          <Route path="/Overweight">
            <section className="Over">
              <Icon3 />
              <H1>Twoje BMI wynosi:</H1>
              <H0>{(weight / ((height / 100) ** 2)).toFixed(2)}</H0>
              <H2 width="345px">Masa ciała jest zbyt wysoka. Rozważ konsultację lekarską i modyfikację stylu życia.</H2>
            </section>
          </Route>
          <Route path="/Obese">
            <section className="Obese">
              <Icon3 />
              <H1>Twoje BMI wynosi:</H1>
              <H0>{(weight / ((height / 100) ** 2)).toFixed(2)}</H0>
              <H2 width="345px">Masa ciała jest zbyt wysoka, wartości BMI wskazuje na rozwijającą się otyłość III stopnia. Skontaktuj się ze swoim lekarzem, który zarekomenduje modyfikację diety i wprowadzenie codziennej dawki ruchu. Być może konieczne będzie wprowadzenie leczenia farmakologicznego. Wdrażając zmiany i przestrzegając zaleceń lekarza, unikniesz powikłań otyłości i zachowasz zdrowie na dłużej.</H2>
            </section>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
