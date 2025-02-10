import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:Hello@abhishek.k51508@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:Hello@abhishek.k51508@gmail.com">@abhishek.k51508@gmail.com</a>
        </div>
        <div>
        <a href="tel:+917987326508"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+917987326508">(+91) 7987326508</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}