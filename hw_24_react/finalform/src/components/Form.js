import { Form, Field } from 'react-final-form'
import { useState } from 'react';


function MyForm() {
  const [ formData, setFormData ] = useState();
  const onSubmit = (values) => console.log(values);
  // const validate = f => f;
  return (
    <Form
    onSubmit={onSubmit}
    // initialValues={
    //   {}
    // }
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit} >
        <div>
          <label>First Name</label>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div>
          <label>Last Name</label>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div>
          <label>Last Name</label>
          <Field
            name="birth"
            component="input"
            type="text"
            placeholder="Birth"
          />
        </div>
        <div >
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
        
          </form>
        )}
      />
)};
export default MyForm;