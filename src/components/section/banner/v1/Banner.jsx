import { useModal } from "../../../../utils/ModalContext";
import Counter from "../../../../common/counter";
import Button from "../../../../common/button";
import BannerV1Wrapper from "./Banner.style";

import characterThumb from "../../../../assets/images/nft/k.png";
import mintLiveDownArrow from "../../../../assets/images/nft/mint_live_down_arrow.svg";
import mintLiveText from "../../../../assets/images/nft/mint_live_text.png";
import homeImageBG from "../../../../assets/images/nft/home_img_bg.png";
import { useEffect, useState } from "react";
import { totalMintCount } from '../../../../utils/web3mint';

const Banner = () => {
  const { mintModalHandle, connectWalletModalHanlde, account } = useModal();
  const [remaining, setRemaining] = useState(0);

  useEffect(() =>{
    const calculateRemainingItems = async () => {
      let totaltMintedItems = await totalMintCount();
      console.log(totaltMintedItems);
      setRemaining(totaltMintedItems);
    }

    calculateRemainingItems();
  },[])
  return (
    <BannerV1Wrapper id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="bithu_v1_baner_left">
              <h2>Pixie Punks 🎯 NFT collections</h2>{/*
              <h3>
                <span className="count">
                  <Counter end={remaining} duration={remaining} />
                }
                </span>{" "}
                / 9999 Minted
              </h3> */}
              <div className="banner_buttons">
                {
                  account ?
                   <a href="#">
                  <Button lg variant="mint">
                    {" "}
                    Minting Soon!
                  </Button></a> :
                  <a href="#">
                  <Button lg variant="mint">
                    {" "}
                    Minting Soon!
                  </Button></a>
                }
                <a href="https://twitter.com/pixieversepro/status/1656338930071896076?cxt=HHwWmICwqebev_wtAAAA" target="blank">
                <Button lg variant="outline">
                
                  Wishlist now
                </Button></a>
              </div>
              <div className="coin-info">
              <span>Presale:</span>
                <span>Max 3 NFTs per wallet  Price 28 Matic + gas</span>
                <span>Public Sale:</span>
                <span>Max 3 NFTs per wallet  Price 150 Matic + gas</span>
                <span>
                  Pre-minting:{" "}
                  <span className="highlighted">15 May 00:30H</span>
                </span>
               <span>
                  Public Sale:{" "}
                  <span className="highlighted">17 May 00:30H</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bithu_v1_baner_right">
              <div className="bithu_v1_baner_right_img_sect">
                <div className="mint_live_circle_sect">
                  <div className="mint_live_circle">
                    <span>
                      <img src={mintLiveDownArrow} alt="" />
                    </span>
                    <span className="mint_live_text rotated-style">
                      <img src={mintLiveText} alt="" />
                    </span>
                  </div>
                </div>
                <div className="bithu_v1_baner_right_img_bg">
                  <img src={homeImageBG} alt="" />
                </div>
                <div className="bithu_v1_baner_right_img">
                  <img src={characterThumb} alt="avater" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerV1Wrapper>
  );
};

export default Banner;
