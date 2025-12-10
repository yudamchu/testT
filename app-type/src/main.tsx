
import { createRoot } from 'react-dom/client'
import CouterExam2 from './pages/CouterExam2.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListExam from './pages/ListExam.tsx';

createRoot(document.getElementById('root')!).render(
    <ListExam />
)
