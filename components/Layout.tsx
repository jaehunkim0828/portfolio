import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import GetTheme from '../helpers/getTheme';

import style from '../styles/layout.module.scss';

interface Props {
    children: ReactNode;
  }

export default function Name({ children }: Props) {
    const router = useRouter();

    const TIMEOUT = 200;
    const getTransitionStyles: any = {
        entering: {
          position: `absolute`,
          opacity: 0,
          transform: `translateY(25px)`,
        },
        entered: {
          transition: `transform ${TIMEOUT}ms ease-in-out`,
          opacity: 1,
          transform: `translateY(0px)`,
        },
        exiting: {
          transition: `transform ${TIMEOUT}ms ease-in-out`,
          opacity: 0,
          transform: `translateY(-25px)`,
        },
    };

    return (
        <>
            <TransitionGroup style={{ position: "relative" }} className={GetTheme(style, style.container)}>
                <Transition 
                    key={router.pathname}
                    timeout={{
                        enter: TIMEOUT,
                        exit: TIMEOUT,
                    }}
                >
                    {(status) => (
                        <div
                            style={{
                                ...getTransitionStyles[status],
                            }}
                        >
                            {children}
                        </div>
                    )}
                </Transition>
            </TransitionGroup>
        </>
    )
}