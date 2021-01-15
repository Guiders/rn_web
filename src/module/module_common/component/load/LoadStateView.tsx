// @flow
'use strict';
import { LoadState } from './LoadState';
import React from 'react';
import { View } from 'react-native';
export type LoadBaseViewProps = {
  loadingView?: React.ComponentType<any> | React.ReactElement;
  errorView?: React.ComponentType<any> | React.ReactElement;
  emptyView?: React.ComponentType<any> | React.ReactElement;
};
export type LoadStateProps = {
  loadState: LoadState;
  finishView?: any;
  initView?: React.ComponentType<any> | React.ReactElement;
};

export const LoadStateView = function (
  props: LoadStateProps & LoadBaseViewProps,
): any {
  switch (props.loadState) {
    case LoadState.Init:
      return props.initView;
    case LoadState.Loading:
      return props.loadingView;
    case LoadState.Empty:
      return props.emptyView;
    case LoadState.Finish:
      return props.finishView;
    case LoadState.Error:
      return props.errorView;
  }
  return <View />;
};
