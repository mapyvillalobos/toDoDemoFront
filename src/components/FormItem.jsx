import { Button, Form, Input } from "antd"

// @params {*} props
// @return
// label ="Correo"
//     name= "email"
//     rules {[
//         {
//             require:true,
//             message: "Please input your name!"
//         }
//     ]}

const renderItem = (props) => {
    switch (props.type) {
        case 'password':
            return <Input.Password />

        case 'button':
            return <Button type="primary" htmlType="submit"> {props.button_text} </Button>

        default:
            return <Input />
    }
}


const FormItem = (props) => (
    <Form.Item
        {...props}
    >
        {renderItem(props)}
    </Form.Item>
);

export default FormItem;