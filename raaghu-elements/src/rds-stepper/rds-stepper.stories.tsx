import React from "react";
import RdsStepper from "./rds-stepper";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
    title: 'Elements/Stepper',
    component: RdsStepper,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        stepperType: {
            options: ["simple", "withcheckbox"],
            control: { type: "select" },
        },
        showSubtitles: {
            control: { type: 'boolean' },
            defaultValue: true,
        },
    },
} satisfies Meta<typeof RdsStepper>;

export default meta;
type Story = StoryObj<typeof RdsStepper>;

export const Simple: Story = {
    args: {
        stepperType: "simple",
    }
} satisfies Story;
Simple.parameters = { controls: { include: ['stepperType'] } };

export const withcheckbox: Story = {
    args: {
        stepperType: "withcheckbox",  
        stepperDetails: [
        { label: "Project Details", subtitle: "You can initiate a project which will be workspace to track, monitor project progress" },
        { label: "Design System", subtitle: "Create and customize your design system based on your branding guidelines. AI Pundit will help you generate it." },
        { label: "Resource Allocation", subtitle: "Create and customize your design system based on your branding guidelines. AI Pundit will help you generate it" },
    ],
    showSubtitles: true,
    }
} satisfies Story;
withcheckbox.parameters = { controls: { include: ['stepperType', 'stepperDetails', 'showSubtitles'] } };

