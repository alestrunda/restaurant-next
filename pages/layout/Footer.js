import Decoration from "../../components/Decoration";

const Footer = () => (
  <footer className="bg-gray-900 text-white text-center">
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12 container mx-auto px-14 py-10">
      <div className="col-span-1 md:col-span-2 lg:col-span-1">
        <h4 className="font-cursive text-xl">About Us</h4>
        <Decoration className="mt-5 mb-5 opacity-70" color="white" size={5} />
        <p>
          Lambda's new and expanded Chelsea location represents a truly
          authentic <strong>Greek</strong> patisserie, featuring breakfasts of
          fresh croissants and steaming bowls of café.
          <br />
          Lamda the best restaurant in town
        </p>
      </div>
      <div>
        <h4 className="font-cursive text-xl">Opening Hours</h4>
        <Decoration className="mt-5 mb-5 opacity-70" color="white" size={5} />
        <p>
          <strong>Mon-Thu:</strong> 7:00am - 8:00pm
          <br />
          <strong>Fri-Sun:</strong> 7:00am - 10:00pm
        </p>
      </div>
      <div>
        <h4 className="font-cursive text-xl">Our Location</h4>
        <Decoration className="mt-5 mb-5 opacity-70" color="white" size={5} />
        <p className="font-bold">
          19th Paradise Street Sitia
          <br />
          128 Meserole Avenue
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
