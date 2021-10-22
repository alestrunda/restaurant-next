import Decoration from "../components/Decoration";
import HeadingSection from "../components/HeadingSection";
import MenuItem from "../components/MenuItem";

const LIGHT_NIBBLES = [
  {
    description: "Nullam iaculis vitae est vel volutpat.",
    id: 1,
    price: 4.99,
    title: "Seafood Chowder",
  },
  {
    description:
      "Sed tristique egestas mi, sit amet ullamcorper mi blandit id. Vivamus at elementum nibh.",
    id: 1,
    isSpecial: true,
    price: 4.99,
    title: "Island Salad",
  },
  {
    description: "Nam ut tellus tincidunt, imperdiet massa sed, congue augue.",
    id: 1,
    price: 8.99,
    title: "Lobster Baby Rolls",
  },
  {
    description:
      "In auctor porta dolor id laoreet. Sed porttitor mauris eu neque semper venenatis.",
    id: 1,
    price: 7.99,
    title: "BLT Croissant-wich",
  },
];

const TUMMY_FILLERS = [
  {
    description:
      "Aliquam erat volutpat. Nullam at lectus ut dolor dictum feugiat ut vel odio.",
    id: 1,
    price: 8.99,
    title: "Seafood Chowder",
  },
  {
    description: "Praesent accumsan, nunc dictum venenatis scelerisque.",
    id: 1,
    price: 9.99,
    title: "Grilled Sausages Platter",
  },
  {
    description: "Velit sem sodales dolor, sed aliquet ligula mauris vitae ex.",
    id: 1,
    price: 9.99,
    title: "Roast Chicken & Potatoes",
  },
  {
    description: "In quis velit id odio laoreet convallis.",
    id: 1,
    isSpecial: true,
    price: 11.99,
    title: "Steak Frites",
  },
];

const SWEET_TOOTH = [
  {
    description:
      "Nunc mauris enim, pulvinar vitae mi ut, suscipit elementum purus.",
    id: 1,
    price: 3.99,
    title: "Doughnuts",
  },
  {
    description:
      "Etiam neque libero, dictum in luctus eu, accumsan placerat purus.",
    id: 1,
    isSpecial: true,
    price: 3.99,
    title: "Fruit Danish",
  },
  {
    description: "Vivamus volutpat, mauris lacinia sagittis cursus.",
    id: 1,
    price: 4.99,
    title: "Pie of the Day",
  },
];

const DRINKS = [
  {
    description: "Morbi pretium ultricies erat et sodales.",
    id: 1,
    price: 2.99,
    title: "Hot or Iced Coffee",
  },
  {
    description:
      "Duis sollicitudin pharetra lectus, non euismod nunc mattis eget.",
    id: 3,
    price: 2.99,
    title: "Hot or Iced Tea",
  },
  {
    description:
      "Nam faucibus risus id ante hendrerit, nec euismod odio finibus.",
    id: 2,
    price: 3.99,
    title: "Fresh Fruit Smoothies",
  },
];

const Menu = () => (
  <section className="bg-pattern section-shadow relative">
    <div className="container mx-auto px-14 py-20 grid grid-cols-2 gap-12 text-lg">
      <div>
        <HeadingSection as="h3">Light Nibbles</HeadingSection>
        <Decoration className="mb-4 mt-4" />
        {LIGHT_NIBBLES.map((menuItem) => (
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
        {TUMMY_FILLERS.map((menuItem) => (
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
        {SWEET_TOOTH.map((menuItem) => (
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
        {DRINKS.map((menuItem) => (
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

export default Menu;
