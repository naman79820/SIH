// pages/index.js
import Image from "next/image";
import Header from "./components/header";
import '../app/globals.css';
import Body from "./components/body";
import Footer from "./components/footer";
import Review from "./components/review";

export default function Home() {
  return (
    <>
      <Header />
      <Body/>
      <Review/>
      <Footer/>
    </>
  );
}