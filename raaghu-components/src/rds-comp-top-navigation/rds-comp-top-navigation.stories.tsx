import type { Meta, StoryObj } from '@storybook/react';
import RdsCompTopNavigation from "./rds-comp-top-navigation";
import { id } from 'date-fns/locale';


const meta: Meta = { 
    title: "Components/Top Navigation",
    component: RdsCompTopNavigation,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof RdsCompTopNavigation>;

export default meta;
type Story = StoryObj<typeof RdsCompTopNavigation>;

export const Default: Story = {
    args: {
        navbarTitle: "Dashboard",
        navbarSubTitle: "Statistics and reports",
        brandName: "Raaghu",
        brandLogo: "assets/Raaghu-logo-mfe-black.png",
        profileTitle: "John Doe",
        profileEmail: "john.doe@raaghu.io",
        profileName: "John Doe",
        logo: "https://anzstageui.raaghu.io/assets/raaghu_icon.png",
        notifications: [
            {
                status: "success",
                title: "Tenant added",
                urlTitle: "hello",
                time: "a month ago",
                state: 1,
                userNotificationId: 0,
                selected: false,
            },
    
            {
                status: "error",
                title: "Tenant deleted",
                urlTitle: "hello",
                time: "a month ago",
                state: 1,
                userNotificationId: 1,
                selected: false,
            },
    
            {
                status: "warn",
                title: "Tenant added  warn",
                urlTitle: "hello",
                time: "a month ago",
                state: 1,
                userNotificationId: 2,
                selected: false,
            },
    
            {
                status: "info",
                title: "Tenant deleted info",
                urlTitle: "hello",
                time: "a month ago",
                state: 1,
                userNotificationId: 3,
                selected: false,
            },
        ],    
        languageItems: [
            {
                label: "EN(US)",
                val: "en",
                icon: "us",
                iconWidth: "20px",
                iconHeight: "20px",
            },
            {
                label: "English(IND)",
                val: "en",
                icon: "in",
                iconWidth: "20px",
                iconHeight: "20px",
            },
            {
                label: "French",
                val: "fr",
                icon: "us",
                iconWidth: "20px",
                iconHeight: "20px",
            },
        ],
        themeItems: [
            {
                label: "Light",
                val: "light",
                icon: "sun",
                iconWidth: "20px",
                iconHeight: "20px",
            },
            {
                label: "Dark",
                val: "dark",
                icon: "moon",
                iconWidth: "20px",
                iconHeight: "20px",
            }
        ],
        showLogo: true,
    }
} satisfies Story;

Default.parameters = { controls: { include: ['navbarTitle', 'navbarSubTitle', 'brandName', 'brandLogo', 'profileTitle', 'profileName', 'logo', 'notifications', 'languageItems', 'themeItems','showLogo'] } };
export const ABP: Story = {
    args: {
        navbarTitle: "Dashboard",
        navbarSubTitle: "Statistics and reports",
        brandName: "Raaghu",
        brandLogo: "assets/Raaghu-logo-mfe-black.png",
        profileTitle: "John Doe",
        profileEmail: "john.doe@raaghu.io",
        profileName: "John Doe",
        logo: "https://anzstageui.raaghu.io/assets/raaghu_icon.png",
        notifications: [
            {
                status: "success",
                title: "Tenant added",
                urlTitle: "hello",
                time: "a month ago",
                state: 1,
                userNotificationId: 0,
                selected: false,
            },
    
            {
                status: "error",
                title: "Tenant deleted",
                urlTitle: "hello",
                time: "a month ago",
                state: 1,
                userNotificationId: 1,
                selected: false,
            },
    
            {
                status: "warn",
                title: "Tenant added  warn",
                urlTitle: "hello",
                time: "a month ago",
                state: 1,
                userNotificationId: 2,
                selected: false,
            },
    
            {
                status: "info",
                title: "Tenant deleted info",
                urlTitle: "hello",
                time: "a month ago",
                state: 1,
                userNotificationId: 3,
                selected: false,
            },
        ],    
        languageItems: [
            {
                label: "EN(US)",
                val: "en",
                icon: "us",
                iconWidth: "20px",
                iconHeight: "20px",
            },
            {
                label: "English(IND)",
                val: "en",
                icon: "in",
                iconWidth: "20px",
                iconHeight: "20px",
            },
            {
                label: "French",
                val: "fr",
                icon: "us",
                iconWidth: "20px",
                iconHeight: "20px",
            },
        ],
        themeItems: [
            {
                label: "Light",
                val: "light",
                icon: "sun",
                iconWidth: "20px",
                iconHeight: "20px",
            },
            {
                label: "Dark",
                val: "dark",
                icon: "moon",
                iconWidth: "20px",
                iconHeight: "20px",
            }
        ],
        showLogo: false,
    }
} satisfies Story;

ABP.parameters = { controls: { include: ['navbarTitle', 'navbarSubTitle', 'brandName', 'brandLogo', 'profileTitle', 'profileName', 'logo', 'notifications', 'languageItems', 'themeItems','showLogo'] } };

export const RaaghuPortal: Story = {
    args: {
        navbarTitle: "Dashboard",
        navbarSubTitle: "Statistics and reports",
        brandName: "Raaghu",
        brandLogo: "assets/Raaghu-logo-mfe-black.png",
        profileTitle: "John Doe",
        profileEmail: "john.doe@raaghu.io",
        profileName: "John Doe",
        logo: "https://anzstageui.raaghu.io/assets/raaghu_icon.png",
        themeItems: [
            {
                label: "Light",
                val: "light",
                icon: "sun",
                iconWidth: "20px",
                iconHeight: "20px",
            },
            {
                label: "Dark",
                val: "dark",
                icon: "moon",
                iconWidth: "20px",
                iconHeight: "20px",
            }
        ],
        navtabItems: [
            {
                label: "Storybook",
                val: "storybook",
                icon: "storybook",
                iconWidth: "20px",
                iconHeight: "20px",
            },
            {
                label: "Documentation",
                val: "documentation",
                icon: "documentation",
                iconWidth: "20px",
                iconHeight: "20px",
            },
            {
                label: "Storybook",
                val: "storybook",
                icon: "storybook",
                iconWidth: "20px",
                iconHeight: "20px",
            },
            {
                label: "Download Project",
                val: "download_project",
                icon: "project",
                iconWidth: "20px",
                iconHeight: "20px",
            },
        ],
        showLogo: true,
        raaghuPortal: true,
    }
} satisfies Story;

RaaghuPortal.parameters = { controls: { include: ['brandName', 'brandLogo', 'profileTitle', 'profileName', 'logo', 'themeItems','showLogo'] } };
export const Ecommerce_1: Story = {
    args: {
        navbarTitle: "Dashboard",
        navbarSubTitle: "Statistics and reports",
        brandName: "Raaghu",
        brandLogo: "assets/Raaghu-logo-mfe-black.png",
        profileTitle: "John Doe",
        profileEmail: "john.doe@raaghu.io",
        profileName: "John Doe",
        logo: "https://anzstageui.raaghu.io/assets/raaghu_icon.png",
        firstName: "John",
        lastName: "Doe",
        role: "Admin",  
        themeItems: [
            {
                label: "Light",
                val: "light",
                icon: "sun",
                iconWidth: "20px",
                iconHeight: "20px",
            },
            {
                label: "Dark",
                val: "dark",
                icon: "moon",
                iconWidth: "20px",
                iconHeight: "20px",
            }
        ],
        breadcrumItem : [
            {
                label: "Home",
                id: 1,
                route: "#",
                disabled: false,
                icon: "",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
                active: true,
            },
            {
                label: "About",
                id: 2,
                route: "#",
                disabled: false,
                icon: "",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
                active: false,
            },
            {
                label: "Shop",
                id: 3,
                active: false,
                disabled: true,
                icon: "",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
            },
            {
                label: "Track Your Order",
                id: 4,
                active: false,
                disabled: true,
                icon: "",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary"
            }
        ],
        showLogo: true,
        ecommerce1: true,
        profilePic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU"
    }
} satisfies Story;

Ecommerce_1.parameters = { controls: { include: ['brandName', 'brandLogo','profilePic', 'profileTitle', 'profileName', 'logo', 'themeItems','showLogo'] } };

export const Ecommerce_2: Story = {
    args: {
        navbarTitle: "Dashboard",
        navbarSubTitle: "Statistics and reports",
        brandName: "Raaghu",
        brandLogo: "assets/Raaghu-logo-mfe-black.png",
        profileTitle: "John Doe",
        profileEmail: "john.doe@raaghu.io",
        profileName: "John Doe",
        logo: "https://anzstageui.raaghu.io/assets/raaghu_icon.png",
        firstName: "John",
        lastName: "Doe",
        role: "Admin",  
        themeItems: [
            {
                label: "Light",
                val: "light",
                icon: "sun",
                iconWidth: "20px",
                iconHeight: "20px",
            },
            {
                label: "Dark",
                val: "dark",
                icon: "moon",
                iconWidth: "20px",
                iconHeight: "20px",
            }
        ],
       
        breadcrumItem : [
            {
                label: "Home",
                id: 1,
                route: "#",
                disabled: false,
                icon: "",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
                active: true,
            },
            {
                label: "About",
                id: 2,
                route: "#",
                disabled: false,
                icon: "",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
                active: false,
            },
            {
                label: "Shop",
                id: 3,
                active: false,
                disabled: true,
                icon: "",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
            },
            {
                label: "Track Your Order",
                id: 4,
                active: false,
                disabled: true,
                icon: "",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary"
            }
        ],
        listItems : [
            {
              label: "USD",
              val: "USD",
              icon: "usd-icon.png",
              iconWidth: "20px",
              iconHeight: "20px",
              iconPath: "/path/to/usd-icon.png"
            },
            {
              label: "EUR",
              val: "EUR",
              icon: "eur-icon.png",
              iconWidth: "20px",
              iconHeight: "20px",
              iconPath: "/eur-icon.png"
            },
            {
              label: "GBP",
              val: "GBP",
              icon: "gbp-icon.png",
              iconWidth: "20px",
              iconHeight: "20px",
              iconPath: "/gbp-icon.png"
            },
            {
              label: "JPY",
              val: "JPY",
              icon: "jpy-icon.png",
              iconWidth: "20px",
              iconHeight: "20px",
              iconPath: "/jpy-icon.png"
            },
            {
              label: "CAD",
              val: "CAD",
              icon: "cad-icon.png",
              iconWidth: "20px",
              iconHeight: "20px",
              iconPath: "/cad-icon.png"
            },
            {
              label: "AUD",
              val: "AUD",
              icon: "aud-icon.png",
              iconWidth: "20px",
              iconHeight: "20px",
              iconPath: "/icon"
            }
          ],
          
        showLogo: true,
        showSearch: true,
        ecommerce2: true,
        profilePic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU"
    }
} satisfies Story;

Ecommerce_2.parameters = { controls: { include: ['brandName', 'brandLogo','profilePic', 'profileTitle', 'profileName', 'logo', 'themeItems','showLogo','showSearch'] } };

export const Ecommerce_3: Story = {
    args: {
        navbarTitle: "Dashboard",
        navbarSubTitle: "Statistics and reports",
        brandName: "Raaghu",
        brandLogo: "assets/Raaghu-logo-mfe-black.png",
        profileTitle: "John Doe",
        profileEmail: "john.doe@raaghu.io",
        profileName: "John Doe",
        logo: "https://anzstageui.raaghu.io/assets/raaghu_icon.png",
        firstName: "John",
        lastName: "Doe",
        role: "Admin",  
        themeItems: [
            {
                label: "Light",
                val: "light",
                icon: "sun",
                iconWidth: "20px",
                iconHeight: "20px",
            },
            {
                label: "Dark",
                val: "dark",
                icon: "moon",
                iconWidth: "20px",
                iconHeight: "20px",
            }
        ],
       
        breadcrumItem : [
            {
                label: "Home",
                id: 1,
                route: "#",
                disabled: false,
                icon: "",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
                active: true,
            },
            {
                label: "About",
                id: 2,
                route: "#",
                disabled: false,
                icon: "",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
                active: false,
            },
            {
                label: "Shop",
                id: 3,
                active: false,
                disabled: true,
                icon: "",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
            },
            {
                label: "Track Your Order",
                id: 4,
                active: false,
                disabled: true,
                icon: "",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary"
            }
        ],
        listItems : [
            {
              label: "USD",
              val: "USD",
              icon: "usd-icon.png",
              iconWidth: "20px",
              iconHeight: "20px",
              iconPath: "/path/to/usd-icon.png"
            },
            {
              label: "EUR",
              val: "EUR",
              icon: "eur-icon.png",
              iconWidth: "20px",
              iconHeight: "20px",
              iconPath: "/eur-icon.png"
            },
            {
              label: "GBP",
              val: "GBP",
              icon: "gbp-icon.png",
              iconWidth: "20px",
              iconHeight: "20px",
              iconPath: "/gbp-icon.png"
            },
            {
              label: "JPY",
              val: "JPY",
              icon: "jpy-icon.png",
              iconWidth: "20px",
              iconHeight: "20px",
              iconPath: "/jpy-icon.png"
            },
            {
              label: "CAD",
              val: "CAD",
              icon: "cad-icon.png",
              iconWidth: "20px",
              iconHeight: "20px",
              iconPath: "/cad-icon.png"
            },
            {
              label: "AUD",
              val: "AUD",
              icon: "aud-icon.png",
              iconWidth: "20px",
              iconHeight: "20px",
              iconPath: "/icon"
            }
          ],
          
        showLogo: true,
        showSearch: true,
        ecommerce3: true,
        profilePic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU",
        socialMediaIcons : [
            { id: "google", src: "./assets/google.svg", alt: "social-media-icon-google" },
            { id: "whatsapp", src: "./assets/whatsapp.svg", alt: "social-media-icon-whatsapp" },
            { id: "vimeo", src: "./assets/vimeo.svg", alt: "social-media-icon-vimeo" },
          ],

      
    }
} satisfies Story;

Ecommerce_3.parameters = { controls: { include: ['brandName', 'brandLogo','profilePic', 'profileTitle', 'profileName', 'logo', 'themeItems','showLogo','showSearch'] } };

export const Ecommerce_4: Story = {
    args: {
        navbarTitle: "Dashboard",
        navbarSubTitle: "Statistics and reports",
        brandName: "Raaghu",
        brandLogo: "assets/Raaghu-logo-mfe-black.png",
        profileTitle: "John Doe",
        profileEmail: "john.doe@raaghu.io",
        profileName: "John Doe",
        logo: "https://anzstageui.raaghu.io/assets/raaghu_icon.png",
        firstName: "John",
        lastName: "Doe",
        role: "Admin",  
        themeItems: [
            {
                label: "Light",
                val: "light",
                icon: "sun",
                iconWidth: "20px",
                iconHeight: "20px",
            },
            {
                label: "Dark",
                val: "dark",
                icon: "moon",
                iconWidth: "20px",
                iconHeight: "20px",
            }
        ],
       
        breadcrumItem : [
            {
                label: "Home",
                id: 1,
                route: "#",
                disabled: false,
                icon: "",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
                active: true,
            },
            {
                label: "About",
                id: 2,
                route: "#",
                disabled: false,
                icon: "",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
                active: false,
            },
            {
                label: "Shop",
                id: 3,
                active: false,
                disabled: true,
                icon: "",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
            },
            {
                label: "Track Your Order",
                id: 4,
                active: false,
                disabled: true,
                icon: "",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary"
            }
        ],
        listItems : [
            {
              label: "USD",
              val: "USD",
              icon: "usd-icon.png",
              iconWidth: "20px",
              iconHeight: "20px",
              iconPath: "/path/to/usd-icon.png"
            },
            {
              label: "EUR",
              val: "EUR",
              icon: "eur-icon.png",
              iconWidth: "20px",
              iconHeight: "20px",
              iconPath: "/eur-icon.png"
            },
            {
              label: "GBP",
              val: "GBP",
              icon: "gbp-icon.png",
              iconWidth: "20px",
              iconHeight: "20px",
              iconPath: "/gbp-icon.png"
            },
            {
              label: "JPY",
              val: "JPY",
              icon: "jpy-icon.png",
              iconWidth: "20px",
              iconHeight: "20px",
              iconPath: "/jpy-icon.png"
            },
            {
              label: "CAD",
              val: "CAD",
              icon: "cad-icon.png",
              iconWidth: "20px",
              iconHeight: "20px",
              iconPath: "/cad-icon.png"
            },
            {
              label: "AUD",
              val: "AUD",
              icon: "aud-icon.png",
              iconWidth: "20px",
              iconHeight: "20px",
              iconPath: "/icon"
            }
          ],
          
        showLogo: true,
        showSearch: true,
        ecommerce4: true,
        profilePic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU",
        icons : [
            { id: "shopping_cart", name:"shopping_cart",  },
            { id: "fevorite", name:"fevorite",  },
          ],

      
    }
} satisfies Story;

Ecommerce_4.parameters = { controls: { include: ['brandName', 'brandLogo','profilePic', 'profileTitle', 'profileName', 'logo', 'themeItems','showLogo','showSearch'] } };

export const Product_1: Story = {
    args: {
        navbarTitle: "Dashboard",
        navbarSubTitle: "Statistics and reports",
        brandName: "Raaghu",
        brandLogo: "assets/Raaghu-logo-mfe-black.png",
        profileTitle: "John Doe",
        profileEmail: "john.doe@raaghu.io",
        profileName: "John Doe",
        logo: "https://anzstageui.raaghu.io/assets/raaghu_icon.png",
        firstName: "John",
        lastName: "Doe",
        role: "Admin",  
        themeItems: [
            {
                label: "Light",
                val: "light",
                icon: "sun",
                iconWidth: "20px",
                iconHeight: "20px",
            },
            {
                label: "Dark",
                val: "dark",
                icon: "moon",
                iconWidth: "20px",
                iconHeight: "20px",
            }
        ],
       
        breadcrumItem : [
            {
                label: "Dashboard",
                id: 1,
                route: "#",
                disabled: false,
                icon: "dashboard_new",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
                active: true,
            },
            {
                label: "Orgnizational Members",
                id: 2,
                route: "#",
                disabled: false,
                icon: "organization",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
                active: false,
            },
            {
                label: "Details",
                id: 3,
                active: false,
                disabled: true,
                icon: "user_identity",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
            },
        ],
        product1: true,
        profilePic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU",
        icons : [
            { id: "settings", name:"settings",  },
            { id: "help_question_circle", name:"help_question_circle",  },
            { id: "import", name:"import",  },
            { id: "notification", name:"notification_new",  },
          ],

      
    }
} satisfies Story;

Product_1.parameters = { controls: { include: ['brandName', 'brandLogo','profilePic', 'profileTitle', 'profileName', 'logo', 'themeItems',] } };

export const Product_2: Story = {
    args: {
        navbarTitle: "Home",
        navbarSubTitle: "Statistics and reports",
        brandName: "Raaghu",
        brandLogo: "assets/Raaghu-logo-mfe-black.png",
        profileTitle: "John Doe",
        profileEmail: "john.doe@raaghu.io",
        profileName: "John Doe",
        logo: "https://anzstageui.raaghu.io/assets/raaghu_icon.png",
        firstName: "John",
        lastName: "Doe",
        role: "Admin",  
        themeItems: [
            {
                label: "Light",
                val: "light",
                icon: "sun",
                iconWidth: "20px",
                iconHeight: "20px",
            },
            {
                label: "Dark",
                val: "dark",
                icon: "moon",
                iconWidth: "20px",
                iconHeight: "20px",
            }
        ],
       
        breadcrumItem : [
            {
                label: "Tab 1",
                id: 1,
                route: "#",
                disabled: false,
                icon: "user",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
                active: true,
            },
            {
                label: "Tab 1",
                id: 2,
                route: "#",
                disabled: false,
                icon: "user",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
                active: false,
            },
            {
                label: "Tab 1",
                id: 3,
                active: false,
                disabled: true,
                icon: "user",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
            },
            {
                label: "Export",
                id: 4,
                active: false,
                disabled: true,
                icon: "",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
            },
        ],
        product2: true,
        profilePic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU",
        icons : [
            { id: "settings", name:"settings",  },
            { id: "help_question_circle", name:"help_question_circle",  },
            { id: "import", name:"import",  },
            { id: "notification", name:"notification_new",  },
          ],
          listItems : [
            {
                label: "v4.10",
                val: "v4.10",
                icon: "v4.10-icon.png",
                iconWidth: "20px",
                iconHeight: "20px",
                iconPath: "/path/to/v4.10-icon.png"
              },
              {
                label: "v4.9",
                val: "v4.9",
                icon: "v4.9-icon.png",
                iconWidth: "20px",
                iconHeight: "20px",
                iconPath: "/path/to/v4.9-icon.png"
              },
              {
                label: "v4.8",
                val: "v4.8",
                icon: "v4.8-icon.png",
                iconWidth: "20px",
                iconHeight: "20px",
                iconPath: "/path/to/v4.8-icon.png"
              },
              {
                label: "v4.7",
                val: "v4.7",
                icon: "v4.7-icon.png",
                iconWidth: "20px",
                iconHeight: "20px",
                iconPath: "/path/to/v4.7-icon.png"
              },
              {
                label: "v4.6",
                val: "v4.6",
                icon: "v4.6-icon.png",
                iconWidth: "20px",
                iconHeight: "20px",
                iconPath: "/path/to/v4.6-icon.png"
              }
          ],
        showLogo: true,
        showSearch: true,
        socialMediaIcons : [
            { id: "google", src: "./assets/google.svg", alt: "social-media-icon-google" },
            { id: "whatsapp", src: "./assets/whatsapp.svg", alt: "social-media-icon-whatsapp" },
            { id: "github", src: "./assets/github.svg", alt: "social-media-icon-github" },
          ],
      
    }
} satisfies Story;

Product_2.parameters = { controls: { include: ['brandName', 'brandLogo','profilePic', 'profileTitle', 'profileName', 'logo', 'themeItems','showLogo'] } };

export const Product_3: Story = {
    args: {
        navbarTitle: "Home",
        navbarSubTitle: "Statistics and reports",
        brandName: "Raaghu",
        brandLogo: "assets/Raaghu-logo-mfe-black.png",
        profileTitle: "John Doe",
        profileEmail: "john.doe@raaghu.io",
        profileName: "John Doe",
        logo: "https://anzstageui.raaghu.io/assets/raaghu_icon.png",
        firstName: "John",
        lastName: "Doe",
        role: "Admin",  
        themeItems: [
            {
                label: "Light",
                val: "light",
                icon: "sun",
                iconWidth: "20px",
                iconHeight: "20px",
            },
            {
                label: "Dark",
                val: "dark",
                icon: "moon",
                iconWidth: "20px",
                iconHeight: "20px",
            }
        ],
       
        breadcrumItem : [
            {
                label: "Tab 1",
                id: 1,
                route: "#",
                disabled: false,
                icon: "user",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
                active: true,
            },
            {
                label: "Tab 1",
                id: 2,
                route: "#",
                disabled: false,
                icon: "user",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
                active: false,
            },
            {
                label: "Tab 1",
                id: 3,
                active: false,
                disabled: true,
                icon: "user",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
            },
            {
                label: "Export",
                id: 4,
                active: false,
                disabled: true,
                icon: "",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
            },
        ],
        product3: true,
        profilePic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU",
        icons : [
            { id: "settings", name:"settings",  },
            { id: "help_question_circle", name:"help_question_circle",  },
            { id: "import", name:"import",  },
            { id: "notification", name:"notification_new",  },
          ],
          listItems : [
            {
                label: "v4.10",
                val: "v4.10",
                icon: "v4.10-icon.png",
                iconWidth: "20px",
                iconHeight: "20px",
                iconPath: "/path/to/v4.10-icon.png"
              },
              {
                label: "v4.9",
                val: "v4.9",
                icon: "v4.9-icon.png",
                iconWidth: "20px",
                iconHeight: "20px",
                iconPath: "/path/to/v4.9-icon.png"
              },
              {
                label: "v4.8",
                val: "v4.8",
                icon: "v4.8-icon.png",
                iconWidth: "20px",
                iconHeight: "20px",
                iconPath: "/path/to/v4.8-icon.png"
              },
              {
                label: "v4.7",
                val: "v4.7",
                icon: "v4.7-icon.png",
                iconWidth: "20px",
                iconHeight: "20px",
                iconPath: "/path/to/v4.7-icon.png"
              },
              {
                label: "v4.6",
                val: "v4.6",
                icon: "v4.6-icon.png",
                iconWidth: "20px",
                iconHeight: "20px",
                iconPath: "/path/to/v4.6-icon.png"
              }
          ],
        showLogo: true,
        showSearch: true,
        socialMediaIcons : [
            { id: "google", src: "./assets/google.svg", alt: "social-media-icon-google" },
            { id: "whatsapp", src: "./assets/whatsapp.svg", alt: "social-media-icon-whatsapp" },
            { id: "github", src: "./assets/github.svg", alt: "social-media-icon-github" },
          ],
      
    }
} satisfies Story;

Product_3.parameters = { controls: { include: ['brandName', 'brandLogo','profilePic', 'profileTitle', 'profileName', 'logo', 'themeItems','showLogo'] } };

export const Product_4: Story = {
    args: {
        navbarTitle: "Home",
        navbarSubTitle: "Statistics and reports",
        brandName: "Raaghu",
        brandLogo: "assets/Raaghu-logo-mfe-black.png",
        profileTitle: "John Doe",
        profileEmail: "john.doe@raaghu.io",
        profileName: "John Doe",
        logo: "https://anzstageui.raaghu.io/assets/raaghu_icon.png",
        firstName: "John",
        lastName: "Doe",
        role: "Admin",  
        themeItems: [
            {
                label: "Light",
                val: "light",
                icon: "sun",
                iconWidth: "20px",
                iconHeight: "20px",
            },
            {
                label: "Dark",
                val: "dark",
                icon: "moon",
                iconWidth: "20px",
                iconHeight: "20px",
            }
        ],
       
        breadcrumItem : [
            {
                label: "Dashboard",
                id: 1,
                route: "#",
                disabled: false,
                icon: "dashboard_new",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
                active: true,
            },
            {
                label: "Activities",
                id: 2,
                route: "#",
                disabled: false,
                icon: "activities",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
                active: false,
            },
            {
                label: "Directory",
                id: 3,
                active: false,
                disabled: true,
                icon: "directory",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
            },
            {
                label: "Projects",
                id: 4,
                active: false,
                disabled: true,
                icon: "project",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
            },
            {
                label: "Calendar",
                id: 5,
                active: false,
                disabled: true,
                icon: "calendar",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
            },
        ],
        product4: true,
        profilePic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU",
        icons : [
            { id: "notification", name:"notification_new",  },
            { id: "chat_left_corner", name:"chat_left_corner",  },
            { id: "administration", name:"administration",  },
            
          ],
        showLogo: true,
        showSearch: true,
      
    }
} satisfies Story;

Product_4.parameters = { controls: { include: ['brandName', 'brandLogo','profilePic', 'profileTitle', 'profileName', 'logo', 'themeItems','showLogo'] } };

export const Entertainment_1: Story = {
    args: {
        navbarTitle: "Home",
        navbarSubTitle: "Statistics and reports",
        brandName: "Raaghu",
        brandLogo: "assets/Raaghu-logo-mfe-black.png",
        profileTitle: "John Doe",
        profileEmail: "john.doe@raaghu.io",
        profileName: "John Doe",
        logo: "https://anzstageui.raaghu.io/assets/raaghu_icon.png",
        firstName: "John",
        lastName: "Doe",
        role: "Admin",  
        themeItems: [
            {
                label: "Light",
                val: "light",
                icon: "sun",
                iconWidth: "20px",
                iconHeight: "20px",
            },
            {
                label: "Dark",
                val: "dark",
                icon: "moon",
                iconWidth: "20px",
                iconHeight: "20px",
            }
        ],
       
        breadcrumItem : [
            {
                label: "Dashboard",
                id: 1,
                route: "#",
                disabled: false,
                icon: "dashboard_new",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
                active: true,
            },
            {
                label: "Activities",
                id: 2,
                route: "#",
                disabled: false,
                icon: "activities",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
                active: false,
            },
            {
                label: "Directory",
                id: 3,
                active: false,
                disabled: true,
                icon: "directory",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
            },
            {
                label: "Projects",
                id: 4,
                active: false,
                disabled: true,
                icon: "project",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
            },
            {
                label: "Calendar",
                id: 5,
                active: false,
                disabled: true,
                icon: "calendar",
                iconFill: false,
                iconstroke: true,
                iconWidth: "15px",
                iconHeight: "15px",
                iconColor: "primary",
            },
        ],
        entertainment1: true,
        profilePic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU",
        icons : [
            { id: "video_icon", name:"video_icon",  },
            { id: "multiple_circle", name:"multiple_circle",  },
            { id: "notification_new", name:"notification_new",  },
            
          ],
        showLogo: true, 
        showSearch: true,
      
    }
} satisfies Story;

Entertainment_1.parameters = { controls: { include: ['brandName', 'brandLogo','profilePic', 'profileTitle', 'profileName', 'logo', 'themeItems','showLogo'] } };

