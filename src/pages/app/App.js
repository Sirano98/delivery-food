import { Route, Routes, useLocation } from 'react-router-dom';
import { Auth } from '../../components/auth/Auth';
import { Cart } from '../../components/cart/Cart';
import { Layout } from '../../components/layout/Layout';
import { Modal } from '../../components/modal/Modal';
import { RequireAuth } from '../../hoc/RequireAuth';
import { Dishes } from '../dishes/Dishes';
import { Restaurans } from '../restaurants/Restaurants';
import './App.css';

function App() {
    const location = useLocation();
    const background = location.state && location.state.background;

    return (
        <>
            <Routes location={background || location}>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Restaurans />} />
                    <Route path='menu' element={
                        <RequireAuth>
                            <Dishes />
                        </RequireAuth>
                    } />
                </Route>
            </Routes>
            {background && (
                <Routes>
                    <Route path="login" element={
                        <Modal>
                            <Auth />
                        </Modal>
                    } />
                    <Route path='cart' element={
                        <Modal>
                            <Cart />
                        </Modal>
                    } />
                </Routes>
            )}
        </>
    );
}

export default App;
