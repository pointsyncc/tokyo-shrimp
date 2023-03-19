import { IDropdownItem, PSDropdown } from '@/components/ui/dropdown/Dropdown';
import React, { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';

import { useRouter } from 'next/router';
import { useInit } from '@/hooks/useInit';
import { classNames } from '@/utils/classNames';

const localeDropdownItems = [
  {
    text: 'EN',
    textValue: 'en',
    rightSlot: <ReactCountryFlag countryCode='US' svg />,
  },
  {
    text: 'HR',
    textValue: 'hr',
    rightSlot: <ReactCountryFlag countryCode='HR' svg />,
  },
];
const LocaleSwitcher = ({
  contentZIndex = 10,
  className = '',
}: {
  contentZIndex?: number;
  className?: string;
}) => {
  const router = useRouter();

  const [selectedOptionIdx, setSelectedOptionIdx] = useState(0);

  const setCustomSelectedOption = () => {
    const selectedLocale = localeDropdownItems.findIndex(
      (item) => item.textValue === router.locale,
    );
    if (selectedLocale > -1) setSelectedOptionIdx(selectedLocale);
  };

  useInit(setCustomSelectedOption);

  const onLocaleChange = (item: IDropdownItem) => {
    const { pathname, query } = router;
    router.push({ pathname, query }, router.asPath, { locale: item.textValue });
  };
  return (
    <PSDropdown
      dropdownTriggerClasses={classNames('locale-switcher', className)}
      onSelect={onLocaleChange}
      items={localeDropdownItems}
      initialSelectedOptionIndex={selectedOptionIdx}
      contentClasses='locale-switcher__content'
      contentZIndex={contentZIndex}
    />
  );
};

export default LocaleSwitcher;
