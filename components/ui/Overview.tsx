import React, { type MouseEventHandler } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function Overview({
  tip,
  total,
  onCLickResetHandler,
}: {
  tip: string;
  total: string;
  onCLickResetHandler: MouseEventHandler;
}) {
  return (
    <div className="overview-card">
      <div className="overview-items">
        <div className="overview-content">
          <div>
            <Label htmlFor="amount">Tip Amount</Label>
            <p className="person-text">/ person</p>
          </div>
          <p className="amount-text">${tip}</p>
        </div>
        <div className="overview-content">
          <div>
            <Label htmlFor="total">Total</Label>
            <p className="person-text">/ person</p>
          </div>
          <p className="amount-text">${total}</p>
        </div>
        <Button
          className="bg-[#26c2ad] text-[#045456] sm:mt-34 sm:px-20 flex"
          onClick={onCLickResetHandler}
        >
          RESET
        </Button>
      </div>
    </div>
  );
}

export default Overview;
