'use strict';
import React,{ Component } from 'react';
import { requireNativeComponent, View, ViewPropTypes} from 'react-native';

class PDFView extends Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  _onChange(event:Event) {
    this.props.onLoadComplete && this.props.onLoadComplete(Number(event.nativeEvent.message));
  }

  render() {
    return <PDFCustomView ref={component => this._root = component} {...this.props} onChange={this._onChange}/>;
  }
}

PDFView.propTypes = {
  ...ViewPropTypes,
  src: ViewPropTypes.string,
  path: ViewPropTypes.string,
  pageNumber: ViewPropTypes.number,
  zoom: ViewPropTypes.number,
  onLoadComplete: ViewPropTypes.func
};

//var PDFCustomView = requireNativeComponent('RNPDFView', null);

var PDFCustomView = requireNativeComponent('RNPDFView', PDFView, {
  nativeOnly: {onChange: true}
});

export default PDFView;
