import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AccordionContext } from './ProjectWrapper';

const AccordionItem = ({ index, title, children }) => {
    const { active, setActive } = useContext(AccordionContext);

    const indexPlus = index + 1;

    const eventHandler = (e, idx) => {
        e.preventDefault();
        setActive(idx === active ? -1 : idx);
    };

    return (
        <div className="accordion-item">
            <h3 className="accordion-title">
                <button
                    onClick={(e) => eventHandler(e, index)}
                    className={active === index ? 'active' : 'inactive'}
                    aria-expanded={active === index ? 'true' : 'false'}
                    aria-controls={'sect-' + indexPlus}
                    aria-disabled={active === index ? 'true' : 'false'}
                >
                    <span className="title-wrapper">{title}</span>
                    <span className="icon-wrapper">
                        <span className={active === index ? 'minus' : 'plus'}></span>
                    </span>
                </button>
            </h3>
            <div className="accordion-panel">
                <div
                    id={'sect-' + indexPlus}
                    className={active === index ? 'panel-open' : 'panel-close'}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

AccordionItem.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default AccordionItem;
