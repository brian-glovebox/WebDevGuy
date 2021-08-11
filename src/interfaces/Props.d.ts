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
  

    interface SectionHeaderProps {
      className?: string;
      title: string | JSX.Element;
      subtitle?: string | JSX.Element;
      label?: string;
      overline?: JSX.Element;
      ctaGroup?: Array<JSX.Element>;
      fadeUp?: boolean;
      align?: 'right' | 'left' | 'center';
      disableGutter?: boolean;
      titleClasses?: string;
      titleVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
      subtitleVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2';
      subtitleColor?: 'textPrimary' | 'textSecondary' | 'primary' | 'secondary';
      labelProps?: object;
      titleProps?: object;
      subtitleProps?: object;
      // All other props
      [x:string]: any;
    }

    interface SectionProps {
      className?: string;
      children?: JSX.Element;
      narrow?: boolean;
      fullWidth?: boolean;
      disablePadding?: boolean;
      // All other props
      [x:string]: any;
    }

    interface HeroBackgroundProps {
      className?: string;
      children: JSX.Element;
      backgroundImage: string;
      backgroundSize?: string | number;
      backgroundPosition?: string | number;
      // All other props
      [x:string]: any;
    }


    interface ViewComponentProps {
      className?: string;
      data?: any;
      themeMode?: string;
      // All other props
      [x:string]: any;
    }

    import * as createPalette from '@material-ui/core/styles/createPalette';

    declare module '@material-ui/core/styles/createPalette' {
      interface TypeBackground {
        paper: string;
        default: string;
        level2: string;
        level1: string;
        footer: string;
      }
    
      interface PaletteOptions { 
        cardShadow?: string;
        alternate: {
          main: string;
          dark: string;
        };
      }
    
      interface Palette {
        cardShadow?: string;
        alternate: {
          main: string;
          dark: string;
        };
      }
    }