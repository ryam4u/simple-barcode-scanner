export declare namespace BarcodeScanner {
    interface Option {
        /**
         * Max time duration (in ms) between consecutive inputs
         * @default 50
         */
        latency?: number;
        /**
         * Min length of a valid barcode
         * @default 3
         */
        minLength?: number;
        /**
         * The HTML element to attach the event listener to
         * @default document
         */
        element?: HTMLElement;
        /**
         * Array of keys indicating end of barcode
         * @default ["Enter"]
         * Refer {@link https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values Key Values | MDN}
         */
        endKeys?: Array<string>;
        /**
         * Regular expression to check for a valid key in barcode
         * @default /^\w$/
         * Refer {@link https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values Key Values | MDN}
         */
        validKey?: RegExp;
        /**
         * Stop immediate propagation on key event
         * @default false
         */
        stopPropagation: boolean;
        /**
         * Prevent default action on key event
         * @default false
         */
        preventDefault: boolean;
    }
    interface HandlerFunction {
        /**
         * @param code Scanned barcode
         * @param event Keyboard event from the end key
         */
        (code: string, event: KeyboardEvent): void;
    }
    interface Scanner {
        /**
         * Starts listening for barcode scans and add/replace the listener
         *
         * @param {Function} handler Function to call on completion of barcode scan
         */
        on: (handler: HandlerFunction) => void;
        /**
         * Stop listening for barcode scans and remove the listener
         */
        off: () => void;
    }
}
/**
 * Simple JavaScript utility to listen for barcode scanners emulating keyboard
 */
export default function BarcodeScanner(options?: BarcodeScanner.Option): BarcodeScanner.Scanner;