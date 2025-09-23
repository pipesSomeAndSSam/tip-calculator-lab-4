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
  const [bill, setBill] = useState(-1);
  const [numOfPeople, setnumOfPeople] = useState(0);
  const [percent, setPercent] = useState(0);
  const [customPercent, setcustomPercent] = useState("");

  useEffect(() => {
    if (numOfPeople > 0 && bill > -1) {
      customPercent === ""
        ? setTip(((bill * (percent / 100)) / numOfPeople).toFixed(2))
        : setTip(((bill * (+customPercent / 100)) / numOfPeople).toFixed(2));
    }
    if (numOfPeople > 0 && bill > -1) {
      setTotal((bill / numOfPeople).toFixed(2));
    }
  });

  const toggleButtonClick = (valueMapElement: string) => {
    const tipPercentage: number = +valueMapElement;
    setPercent(tipPercentage);
  };

  const inputBillHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBill(+event.target.value);
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

  const ressetStates = () => {
    setTip((0).toFixed(2));
    setTotal((0.0).toFixed(2));
    setBill(-1);
    setnumOfPeople(0);
    setPercent(0);
    setcustomPercent("");
  };

  const defaultValuePeople = () => {
    if (numOfPeople > 0) {
      return numOfPeople;
    } else {
      return "";
    }
  };

  const defaultValueBill = () => {
    if (bill > -1) {
      return bill;
    } else {
      return "";
    }
  };

  const removeCustomPercent = () => {
    setcustomPercent("");
  };

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
                className="pl-10 [&::-webkit-inner-spin-button]:appearance-none"
                type="number"
                id="bill"
                placeholder="0"
                value={defaultValueBill()}
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
                    onClick={removeCustomPercent}
                  >
                    {valueMapElement}%
                  </ToggleGroupItem>
                );
              })}
              <Input
                type="number"
                id="custom"
                placeholder="Custom"
                className="h-9 py-7 sm:placeholder:text-center [&::-webkit-inner-spin-button]:appearance-none"
                value={customPercent}
                onChange={inputCustomTipHandler}
                onClick={removeCustomPercent}
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
                className="pl-10 [&::-webkit-inner-spin-button]:appearance-none"
                type="number"
                id="people"
                placeholder="0"
                value={defaultValuePeople()}
                onChange={inputnumOfPeopleHandler}
              />
            </div>
          </div>
        </div>
        <Overview
          tip={tip.toString()}
          total={total.toString()}
          onCLickResetHandler={() => ressetStates()}
        />
      </div>
    </div>
  );
}

export default Calculator;
