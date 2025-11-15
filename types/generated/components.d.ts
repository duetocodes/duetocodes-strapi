import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAvatar extends Struct.ComponentSchema {
  collectionName: 'components_shared_avatars';
  info: {
    displayName: 'Avatar';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_medias';
  info: {
    displayName: 'SocialMedia';
    icon: 'question';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'material-symbols:link-rounded'>;
    platform: Schema.Attribute.String & Schema.Attribute.Required;
    sortIndex: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    type: Schema.Attribute.Enumeration<['personal', 'work']> &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.avatar': SharedAvatar;
      'shared.social-media': SharedSocialMedia;
    }
  }
}
