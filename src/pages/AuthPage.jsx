import { Form, Modal } from 'antd';
import { FormItem } from '../components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
//me traigo mis servicios!!!
import {loginWs, signupWs} from '../services/auth-ws'

const AuthPage = (props) => {
    //utilizo el hook useLocation
    const location = useLocation()
    const navigate = useNavigate()


    const onFinish = (values) => {
        if(location.pathname === "/signup" && values.password !== values.confirmPassword){
            return Modal.error( {content: "las contraseñas no coinciden"})
        }
        console.log("values", values)
        //forma dinámica
        const service = location.pathname === "/signup" ? signupWs(values) : loginWs(values)

        service.then(res => {
            const {data, status, errorMessage} = res;
            if (status){
                props.authentication(data.user)
                Modal.success({content:"Todo chido ya pudiste entrar"})
                navigate("/profile")
                return;
            }else{
                Modal.error({content: errorMessage})
            }
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            {/**con más de dos elementos */}
            {location.pathname === "/signup" ?
                <>
                    <FormItem
                        label="Nombre"
                        name="firstName"
                        type="text"
                    />


                    <FormItem
                        label="Apellido"
                        name="lastName"
                        type="text"
                    />
                </> : null}

            <FormItem
                label="Correo"
                name="email"
                type="text"
                rules={[
                    {
                        required: true,
                        message: 'Coloca tu correo electrónico',
                    },
                ]}
            />

            <FormItem
                label="Contraseña"
                name="password"
                type="password"

                rules={[
                    {
                        required: true,
                        message: 'Por favor ingresa tu contraseña!',
                    },
                ]}
            />

            {/**&& */}
            {location.pathname === "/signup" &&

                <FormItem
                    label="Confirma tu contraseña"
                    name="confirmPassword"
                    type="password"

                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingresa tu confirmación de contraseña',
                        },
                    ]}
                />}

            <FormItem
                type="button"
                button_text="Enviar"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}


            />
            {location.pathname === "/signup" ?
                <p> Si ya tienes cuenta,   <Link to='/login'>inicia tu sesión</Link> </p>
                :
                <p> Si aún no tienes cuenta   <Link to='/signup'>regístrate</Link> </p>
            }
        </Form>
    );
};

export default AuthPage;