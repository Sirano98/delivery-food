import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Auth } from '../../components/auth/Auth';
import { Cart } from '../../components/cart/Cart';
import { Layout } from '../../components/layout/Layout';
import { Modal } from '../../components/modal/Modal';
import { RequireAuth } from '../../hoc/RequireAuth';
import { Wrapper } from '../../hoc/Wrapper';
import { useAppDispatch } from '../../hooks/hooks';
import { login, logout } from '../../store/reducers/UserSlice';
import { DishesPage } from '../dishesPage/DishesPage';
import { RestauransPage } from '../restaurantsPage/RestaurantsPage';
import './App.css';

interface CustomizedState {
    background: string;
}

function App() {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const state = location.state as CustomizedState;
    const background = state && state.background;

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {

                dispatch(login({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
                }))


            } else {

                signOut(auth).then(() => {
                    dispatch(logout())
                })

            }
        });
    }, [dispatch])

    return (
        <>
            {/* <Wrapper> */}
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
                            <Auth title="login" />
                        </Modal>
                    } />
                    <Route path='signUp' element={
                        <Modal>
                            <Auth title="singUp" />
                        </Modal>
                    } />
                    <Route path='cart' element={
                        <Modal>
                            <Cart />
                        </Modal>
                    } />
                </Routes>
            )}
            {/* </Wrapper> */}
        </>
    );
}

export default App;
