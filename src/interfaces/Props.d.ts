import { Theme, ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

interface MenuItemProps {
    groupTitle: string;
    pages: Array<{ href: string; title: string }>;
  }
  
  interface MenuGroupProps {
    item: MenuItemProps;
  }

interface PagesProps {
    landings: {
      title: string;
      id: string;
      children: {
        services: MenuItemProps;
        apps: MenuItemProps;
        web: MenuItemProps;
      };
    };
    pages: {
      title: string;
      id: string;
      children: {
        career: MenuItemProps;
        helpCenter: MenuItemProps;
        company: MenuItemProps;
        contact: MenuItemProps;
        blog: MenuItemProps;
        portfolio: MenuItemProps;
      };
    };
    account: {
      title: string;
      id: string;
      children: {
        settings: MenuItemProps;
        signup: MenuItemProps;
        signin: MenuItemProps;
        password: MenuItemProps;
        error: MenuItemProps;
      };
    };
  }

  interface ImageProps {
    className?: string;
    src: string;
    srcSet?: string;
    alt?: string;
    lazyProps?: object;
    lazy?: boolean;
    // All other props
    [x:string]: any;
  }

  interface DarkModeTogglerProps {
    className?: string;
    themeMode?: string;
    onClick: (event: React.MouseEvent) => void;
    fontIconColor?: string;
    // All other props
    [x:string]: any;
  };

  
    interface Theme {
      layout: {
        contentWidth: number | string;
      };
    }
    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
      layout?: {
        contentWidth: number | string;
      };
    };
  