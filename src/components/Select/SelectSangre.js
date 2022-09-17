/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import Form from 'react-bootstrap/Form'
function Select() {
    return (
        <Form.Select aria-label="Default select example">
            <option>Seleccione grupo sanguíneo</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="0+">0+</option>
            <option value="0-">0-</option>
        </Form.Select>
    ) 

}
export default Select

