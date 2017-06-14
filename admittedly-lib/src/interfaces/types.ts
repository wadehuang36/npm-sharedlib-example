// SectionType
export const SectionType = strEnum([
  'TitleV1',
  'ListV1'
]);

export type SectionType = keyof typeof SectionType;

// Question Type
export const QuestionType = strEnum([
  'SectionSelectionV1',
  'SingleSelectionV1',
  'MultipleSelectionV1',
  'CollectionV1',
  'LocationRangeV1',
  'LocationDistanceV1'
]);

export type QuestionType = keyof typeof QuestionType;

// Option Type
export const OptionType = strEnum([
  'ImageRegularV1',
  'ImageInverseV1',
  'TextRegularV1',
  'TextInverseV1',
  'ImageTextRegularV1',
  'ImageTextInverseV1',
  'ButtonRegularV1',
  'ButtonInverseV2'
]);

export type OptionType = keyof typeof OptionType;

// Question Nav Type
export const QuestionNavType = strEnum([
  'ByOption',
  'NextQuestion',
  'NextSection',
  'NextSelectedSection'
]);

export type QuestionNavType = (keyof typeof QuestionNavType) | string;

// Option Nav Type
export const OptionNavType = strEnum([
  'NextQuestion',
  'NextSection',
  'NextSelectedSection'
]);

export type OptionNavType = (keyof typeof OptionNavType) | string;