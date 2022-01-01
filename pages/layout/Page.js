import Head from "./Head";

const Page = ({ children, title, useEdamam }) => (
  <div className="flex flex-col min-h-screen">
    <Head useEdamam={useEdamam} title={title} />
    {children}
  </div>
);

export default Page;
