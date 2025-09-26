"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Result from "./Result";
import { useCalculator } from "@/hooks/useCalculator";

function Calculator() {
  const {
    state,
    setBill,
    setCustomPercent,
    setNumOfPeople,
    setPercent,
    reset,
    removeCustomPercent,
    seterrorBoarder,
    seterrorBoarder2,
  } = useCalculator();

  const tipList = [5, 10, 15, 25, 50];
  const [calculatedTip, setCalculatedTip] = useState((0.0).toFixed(2));
  const [calculatedTotal, setCalculatedTotal] = useState((0.0).toFixed(2));

  useEffect(() => {
    if (state.numOfPeople > 0 && state.bill > -1) {
      state.customPercent === ""
        ? setCalculatedTip(
            ((state.bill * (state.percent / 100)) / state.numOfPeople).toFixed(
              2
            )
          )
        : setCalculatedTip(
            (
              (state.bill * (+state.customPercent / 100)) /
              state.numOfPeople
            ).toFixed(2)
          );
    }
    if (state.numOfPeople > 0 && state.bill > -1) {
      setCalculatedTotal(
        (state.bill / state.numOfPeople + +calculatedTip).toFixed(2)
      );
    }
  });

  const toggleButtonClick = (valueMapElement: string) => {
    setPercent(+valueMapElement);
  };

  const inputBillHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (+event.target.value > -1) {
      setBill(+event.target.value);
    }
  };

  const inputnumOfPeopleHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (+event.target.value < 1) {
      seterrorBoarder("focus-visible:border-ring-col-r");
      seterrorBoarder2("focus-visible:ring-ring-col-r");
    } else {
      seterrorBoarder("");
      seterrorBoarder2("");
      setNumOfPeople(Math.floor(+event.target.value));
    }
  };

  const inputCustomTipHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomPercent(event.target.value);
  };

  const defaultValuePeople = () => {
    if (state.numOfPeople > 0) {
      return state.numOfPeople;
    } else {
      return "";
    }
  };

  const defaultValueBill = () => {
    if (state.bill > -1) {
      return state.bill;
    } else {
      return "";
    }
  };

  const resetValue = () => {
    reset();
    setCalculatedTip((0.0).toFixed(2));
    setCalculatedTotal((0.0).toFixed(2));
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
                value={state.customPercent}
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
              {state.errorBoarder && (
                <p className="absolute right-2 bottom-14 text-sm text-red-500">
                  {`Can't be zero`}
                </p>
              )}
              <Input
                className={`pl-10 [&::-webkit-inner-spin-button]:appearance-none ${state.errorBoarder} ${state.errorBoarder2}`}
                type="number"
                id="people"
                placeholder="0"
                value={defaultValuePeople()}
                onChange={inputnumOfPeopleHandler}
              />
            </div>
          </div>
        </div>
        <Result
          tip={calculatedTip.toString()}
          total={calculatedTotal.toString()}
          onCLickResetHandler={() => resetValue()}
        />
      </div>
    </div>
  );
}

export default Calculator;
