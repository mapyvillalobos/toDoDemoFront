//importar mis pages
import AuthPage from '../pages/AuthPage' //chafa v1


const routes = (props) => {

    return [
        {
            path: "/", //homepage
            element: <h1>Este es el home</h1>
        },
        {
            path: "/login", //login
            element: <AuthPage />
        },
        {
            path: "/signup", //login
            element: <AuthPage />
        }
    ]

}

export default routes 