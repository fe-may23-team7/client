import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import styles from './Navigation.module.scss';

const {
  Nav__link: TextLink,
  'Nav__link--active': ActiveTextLink,
  Nav__iconLink: IconLink,
  Nav__iconLink__icon: Icon,
  Nav__iconLink__icon__counter: IconCounter,
} = styles;

const getLinkClass = ({ isActive }: { isActive: boolean }) => {
  return classNames(TextLink, {
    [ActiveTextLink]: isActive,
  });
};

interface Props {
  title?: string;
  to: string;
  icon?: React.ReactNode;
}

export const Link: React.FC<Props> = ({ title, to, icon }) => {
  return (
    <NavLink to={to} className={title ? getLinkClass : IconLink}>
      {title && title.toLocaleUpperCase()}

      {icon && (
        <div className={Icon}>
          {icon}
          <span className={IconCounter}>0</span>
        </div>
      )}
    </NavLink>
  );
};
