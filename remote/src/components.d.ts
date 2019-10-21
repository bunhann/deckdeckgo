/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  DeckdeckgoSlideDefinition,
} from '@deckdeckgo/types';

export namespace Components {
  interface AppAbout {}
  interface AppAccelerometer {
    'hide': boolean;
  }
  interface AppDraw {
    'height': number;
    'heightOffset': number;
    'moveDraw': (leftOffset: number, transitionDuration: string) => Promise<void>;
    'slides': number;
    'width': number;
  }
  interface AppRemote {
    'room': string;
  }
  interface AppRemoteConnect {}
  interface AppRemoteSettings {}
  interface AppRemoteSlidePicker {
    'slides': DeckdeckgoSlideDefinition[];
  }
  interface AppRoot {}
  interface AppStopwatch {
    'length': number;
    'remaining': number;
  }
  interface AppStopwatchTime {}
  interface AppTabs {}
  interface AppTimer {}
  interface DarkModeSwitch {}
}

declare global {


  interface HTMLAppAboutElement extends Components.AppAbout, HTMLStencilElement {}
  const HTMLAppAboutElement: {
    prototype: HTMLAppAboutElement;
    new (): HTMLAppAboutElement;
  };

  interface HTMLAppAccelerometerElement extends Components.AppAccelerometer, HTMLStencilElement {}
  const HTMLAppAccelerometerElement: {
    prototype: HTMLAppAccelerometerElement;
    new (): HTMLAppAccelerometerElement;
  };

  interface HTMLAppDrawElement extends Components.AppDraw, HTMLStencilElement {}
  const HTMLAppDrawElement: {
    prototype: HTMLAppDrawElement;
    new (): HTMLAppDrawElement;
  };

  interface HTMLAppRemoteElement extends Components.AppRemote, HTMLStencilElement {}
  const HTMLAppRemoteElement: {
    prototype: HTMLAppRemoteElement;
    new (): HTMLAppRemoteElement;
  };

  interface HTMLAppRemoteConnectElement extends Components.AppRemoteConnect, HTMLStencilElement {}
  const HTMLAppRemoteConnectElement: {
    prototype: HTMLAppRemoteConnectElement;
    new (): HTMLAppRemoteConnectElement;
  };

  interface HTMLAppRemoteSettingsElement extends Components.AppRemoteSettings, HTMLStencilElement {}
  const HTMLAppRemoteSettingsElement: {
    prototype: HTMLAppRemoteSettingsElement;
    new (): HTMLAppRemoteSettingsElement;
  };

  interface HTMLAppRemoteSlidePickerElement extends Components.AppRemoteSlidePicker, HTMLStencilElement {}
  const HTMLAppRemoteSlidePickerElement: {
    prototype: HTMLAppRemoteSlidePickerElement;
    new (): HTMLAppRemoteSlidePickerElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  const HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppStopwatchElement extends Components.AppStopwatch, HTMLStencilElement {}
  const HTMLAppStopwatchElement: {
    prototype: HTMLAppStopwatchElement;
    new (): HTMLAppStopwatchElement;
  };

  interface HTMLAppStopwatchTimeElement extends Components.AppStopwatchTime, HTMLStencilElement {}
  const HTMLAppStopwatchTimeElement: {
    prototype: HTMLAppStopwatchTimeElement;
    new (): HTMLAppStopwatchTimeElement;
  };

  interface HTMLAppTabsElement extends Components.AppTabs, HTMLStencilElement {}
  const HTMLAppTabsElement: {
    prototype: HTMLAppTabsElement;
    new (): HTMLAppTabsElement;
  };

  interface HTMLAppTimerElement extends Components.AppTimer, HTMLStencilElement {}
  const HTMLAppTimerElement: {
    prototype: HTMLAppTimerElement;
    new (): HTMLAppTimerElement;
  };

  interface HTMLDarkModeSwitchElement extends Components.DarkModeSwitch, HTMLStencilElement {}
  const HTMLDarkModeSwitchElement: {
    prototype: HTMLDarkModeSwitchElement;
    new (): HTMLDarkModeSwitchElement;
  };
  interface HTMLElementTagNameMap {
    'app-about': HTMLAppAboutElement;
    'app-accelerometer': HTMLAppAccelerometerElement;
    'app-draw': HTMLAppDrawElement;
    'app-remote': HTMLAppRemoteElement;
    'app-remote-connect': HTMLAppRemoteConnectElement;
    'app-remote-settings': HTMLAppRemoteSettingsElement;
    'app-remote-slide-picker': HTMLAppRemoteSlidePickerElement;
    'app-root': HTMLAppRootElement;
    'app-stopwatch': HTMLAppStopwatchElement;
    'app-stopwatch-time': HTMLAppStopwatchTimeElement;
    'app-tabs': HTMLAppTabsElement;
    'app-timer': HTMLAppTimerElement;
    'dark-mode-switch': HTMLDarkModeSwitchElement;
  }
}

declare namespace LocalJSX {
  interface AppAbout {}
  interface AppAccelerometer {
    'hide'?: boolean;
  }
  interface AppDraw {
    'height'?: number;
    'heightOffset'?: number;
    'onDrawing'?: (event: CustomEvent<boolean>) => void;
    'slides'?: number;
    'width'?: number;
  }
  interface AppRemote {
    'room'?: string;
  }
  interface AppRemoteConnect {}
  interface AppRemoteSettings {}
  interface AppRemoteSlidePicker {
    'slides'?: DeckdeckgoSlideDefinition[];
  }
  interface AppRoot {}
  interface AppStopwatch {
    'length'?: number;
    'remaining'?: number;
  }
  interface AppStopwatchTime {}
  interface AppTabs {}
  interface AppTimer {}
  interface DarkModeSwitch {}

  interface IntrinsicElements {
    'app-about': AppAbout;
    'app-accelerometer': AppAccelerometer;
    'app-draw': AppDraw;
    'app-remote': AppRemote;
    'app-remote-connect': AppRemoteConnect;
    'app-remote-settings': AppRemoteSettings;
    'app-remote-slide-picker': AppRemoteSlidePicker;
    'app-root': AppRoot;
    'app-stopwatch': AppStopwatch;
    'app-stopwatch-time': AppStopwatchTime;
    'app-tabs': AppTabs;
    'app-timer': AppTimer;
    'dark-mode-switch': DarkModeSwitch;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-about': LocalJSX.AppAbout & JSXBase.HTMLAttributes<HTMLAppAboutElement>;
      'app-accelerometer': LocalJSX.AppAccelerometer & JSXBase.HTMLAttributes<HTMLAppAccelerometerElement>;
      'app-draw': LocalJSX.AppDraw & JSXBase.HTMLAttributes<HTMLAppDrawElement>;
      'app-remote': LocalJSX.AppRemote & JSXBase.HTMLAttributes<HTMLAppRemoteElement>;
      'app-remote-connect': LocalJSX.AppRemoteConnect & JSXBase.HTMLAttributes<HTMLAppRemoteConnectElement>;
      'app-remote-settings': LocalJSX.AppRemoteSettings & JSXBase.HTMLAttributes<HTMLAppRemoteSettingsElement>;
      'app-remote-slide-picker': LocalJSX.AppRemoteSlidePicker & JSXBase.HTMLAttributes<HTMLAppRemoteSlidePickerElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'app-stopwatch': LocalJSX.AppStopwatch & JSXBase.HTMLAttributes<HTMLAppStopwatchElement>;
      'app-stopwatch-time': LocalJSX.AppStopwatchTime & JSXBase.HTMLAttributes<HTMLAppStopwatchTimeElement>;
      'app-tabs': LocalJSX.AppTabs & JSXBase.HTMLAttributes<HTMLAppTabsElement>;
      'app-timer': LocalJSX.AppTimer & JSXBase.HTMLAttributes<HTMLAppTimerElement>;
      'dark-mode-switch': LocalJSX.DarkModeSwitch & JSXBase.HTMLAttributes<HTMLDarkModeSwitchElement>;
    }
  }
}


