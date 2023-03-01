import { IDropdownItem, PSDropdown } from '@/components/ui/dropdown/Dropdown';
import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
const LocaleSwitcher = () => {
  const router = useRouter();
  const localeDropdownItems = [
    {
      text: 'English',
      textValue: 'en-US',
      rightSlot: <ReactCountryFlag countryCode='US' svg />,
    },
    {
      text: 'Crotian',
      textValue: 'hr-HR',
      rightSlot: <ReactCountryFlag countryCode='HR' svg />,
    },
  ];
  const onLocaleChange = (item: IDropdownItem) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, router.asPath, { locale: item.textValue });
  };
  return (
    <PSDropdown
      dropdownTriggerClasses='locale-switcher'
      onSelect={onLocaleChange}
      items={localeDropdownItems}
    />
  );
};

export default LocaleSwitcher;
