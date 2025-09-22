"use client";

import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Overview from "./Overview";

function Calculator() {
  return (
    <div className="calculator-card">
      <div className="content-divider">
        <div className="calculator-content">
          <div className="input-container">
            <Label htmlFor="bill">Bill</Label>
            <Input className="pl-10" type="number" id="bill" placeholder="0" />
          </div>
          <div>
            <Label htmlFor="tip">Select Tip %</Label>
            <ToggleGroup className="toggle-group-grid" type="single">
              <ToggleGroupItem value="5%" aria-label="5%">
                5%
              </ToggleGroupItem>
              <ToggleGroupItem value="10%" aria-label="10%">
                10%
              </ToggleGroupItem>
              <ToggleGroupItem value="15%" aria-label="15%">
                15%
              </ToggleGroupItem>
              <ToggleGroupItem value="25%" aria-label="25%">
                25%
              </ToggleGroupItem>
              <ToggleGroupItem value="50%" aria-label="50%">
                50%
              </ToggleGroupItem>
              <Input
                type="number"
                id="custom"
                placeholder="Custom"
                className="h-9 px-8 py-7 sm:placeholder:text-center"
              />
            </ToggleGroup>
          </div>
          <div className="input-container">
            <Label htmlFor="people">Number of People</Label>
            <Input
              className="pl-10"
              type="number"
              id="people"
              placeholder="0"
            />
          </div>
        </div>
        <Overview />
      </div>
    </div>
  );
}

export default Calculator;
