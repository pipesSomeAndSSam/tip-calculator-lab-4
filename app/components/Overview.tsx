import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function Overview() {
  return (
    <div className="overview-card">
      <div className="overview-items">
        <div className="overview-content">
          <div>
            <Label htmlFor="amount">Tip Amount</Label>
            <p className="person-text">/ person</p>
          </div>
          <p className="amount-text">$0.00</p>
        </div>
        <div className="overview-content">
          <div>
            <Label htmlFor="total">Total</Label>
            <p className="person-text">/ person</p>
          </div>
          <p className="amount-text">$0.00</p>
        </div>
        <Button className="bg-[#26c2ad] text-[#045456] sm:mt-34 sm:px-20 flex">
          RESET
        </Button>
      </div>
    </div>
  );
}

export default Overview;
