import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import Forms from './component/forms/Forms';
import CheckList from"./component/checklist/CheckList"
import Workout from './component/workout/Workout';
import Footer from './component/footer/Footer';
import WorkoutSchedule from './component/wschedule/WorkoutSchedule';
import MyCarousel from './component/Carousel/Carousel';

function App() {
  return (
    <div className="App">
     <NavBar />
     <MyCarousel />
     <Forms />
     < CheckList />
     <Workout />
     <WorkoutSchedule />
     <Footer />
    </div>
  );
}

export default App;
