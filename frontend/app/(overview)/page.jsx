import NavBar from "../../components/landingpage/nav-bar";
import "./landingpage.css"
import Header from "../../components/landingpage/header";
import { InfiniteMovingCardsDemo } from "../../components/landingpage/marquee";
import Work from "../../components/landingpage/work";
import InviteSection from "../../components/landingpage/invite";
import Team from "../../components/landingpage/team";
import LenisProvider from "../../components/providers/lenis-provider";
import Accordion from "../../components/landingpage/accordion";
import Footer from "../../components/landingpage/footer";
import OverlayMenu from "../../components/landingpage/overlay";
import ChatBot from '../../components/landingpage/chatbot'

// import Replicate from "replicate";

// const replicate = new Replicate({
//   auth: "r8_LVAAjBhUcYeuCaUyvKyu9TYfSmCzXMW3kPbrW",
// });


export default async function Home({ req }) {


  // const output = await replicate.run(
  //   "01-ai/yi-34b-chat:914692bbe8a8e2b91a4e44203e70d170c9c5ccc1359b283c84b0ec8d47819a46",
  //   {
  //     input: {
  //       top_k: 50,
  //       top_p: 0.8,
  //       prompt: "qui est le president des USA",
  //       temperature: 0.3,
  //       max_new_tokens: 1024,
  //       prompt_template: "<|im_start|>system\nYou are a helpful assistant<|im_end|>\n<|im_start|>user\n{prompt}<|im_end|>\n<|im_start|>assistant\n",
  //       repetition_penalty: 1.2
  //     }
  //   }
  // );
  // console.log(output);
  return (
    <LenisProvider>
      <main>
        <NavBar/>
        <OverlayMenu/>
        <Header/>
        <InfiniteMovingCardsDemo/>
        <Work/>
        <InviteSection/>
        <Team/>
        <Accordion/>
        <Footer/>
        <ChatBot/>
      </main>
    </LenisProvider>
  );
}
