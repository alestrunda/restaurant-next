import Head from "./Head";

const Page = ({ children, useEdamam }) => (
  <div className="flex flex-col min-h-screen">
    <Head useEdamam={useEdamam} />
    {children}
  </div>
);

export default Page;
