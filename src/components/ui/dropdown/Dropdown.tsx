import React, { useEffect, useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import classes from './dropdown.module.scss';
import { classNames } from '@/utils/classNames';

export interface IDropdownItem {
  text: string;
  textValue: string;
  rightSlot?: React.ReactNode;
  leftSlot?: React.ReactNode;
  dropdownTriggerClasses?: string;
}

interface IProps extends DropdownMenu.DropdownMenuProps {
  items: IDropdownItem[];
  onSelect: (item: IDropdownItem) => void;
  dropdownTriggerClasses?: string;
  initialSelectedOptionIndex?: number;
  contentClasses?: string;
  contentZIndex?: number;
  showArrow?: boolean;
}

export const PSDropdown = ({
  onOpenChange,
  open,
  items,
  onSelect,
  dropdownTriggerClasses,
  initialSelectedOptionIndex = 0,
  contentClasses = '',
  contentZIndex = 10,
  showArrow = false,
}: IProps) => {
  const [selectedOption, setSelectedOption] = useState(items[initialSelectedOptionIndex]);
  const onSelection = (item: IDropdownItem) => {
    setSelectedOption(item);

    if (onSelect) onSelect(item);
  };

  useEffect(() => {
    if (items[initialSelectedOptionIndex]) setSelectedOption(items[initialSelectedOptionIndex]);
  }, [initialSelectedOptionIndex, items]);

  return (
    <DropdownMenu.Root open={open} modal={false} onOpenChange={onOpenChange}>
      <DropdownMenu.Trigger className={dropdownTriggerClasses} asChild>
        <button className={classes['dropdown__icon-btn']} aria-label='Customise options'>
          {selectedOption.leftSlot ? (
            <div className='pe-3'>{selectedOption.leftSlot && selectedOption.leftSlot}</div>
          ) : null}
          {selectedOption.text}
          {selectedOption.rightSlot ? (
            <div className='ms-auto ps-3'>
              {selectedOption.rightSlot && selectedOption.rightSlot}
            </div>
          ) : null}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          style={{ zIndex: contentZIndex }}
          className={classNames(classes['dropdown__content'], contentClasses)}
          sideOffset={5}
        >
          {items.map((item) => {
            return (
              <DropdownMenu.Item
                onSelect={onSelection.bind(null, item)}
                key={item.textValue}
                textValue={item.textValue}
                className={classNames(
                  classes['dropdown__item'],
                  item.textValue === selectedOption.textValue ? classes.selected : '',
                )}
              >
                {item.text}{' '}
                {item.rightSlot && (
                  <div className={classes['dropdown__right-slot']}>{item.rightSlot}</div>
                )}
              </DropdownMenu.Item>
            );
          })}
          {/* <DropdownMenu.Item className={classes['dropdown__item']}>
            New Tab <div className={classes['dropdown__right-slot']}>⌘+T</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className={classes['dropdown__item']}>
            New Window <div className={classes['dropdown__right-slot']}>⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className={classes['dropdown__item']} disabled>
            New Private Window <div className={classes['dropdown__right-slot']}>⇧+⌘+N</div>
          </DropdownMenu.Item> */}
          {/* <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className={classes['dropdown__sub-trigger']}>
              More Tools
              <div className={classes['dropdown__right-slot']}>
                <FaChevronRight />
              </div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
              style={{zIndex:10}}
                className={classes['dropdown__sub-content']}
                sideOffset={2}
                alignOffset={-5}
              >
                <DropdownMenu.Item className={classes['dropdown__item']}>
                  Save Page As… <div className={classes['dropdown__right-slot']}>⌘+S</div>
                </DropdownMenu.Item>
                <DropdownMenu.Item className={classes['dropdown__item']}>
                  Create Shortcut…
                </DropdownMenu.Item>
                <DropdownMenu.Item className={classes['dropdown__item']}>
                  Name Window…
                </DropdownMenu.Item>
                <DropdownMenu.Separator className={classes['dropdown__separator']} />
                <DropdownMenu.Item className={classes['dropdown__item']}>
                  Developer Tools
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator className={classes['dropdown__separator']} />

          <DropdownMenu.CheckboxItem
            className={classes['dropdown__checkbox-item']}
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenu.ItemIndicator className={classes['dropdown__item-indicator']}>
              <FaCheck />
            </DropdownMenu.ItemIndicator>
            Show Bookmarks <div className={classes['dropdown__right-slot']}>⌘+B</div>
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            className={classes['dropdown__checkbox-item']}
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenu.ItemIndicator className={classes['dropdown__item-indicator']}>
              <FaCheck />
            </DropdownMenu.ItemIndicator>
            Show Full URLs
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.Separator className={classes['dropdown__separator']} />

          <DropdownMenu.Label className={classes['DropdownMenuLabel']}>People</DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenu.RadioItem className={classes['dropdown__radio-item']} value='pedro'>
              <DropdownMenu.ItemIndicator className={classes['dropdown__item-indicator']}>
                <FaDotCircle />
              </DropdownMenu.ItemIndicator>
              Pedro Duarte
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem className={classes['dropdown__radio-item']} value='colm'>
              <DropdownMenu.ItemIndicator className={classes['dropdown__item-indicator']}>
                <FaDotCircle />
              </DropdownMenu.ItemIndicator>
              Colm Tuite
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup> */}

          {showArrow ? <DropdownMenu.Arrow className={classes['dropdown__arrow']} /> : null}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
