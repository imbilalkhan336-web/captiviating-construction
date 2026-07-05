import { createContext, useContext, useState } from 'react';
import { LuX } from 'react-icons/lu';
import Modal from '@/Components/Modal';
import ScheduleForm from '@/Components/FrontComponents/ScheduleForm';

/**
 * Global "Schedule Online" modal. The default `open` navigates to the
 * contact page so Schedule buttons still work if rendered outside the
 * provider (e.g. on a page without SiteLayout).
 */
const ScheduleModalContext = createContext({
    open: () => {
        if (typeof window !== 'undefined') window.location.href = '/contact';
    },
});

export function useScheduleModal() {
    return useContext(ScheduleModalContext);
}

export default function ScheduleModalProvider({ children }) {
    const [show, setShow] = useState(false);
    const open = () => setShow(true);
    const close = () => setShow(false);

    return (
        <ScheduleModalContext.Provider value={{ open }}>
            {children}

            <Modal show={show} onClose={close} maxWidth="lg">
                <div className="relative">
                    <button
                        type="button"
                        onClick={close}
                        aria-label="Close"
                        className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
                    >
                        <LuX className="h-5 w-5" />
                    </button>
                    <ScheduleForm />
                </div>
            </Modal>
        </ScheduleModalContext.Provider>
    );
}
