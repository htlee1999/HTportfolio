import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AccordionContext } from './ProjectWrapper';

const AccordionItem = (props) => {
    const { active, setActive } = useContext(AccordionContext);
    
    const indexPlus = props.index + 1;
    
    const eventHandler = (e, index) => {
        e.preventDefault();
        setActive(index === active ? -1 : index); // Toggle open/close if clicking the active item
    };

    return (
        <div className="accordion-item">
            <h3 className="accordion-title">
                <button 
                    onClick={(e) => eventHandler(e, props.index)}
                    className={active === props.index ? 'active' : 'inactive'}
                    aria-expanded={active === props.index ? 'true' : 'false'}
                    aria-controls={'sect-' + indexPlus}
                    aria-disabled={active === props.index ? 'true' : 'false'}
                >
                    <span className="title-wrapper">{props.title}</span>  
                    <span className="icon-wrapper">
                        <span className={active === props.index ? 'minus' : 'plus'}></span>
                    </span>
                </button>
            </h3>
            <div className="accordion-panel">
                <div 
                    id={'sect-' + indexPlus} 
                    className={active === props.index ? 'panel-open' : 'panel-close'}
                >
                    <div dangerouslySetInnerHTML={{ __html: props.description }} />
                </div>
            </div>
        </div>
    );
};

AccordionItem.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default AccordionItem;