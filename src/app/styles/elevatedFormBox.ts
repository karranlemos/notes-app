import colors from '../colors';

const elevatedBox = {
  backgroundColor: colors.lightGray,
  padding: '15px 30px',
  borderRadius: 8,
  boxShadow: `0px 3px 2px ${colors.gray}`,
  width: '100%',
};

const elevatedMultilineBox = {
  ...elevatedBox,
  alignItems: 'start',
};

const elevatedBoxStyles = {
  elevatedBox,
  elevatedMultilineBox,
};

export default elevatedBoxStyles;
