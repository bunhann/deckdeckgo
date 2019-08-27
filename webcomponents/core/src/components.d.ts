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
  interface DeckgoDeck {
    'blockSlide': (block: boolean) => Promise<void>;
    'cloneBackground': boolean;
    'deleteActiveSlide': () => Promise<void>;
    'doPrint': () => Promise<void>;
    'embedded': boolean;
    'getActiveIndex': () => Promise<number>;
    'getLength': () => Promise<number>;
    'getSlidesDefinition': () => Promise<DeckdeckgoSlideDefinition[]>;
    'initSlideSize': () => Promise<void>;
    'isBeginning': () => Promise<boolean>;
    'isEnd': () => Promise<boolean>;
    'isMobile': () => Promise<boolean>;
    'keyboard': boolean;
    'loadBackground': () => Promise<void>;
    'reveal': boolean;
    'slideNext': (slideAnimation?: boolean, emitEvent?: boolean) => Promise<void>;
    'slidePrev': (slideAnimation?: boolean, emitEvent?: boolean) => Promise<void>;
    'slideTo': (index: number, speed?: number, emitEvent?: boolean) => Promise<void>;
    'toggleFullScreen': () => Promise<void>;
    'toggleKeyboardAssist': (state: boolean) => Promise<void>;
  }
  interface DeckgoGif {
    'alt': string;
    'fullscreen': boolean;
    'lazyLoadContent': () => Promise<void>;
    'src': string;
  }
  interface DeckgoPager {
    'activeIndex': number;
    'length': number;
  }
  interface DeckgoReveal {
    'allElementsHidden': boolean;
    'allElementsRevealed': boolean;
    'hide': () => Promise<void>;
    'hideAll': () => Promise<void>;
    'reveal': () => Promise<void>;
    'revealAll': () => Promise<void>;
  }
  interface DeckgoRevealList {
    'allElementsHidden': boolean;
    'allElementsRevealed': boolean;
    'hide': () => Promise<void>;
    'hideAll': () => Promise<void>;
    'listTag': string;
    'reveal': () => Promise<void>;
    'revealAll': () => Promise<void>;
  }
  interface DeckgoSlideCountdown {
    'afterSwipe': () => Promise<void>;
    'beforeSwipe': (_enter: boolean, _reveal: boolean) => Promise<boolean>;
    'customActions': boolean;
    'customBackground': boolean;
    'days': number;
    'hideContent': () => Promise<void>;
    'hours': number;
    'lazyLoadContent': () => Promise<void>;
    'minutes': number;
    'revealContent': () => Promise<void>;
    'seconds': number;
    'start': () => Promise<void>;
    'stop': () => Promise<void>;
    'until': string;
  }
  interface DeckgoSlideGif {
    'afterSwipe': () => Promise<void>;
    'alt': string;
    'beforeSwipe': (_enter: boolean, _reveal: boolean) => Promise<boolean>;
    'customActions': boolean;
    'customBackground': boolean;
    'fullscreen': boolean;
    'hideContent': () => Promise<void>;
    'lazyLoadContent': () => Promise<void>;
    'revealContent': () => Promise<void>;
    'src': string;
  }
  interface DeckgoSlideQrcode {
    'afterSwipe': () => Promise<void>;
    'beforeSwipe': (_enter: boolean, _reveal: boolean) => Promise<boolean>;
    'content': string;
    'customActions': boolean;
    'customBackground': boolean;
    'hideContent': () => Promise<void>;
    'lazyLoadContent': () => Promise<void>;
    'revealContent': () => Promise<void>;
  }
  interface DeckgoSocial {
    'dev': string;
    'fullUrl': string;
    'github': string;
    'lazyLoadContent': () => Promise<void>;
    'linkedin': string;
    'medium': string;
    'twitter': string;
  }
  interface DeckgoYoutube {
    'frameTitle': string;
    'height': number;
    'lazyLoadContent': () => Promise<void>;
    'pause': () => Promise<void>;
    'play': () => Promise<void>;
    'src': string;
    'updateIFrame': (width: number, height: number) => Promise<void>;
    'width': number;
  }
}

