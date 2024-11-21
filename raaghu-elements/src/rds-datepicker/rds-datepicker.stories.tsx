import RdsDatepicker, { RdsDatepickerProps } from "./rds-datepicker";
import { Meta, StoryObj } from "@storybook/react";


const meta: Meta = {
    title: 'Elements/Datepicker',
    component: RdsDatepicker,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        datepickerStyle: {
            options: ["Dropdown", "Selector"],
            control: { type: "select" },
        },
        layout: {
            options: ["default", "showMonthYearPicker", "showYearPicker", "showTwoColumnMonthYearPicker"],
            control: { type: "select" },
        }, 
    },
} satisfies Meta<typeof RdsDatepicker>;

export default meta;
type Story = StoryObj<typeof RdsDatepicker>;

export const Default: Story = {
    args: {
        title: "Date",
        showTitle: true,
        datepickerStyle: "Dropdown",
        type: "default",
        isMandatory : true,
        placeholderText: "Select Date",
        layout: "default",
    }
} satisfies Story;
Default.parameters = { controls: { include: ['layout', 'showTitle','title','isMandatory','placeholderText','datepickerStyle'] } };

export const Advanced: Story = {
    args: {
        title: "Date",
        showTitle: true,
        datepickerStyle: "Dropdown",
        type: "advanced",
        isMandatory : true,
        placeholderText: "Select Date",
        layout: "default",
    }
} satisfies Story;
Advanced.parameters = { controls: { include: ['layout', 'showTitle','title','isMandatory','placeholderText','datepickerStyle'] } };

export const WithTime: Story = {
    args: {
        title: "Date",
        showTitle: true,
        datepickerStyle: "Dropdown",
        type: "withTime",
        isMandatory : true,
        placeholderText: "Select Date",
        layout: "default",
    }
} satisfies Story;
WithTime.parameters = { controls: { include: ['layout', 'showTitle','title','isMandatory','placeholderText','datepickerStyle'] } };
