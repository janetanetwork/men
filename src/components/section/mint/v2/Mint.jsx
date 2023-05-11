import { useState } from "react";
import CountdownTimer from "react-component-countdown-timer";
import { useModal } from "../../../../utils/ModalContext";
import { Slider, SliderItem } from "../../../../common/slider/Slider";
import Button from "../../../../common/button";
import Particle from "./Particles";
import MintStyleWrapper from "./Mint.style";

import thumb1 from "../../../../assets/images/nft/v4-slider-img.png";
import thumb2 from "../../../../assets/images/nft/v4-slider-img2.png";
import thumb3 from "../../../../assets/images/nft/v4-slider-img3.png";
import checkIcon from "../../../../assets/images/icon/mint-right-text-icon.svg";
import discordIcon from "../../../../assets/images/icon/dis_logo.svg";
import twitterIcon from "../../../../assets/images/icon/Twitter.svg";

const Mint = () => {
  const [count, setCount] = useState(1);
  const { mintModalHandle } = useModal();

  const slideImages = [thumb1, thumb2, thumb3];

  const sliderSettings = {
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 500,
    fade: true,
    autoplaySpeed: 500,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const counterSettings = {
    count: 5432560,
    showTitle: true,
    size: 40,
    labelSize: 24,
    backgroundColor: "transparent",
    color: "#fff",
    dayTitle: "D",
    hourTitle: "H",
    minuteTitle: "M",
    secondTitle: "S",
    id: "countdownwrap",
  };

  const handleChenge = () => {};

  return (
    <MintStyleWrapper>
      <Particle />
      <div>
      <iframe
        src="https://ipfs.thirdwebcdn.com/ipfs/QmfK9mw9eQKE9vCbtZht9kygpkNWffdwibsJPnCo7MBN4M/erc721.html?contract=0x0cBF1C44bc8591fc811Ad24aB27603581796800A&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fpolygon.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%7D"
        width="600px"
        height="600px"
        style={{ maxWidth: '100%' }}
        frameBorder="0"
      ></iframe>
    </div>
    </MintStyleWrapper>
  );
};

export default Mint;
