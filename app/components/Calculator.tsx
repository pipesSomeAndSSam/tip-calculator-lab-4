"use client";

import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function Calculator() {
  return (
    <div className="calculator-card">
      <div className="content-divider">
        <div className="calculator-content">
          <div className="grid w-full items-center gap-3">
            <Label htmlFor="bill">Bill</Label>
            <Input className="pl-10" type="number" id="bill" placeholder="0" />
          </div>
          <div>
            <Label htmlFor="tip">Select Tip %</Label>
            <div className="grid sm:grid-cols-3 grid-cols-2 mt-4 gap-4">
              <Button>5%</Button>
              <Button>10%</Button>
              <Button>15%</Button>
              <Button>25%</Button>
              <Button>50%</Button>
              <Input
                type="number"
                id="custom"
                placeholder="Custom"
                className="h-9 px-8 py-7 sm:placeholder:text-center"
              />
            </div>
          </div>
          <div className="grid w-full items-center gap-3">
            <Label htmlFor="people">Number of People</Label>
            <Input
              className="pl-10"
              type="number"
              id="people"
              placeholder="0"
            />
          </div>
        </div>
        <div>OTHER CONTENT</div>
      </div>
    </div>
  );
}

export default Calculator;
