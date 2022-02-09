import logo from './logo.svg';
import './App.css';
import { Box, Button, Container, TextField, Typography } from  '@mui/material'
import { Formik, Form } from 'formik';
import * as yup from 'yup'

// Local variables
const schema = yup.object({
  firstName: yup.string().required('you must have a name'),
  email: yup.string().email().required('you must have an email')
})

function App() {


  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant='h4' component='h1' gutterBottom>
          Meetup Forms Are Fun!
        </Typography>
        <Formik
          initialValues={{ firstName: '', email: '' }}
          onSubmit={async (values) => {console.log('submitting', values)}}
          validationSchema={schema}
        >
          {({ errors, handleSubmit, handleChange, touched, values }) => {
            console.log('errors', errors)
            
            return ( 
            <Form onSubmit={handleSubmit}>
              <Box sx={{ display: 'flex', flexDirection: 'column', my: 1 }}>
                <TextField
                  error={Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName ? 'first name required' : ''}
                  id="firstName" 
                  label="First Name" 
                  name="firstName" 
                  onChange={handleChange}
                  value={values.firstName}
                  />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', my: 1 }}>
                <TextField 
                  error={Boolean(errors.email)}
                  helperText={touched.email && errors.email ? 'email required' : ''}
                  id="email" 
                  label="Email" 
                  name="email" 
                  onChange={handleChange}
                  value={values.email}
                />
              </Box>
              <Button type="submit" variant="outlined">Submit</Button>
            </Form>
          )}}
        </Formik>
      </Box>
    </Container>
  );
}

export default App;
