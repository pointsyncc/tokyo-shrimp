import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { FaHamburger, FaDotCircle, FaCheck, FaChevronRight } from 'react-icons/fa';

import classes from './dropdown.module.scss';
const DropdownMenuDemo = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState('pedro');

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={classes['dropdown__icon-btn']} aria-label='Customise options'>
          <FaHamburger />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={classes['dropdown__content']} sideOffset={5}>
          <DropdownMenu.Item className={classes['dropdown__item']}>
            New Tab <div className={classes['dropdown__right-slot']}>⌘+T</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className={classes['dropdown__item']}>
            New Window <div className={classes['dropdown__right-slot']}>⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className={classes['dropdown__item']} disabled>
            New Private Window <div className={classes['dropdown__right-slot']}>⇧+⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className={classes['dropdown__sub-trigger']}>
              More Tools
              <div className={classes['dropdown__right-slot']}>
                <FaChevronRight />
              </div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
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
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Arrow className={classes['dropdown__arrow']} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuDemo;
