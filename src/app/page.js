// pages/index.js
import Image from "next/image";
import Header from "./components/header";
import '../app/globals.css';
import Body from "./components/body";

export default function Home() {
  return (
    <>
      <Header />
      <Body/>
    </>
  );
}