declare global {


  interface HTMLDeckgoDeckElement extends Components.DeckgoDeck, HTMLStencilElement {}
  var HTMLDeckgoDeckElement: {
    prototype: HTMLDeckgoDeckElement;
    new (): HTMLDeckgoDeckElement;
  };

  interface HTMLDeckgoGifElement extends Components.DeckgoGif, HTMLStencilElement {}
  var HTMLDeckgoGifElement: {
    prototype: HTMLDeckgoGifElement;
    new (): HTMLDeckgoGifElement;
  };

  interface HTMLDeckgoPagerElement extends Components.DeckgoPager, HTMLStencilElement {}
  var HTMLDeckgoPagerElement: {
    prototype: HTMLDeckgoPagerElement;
    new (): HTMLDeckgoPagerElement;
  };

  interface HTMLDeckgoRevealElement extends Components.DeckgoReveal, HTMLStencilElement {}
  var HTMLDeckgoRevealElement: {
    prototype: HTMLDeckgoRevealElement;
    new (): HTMLDeckgoRevealElement;
  };

  interface HTMLDeckgoRevealListElement extends Components.DeckgoRevealList, HTMLStencilElement {}
  var HTMLDeckgoRevealListElement: {
    prototype: HTMLDeckgoRevealListElement;
    new (): HTMLDeckgoRevealListElement;
  };

  interface HTMLDeckgoSlideCountdownElement extends Components.DeckgoSlideCountdown, HTMLStencilElement {}
  var HTMLDeckgoSlideCountdownElement: {
    prototype: HTMLDeckgoSlideCountdownElement;
    new (): HTMLDeckgoSlideCountdownElement;
  };

  interface HTMLDeckgoSlideGifElement extends Components.DeckgoSlideGif, HTMLStencilElement {}
  var HTMLDeckgoSlideGifElement: {
    prototype: HTMLDeckgoSlideGifElement;
    new (): HTMLDeckgoSlideGifElement;
  };

  interface HTMLDeckgoSlideQrcodeElement extends Components.DeckgoSlideQrcode, HTMLStencilElement {}
  var HTMLDeckgoSlideQrcodeElement: {
    prototype: HTMLDeckgoSlideQrcodeElement;
    new (): HTMLDeckgoSlideQrcodeElement;
  };

  interface HTMLDeckgoSocialElement extends Components.DeckgoSocial, HTMLStencilElement {}
  var HTMLDeckgoSocialElement: {
    prototype: HTMLDeckgoSocialElement;
    new (): HTMLDeckgoSocialElement;
  };

  interface HTMLDeckgoYoutubeElement extends Components.DeckgoYoutube, HTMLStencilElement {}
  var HTMLDeckgoYoutubeElement: {
    prototype: HTMLDeckgoYoutubeElement;
    new (): HTMLDeckgoYoutubeElement;
  };
  interface HTMLElementTagNameMap {
    'deckgo-deck': HTMLDeckgoDeckElement;
    'deckgo-gif': HTMLDeckgoGifElement;
    'deckgo-pager': HTMLDeckgoPagerElement;
    'deckgo-reveal': HTMLDeckgoRevealElement;
    'deckgo-reveal-list': HTMLDeckgoRevealListElement;
    'deckgo-slide-countdown': HTMLDeckgoSlideCountdownElement;
    'deckgo-slide-gif': HTMLDeckgoSlideGifElement;
    'deckgo-slide-qrcode': HTMLDeckgoSlideQrcodeElement;
    'deckgo-social': HTMLDeckgoSocialElement;
    'deckgo-youtube': HTMLDeckgoYoutubeElement;
  }
}

declare namespace LocalJSX {
  interface DeckgoDeck extends JSXBase.HTMLAttributes<HTMLDeckgoDeckElement> {
    'cloneBackground'?: boolean;
    'embedded'?: boolean;
    'keyboard'?: boolean;
    'onMouseInactivity'?: (event: CustomEvent<boolean>) => void;
    'onSlideDrag'?: (event: CustomEvent<number>) => void;
    'onSlideNextDidChange'?: (event: CustomEvent<number>) => void;
    'onSlidePrevDidChange'?: (event: CustomEvent<number>) => void;
    'onSlideToChange'?: (event: CustomEvent<number>) => void;
    'onSlideWillChange'?: (event: CustomEvent<number>) => void;
    'onSlidesDidLoad'?: (event: CustomEvent<any>) => void;
    'reveal'?: boolean;
  }
  interface DeckgoGif extends JSXBase.HTMLAttributes<HTMLDeckgoGifElement> {
    'alt'?: string;
    'fullscreen'?: boolean;
    'onGifLoaded'?: (event: CustomEvent<boolean>) => void;
    'src'?: string;
  }
  interface DeckgoPager extends JSXBase.HTMLAttributes<HTMLDeckgoPagerElement> {
    'activeIndex'?: number;
    'length'?: number;
    'onPagerClick'?: (event: CustomEvent<void>) => void;
  }
  interface DeckgoReveal extends JSXBase.HTMLAttributes<HTMLDeckgoRevealElement> {
    'allElementsHidden'?: boolean;
    'allElementsRevealed'?: boolean;
  }
  interface DeckgoRevealList extends JSXBase.HTMLAttributes<HTMLDeckgoRevealListElement> {
    'allElementsHidden'?: boolean;
    'allElementsRevealed'?: boolean;
    'listTag'?: string;
  }
  interface DeckgoSlideCountdown extends JSXBase.HTMLAttributes<HTMLDeckgoSlideCountdownElement> {
    'customActions'?: boolean;
    'customBackground'?: boolean;
    'days'?: number;
    'hours'?: number;
    'minutes'?: number;
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'seconds'?: number;
    'until'?: string;
  }
  interface DeckgoSlideGif extends JSXBase.HTMLAttributes<HTMLDeckgoSlideGifElement> {
    'alt'?: string;
    'customActions'?: boolean;
    'customBackground'?: boolean;
    'fullscreen'?: boolean;
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
    'src'?: string;
  }
  interface DeckgoSlideQrcode extends JSXBase.HTMLAttributes<HTMLDeckgoSlideQrcodeElement> {
    'content'?: string;
    'customActions'?: boolean;
    'customBackground'?: boolean;
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
  }
  interface DeckgoSocial extends JSXBase.HTMLAttributes<HTMLDeckgoSocialElement> {
    'dev'?: string;
    'fullUrl'?: string;
    'github'?: string;
    'linkedin'?: string;
    'medium'?: string;
    'twitter'?: string;
  }
  interface DeckgoYoutube extends JSXBase.HTMLAttributes<HTMLDeckgoYoutubeElement> {
    'frameTitle'?: string;
    'height'?: number;
    'src'?: string;
    'width'?: number;
  }

  interface IntrinsicElements {
    'deckgo-deck': DeckgoDeck;
    'deckgo-gif': DeckgoGif;
    'deckgo-pager': DeckgoPager;
    'deckgo-reveal': DeckgoReveal;
    'deckgo-reveal-list': DeckgoRevealList;
    'deckgo-slide-countdown': DeckgoSlideCountdown;
    'deckgo-slide-gif': DeckgoSlideGif;
    'deckgo-slide-qrcode': DeckgoSlideQrcode;
    'deckgo-social': DeckgoSocial;
    'deckgo-youtube': DeckgoYoutube;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


