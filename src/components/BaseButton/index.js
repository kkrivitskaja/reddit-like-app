import classnames from 'classnames';

import style from '../../styles/Home.module.scss';

const BaseButton = ({
    tag = 'button',
    outlined,
    disabled,
    primary,
    className,
    children,
    ...props
}) => {
    const Component = tag;

    return (
        <Component
            className={classnames(
                style['base-button'],
                {
                    [style['base-button--outlined']]: outlined,
                    [style['base-button--disabled']]: disabled,
                    [style['base-button--primary']]: primary,
                },
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
};

export default BaseButton;
