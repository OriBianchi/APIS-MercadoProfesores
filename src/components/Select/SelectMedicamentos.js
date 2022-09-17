/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import Form from "react-bootstrap/Form";
function Select() {
  return (
    <Form.Select aria-label="Default select example">
      <option value="mg">mg</option>
      <option value="mcg">mcg</option>
      <option value="gr">gr</option>
      <option value="kg">kg</option>
      <option value="ml">ml</option>
      <option value="Got">Got</option>
    </Form.Select>
  );
}
export default Select;
