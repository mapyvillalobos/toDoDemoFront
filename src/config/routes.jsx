//importar mis pages
import { ProfilePage, AuthPage } from '../pages'


const routes = (props) => {

    return [
        {
            path: "/", //homepage
            element: <h1>Este es el home</h1>
        },
        {
            path: "/login", //login
            element: <AuthPage {...props} />
        },
        {
            path: "/signup", //login
            element: <AuthPage {...props} />
        },
        {
            path: "/profile", //profile
            element: <ProfilePage {...props} />
        }
    ]

}

export default routes