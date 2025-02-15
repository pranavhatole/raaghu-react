import React from "react";
import RdsOffcanvas from "./rds-offcanvas";
import RdsButton from "../rds-button/rds-button";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: 'Elements/Offcanvas',
  component: RdsOffcanvas,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      options: ["top", "bottom", "end", "start"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof RdsOffcanvas>;

export default meta;
type Story = StoryObj<typeof RdsOffcanvas>;

export const Offcanvas: Story = {
  args: {
    offId: "canvasExample",
    canvasTitle: "Offcanvas Title",
    scrolling: false,
    placement: "end",
    backDrop: "static",
    offcanvaswidth: 650,
    children: (
      <>
        <h4 className="p-3">
          Hello Offcanvas Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </h4>
        {/* <div className="col-4 m-4">
          <RdsButton
            label="Close "
            colorVariant="primary"
            block={false}
            tooltipTitle={""}
            type="submit"
            size="small"
            data-bs-dismiss="offcanvas"
            databstoggle="offcanvas"
            databstarget="#canvasExample"
            ariacontrols="canvasExample"
          />
        </div> */}
      </>
    ),
    offcanvasbutton: (
      <RdsButton
        label="Button"
        colorVariant="primary"
        block={false}
        type="button"
        size="medium"
        data-bs-toggle="offcanvas"
        data-bs-target="#canvasExample"
        aria-controls="canvasExample"
      ></RdsButton>
    ),
  },
} satisfies Story;
Offcanvas.parameters = { controls: { include: ['offId', 'canvasTitle', 'scrolling', 'placement', 'backDrop', 'offcanvaswidth', 'children', 'offcanvasbutton'] } };


