import Button from "../components/Button";
import Input from "../components/Input";

const FormContact = () => (
  <form>
    <div className="sm:grid sm:grid-cols-2 sm:gap-x-12 mb-4">
      <div>
        <label
          className="block font-bold text-yellow-500 mb-1"
          htmlFor="first-name"
        >
          First name
        </label>
        <Input id="first-name" placeholder="First name" type="text" />
      </div>
      <div>
        <label
          className="block font-bold text-yellow-500 mb-1"
          htmlFor="last-name"
        >
          Last name
        </label>
        <Input id="last-name" placeholder="Last name" type="text" />
      </div>
      <div>
        <label className="block font-bold text-yellow-500 mb-1" htmlFor="date">
          Date
        </label>
        <Input id="date" placeholder="Date" type="text" />
      </div>
      <div>
        <label className="block font-bold text-yellow-500 mb-1" htmlFor="email">
          Email
        </label>
        <Input id="email" placeholder="Email" type="email" />
      </div>
    </div>
    <Button type="submit">Book now!</Button>
  </form>
);

export default FormContact;
