import type { Schema, Attribute } from '@strapi/strapi';

export interface DataData extends Schema.Component {
  collectionName: 'components_data_data';
  info: {
    displayName: 'data';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'data.data': DataData;
    }
  }
}
