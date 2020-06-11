import React from 'react';

import { IChannel } from '../../models';

import './index.scss';

interface IProps {
    channels: IChannel[];
}

export const Channels: React.FC<IProps> = ({ channels }) => {
    return (
        <div className="channels-list">
            {
                channels.length ? channels.map((channel) => (
                    <div className="channels-list__item" key={channel.name}>
                        <a
                            href={channel.link}
                            className="channels-list__item-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 4.98989C18 4.59595 17.9343 4.13636 17.9343 3.61111C17.8686 3.08586 17.8029 2.5606 17.7372 2.10101C17.6058 1.57576 17.4088 1.18182 17.0146 0.853537C16.6861 0.525254 16.2263 0.328279 15.7664 0.262622C14.2555 0.0656525 12.0219 0 9.00001 0C5.97811 0 3.67883 0.0656525 2.23357 0.262622C1.77372 0.328279 1.31387 0.525254 0.985402 0.853537C0.656934 1.18182 0.394157 1.57576 0.26277 2.10101C0.131383 2.5606 0.0656975 3.0202 0.0656975 3.61111C4.00863e-06 4.13636 0 4.59595 0 4.98989C0 5.38383 0 5.84343 0 6.49999C0 7.15656 0 7.68181 0 8.0101C0 8.40404 0.0656975 8.86364 0.0656975 9.38889C0.131391 9.91414 0.197076 10.4394 0.26277 10.899C0.394157 11.4242 0.591241 11.8182 0.985402 12.1465C1.31387 12.4747 1.77372 12.6717 2.23357 12.7374C3.74452 12.9343 5.97811 13 9.00001 13C12.0219 13 14.3212 12.9343 15.7664 12.7374C16.2263 12.6717 16.6861 12.4747 17.0146 12.1465C17.3431 11.8182 17.6058 11.4242 17.7372 10.899C17.8686 10.4394 17.9343 9.9798 17.9343 9.38889C18 8.86364 18 8.40404 18 8.0101C18 7.61616 18 7.15656 18 6.49999C18 5.84343 18 5.31817 18 4.98989ZM12.4818 7.02525L7.29198 10.2424C7.22628 10.3081 7.0949 10.3737 6.96351 10.3737C6.83212 10.3737 6.76643 10.3737 6.63504 10.3081C6.43796 10.1768 6.30657 9.9798 6.30657 9.71717V3.21717C6.30657 2.95454 6.43796 2.75758 6.63504 2.62626C6.83212 2.49495 7.0949 2.49495 7.29198 2.62626L12.4818 5.84343C12.6788 5.97474 12.8102 6.17171 12.8102 6.36868C12.8102 6.56565 12.6788 6.89394 12.4818 7.02525Z" />
                            </svg>
                            {channel.name}
                        </a>
                    </div>
                )) : (
                    <div className="channels-list--empty">
                        Данные отсутствуют.
                    </div>
                )
            }
        </div>
    );
}