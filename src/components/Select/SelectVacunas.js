/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import Form from "react-bootstrap/Form";
function Select() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Seleccione Vacuna</option>
      <option value="BCG">BCG </option>
      <option value="Gripe">Gripe </option>
      <option value="Hepatitis A">Hepatitis A</option>
      <option value="Hepatitis B">Hepatitis B</option>
      <option value="HPV">HPV</option>
      <option value="Meningococo">Meningococo</option>
      <option value="Neumococo Conjugada">Neumococo Conjugada</option>
      <option value="Pentavalente A">Pentavalente A</option>
      <option value="Pentavalente B">Pentavalente B</option>
      <option value="Rotavirus">Rotavirus</option>
      <option value="Salk (Poliomelitis)">Salk (Poliomelitis)</option>
      <option value="Triple Bacteriana ACelular">Triple Bacteriana ACelular</option>
      <option value="Triple Bacteriana Celular">Triple Bacteriana Celular</option>
      <option value="Triple Viral">Triple Viral</option>
      <option value="Varicela">Varicela</option>
    </Form.Select>
  );
}
export default Select;
