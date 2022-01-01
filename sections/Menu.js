import Decoration from "../components/Decoration";
import HeadingSection from "../components/HeadingSection";
import MenuItem from "../components/MenuItem";

const LIGHT_NIBBLES = [
  {
    description: "Nullam iaculis vitae est vel volutpat.",
    featured: true,
    id: 1,
    price: 4.99,
    title: "Seafood Chowder",
  },
  {
    description:
      "Sed tristique egestas mi, sit amet ullamcorper mi blandit id. Vivamus at elementum nibh.",
    featured: true,
    id: 2,
    isSpecial: true,
    price: 4.99,
    title: "Island Salad",
  },
  {
    description: "Nam ut tellus tincidunt, imperdiet massa sed, congue augue.",
    featured: true,
    id: 3,
    price: 8.99,
    title: "Lobster Baby Rolls",
  },
  {
    description:
      "In auctor porta dolor id laoreet. Sed porttitor mauris eu neque semper venenatis.",
    featured: true,
    id: 4,
    price: 7.99,
    title: "BLT Croissant-wich",
  },
];

const TUMMY_FILLERS = [
  {
    description:
      "Aliquam erat volutpat. Nullam at lectus ut dolor dictum feugiat ut vel odio.",
    featured: true,
    id: 1,
    price: 8.99,
    title: "Seafood Chowder",
  },
  {
    description: "Praesent accumsan, nunc dictum venenatis scelerisque.",
    featured: true,
    id: 2,
    price: 9.99,
    title: "Grilled Sausages Platter",
  },
  {
    description: "Velit sem sodales dolor, sed aliquet ligula mauris vitae ex.",
    featured: true,
    id: 3,
    price: 9.99,
    title: "Roast Chicken & Potatoes",
  },
  {
    description: "In quis velit id odio laoreet convallis.",
    featured: true,
    id: 4,
    isSpecial: true,
    price: 11.99,
    title: "Steak Frites",
  },
];

const SWEET_TOOTH = [
  {
    description:
      "Nunc mauris enim, pulvinar vitae mi ut, suscipit elementum purus.",
    featured: true,
    id: 1,
    price: 3.99,
    title: "Doughnut",
  },
  {
    description:
      "Etiam neque libero, dictum in luctus eu, accumsan placerat purus.",
    featured: true,
    id: 2,
    isSpecial: true,
    price: 3.99,
    title: "Fruit Danish",
  },
  {
    description: "Vivamus volutpat, mauris lacinia sagittis cursus.",
    featured: true,
    id: 3,
    price: 4.99,
    title: "Pie of the Day",
  },
  {
    description: "Praesent molestie felis tellus, vel ornare augue euismod ac.",
    id: 4,
    price: 4.99,
    title: "Apple Pie",
  },
  {
    description:
      "Pellentesque elit sapien, posuere a condimentum non, maximus hendrerit leo.",
    id: 5,
    price: 1.99,
    title: "Cheesecake",
  },
  {
    description: "Suspendisse posuere sollicitudin orci ut varius.",
    id: 6,
    price: 0.79,
    title: "Tiramisu",
  },
  {
    description: "Ut dignissim fermentum massa et volutpat.",
    id: 7,
    price: 1.49,
    title: "Cupcake",
  },
  {
    description: "Suspendisse ultricies malesuada leo ac commodo.",
    id: 8,
    price: 2.99,
    title: "Blueberry Tart",
  },
  {
    description:
      "Duis pellentesque nibh pharetra, congue quam molestie, tincidunt massa.",
    id: 9,
    price: 1.99,
    title: "Chocolate Muffin",
  },
  {
    description:
      "Suspendisse leo turpis, laoreet euismod iaculis vitae, dictum in nisi.",
    id: 10,
    price: 0.99,
    title: "Brownie",
  },
];

const DRINKS = [
  {
    description: "Morbi pretium ultricies erat et sodales.",
    featured: true,
    id: 1,
    price: 2.99,
    title: "Hot or Iced Coffee",
  },
  {
    description:
      "Duis sollicitudin pharetra lectus, non euismod nunc mattis eget.",
    featured: true,
    id: 2,
    price: 2.99,
    title: "Hot or Iced Tea",
  },
  {
    description:
      "Nam faucibus risus id ante hendrerit, nec euismod odio finibus.",
    featured: true,
    id: 3,
    price: 3.99,
    title: "Fresh Fruit Smoothies",
  },
  {
    description: "Mauris vel dui in enim elementum tristique.",
    id: 4,
    price: 3.99,
    title: "Cappuccino",
  },
  {
    description:
      "Nullam risus ipsum, laoreet id nunc non, consequat dapibus diam.",
    id: 5,
    price: 3.99,
    title: "Espresso",
  },
  {
    description: "Aenean id dolor a neque accumsan facilisis a et dui.",
    id: 6,
    price: 3.99,
    title: "Butter Beer",
  },
  {
    description:
      "Donec lacinia ut orci sit amet ultricies. Mauris varius luctus purus, vitae tempus mi.",
    id: 7,
    price: 3.99,
    title: "Chocolate Milk",
  },
  {
    description:
      "Aenean mollis, tortor a vestibulum hendrerit, ligula sapien dignissim quam, eu congue nisi urna ut nunc.",
    id: 8,
    price: 3.99,
    title: "Lemonade",
  },
  {
    description: "Fusce lectus felis, feugiat in purus sit amet.",
    id: 9,
    price: 3.99,
    title: "Banana Split",
  },
];

const Menu = ({ featuredOnly }) => {
  const menuFilter = (item) => {
    return featuredOnly ? item.featured : true;
  };

  return (
    <section className="bg-pattern section-shadow relative">
      <div className="container mx-auto px-14 py-20 md:grid md:grid-cols-2 gap-12 text-lg">
        <div>
          <HeadingSection as="h3">Light Nibbles</HeadingSection>
          <Decoration className="mb-4 mt-4" />
          {LIGHT_NIBBLES.filter(menuFilter).map((menuItem) => (
            <MenuItem
              isSpecial={menuItem.isSpecial}
              key={menuItem.id}
              price={menuItem.price}
              title={menuItem.title}
            >
              <p>{menuItem.description}</p>
            </MenuItem>
          ))}
        </div>
        <div>
          <HeadingSection as="h3">Tummy Fillers</HeadingSection>
          <Decoration className="mb-4 mt-4" />
          {TUMMY_FILLERS.filter(menuFilter).map((menuItem) => (
            <MenuItem
              isSpecial={menuItem.isSpecial}
              key={menuItem.id}
              price={menuItem.price}
              title={menuItem.title}
            >
              <p>{menuItem.description}</p>
            </MenuItem>
          ))}
        </div>
        <div>
          <HeadingSection as="h3">The Sweet Tooth</HeadingSection>
          <Decoration className="mb-4 mt-4" />
          {SWEET_TOOTH.filter(menuFilter).map((menuItem) => (
            <MenuItem
              isSpecial={menuItem.isSpecial}
              key={menuItem.id}
              price={menuItem.price}
              title={menuItem.title}
            >
              <p>{menuItem.description}</p>
            </MenuItem>
          ))}
        </div>
        <div>
          <HeadingSection as="h3">Drinks</HeadingSection>
          <Decoration className="mb-4 mt-4" />
          {DRINKS.filter(menuFilter).map((menuItem) => (
            <MenuItem
              isSpecial={menuItem.isSpecial}
              key={menuItem.id}
              price={menuItem.price}
              title={menuItem.title}
            >
              <p>{menuItem.description}</p>
            </MenuItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
