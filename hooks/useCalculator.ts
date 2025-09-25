import { useState, useCallback } from "react";
import { calculateTip, calculateTotal } from "@/lib/utils/calculate";

interface StatesCalculator {
  bill: number;
  customPercent: string;
  numOfPeople: number;
  percent: number;
  tip: string;
  total: string;
  errorBoarder: string;
  errorBoarder2: string;
  calculatedTip: string;
  calculatedTotal: string;
}
export const useCalculator = () => {
  const [state, setState] = useState<StatesCalculator>({
    bill: -1,
    customPercent: "",
    numOfPeople: 0,
    percent: 0,
    tip: (0.0).toFixed(2),
    total: (0.0).toFixed(2),
    errorBoarder: "",
    errorBoarder2: "",
    calculatedTip: "",
    calculatedTotal: "",
  });

  const seterrorBoarder = useCallback((errorBoarder: string) => {
    setState((prevErrorBoarder) => ({ ...prevErrorBoarder, errorBoarder }));
  }, []);

  const seterrorBoarder2 = useCallback((errorBoarder2: string) => {
    setState((prevErrorBoarder2) => ({ ...prevErrorBoarder2, errorBoarder2 }));
  }, []);

  const setBill = useCallback((bill: number) => {
    setState((prevBill) => ({ ...prevBill, bill }));
  }, []);

  const setCustomPercent = useCallback((customPercent: string) => {
    setState((prevCustomPercent) => ({ ...prevCustomPercent, customPercent }));
  }, []);

  const setNumOfPeople = useCallback((numOfPeople: number) => {
    setState((prevNumOfPeople) => ({ ...prevNumOfPeople, numOfPeople }));
  }, []);

  const setPercent = useCallback((percent: number) => {
    setState((prevPercent) => ({ ...prevPercent, percent }));
  }, []);

  const setTip = useCallback((tip: string) => {
    setState((prevTip) => ({ ...prevTip, tip }));
  }, []);

  const setTotal = useCallback((total: string) => {
    setState((prevTotal) => ({ ...prevTotal, total }));
  }, []);

  const removeCustomPercent = useCallback(() => {
    setCustomPercent("");
  }, []);

  const setCalculatedTip = useCallback(
    (
      bill: number,
      percent: number,
      numOfPeople: number,
      customPercent: string
    ) => {
      const tipValue: string = calculateTip({
        bill,
        percent,
        numOfPeople,
        customPercent,
      });
      setState((prevCalculatedTip) => ({ ...prevCalculatedTip, tipValue }));
    },
    []
  );

  const setCalculatedTotal = useCallback(
    (numOfPeople: number, bill: number, tip: string) => {
      const total: string = calculateTotal({ numOfPeople, bill, tip });
      setState((prevCalculatedTotal) => ({ ...prevCalculatedTotal, total }));
    },
    []
  );

  const reset = useCallback(() => {
    setState({
      bill: -1,
      customPercent: "",
      numOfPeople: 0,
      percent: 0,
      tip: (0.0).toFixed(2),
      total: (0.0).toFixed(2),
      errorBoarder: "",
      errorBoarder2: "",
      calculatedTip: "",
      calculatedTotal: "",
    });
  }, []);

  return {
    state,
    setBill,
    setCustomPercent,
    setNumOfPeople,
    setPercent,
    setTip,
    setTotal,
    reset,
    removeCustomPercent,
    seterrorBoarder,
    seterrorBoarder2,
    setCalculatedTip,
    setCalculatedTotal,
  };
};
