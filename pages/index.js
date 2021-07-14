import Button from "../components/Button";
import ButtonOpacity from "../components/ButtonOpacity";
import Head from "../components/Head";
import HeadingSection from "../components/HeadingSection";
import Input from "../components/Input";
import MenuItem from "../components/MenuItem";
import NavItem from "../components/NavItem";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Head />

      <div className="bg-section-1 bg-center bg-cover text-white min-h-screen flex flex-col justify-center relative">
        <div className="absolute left-0 top-0 h-full w-full bg-black opacity-10"></div>
        <div className="absolute left-0 top-0 w-full">
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-black to-transparent opacity-80"></div>
          <div className="container flex justify-between mx-auto relative z-10 px-14">
            <img className="self-center" src="img/logo.png" />
            <nav className="font-serif font-bold text-shadow-sm text-xl mb-4">
              <ul className="flex justify-between">
                <NavItem active href="" title="Home" />
                <NavItem href="" title="About" />
                <NavItem href="" title="Igredients" />
                <NavItem href="" title="Menu" />
                <NavItem href="" title="Reviews" />
                <NavItem href="" title="Reservations" />
              </ul>
            </nav>
          </div>
        </div>
        <div className="container mx-auto text-center px-14 py-32 relative z-10">
          <h1 className="font-cursive leading-normal text-shadow-md text-3xl xl:text-8xl xl:leading-tight lg:text-7xl lg:leading-tight md:text-5xl md:leading-normal sm:text-4xl sm:leading-normal">
            the right ingredients
            <br />
            for the right food
          </h1>
          <div className="decoration-white h-8 mt-10 mb-14 bg-no-repeat bg-center"></div>
          <ButtonOpacity className="mx-3">book a table</ButtonOpacity>
          <ButtonOpacity className="mx-3">see the menu</ButtonOpacity>
        </div>
      </div>

      <section className="bg-pattern section-shadow relative">
        <div className="container mx-auto md:grid grid-cols-12 items-center text-center px-14 py-20">
          <div className="col-span-5 md:px-6">
            <HeadingSection>Just the right food</HeadingSection>
            <div className="decoration-gold h-6 bg-no-repeat bg-center mb-8 mt-4"></div>
            <p>
              If you’ve been to one of our restaurants, you’ve seen – and tasted
              – what keeps our customers coming back for more. Perfect materials
              and freshly baked food, delicious Lambda cakes, muffins, and
              gourmet coffees make us hard to resist! Stop in today and check us
              out!
            </p>
            <img className="mx-auto mt-14" src="img/content/cook.png" />
          </div>
          <div className="col-span-7">
            <img className="mx-auto" src="img/content/dish.png" />
          </div>
        </div>
      </section>

      <section className="bg-section-2 bg-center bg-cover text-white text-center">
        <div className="container mx-auto grid grid-cols-2 px-14 py-20">
          <div className="col-start-2 bg-black bg-opacity-60 py-16 px-16">
            <HeadingSection color="white">Fine ingredients</HeadingSection>
            <div className="decoration-white h-6 bg-no-repeat bg-center mb-8 mt-4"></div>
            <p>
              If you’ve been to one of our restaurants, you’ve seen – and tasted
              – what keeps our customers coming back for more. Perfect materials
              and freshly baked food, delicious Lambda cakes, muffins, and
              gourmet coffees make us hard to resist! Stop in today and check us
              out!
            </p>
            <div className="flex justify-center gap-12 mt-16 mb-2">
              <Thumbnail src="img/ingredients/1.png" />
              <Thumbnail src="img/ingredients/2.png" />
              <Thumbnail src="img/ingredients/3.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pattern section-shadow relative">
        <div className="container mx-auto px-14 py-20 grid grid-cols-2 gap-12 text-lg">
          <div>
            <HeadingSection as="h3">Light Nibbles</HeadingSection>
            <div className="decoration-gold h-6 bg-no-repeat bg-center mb-4 mt-4"></div>
            <MenuItem price={4.99} title="Seafood Chowder">
              <p>Nullam iaculis vitae est vel volutpat.</p>
            </MenuItem>
            <MenuItem isSpecial price={4.99} title="Island Salad">
              <p>
                Sed tristique egestas mi, sit amet ullamcorper mi blandit id.
                Vivamus at elementum nibh.
              </p>
            </MenuItem>
            <MenuItem price={8.99} title="Lobster Baby Rolls">
              <p>Nam ut tellus tincidunt, imperdiet massa sed, congue augue.</p>
            </MenuItem>
            <MenuItem price={7.99} title="BLT Croissant-wich">
              <p>
                In auctor porta dolor id laoreet. Sed porttitor mauris eu neque
                semper venenatis.
              </p>
            </MenuItem>
          </div>
          <div>
            <HeadingSection as="h3">Tummy Fillers</HeadingSection>
            <div className="decoration-gold h-6 bg-no-repeat bg-center mb-4 mt-4"></div>
            <MenuItem price={8.99} title="Fish Fingers &amp; Fries">
              <p>
                Aliquam erat volutpat. Nullam at lectus ut dolor dictum feugiat
                ut vel odio.
              </p>
            </MenuItem>
            <MenuItem price={9.99} title="Grilled Sausages Platter">
              <p>Praesent accumsan, nunc dictum venenatis scelerisque.</p>
            </MenuItem>
            <MenuItem price={9.99} title="Roast Chicken &amp; Potatoes">
              <p>
                Velit sem sodales dolor, sed aliquet ligula mauris vitae ex.
              </p>
            </MenuItem>
            <MenuItem isSpecial price={11.99} title="Steak Frites">
              <p>In quis velit id odio laoreet convallis.</p>
            </MenuItem>
          </div>
          <div>
            <HeadingSection as="h3">The Sweet Tooth</HeadingSection>
            <div className="decoration-gold h-6 bg-no-repeat bg-center mb-4 mt-4"></div>
            <MenuItem price={3.99} title="Doughnuts">
              <p>
                Nunc mauris enim, pulvinar vitae mi ut, suscipit elementum
                purus.
              </p>
            </MenuItem>
            <MenuItem isSpecial price={3.99} title="Fruit Danish">
              <p>
                Etiam neque libero, dictum in luctus eu, accumsan placerat
                purus.
              </p>
            </MenuItem>
            <MenuItem price={4.99} title="Pie of the Day">
              <p>Vivamus volutpat, mauris lacinia sagittis cursus.</p>
            </MenuItem>
          </div>
          <div>
            <HeadingSection as="h3">Drinks</HeadingSection>
            <div className="decoration-gold h-6 bg-no-repeat bg-center mb-4 mt-4"></div>
            <MenuItem price={2.99} title="Hot or Iced Coffee">
              <p>Morbi pretium ultricies erat et sodales.</p>
            </MenuItem>
            <MenuItem price={2.99} title="Hot or Iced Tea">
              <p>
                Duis sollicitudin pharetra lectus, non euismod nunc mattis eget.
              </p>
            </MenuItem>
            <MenuItem price={3.99} title="Fresh Fruit Smoothies">
              <p>
                Nam faucibus risus id ante hendrerit, nec euismod odio finibus.
              </p>
            </MenuItem>
          </div>
        </div>
      </section>

      <section className="bg-section-3 bg-center bg-cover">
        <div className="container grid grid-cols-12 mx-auto px-14 py-20 text-white text-center">
          <div className="bg-black col-start-3 col-span-8 bg-opacity-60 py-16 px-16 mx-auto">
            <HeadingSection color="white">Guest Reviews</HeadingSection>
            <div className="decoration-white h-6 bg-no-repeat bg-center mb-8 mt-4 opacity-70"></div>
            <p className="font-serif font-bold text-2xl leading-loose mb-6">
              If you’ve been to one of our restaurants, you’ve seen – and tasted
              – what keeps our customers coming back for more. Perfect materials
              and freshly baked food, delicious Lambda cakes, muffins, and
              gourmet coffees make us hard to resist! Stop in today and check us
              out!
            </p>
            <p className="mb-2">- food inc, New York</p>
          </div>
        </div>
      </section>

      <section className="bg-pattern section-shadow relative">
        <div className="container mx-auto px-14 py-20">
          <div className="grid grid-cols-12 gap-12 items-center">
            <div className="col-span-3">
              <img src="img/content/image1.png" />
            </div>
            <div className="col-span-3">
              <img src="img/content/image2.png" />
            </div>
            <div className="col-span-6 px-6">
              <div class="text-center mb-10">
                <HeadingSection>Just the right food</HeadingSection>
                <div className="decoration-gold h-6 bg-no-repeat bg-center mb-8 mt-4"></div>
                <p>
                  If you’ve been to one of our restaurants, you’ve seen – and
                  tasted – what keeps our customers coming back for more.
                  Perfect materials and freshly baked food.
                </p>
                <p>
                  Delicious Lambda cakes, muffins, and gourmet coffees make us
                  hard to resist! Stop in today and check us out! Perfect
                  materials and freshly baked food.
                </p>
              </div>
              <form>
                <div className="grid grid-cols-2 gap-x-12 mb-4">
                  <div>
                    <label
                      className="block font-bold text-yellow-500 mb-1"
                      htmlFor="first-name"
                    >
                      First name
                    </label>
                    <Input
                      id="first-name"
                      placeholder="First name"
                      type="text"
                    />
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
                    <label
                      className="block font-bold text-yellow-500 mb-1"
                      htmlFor="date"
                    >
                      Date
                    </label>
                    <Input id="date" placeholder="Date" type="text" />
                  </div>
                  <div>
                    <label
                      className="block font-bold text-yellow-500 mb-1"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <Input id="email" placeholder="Email" type="email" />
                  </div>
                </div>
                <Button type="submit">Book now!</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white text-center">
        <div className="grid grid-cols-3 gap-12 container mx-auto px-14 py-10">
          <div>
            <h4 className="font-cursive text-xl">About Us</h4>
            <div className="decoration-white h-5 mt-5 mb-5 bg-no-repeat bg-center opacity-70"></div>
            <p>
              Lambda's new and expanded Chelsea location represents a truly
              authentic <strong>Greek</strong> patisserie, featuring breakfasts
              of fresh croissants and steaming bowls of café.
              <br />
              Lamda the best restaurant in town
            </p>
          </div>
          <div>
            <h4 className="font-cursive text-xl">Opening Hours</h4>
            <div className="decoration-white h-5 mt-5 mb-5 bg-no-repeat bg-center opacity-70"></div>
            <p>
              <strong>Mon-Thu:</strong> 7:00am - 8:00pm
              <br />
              <strong>Fri-Sun:</strong> 7:00am - 10:00pm
            </p>
          </div>
          <div>
            <h4 className="font-cursive text-xl">Our Location</h4>
            <div className="decoration-white h-5 mt-5 mb-5 bg-no-repeat bg-center opacity-70"></div>
            <p className="font-bold">
              19th Paradise Street Sitia
              <br />
              128 Meserole Avenue
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
