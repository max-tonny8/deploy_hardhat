import { Header } from "../header";

export const Layout = (props: { children: any }) => {
  return (
    <>
      <Header/>
      {props.children}
    </>
  );
}