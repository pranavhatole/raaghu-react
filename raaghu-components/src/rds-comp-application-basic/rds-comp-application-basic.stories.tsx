import type { Meta, StoryObj } from '@storybook/react';
import RdsCompApplicationBasic from './rds-comp-application-basic';


const meta: Meta = { 
    title: "Component/Application Basic",
    component: RdsCompApplicationBasic,
    parameters: {
        layout: "",
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof RdsCompApplicationBasic>;

export default meta;
type Story = StoryObj<typeof RdsCompApplicationBasic>;

export const Default: Story = {
    args: {
        
    }
} satisfies Story;