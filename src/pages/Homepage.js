import { Alert, Button, Container, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Addcontact from './Addcontact';

const Homepage = () => {
  const [contact, setContact] = useState([]);
  const [visible, setVisible] = useState(false);

  const [form, setForm] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [visible]);

  if (!form) {
    return (
      <div className="bg-dark mh-100 text-white py-5">
        {visible && (
          <Alert
            variant="success"
            onClose={() => setVisible(false)}
            className="fixed-top mt-1 p-0 w-25 mx-auto fw-bold"
          >
            <p className="text-center pt-3">Contact Added!</p>
          </Alert>
        )}
        <p className="display-3 text-center mb-5">CONTACT LIST</p>

        <Button
          variant="primary d-grid col-md-2 px-1 mx-auto text-dark fw-bold"
          onClick={() => setForm(true)}
        >
          ADD CONTACT
        </Button>

        <Container className="my-5">
          {contact.length < 1 ? (
            <h1 className="text-center">
              You have no contacts added. <br />
              <br />
              <br />
              Click on 'Add contacts' button to add contacts.
            </h1>
          ) : (
            contact.map((contact) => {
              const { name, email, company, number } = contact;
              return (
                <Container fluid key={number}>
                  <Card
                    className="col-12 col-lg-6 mx-auto bg-secondary 
                    text-white pt-3 my-2"
                  >
                    <Card.Title className="fs-2 fs-md-6 fw-bold text-center ">
                      {name}
                    </Card.Title>

                    <hr />

                    <Card.Body className="d-block d-md-flex justify-content-md-evenly fs-lg-5">
                      <Card.Text>
                        <u className="underline fw-bold me-1 me-lg-3">EMAIL:</u>
                        {email}
                      </Card.Text>

                      <Card.Text>
                        <u className="underline fw-bold me-1 me-lg-3">
                          COMPANY:
                        </u>
                        {company}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Container>
              );
            })
          )}
        </Container>
      </div>
    );
  }

  return (
    // <Addcontact setForm={setForm} setContact={setContact} contact={contact} />
    <Addcontact {...{ setForm, setContact, setVisible }} />
  );
};

export default Homepage;
