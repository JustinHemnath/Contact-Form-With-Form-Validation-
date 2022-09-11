import { Button } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  company: yup.string().required(),
  number: yup.number().required(),
});

const Addcontact = ({ setForm, setContact, setVisible }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: 'email@gmail.com',
      company: 'ABC',
      number: '',
    },
  });

  const formSubmit = (data) => {
    setVisible(true);
    setForm(false);
    setContact((prevdata) => [...prevdata, data]);
  };

  return (
    <div className="vh-100 bg-dark text-white pt-5">
      <div className="container p-5 bg-secondary rounded">
        <p className="display-6 text-center mb-5 text-primary">ADD CONTACT</p>
        <form className="w-50 mx-auto">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <div className="form-floating">
                <input
                  className="form-control form-control-sm border-top-0 border-start-0 
              border-end-0 border-primary bg-transparent text-primary mb-4 fw-bold fs-5"
                  id="floatingInput"
                  placeholder="Enter your name...."
                  {...field}
                />
                <label htmlFor="floatingInput" className="text-primary">
                  Enter your Name
                </label>
                {errors.name && (
                  <p className="form-text text-info">{errors.name.message}</p>
                )}
              </div>
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <div className="form-floating">
                <input
                  className="form-control form-control-sm border-top-0 border-start-0 
                border-end-0 border-primary bg-transparent text-primary mb-4 fw-bold fs-5"
                  id="floatingemail"
                  placeholder="Enter your email...."
                  {...field}
                />
                <label htmlFor="floatingemail" className="text-primary">
                  Enter your email
                </label>
                {errors.email && (
                  <p className="form-text text-info">{errors.email.message}</p>
                )}
              </div>
            )}
          />

          <Controller
            name="company"
            control={control}
            render={({ field }) => (
              <div className="form-floating">
                <input
                  className="form-control form-control-sm border-top-0 border-start-0 
                border-end-0 border-primary bg-transparent text-primary mb-4 fw-bold fs-5"
                  id="floatingcompany"
                  placeholder="Enter your company...."
                  {...field}
                />
                <label htmlFor="floatingcompany" className="text-primary">
                  Enter your company
                </label>
                {errors.company && (
                  <p className="form-text text-info">
                    {errors.company.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            name="number"
            control={control}
            render={({ field }) => (
              <div className="form-floating">
                <input
                  type="tel"
                  className="form-control form-control-sm border-top-0 border-start-0 
                border-end-0 border-primary bg-transparent text-primary mb-4 fw-bold fs-5"
                  id="floatingtel"
                  placeholder="Enter your phone number...."
                  {...field}
                />
                <label htmlFor="floatingtel" className="text-primary">
                  Enter your phone number
                </label>
                {errors.number && (
                  <p className="form-text text-info mb-0 mb-lg-3">
                    Number empty
                  </p>
                )}
              </div>
            )}
          />

          <div className="d-grid col-10 col-lg-4 gap-3 mx-auto mt-5">
            <Button
              variant="primary text-dark fw-bold"
              onClick={handleSubmit(formSubmit)}
            >
              ADD CONTACT
            </Button>
            <Button
              type="reset"
              variant="primary text-dark fw-bold"
              onClick={() =>
                reset({
                  name: '',
                  email: '',
                  company: '',
                  number: '',
                })
              }
            >
              RESET
            </Button>
            <Button
              variant="primary text-dark fw-bold"
              onClick={() => setForm(false)}
            >
              BACK
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Addcontact;
