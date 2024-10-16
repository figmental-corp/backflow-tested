import React from "react";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "./select";

import states from "@/constants/states";
import { Label } from "@radix-ui/react-label";
import { Controller } from "react-hook-form";

interface StateSelectProps
  extends React.ComponentPropsWithoutRef<typeof Select> {
  control: any;
  name?: string;
  errors: any;
}

const StateSelect = React.forwardRef<HTMLDivElement, StateSelectProps>(
  ({ control, name = "state", errors }) => (
    <>
      <Label htmlFor={name}>State</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger>
              <SelectValue placeholder="Select a state" />
            </SelectTrigger>
            <SelectContent>
              {states.map((state) => (
                <SelectItem key={state.value} value={state.value}>
                  {state.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      <p className="min-h-5 text-sm text-red-500">{errors.state?.message}</p>
    </>
  ),
);

StateSelect.displayName = "StateSelect";

export default StateSelect;
