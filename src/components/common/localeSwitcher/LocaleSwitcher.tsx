import { IDropdownItem, PSDropdown } from '@/components/ui/dropdown/Dropdown';
import { useState } from 'react';
import { useInit } from '@/hooks/useInit';
import { classNames } from '@/utils/classNames';
import { useRouter } from 'next-translate-routes/router';
import Image from 'next/image';
import {BsGlobeAmericas} from 'react-icons/bs'



const localeDropdownItems = [
  {
    text: 'English',
    textValue: 'en',
    leftSlot:<BsGlobeAmericas size={18} color="#D8D8D8" />
    // rightSlot: <ReactCountryFlag countryCode='US' svg />,
  },
  {
    text: 'Deutsch',
    textValue: 'de',
    leftSlot:<BsGlobeAmericas size={18} color="#D8D8D8" />
    // rightSlot: <ReactCountryFlag countryCode='HR' svg />,
  },
  {
    text: 'Hrvatski',
    textValue: 'hr',
    leftSlot:<BsGlobeAmericas size={18} color="#D8D8D8" />
    // rightSlot: <ReactCountryFlag countryCode='HR' svg />,
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

  const filteredLocaleDropdownItems = localeDropdownItems.filter(
    (item) => item.textValue !== router.locale,
  );

  useInit(setCustomSelectedOption);

  const setCookie = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`
}

  const onLocaleChange = (item: IDropdownItem) => {
    const { pathname, query } = router;
    router.push({ pathname, query }, router.asPath, { locale: item.textValue });
    setCookie(item.textValue);
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
