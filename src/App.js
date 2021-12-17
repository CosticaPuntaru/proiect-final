import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss';
import { Contact } from "./pages/contact";
import { Homepage } from "./pages/homepage";
import { NotFound } from "./pages/404";
import { Menu } from "./components/menu";
import { Products } from "./pages/oroducts/products";
import { About } from "./pages/about";
import { Pricing } from "./pages/pricing";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Menu />
                <div className={'AppContent'}>
                    <Routes>
                        <Route path='/' element={<Homepage />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/pricing' element={<Pricing />} />
                        <Route path='/product/*' element={<Products />} />
                        <Route path={'*'} element={<NotFound />} />
                    </Routes>
                </div>
                <footer>
                    copyright 2021
                </footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
