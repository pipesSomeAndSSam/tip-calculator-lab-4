"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Overview from "./Overview";

function Calculator() {
  const tipList = [5, 10, 15, 25, 50];
  const [tip, setTip] = useState((0.0).toFixed(2));
  const [total, setTotal] = useState((0.0).toFixed(2));
  const [bill, setBil] = useState(0);
  const [numOfPeople, setnumOfPeople] = useState(1);
  const [percent, setPercent] = useState(0);
  const [customPercent, setcustomPercent] = useState("");

  let totalval: number = 0;

  useEffect(() => {
    customPercent === ""
      ? setTip(((bill * (percent / 100)) / numOfPeople).toFixed(2))
      : setTip(((bill * (+customPercent / 100)) / numOfPeople).toFixed(2));
  });

  useEffect(() => {
    totalval = bill / numOfPeople;
    setTotal(totalval.toFixed(2));
  });

  const toggleButtonClick = (valueMapElement: string) => {
    const tipPercentage: number = +valueMapElement;
    setPercent(tipPercentage);
  };

  const inputBillHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBil(+event.target.value);
  };

  const inputnumOfPeopleHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setnumOfPeople(+event.target.value);
  };

  const inputCustomTipHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setcustomPercent(event.target.value);
  };

  function resetValues() {
    setTip((0).toFixed(2));
    setTotal((0.0).toFixed(2));
    setBil(0);
    setnumOfPeople(1);
    setPercent(0);
    setcustomPercent("");
  }

  return (
    <div className="calculator-card">
      <div className="content-divider">
        <div className="calculator-content">
          <div className="input-container">
            <Label htmlFor="bill">Bill</Label>
            <div className="flex relative items-center">
              <Image
                className="absolute ml-3"
                src="/icon-dollar.svg"
                alt="dollar icon"
                width={15}
                height={15}
              />
              <Input
                className="pl-10"
                type="number"
                id="bill"
                placeholder="0"
                value={bill}
                onChange={inputBillHandler}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="tip">Select Tip %</Label>
            <ToggleGroup
              className="toggle-group-grid"
              type="single"
              onValueChange={(valueMapElement) =>
                toggleButtonClick(valueMapElement)
              }
            >
              {tipList.map((valueMapElement) => {
                return (
                  <ToggleGroupItem
                    key={valueMapElement}
                    value={valueMapElement.toString()}
                  >
                    {valueMapElement}%
                  </ToggleGroupItem>
                );
              })}
              <Input
                type="number"
                id="custom"
                placeholder="Custom"
                className="h-9 px-8 py-7 sm:placeholder:text-center"
                value={customPercent}
                onChange={inputCustomTipHandler}
              />
            </ToggleGroup>
          </div>
          <div className="input-container">
            <Label htmlFor="people">Number of People</Label>
            <div className="relative flex items-center">
              <Image
                className="absolute ml-3"
                src="/icon-person.svg"
                alt="person icon"
                width={15}
                height={15}
              />
              <Input
                className="pl-10"
                type="number"
                id="people"
                placeholder="0"
                value={numOfPeople}
                onChange={inputnumOfPeopleHandler}
              />
            </div>
          </div>
        </div>
        <Overview
          tip={tip.toString()}
          total={total.toString()}
          onCLickResetHandler={() => resetValues()}
        />
      </div>
    </div>
  );
}

export default Calculator;
