import { useState } from "react";
import { useModal } from "../../../../utils/ModalContext";
import { Slider, SliderItem } from "../../../../common/slider/Slider";
import Button from "../../../../common/button";

import thumb1 from "../../../../assets/images/nft/emoji-img4.png";
import thumb2 from "../../../../assets/images/nft/emoji-img5.png";
import thumb3 from "../../../../assets/images/nft/emoji-img6.png";

import MintStyleWrapper from "./Mint.style";
const Mint = () => {
  const [count, setCount] = useState(1);
  const { mintModalHandle } = useModal();

  const slideImages = [thumb1, thumb2, thumb3];

  const settings = {
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

  const handleChenge = () => {};

  return (
    <MintStyleWrapper>
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
