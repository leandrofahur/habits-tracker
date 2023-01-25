import { Habit } from "./components/Habit/Habit.component";
import './styles/global.css'

export function App() {
  return (
    <div>
      <Habit completed={0}/>
      <Habit completed={1}/>
      <Habit completed={2}/>
      <Habit completed={3}/>      
    </div>
  )
}
