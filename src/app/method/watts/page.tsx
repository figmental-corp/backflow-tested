"use client";
import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type WattsMethodInputs = {
  testCockReadings: {
    tc1: number;
    tc2: number;
    tc3: number;
    tc4: number;
  };
  shutOffValve1: number;
  shutOffValve2: number;
  reliefValveOpening: number;
  checkValve1Holding: number;
  checkValve2Differential: number;
};

const steps = [
  {
    title: "Initial Readings",
    description: "Take initial readings from all test cocks",
  },
  {
    title: "Shut-off Valve 1",
    description: "Close shut-off valve 1 and record the reading",
  },
  {
    title: "Shut-off Valve 2",
    description: "Close shut-off valve 2 and record the reading",
  },
  {
    title: "Relief Valve",
    description: "Open test cock 3 and record when the relief valve opens",
  },
  {
    title: "Check Valve 1",
    description: "Test and record the holding pressure of check valve 1",
  },
  {
    title: "Check Valve 2",
    description:
      "Test and record the differential pressure across check valve 2",
  },
];

export default function WattsMethodWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WattsMethodInputs>();

  const onSubmit: SubmitHandler<WattsMethodInputs> = (data) => {
    console.log(data);
    // Here you would typically update the main form with the collected data
  };

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <Card className="mx-auto w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Watts Method Wizard</CardTitle>
        <CardDescription>
          Step {currentStep + 1} of {steps.length}: {steps[currentStep]?.title}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {currentStep === 0 && (
            <div className="space-y-4">
              <Label>Initial Test Cock Readings (PSI)</Label>
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="flex items-center space-x-2">
                  <Label htmlFor={`tc${num}`}>Test Cock {num}</Label>
                  <Input
                    id={`tc${num}`}
                    type="number"
                    step="0.1"
                    {...register(`testCockReadings.tc${num as 1 | 2 | 3 | 4}`, {
                      required: true,
                      min: 0,
                    })}
                  />
                </div>
              ))}
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-2">
              <Label htmlFor="shutOffValve1">
                Shut-off Valve 1 Reading (PSI)
              </Label>
              <Input
                id="shutOffValve1"
                type="number"
                step="0.1"
                {...register("shutOffValve1", { required: true, min: 0 })}
              />
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-2">
              <Label htmlFor="shutOffValve2">
                Shut-off Valve 2 Reading (PSI)
              </Label>
              <Input
                id="shutOffValve2"
                type="number"
                step="0.1"
                {...register("shutOffValve2", { required: true, min: 0 })}
              />
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-2">
              <Label htmlFor="reliefValveOpening">
                Relief Valve Opening Pressure (PSI)
              </Label>
              <Input
                id="reliefValveOpening"
                type="number"
                step="0.1"
                {...register("reliefValveOpening", { required: true, min: 0 })}
              />
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-2">
              <Label htmlFor="checkValve1Holding">
                Check Valve 1 Holding Pressure (PSI)
              </Label>
              <Input
                id="checkValve1Holding"
                type="number"
                step="0.1"
                {...register("checkValve1Holding", { required: true, min: 0 })}
              />
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-2">
              <Label htmlFor="checkValve2Differential">
                Check Valve 2 Differential Pressure (PSI)
              </Label>
              <Input
                id="checkValve2Differential"
                type="number"
                step="0.1"
                {...register("checkValve2Differential", {
                  required: true,
                  min: 0,
                })}
              />
            </div>
          )}

          <div className="mt-4 flex justify-between">
            <Button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            {currentStep < steps.length - 1 ? (
              <Button type="button" onClick={nextStep}>
                Next
              </Button>
            ) : (
              <Button type="submit">Finish</Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
