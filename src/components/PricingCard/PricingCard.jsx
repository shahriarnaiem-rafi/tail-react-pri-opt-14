import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricing }) => {
    const {name,price,description,features}=pricing;
    return (
    <div className="border-2 border-yellow-400 rounded-lg p-4 m-4">
      {/* {card header}   */}
      <div>
        <h1 className="text-7xl font-bold"> {name} </h1>
        <h4 className="text-3xl">${price}/month</h4>
      </div>
      {/* card body */}
      <div className="bg-amber-400 p-4 rounded-2xl mt-5">
            <p>{description}</p>
            {
                features.map((feature,index)=><PricingFeatures key={index} feature={feature}></PricingFeatures>)
            }

      </div>
    </div>
  );
};

export default PricingCard;
