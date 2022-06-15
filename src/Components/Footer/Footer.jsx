import React from 'react';
import '../Footer/footer.css';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from 'mdb-react-ui-kit';

export const Footer = () => {
  return (
    // <MDBFooter className="text-center" color="white" bgColor="dark">
    //   <MDBContainer className="p-4">
    //     <section className="mb-4">
    //       <a
    //         className="btn btn-outline-light btn-floating m-1"
    //         href="#!"
    //         role="button"
    //       >
    //         <MDBIcon fab icon="facebook-f" />
    //       </a>

    //       <a
    //         className="btn btn-outline-light btn-floating m-1"
    //         href="#!"
    //         role="button"
    //       >
    //         <MDBIcon fab icon="twitter" />
    //       </a>

    //       <a
    //         className="btn btn-outline-light btn-floating m-1"
    //         href="#!"
    //         role="button"
    //       >
    //         <MDBIcon fab icon="google" />
    //       </a>

    //       <a
    //         className="btn btn-outline-light btn-floating m-1"
    //         href="#!"
    //         role="button"
    //       >
    //         <MDBIcon fab icon="instagram" />
    //       </a>

    //       <a
    //         className="btn btn-outline-light btn-floating m-1"
    //         href="#!"
    //         role="button"
    //       >
    //         <MDBIcon fab icon="linkedin-in" />
    //       </a>

    //       <a
    //         className="btn btn-outline-light btn-floating m-1"
    //         href="#!"
    //         role="button"
    //       >
    //         <MDBIcon fab icon="github" />
    //       </a>
    //     </section>

    //     <section className="">
    //       <form action="">
    //         <div className="row d-flex justify-content-center">
    //           <div className="col-auto">
    //             <p className="pt-2">
    //               <strong>Sign up for our newsletter</strong>
    //             </p>
    //           </div>

    //           <MDBCol md="5" start="12">
    //             <MDBInput
    //               contrast
    //               type="email"
    //               label="Email address"
    //               className="mb-4"
    //             />
    //           </MDBCol>

    //           <div className="col-auto">
    //             <MDBBtn outline color="light" type="submit" className="mb-4">
    //               Subscribe
    //             </MDBBtn>
    //           </div>
    //         </div>
    //       </form>
    //     </section>

    //     <section className="mb-4">
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
    //         distinctio earum repellat quaerat voluptatibus placeat nam, commodi
    //         optio pariatur est quia magnam eum harum corrupti dicta, aliquam
    //         sequi voluptate quas.
    //       </p>
    //     </section>

    //     <section className="">
    //       <MDBRow>
    //         <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
    //           <h5 className="text-uppercase">Links</h5>

    //           <ul className="list-unstyled mb-0">
    //             <li>
    //               <a href="#!" className="text-white">
    //                 Link 1
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#!" className="text-white">
    //                 Link 2
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#!" className="text-white">
    //                 Link 3
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#!" className="text-white">
    //                 Link 4
    //               </a>
    //             </li>
    //           </ul>
    //         </MDBCol>

    //         <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
    //           <h5 className="text-uppercase">Links</h5>

    //           <ul className="list-unstyled mb-0">
    //             <li>
    //               <a href="#!" className="text-white">
    //                 Link 1
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#!" className="text-white">
    //                 Link 2
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#!" className="text-white">
    //                 Link 3
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#!" className="text-white">
    //                 Link 4
    //               </a>
    //             </li>
    //           </ul>
    //         </MDBCol>

    //         <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
    //           <h5 className="text-uppercase">Links</h5>

    //           <ul className="list-unstyled mb-0">
    //             <li>
    //               <a href="#!" className="text-white">
    //                 Link 1
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#!" className="text-white">
    //                 Link 2
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#!" className="text-white">
    //                 Link 3
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#!" className="text-white">
    //                 Link 4
    //               </a>
    //             </li>
    //           </ul>
    //         </MDBCol>

    //         <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
    //           <h5 className="text-uppercase">Links</h5>

    //           <ul className="list-unstyled mb-0">
    //             <li>
    //               <a href="#!" className="text-white">
    //                 Link 1
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#!" className="text-white">
    //                 Link 2
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#!" className="text-white">
    //                 Link 3
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#!" className="text-white">
    //                 Link 4
    //               </a>
    //             </li>
    //           </ul>
    //         </MDBCol>
    //       </MDBRow>
    //     </section>
    //   </MDBContainer>

    //   <div
    //     className="text-center p-3"
    //     style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
    //   >
    //     © 2020 Copyright:
    //     <a className="text-white" href="https://mdbootstrap.com/">
    //       MDBootstrap.com
    //     </a>
    //   </div>
    // </MDBFooter>

    <MDBFooter
      className="footer"
      style={{ backgroundColor: '#606c38', padding: '5px', color: '#dda15e' }}
    >
      Trail Blazers&trade; <MDBIcon fab icon="twitter" />{' '}
      <MDBIcon fab icon="instagram" /> <MDBIcon fab icon="facebook" />
      <p className="footerNotes">
        <a href="https://git.generalassemb.ly/flex-125/project-3/issues/18">
          <i className="fab fa-github"></i>{' '}
        </a>{' '}
        | <a href="https://www.nps.gov/subjects/developer/index.htm">Api </a>|
        Contact us:{' '}
        <a href="https://www.linkedin.com/in/coreylong90/">Cory Long </a> |{' '}
        <a href="https://www.linkedin.com/in/david-dobrose/">David Dobrose </a>{' '}
        | <a href="https://www.linkedin.com/in/jacobvernau/">Jacob Vernau </a> |{' '}
        <a href="https://www.linkedin.com/in/martin-wilson-tel/">
          Martin Wilson{' '}
        </a>{' '}
        |{' '}
        <a href="https://www.linkedin.com/in/myles-turner-b7629297/">
          Myles Turner
        </a>
      </p>
    </MDBFooter>
  );
};

export default Footer;
