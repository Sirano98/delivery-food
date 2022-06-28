import { Route, Routes, useLocation } from 'react-router-dom';
import { Auth } from '../../components/auth/Auth';
import { Cart } from '../../components/cart/Cart';
import { Layout } from '../../components/layout/Layout';
import { Modal } from '../../components/modal/Modal';
import { RequireAuth } from '../../hoc/RequireAuth';
import { DishesPage } from '../dishesPage/DishesPage';
import { RestauransPage } from '../restaurantsPage/RestaurantsPage';
import './App.css';

interface CustomizedState {
    background: string
}

function App() {
    const location = useLocation();
    const state = location.state as CustomizedState;
    const background = state && state.background;

    return (
        <>
            <Routes location={background || location}>
                <Route path='/' element={<Layout />}>
                    <Route index element={<RestauransPage />} />
                    <Route path='menu' element={
                        <RequireAuth>
                            <DishesPage />
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
