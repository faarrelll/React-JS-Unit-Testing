/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Children } from "react";

interface Props {
  render: (item: any, index: number) => JSX.Element;
  data: React.ReactNode[] | any[];
}

export const EachElement = ({ data, render }: Props) => {
  return Children.toArray(data?.map((item, index) => render(item, index)));
};
