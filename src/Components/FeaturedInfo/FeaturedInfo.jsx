import { ArrowDownward } from "@material-ui/icons";

import "./FeaturedInfo.css";
export default function FeaturedInfo() {
  return (
    <div className="Featured">
      <div className="FeaturedItem">
        <span className="FeaturedTitle">Revenue</span>
        <div className="FeaturedMoneyContainer">
          <span className="FeaturedMoney">$$$$$</span>
          <span className="FeaturedMoneyRate">
            -11.4 <ArrowDownward />
          </span>
        </div>
        <span className="FeaturedSub">Compared to last month</span>
      </div>
      <div className="FeaturedItem">
        <span className="FeaturedTitle">Sales</span>
        <div className="FeaturedMoneyContainer">
          <span className="FeaturedMoney">$$$$$</span>
          <span className="FeaturedMoneyRate">
            -11.4 <ArrowDownward />
          </span>
        </div>
        <span className="FeaturedSub">Compared to last month</span>
      </div>
      <div className="FeaturedItem">
        <span className="FeaturedTitle">Cost</span>
        <div className="FeaturedMoneyContainer">
          <span className="FeaturedMoney">$$$$$</span>
          <span className="FeaturedMoneyRate">
            -11.4 <ArrowDownward />
          </span>
        </div>
        <span className="FeaturedSub">Compared to last month</span>
      </div>
    </div>
  );
}
