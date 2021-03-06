import {Component, Event, EventEmitter, h, Prop} from '@stencil/core';

import {TargetElement} from '../../../utils/editor/target-element';

@Component({
  tag: 'app-select-target-element',
  styleUrl: 'app-select-target-element.scss'
})
export class AppSelectTargetElement {
  @Prop()
  slide: boolean = false;

  @Prop()
  qrCode: boolean = false;

  @Prop()
  chart: boolean = false;

  @Prop()
  code: boolean = false;

  @Prop()
  sides: boolean = false;

  // color is a reserved prop word
  @Prop()
  colorTarget: boolean = false;

  @Prop()
  background: boolean = false;

  @Prop()
  transition: boolean = false;

  @Prop()
  fonts: boolean = false;

  @Prop()
  shapes: boolean = false;

  @Prop()
  images: boolean = false;

  @Event()
  applyTo: EventEmitter<TargetElement>;

  private selectApplyToAll($event: CustomEvent) {
    if ($event && $event.detail) {
      this.applyTo.emit($event.detail.value);
    }
  }

  render() {
    if (!this.colorTarget && !this.slide && !this.shapes) {
      if (!this.code) {
        return undefined;
      }

      return (
        <ion-segment mode="md" class="ion-padding-bottom" value={TargetElement.CODE} onIonChange={($event: CustomEvent) => this.selectApplyToAll($event)}>
          <ion-segment-button value={TargetElement.CODE} mode="md">
            <ion-label>Code</ion-label>
          </ion-segment-button>
          <ion-segment-button value={TargetElement.SECTION} mode="md">
            <ion-label>Section</ion-label>
          </ion-segment-button>
        </ion-segment>
      );
    } else {
      const selectedValue: TargetElement = this.colorTarget
        ? TargetElement.COLOR
        : this.sides
        ? TargetElement.SIDES
        : this.qrCode
        ? TargetElement.QR_CODE
        : this.chart
        ? TargetElement.CHART
        : this.shapes
        ? TargetElement.SHAPES
        : this.images
        ? TargetElement.IMAGES
        : TargetElement.SLIDE;

      return (
        <ion-segment mode="md" class="ion-padding-bottom" value={selectedValue} onIonChange={($event: CustomEvent) => this.selectApplyToAll($event)}>
          {this.renderQRCode()}
          {this.renderChart()}
          {this.renderSides()}
          {this.renderSlide()}
          {this.renderColor()}
          {this.renderBackground()}
          {this.renderFonts()}
          {this.renderTransition()}
          {this.renderShapes()}
          {this.renderImages()}
        </ion-segment>
      );
    }
  }

  private renderQRCode() {
    if (this.qrCode) {
      return (
        <ion-segment-button value={TargetElement.QR_CODE} mode="md">
          <ion-label>QR code</ion-label>
        </ion-segment-button>
      );
    } else {
      return undefined;
    }
  }

  private renderChart() {
    if (this.chart) {
      return (
        <ion-segment-button value={TargetElement.CHART} mode="md">
          <ion-label>Chart</ion-label>
        </ion-segment-button>
      );
    } else {
      return undefined;
    }
  }

  private renderSlide() {
    if (this.slide) {
      return (
        <ion-segment-button value={TargetElement.SLIDE} mode="md">
          <ion-label>Slide</ion-label>
        </ion-segment-button>
      );
    } else {
      return undefined;
    }
  }

  private renderColor() {
    if (this.colorTarget) {
      return (
        <ion-segment-button value={TargetElement.COLOR} mode="md">
          <ion-label>Colors</ion-label>
        </ion-segment-button>
      );
    } else {
      return undefined;
    }
  }

  private renderBackground() {
    if (this.background) {
      return (
        <ion-segment-button value={TargetElement.BACKGROUND} mode="md">
          <ion-label>Background</ion-label>
        </ion-segment-button>
      );
    } else {
      return undefined;
    }
  }

  private renderTransition() {
    if (this.transition) {
      return (
        <ion-segment-button value={TargetElement.TRANSITION} mode="md">
          <ion-label>Transition</ion-label>
        </ion-segment-button>
      );
    } else {
      return undefined;
    }
  }

  private renderSides() {
    if (this.sides) {
      return (
        <ion-segment-button value={TargetElement.SIDES} mode="md">
          <ion-label>Sides</ion-label>
        </ion-segment-button>
      );
    } else {
      return undefined;
    }
  }

  private renderFonts() {
    if (this.fonts) {
      return (
        <ion-segment-button value={TargetElement.FONTS} mode="md">
          <ion-label>Fonts</ion-label>
        </ion-segment-button>
      );
    } else {
      return undefined;
    }
  }

  private renderShapes() {
    if (this.shapes) {
      return (
        <ion-segment-button value={TargetElement.SHAPES} mode="md">
          <ion-label>Shapes</ion-label>
        </ion-segment-button>
      );
    } else {
      return undefined;
    }
  }

  private renderImages() {
    if (this.images) {
      return (
        <ion-segment-button value={TargetElement.IMAGES} mode="md">
          <ion-label>Images</ion-label>
        </ion-segment-button>
      );
    } else {
      return undefined;
    }
  }
}
