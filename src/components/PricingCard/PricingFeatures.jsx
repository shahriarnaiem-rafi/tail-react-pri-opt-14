import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({ feature }) => {
    return (
        <div>
            <p className="flex items-center gap-2 mt-2">
                <CircleCheckBig className="mr-2 " />
                {feature}
            </p>
        </div>
    );
};

export default PricingFeatures;