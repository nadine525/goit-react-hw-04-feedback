import React from 'react';
import PropTypes from 'prop-types';
import { Division, Title } from './Section.styled';

const Section = ({ title, children }) => (
  <Division>
    <Title>{title}</Title>
    {children}
  </Division>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
