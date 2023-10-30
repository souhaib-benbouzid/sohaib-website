import PagesBackground from "../PagesBackground";
import { Footer } from "../footer";
import NavBar from "../navbar";
import { MobileBottomNavHeight } from "../navbar/mobile-navbar";

type Props = {
  children: React.ReactNode;
};

const FullPage = (props: Props) => {
  return (
    <main>
      <PagesBackground>
        <NavBar />
        {props.children}
        <MobileBottomNavHeight />
        <Footer />
      </PagesBackground>
    </main>
  );
};

export default FullPage;
