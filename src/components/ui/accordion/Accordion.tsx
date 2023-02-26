import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';

import { FaPlus } from 'react-icons/fa';

type AccordionProps =
  | ({ type: 'single' } & Accordion.AccordionSingleProps)
  | ({ type: 'multiple' } & Accordion.AccordionImplMultipleProps);
interface IAccordionItemProps extends Accordion.AccordionItemProps {
  triggerProps: ITriggerProps;
  contentProps: Accordion.AccordionContentProps;
}
interface ITriggerProps extends Accordion.AccordionTriggerProps {
  headerProps?: Accordion.AccordionHeaderProps;
}

export type IAccordionProps = AccordionProps & {
  items: IAccordionItemProps[];
};

export const PSAccordion = ({ items, ...rest }: IAccordionProps) => {
  const itemsJSX = items.map(({ triggerProps, contentProps, value, ...rest }) => (
    <Accordion.Item key={value} value={value} className='accordion-item' {...rest}>
      <AccordionTrigger {...triggerProps}>{triggerProps.children}</AccordionTrigger>
      <AccordionContent {...contentProps} value={value}>
        {contentProps.children}
      </AccordionContent>
    </Accordion.Item>
  ));
  return (
    <Accordion.Root className='accordion' {...rest}>
      {itemsJSX}
    </Accordion.Root>
  );
};

const AccordionTrigger = React.forwardRef<HTMLButtonElement, ITriggerProps>(
  ({ children, className = '', headerProps, ...rest }, forwardedRef) => {
    return (
      <Accordion.Header {...headerProps} className='accordion-header'>
        <Accordion.Trigger
          className={classNames('accordion-button', className)}
          {...rest}
          ref={forwardedRef}
        >
          {children}
          {/* accept  icon prop*/}
          <FaPlus className='accordion__chevron ms-auto' aria-hidden />
        </Accordion.Trigger>
      </Accordion.Header>
    );
  },
);
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<HTMLDivElement, Accordion.AccordionItemProps>(
  ({ children, className = '', ...rest }, forwardedRef) => (
    <Accordion.Content
      className={classNames('accordion-collapse', className)}
      {...rest}
      ref={forwardedRef}
    >
      <div className='accordion-body'>{children}</div>
    </Accordion.Content>
  ),
);

AccordionContent.displayName = 'AccordionContent';
