import Decoration from "../components/Decoration";
import HeadingSection from "../components/HeadingSection";
import MenuItem from "../components/MenuItem";

const Menu = () => (
  <section className="bg-pattern section-shadow relative">
    <div className="container mx-auto px-14 py-20 grid grid-cols-2 gap-12 text-lg">
      <div>
        <HeadingSection as="h3">Light Nibbles</HeadingSection>
        <Decoration className="mb-4 mt-4" />
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
        <Decoration className="mb-4 mt-4" />
        <MenuItem price={8.99} title="Fish Fingers &amp; Fries">
          <p>
            Aliquam erat volutpat. Nullam at lectus ut dolor dictum feugiat ut
            vel odio.
          </p>
        </MenuItem>
        <MenuItem price={9.99} title="Grilled Sausages Platter">
          <p>Praesent accumsan, nunc dictum venenatis scelerisque.</p>
        </MenuItem>
        <MenuItem price={9.99} title="Roast Chicken &amp; Potatoes">
          <p>Velit sem sodales dolor, sed aliquet ligula mauris vitae ex.</p>
        </MenuItem>
        <MenuItem isSpecial price={11.99} title="Steak Frites">
          <p>In quis velit id odio laoreet convallis.</p>
        </MenuItem>
      </div>
      <div>
        <HeadingSection as="h3">The Sweet Tooth</HeadingSection>
        <Decoration className="mb-4 mt-4" />
        <MenuItem price={3.99} title="Doughnuts">
          <p>
            Nunc mauris enim, pulvinar vitae mi ut, suscipit elementum purus.
          </p>
        </MenuItem>
        <MenuItem isSpecial price={3.99} title="Fruit Danish">
          <p>
            Etiam neque libero, dictum in luctus eu, accumsan placerat purus.
          </p>
        </MenuItem>
        <MenuItem price={4.99} title="Pie of the Day">
          <p>Vivamus volutpat, mauris lacinia sagittis cursus.</p>
        </MenuItem>
      </div>
      <div>
        <HeadingSection as="h3">Drinks</HeadingSection>
        <Decoration className="mb-4 mt-4" />
        <MenuItem price={2.99} title="Hot or Iced Coffee">
          <p>Morbi pretium ultricies erat et sodales.</p>
        </MenuItem>
        <MenuItem price={2.99} title="Hot or Iced Tea">
          <p>
            Duis sollicitudin pharetra lectus, non euismod nunc mattis eget.
          </p>
        </MenuItem>
        <MenuItem price={3.99} title="Fresh Fruit Smoothies">
          <p>Nam faucibus risus id ante hendrerit, nec euismod odio finibus.</p>
        </MenuItem>
      </div>
    </div>
  </section>
);

export default Menu;
